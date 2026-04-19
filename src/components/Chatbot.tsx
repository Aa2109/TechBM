import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

interface ChatbotProps {
  apiEndpoint?: string; // Optional for future backend integration
}

const Chatbot: React.FC<ChatbotProps> = ({ apiEndpoint }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm TechBM's virtual assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: Record<string, string> = {
    services: "TechBM offers comprehensive technology solutions including:\n• Website & Web Development (React, Vue.js, Node.js)\n• Mobile App Development (React Native, Flutter)\n• Java Consulting & Enterprise Solutions\n• Cloud Solutions & Infrastructure\n\nWould you like more details about any specific service?",
    team: "Our experienced team includes:\n• Bazami Mateen - Founder & Director (5+ years)\n• Shabbir Ahmad - CEO & CTO (10+ years)\n\nWe're passionate about delivering innovative tech solutions. Visit our About page for full team details!",
    contact: "Get in touch with us:\n• Email: bazmimateen@techbm.in\n• Phone: +91-XXXXXXXXXX (check our Contact page)\n• Location: [Your Location]\n\nWe'd love to hear from you!",
    about: "TechBM is a leading technology company specializing in web development, mobile apps, and enterprise solutions. We focus on innovation, client satisfaction, and delivering cutting-edge digital experiences.",
    portfolio: "Check out our portfolio to see our recent projects and success stories. We work with clients across various industries to bring their digital visions to life.",
    pricing: "Our pricing depends on project scope and requirements. We offer competitive rates and transparent pricing. Contact us for a custom quote!",
    default: "I'm here to help with information about TechBM's services, team, contact details, and more. What would you like to know?",
  };

  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('service') || input.includes('development') || input.includes('web') || input.includes('mobile') || input.includes('java') || input.includes('cloud')) {
      return predefinedResponses.services;
    }
    if (input.includes('team') || input.includes('staff') || input.includes('people') || input.includes('founder') || input.includes('ceo')) {
      return predefinedResponses.team;
    }
    if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('reach')) {
      return predefinedResponses.contact;
    }
    if (input.includes('about') || input.includes('company') || input.includes('techbm')) {
      return predefinedResponses.about;
    }
    if (input.includes('portfolio') || input.includes('project') || input.includes('work')) {
      return predefinedResponses.portfolio;
    }
    if (input.includes('price') || input.includes('cost') || input.includes('quote')) {
      return predefinedResponses.pricing;
    }

    return predefinedResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      let responseText = getResponse(inputValue);

      // If API endpoint is provided, you can integrate backend here
      if (apiEndpoint) {
        // Example: fetch(apiEndpoint, { method: 'POST', body: JSON.stringify({ message: inputValue }) })
        // .then(res => res.json()).then(data => set responseText = data.response);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 h-96"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <Card className="h-full flex flex-col shadow-2xl border-0">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bot className="w-5 h-5 text-primary" />
                  TechBM Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 px-4">
                  <div className="space-y-4 pb-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-3 py-2 ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {message.sender === 'bot' && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                            {message.sender === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                            <div className="whitespace-pre-line text-sm">{message.text}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {isTyping && (
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2">
                          <div className="flex items-center gap-2">
                            <Bot className="w-4 h-4" />
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      disabled={!inputValue.trim() || isTyping}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;