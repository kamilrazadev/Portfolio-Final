"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper to render markdown-style links [text](url) in a string
const MarkdownRenderer = ({ content, isAnimated = false }) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  // Find all matches and split the string
  while ((match = linkRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: content.substring(lastIndex, match.index) });
    }
    parts.push({ type: 'link', text: match[1], url: match[2] });
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < content.length) {
    parts.push({ type: 'text', value: content.substring(lastIndex) });
  }

  return (
    <div className="flex flex-wrap gap-x-1">
      {parts.map((part, i) => {
        if (part.type === 'link') {
          return (
            <a 
              key={i} 
              href={part.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-bold underline hover:text-primary/80 transition-colors inline-block"
            >
              {part.text}
            </a>
          );
        }
        
        // Split text into words for the reveal animation
        return part.value.split(" ").map((word, j) => (
          <span 
            key={`${i}-${j}`} 
            className={cn(
              "inline-block",
              isAnimated && "animate-in fade-in blur-in duration-500 fill-mode-both"
            )}
            style={{ 
              animation: isAnimated ? "revealWord 0.5s ease forwards" : "none",
            }}
          >
            {word === "" ? "\u00A0" : word}
          </span>
        ));
      })}
      <style jsx>{`
        @keyframes revealWord {
          from { filter: blur(8px); opacity: 0; transform: translateY(2px); }
          to { filter: blur(0); opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// Component to handle streaming text effect
const TypewriterMessage = ({ content, onUpdate }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [currentIndex, setCurrentContentIndex] = useState(0);
  const words = content.split(" ");

  useEffect(() => {
    if (currentIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayedContent((prev) => prev + (prev ? " " : "") + words[currentIndex]);
        setCurrentContentIndex(currentIndex + 1);
      }, 40); 
      return () => clearTimeout(timer);
    }
  }, [currentIndex, words]);

  // Trigger scroll on every update
  useEffect(() => {
    if (onUpdate) onUpdate();
  }, [displayedContent, onUpdate]);

  return <MarkdownRenderer content={displayedContent} isAnimated={true} />;
};

// Custom jumping dots component
const JumpingDots = () => (
  <div className="flex gap-1 items-center px-2 py-1">
    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-[jump_1s_infinite_0s]" />
    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-[jump_1s_infinite_0.2s]" />
    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-[jump_1s_infinite_0.4s]" />
    <style jsx>{`
      @keyframes jump {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
    `}</style>
  </div>
);

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { role: "bot", content: "Hi! I'm Kamil's AI assistant. Ask me anything about his work, skills, or experience!", isNew: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      // Use requestAnimationFrame to ensure DOM is updated before scrolling
      requestAnimationFrame(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, isLoading, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage("");
    setChat((prev) => [...prev, { role: "user", content: userMessage, isNew: false }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      if (data.response) {
        setChat((prev) => [...prev, { role: "bot", content: data.response, isNew: true }]);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setChat((prev) => [...prev, { role: "bot", content: "Sorry, I'm having trouble connecting. Please try again or contact Kamil directly.", isNew: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-4">
      {!isOpen && showPopup && (
        <div className="relative group cursor-pointer" onClick={() => { setIsOpen(true); setShowPopup(false); }}>
          <div className="bg-card/95 backdrop-blur-xl border border-border p-4 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[200px]">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowPopup(false);
              }}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-xs font-bold leading-relaxed">
              Hi! I'm Kamil's assistant. Need any help?
            </p>
          </div>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
        </div>
      )}

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPopup(false);
        }}
        className={cn(
          "w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95",
          isOpen && "rotate-90 bg-primary text-white"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      <div className={cn(
        "absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-card/95 backdrop-blur-2xl border border-border rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right",
        isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none"
      )}>
        <div className="p-6 bg-muted/50 border-b border-border flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black">
            K
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest">Kamil AI</h4>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Online Assistant</span>
            </div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
          {chat.map((msg, i) => (
            <div key={i} className={cn("flex gap-3 max-w-[90%]", msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto")}>
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-border", msg.role === "user" ? "bg-muted" : "bg-primary text-white")}>
                {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={cn("p-4 rounded-2xl text-sm leading-relaxed", msg.role === "user" ? "bg-foreground text-background font-medium" : "bg-muted/50 border border-border text-foreground")}>
                {msg.role === "bot" ? (
                  msg.isNew ? (
                    <TypewriterMessage content={msg.content} onUpdate={scrollToBottom} />
                  ) : (
                    <MarkdownRenderer content={msg.content} isAnimated={false} />
                  )
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 mr-auto items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center border border-border animate-pulse">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-2xl bg-muted/50 border border-border">
                <JumpingDots />
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="p-4 bg-muted/30 border-t border-border flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about Kamil's skills..."
            className="flex-1 bg-background border border-border/50 rounded-full px-5 py-3 text-sm focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
          />
          <button type="submit" disabled={isLoading} className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg disabled:opacity-50">
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
