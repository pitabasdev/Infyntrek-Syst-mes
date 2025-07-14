import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Clock,
  Mail,
  Star,
  DollarSign,
  GraduationCap,
  Award,
  Building2,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Knowledge Base
  const knowledgeBase = {
    company: {
      name: "Infyntrek Systèmes",
      description:
        "Fast-growing fintech startup revolutionizing financial software development",
      partnerships: "We collaborate with industry leaders like Amazon and AMEX",
      focus: "Industry 5.0-ready training and cutting-edge fintech solutions",
      headquarters: "Seattle, WA with development centers worldwide",
      team: "84+ professionals across 12 countries",
    },
    history: {
      founded: "2019 - Founded as a small finance consultancy firm",
      breakthrough:
        "2020 - Won large-scale project managing Asset Finance Systems for multiple MNC clients",
      growth: "2023 - Reached ₹1 Crore turnover milestone with 84 employees",
      innovation:
        "2025 - Launched Finance Software Development Division and Industry 5.0-ready training programs",
    },
    training: {
      program: "Fintech Training + Internship Program",
      duration: "6 months intensive program",
      partnership: "Designed with Amazon and AMEX leaders",
      focus: "Industry 5.0-ready curriculum",
      experience: "Live fintech projects from Day 1",
      mentorship: "1:1 mentoring with industry experts",
      certification: "Dual certification for training and internship",
    },
    internship: {
      type: "Training + Internship combined experience",
      projects: "Work on real fintech applications for actual clients",
      environment: "Live project experience with client interaction",
      methodology: "Agile development with code reviews",
      placement: "95% placement rate with direct job opportunities",
      lor: "Personalized Letter of Recommendation from leadership based on performance",
    },
    stipend: {
      amount: "Up to ₹7,000 INR / $81 USD per month",
      criteria: "Performance-based rewards system",
      evaluation:
        "Based on project completion, code quality, and client feedback",
      bonuses: "Additional project bonuses for exceptional performance",
      structure: "Monthly assessment with incremental rewards",
      top_performers:
        "Top performers receive additional recognition and project bonuses",
    },
    support: {
      email: "support@infyntrek.in",
      response_time: "12 to 24 hours",
      availability: "24/7 for urgent technical issues",
      channels: "Email, chat, and direct mentorship during program",
    },
  };

  const quickReplies = [
    "Tell me about the company",
    "Training program details",
    "Internship information",
    "Stipend criteria",
    "Company history",
    "How to apply?",
    "Contact support",
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        "👋 Hello! I'm your Infyntrek Systèmes assistant. I can help you with information about our company, training programs, internships, and more. How can I assist you today?",
        quickReplies,
      );
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = (text: string, suggestions?: string[]) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      suggestions,
    };
    setMessages((prev) => [...prev, message]);
  };

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000 + Math.random() * 1000);
  };

  const getResponse = (
    input: string,
  ): { text: string; suggestions?: string[] } => {
    const lowerInput = input.toLowerCase();

    // Company information
    if (
      lowerInput.includes("company") ||
      lowerInput.includes("about") ||
      lowerInput.includes("infyntrek")
    ) {
      return {
        text: `🏢 **About Infyntrek Systèmes**\n\n${knowledgeBase.company.description}. ${knowledgeBase.company.partnerships} to deliver ${knowledgeBase.company.focus}.\n\n📍 **Location**: ${knowledgeBase.company.headquarters}\n👥 **Team**: ${knowledgeBase.company.team}\n\nWe're passionate about unlocking the innovation and energy of young minds in fintech!`,
        suggestions: [
          "Training program details",
          "Company history",
          "How to apply?",
        ],
      };
    }

    // Training program
    if (
      lowerInput.includes("training") ||
      lowerInput.includes("program") ||
      lowerInput.includes("course")
    ) {
      return {
        text: `🎓 **Fintech Training + Internship Program**\n\n📅 **Duration**: ${knowledgeBase.training.duration}\n🤝 **Partnership**: ${knowledgeBase.training.partnership}\n🚀 **Focus**: ${knowledgeBase.training.focus}\n💼 **Experience**: ${knowledgeBase.training.experience}\n👨‍🏫 **Mentorship**: ${knowledgeBase.training.mentorship}\n🏆 **Certification**: ${knowledgeBase.training.certification}\n\nOur program isn't just theory—it's real project experience, mentorship, and rapid career launch!`,
        suggestions: [
          "Stipend criteria",
          "Internship information",
          "How to apply?",
        ],
      };
    }

    // Internship details
    if (
      lowerInput.includes("internship") ||
      lowerInput.includes("intern") ||
      lowerInput.includes("placement")
    ) {
      return {
        text: `💼 **Internship Program Details**\n\n🔗 **Type**: ${knowledgeBase.internship.type}\n📋 **Projects**: ${knowledgeBase.internship.projects}\n🌐 **Environment**: ${knowledgeBase.internship.environment}\n⚡ **Methodology**: ${knowledgeBase.internship.methodology}\n📈 **Placement**: ${knowledgeBase.internship.placement}\n📝 **LOR**: ${knowledgeBase.internship.lor}\n\nYou'll work on real applications used by actual clients from Day 1!`,
        suggestions: [
          "Stipend criteria",
          "Training program details",
          "Contact support",
        ],
      };
    }

    // Stipend information
    if (
      lowerInput.includes("stipend") ||
      lowerInput.includes("salary") ||
      lowerInput.includes("payment") ||
      lowerInput.includes("money")
    ) {
      return {
        text: `💰 **Performance-Based Stipend Structure**\n\n��� **Amount**: ${knowledgeBase.stipend.amount}\n📊 **Criteria**: ${knowledgeBase.stipend.criteria}\n✅ **Evaluation**: ${knowledgeBase.stipend.evaluation}\n🎁 **Bonuses**: ${knowledgeBase.stipend.bonuses}\n📈 **Structure**: ${knowledgeBase.stipend.structure}\n⭐ **Top Performers**: ${knowledgeBase.stipend.top_performers}\n\nYour performance directly impacts your rewards!`,
        suggestions: [
          "Training program details",
          "How to apply?",
          "Contact support",
        ],
      };
    }

    // Company history
    if (
      lowerInput.includes("history") ||
      lowerInput.includes("founded") ||
      lowerInput.includes("journey") ||
      lowerInput.includes("growth")
    ) {
      return {
        text: `📚 **Our Journey (2019-2025)**\n\n🏗️ **2019**: ${knowledgeBase.history.founded}\n🚀 **2020**: ${knowledgeBase.history.breakthrough}\n📈 **2023**: ${knowledgeBase.history.growth}\n💡 **2025**: ${knowledgeBase.history.innovation}\n\nFrom startup to industry leader in just 6 years!`,
        suggestions: [
          "Tell me about the company",
          "Training program details",
          "How to apply?",
        ],
      };
    }

    // Application process
    if (
      lowerInput.includes("apply") ||
      lowerInput.includes("application") ||
      lowerInput.includes("join") ||
      lowerInput.includes("how")
    ) {
      return {
        text: `📝 **How to Apply**\n\n1️⃣ Visit our Freshers Program page\n2️⃣ Click "Apply Now - Limited Seats!"\n3️⃣ Fill out the comprehensive application form\n4️⃣ Upload your resume\n5️⃣ Submit your motivation letter\n\n🚨 **Seats Available**: Limited to 50 seats per batch\n⚡ **Application Status**: Applications being reviewed within 2-3 days\n\nReady to transform your career? Apply now!`,
        suggestions: [
          "Training program details",
          "Stipend criteria",
          "Contact support",
        ],
      };
    }

    // Support and contact
    if (
      lowerInput.includes("support") ||
      lowerInput.includes("contact") ||
      lowerInput.includes("help") ||
      lowerInput.includes("email")
    ) {
      return {
        text: `📞 **Support & Contact Information**\n\n📧 **Email**: ${knowledgeBase.support.email}\n⏰ **Response Time**: ${knowledgeBase.support.response_time}\n🌟 **Availability**: ${knowledgeBase.support.availability}\n💬 **Channels**: ${knowledgeBase.support.channels}\n\nFor immediate assistance with applications or program questions, email us at support@infyntrek.in!`,
        suggestions: [
          "Training program details",
          "How to apply?",
          "Tell me about the company",
        ],
      };
    }

    // Greeting responses
    if (
      lowerInput.includes("hi") ||
      lowerInput.includes("hello") ||
      lowerInput.includes("hey")
    ) {
      return {
        text: "👋 Hello! Great to meet you! I'm here to help you learn about Infyntrek Systèmes and our amazing fintech training program. What would you like to know?",
        suggestions: quickReplies.slice(0, 4),
      };
    }

    // Thank you responses
    if (lowerInput.includes("thank") || lowerInput.includes("thanks")) {
      return {
        text: "🙏 You're very welcome! I'm always here to help. If you have any more questions about our programs or company, feel free to ask. Good luck with your fintech journey!",
        suggestions: [
          "How to apply?",
          "Contact support",
          "Tell me about the company",
        ],
      };
    }

    // Default response
    return {
      text: `🤖 I'd love to help you with that! I can provide information about:\n\n🏢 Our company and partnerships\n🎓 Training program details\n💼 Internship opportunities\n💰 Stipend criteria\n📚 Company history\n📝 Application process\n📞 Support contacts\n\nWhat would you like to know more about?`,
      suggestions: quickReplies,
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    const userInput = inputValue;
    setInputValue("");

    simulateTyping();

    setTimeout(() => {
      const response = getResponse(userInput);
      addBotMessage(response.text, response.suggestions);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    addUserMessage(suggestion);
    simulateTyping();

    setTimeout(() => {
      const response = getResponse(suggestion);
      addBotMessage(response.text, response.suggestions);
    }, 1500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const formatBotMessage = (text: string) => {
    return text.split("\n").map((line, index) => {
      if (line.includes("**") && line.includes("**")) {
        const parts = line.split("**");
        return (
          <div key={index} className="mb-1">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} className="text-finance-navy">
                  {part}
                </strong>
              ) : (
                part
              ),
            )}
          </div>
        );
      }
      return (
        <div key={index} className="mb-1">
          {line}
        </div>
      );
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className={`w-16 h-16 rounded-full bg-gradient-to-r from-finance-blue to-finance-navy hover:from-finance-gold hover:to-yellow-400 shadow-2xl transition-all duration-300 ${
            isAnimating ? "scale-110" : "hover:scale-105"
          }`}
        >
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <div className="relative">
              <MessageCircle className="w-8 h-8 text-white animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-finance-gold rounded-full animate-ping"></div>
            </div>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card
          className={`fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] z-40 shadow-2xl border-2 border-finance-blue/20 ${
            isMinimized ? "h-16" : "h-[600px]"
          } transition-all duration-300`}
        >
          {/* Chat Header */}
          <CardHeader className="bg-gradient-to-r from-finance-navy to-slate-800 text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-finance-gold rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-finance-navy" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">
                    Infyntrek Assistant
                  </CardTitle>
                  <div className="text-xs text-gray-300 flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Online • Responds in 12-24hrs</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/10 p-1"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4" />
                  ) : (
                    <Minimize2 className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-white hover:bg-white/10 p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              {/* Chat Messages */}
              <CardContent className="p-0 h-[450px] overflow-y-auto bg-gray-50">
                <div className="space-y-4 p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[80%] ${message.isBot ? "order-2 ml-2" : "order-1 mr-2"}`}
                      >
                        <div
                          className={`p-3 rounded-2xl ${
                            message.isBot
                              ? "bg-white border border-gray-200 text-finance-gray"
                              : "bg-finance-blue text-white"
                          }`}
                        >
                          {message.isBot ? (
                            <div className="text-sm leading-relaxed">
                              {formatBotMessage(message.text)}
                            </div>
                          ) : (
                            <div className="text-sm">{message.text}</div>
                          )}
                        </div>

                        {/* Suggestions */}
                        {message.suggestions && (
                          <div className="mt-2 space-y-1">
                            {message.suggestions.map((suggestion, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  handleSuggestionClick(suggestion)
                                }
                                className="mr-1 mb-1 text-xs h-7 bg-white hover:bg-finance-blue hover:text-white border-finance-blue/30"
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        )}

                        <div className="text-xs text-gray-400 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>

                      <div
                        className={`flex-shrink-0 ${message.isBot ? "order-1" : "order-2"}`}
                      >
                        {message.isBot ? (
                          <div className="w-8 h-8 bg-finance-gold rounded-full flex items-center justify-center">
                            <Bot className="w-5 h-5 text-finance-navy" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-finance-blue rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-finance-gold rounded-full flex items-center justify-center">
                          <Bot className="w-5 h-5 text-finance-navy" />
                        </div>
                        <div className="bg-white border border-gray-200 p-3 rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-finance-blue rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-finance-blue rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-finance-blue rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
                <div className="flex items-center space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask about our training program..."
                    className="flex-1 border-finance-blue/30 focus:border-finance-blue"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-finance-blue hover:bg-finance-navy p-2"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
                  <Mail className="w-3 h-3 mr-1" />
                  For urgent support: support@infyntrek.in
                </div>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  );
};

export default Chatbot;
