'use client';
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Define the type for chat messages
type ChatMessage = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hi! 👋 I’m the CodexWagon AI. Ask me anything about our services, tech, or pricing." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  function scrollToBottom() {
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 80);
  }

  // 2. Robust sendMessage with error handling
  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim()) return;
    const newMessages: ChatMessage[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    scrollToBottom();

    try {
      const res = await fetch("/api/gpt-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });
      let data: { reply: string };
      try {
        data = await res.json();
      } catch (err) {
        data = { reply: "Sorry, something went wrong (server error)." };
      }
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, failed to contact the AI server." }]);
    }
    setLoading(false);
    scrollToBottom();
  }

  return (
    <>
      {/* Floating chat button */}
      <button
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-sky-400 to-fuchsia-400 text-white rounded-full shadow-2xl p-4 hover:scale-110 focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Open chat"
      >
        <span className="text-2xl">💬</span>
      </button>
      {/* Chat modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 60 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed bottom-20 right-8 w-80 max-w-[95vw] h-[480px] z-50 bg-gradient-to-br from-sky-950/80 to-fuchsia-900/80 border border-white/20 backdrop-blur-2xl rounded-2xl flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/10 bg-white/10 rounded-t-2xl">
              <span className="font-bold text-sky-200">CodexWagon Chat</span>
              <button onClick={() => setOpen(false)} className="text-white hover:text-fuchsia-300 text-xl">&times;</button>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`rounded-2xl px-4 py-2 max-w-[80%] shadow ${
                    msg.role === "user"
                      ? "bg-sky-500/80 text-white"
                      : "bg-white/20 text-sky-100"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl px-4 py-2 bg-white/20 text-sky-100 shadow animate-pulse">Thinking...</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <form onSubmit={sendMessage} className="p-3 border-t border-white/10 bg-white/10 rounded-b-2xl flex gap-2">
              <input
                className="flex-1 rounded-xl px-3 py-2 bg-white/20 text-white placeholder:text-sky-200 outline-none"
                placeholder="Type your question…"
                value={input}
                disabled={loading}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) sendMessage(e as any); }}
              />
              <button
                type="submit"
                className="bg-fuchsia-500 hover:bg-fuchsia-400 text-white px-4 py-2 rounded-xl font-semibold transition disabled:opacity-40"
                disabled={loading || !input.trim()}
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
