import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, User, Bot, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Elite Kids Concierge", a premium AI assistant for Elite Kids Academy, a high-end kindergarten in Bishkek, Kyrgyzstan.
Location: Bishkek, Karl Marx str. 64.
Phone: +996 551 44 66 88.
Philosophy: Intellectual development in harmony, 1:4 teacher-to-child ratio, eco-materials, 24/7 security.
Programs: 
- "First Steps" (1.5-3 years): sensory games, motor skills.
- "Young Leaders" (3-5 years): EQ, English with native speakers.
- "School Ready" (5-7 years): STEM, chess, logic.
Your tone is sophisticated, professional, yet warm and welcoming. 
You help parents with questions about enrollment, programs, and philosophy.
Always refer to the kindergarten as "Elite Kids Academy" or "Наша Академия".
Keep responses concise and elegant.
If asked about price, mention that we offer individual packages and recommend visiting for a personal tour.
Language: Russian (unless the user speaks English).
`;

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Здравствуйте! Я консьерж Elite Kids Academy. Чем я могу помочь вам сегодня?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: "user", parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const botResponse = response.text || "Извините, произошла небольшая заминка. Попробуйте еще раз или позвоните нам напрямую.";
      setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: "bot", text: "К сожалению, сейчас я не могу ответить. Пожалуйста, свяжитесь с нами по телефону +996 551 44 66 88." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-brand-dark text-white rounded-full shadow-2xl flex items-center justify-center z-[60] cursor-pointer"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] bg-white rounded-[32px] shadow-2xl flex flex-col z-[60] overflow-hidden border border-brand-sage/10"
          >
            {/* Header */}
            <div className="bg-brand-dark p-6 text-white flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Bot className="text-brand-gold" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold">Elite Kids Concierge</span>
                <span className="text-[10px] uppercase tracking-widest text-white/50">Online Assistant</span>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-3xl text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-brand-sage text-white rounded-tr-none" 
                      : "bg-brand-cream text-brand-dark rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-brand-cream p-4 rounded-3xl rounded-tl-none">
                    <Loader2 className="animate-spin text-brand-sage" size={20} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-brand-sage/10 flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Задайте ваш вопрос..."
                className="flex-1 bg-brand-cream px-6 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-12 h-12 bg-brand-gold text-white rounded-2xl flex items-center justify-center hover:bg-brand-dark transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
