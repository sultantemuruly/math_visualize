"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Menu, PanelLeftClose, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import axios from "axios";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import ChatSidebar from "./chat-sidebar";

import { useUser } from "@clerk/clerk-react";

export type Expression = {
  id: string;
  latex: string;
};

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
};

type ChatInterfaceProps = {
  onNewExpressions?: (exprs: Expression[]) => void;
  handleClearGraph: () => void;
};

export default function ChatInterface({
  onNewExpressions,
  handleClearGraph,
}: ChatInterfaceProps) {
  const { user } = useUser();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      role: "assistant",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [chatId, setChatId] = useState<number | null>(null);

  useEffect(() => {
    const storedChatId = localStorage.getItem("chatId");
    if (storedChatId) {
      setChatId(parseInt(storedChatId, 10));
    }
  }, []);

  useEffect(() => {
    if (chatId !== null) {
      localStorage.setItem("chatId", chatId.toString());
    }
  }, [chatId]);

  useEffect(() => {
    const fetchChatMessages = async () => {
      if (!chatId || !user?.id) return;

      try {
        const res = await axios.get(
          `http://localhost:3001/api/chats/${user.id}/${chatId}`
        );

        const loadedMessages = res.data.messages;

        if (Array.isArray(loadedMessages) && loadedMessages.length > 0) {
          setMessages(loadedMessages);
        } else {
          setMessages([
            {
              id: "1",
              content: "Hello! How can I help you today?",
              role: "assistant",
            },
          ]);
        }

        console.log("Loaded messages from backend:", loadedMessages);
      } catch (err) {
        console.error("Failed to load chat history:", err);
      }
    };

    fetchChatMessages();
  }, [chatId, user?.id]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const extractExpressions = (text: string): Expression[] => {
    const matches = [
      ...text.matchAll(/\{\s*id:\s*"(.*?)",\s*latex:\s*"(.*?)"\s*\}/g),
    ];
    return matches.map(([, id, latex]) => ({ id, latex }));
  };

  const saveMessage = async (message: Message) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/chats/upsert-chat",
        {
          userClerkId: user?.id,
          chatId: chatId ?? -1,
          newMessage: {
            role: message.role,
            content: message.content,
          },
        }
      );

      // Only update chatId if it was created
      if (chatId === null && res.data.chatId) {
        setChatId(res.data.chatId);
      }
    } catch (err) {
      console.error("Failed to update chat:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    saveMessage(userMessage);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/api/chat", {
        message: input,
      });
      const reply = response.data.reply;

      if (reply === "clear the graph") {
        handleClearGraph();
      } else {
        const aiMessage: Message = {
          id: Date.now().toString(),
          content: reply,
          role: "assistant",
        };

        setMessages((prev) => [...prev, aiMessage]);
        saveMessage(aiMessage);

        const expressions = extractExpressions(reply);
        if (expressions.length && onNewExpressions) {
          onNewExpressions(expressions);
        }
      }
    } catch (error) {
      console.error("Error while fetching AI response:", error);
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: "Sorry, there was an error with the AI response.",
        role: "assistant",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="w-full h-full flex">
      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardHeader className="px-4 py-3 border-b">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="shrink-0"
            >
              {!sidebarOpen ? (
                <Menu className="h-5 w-5" />
              ) : (
                <PanelLeftClose className="h-5 w-5" />
              )}
            </Button>
            <CardTitle className="text-lg font-medium">Math AI</CardTitle>
          </div>
        </CardHeader>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - now part of the card */}
          <div
            className={cn(
              "w-64 border-r transition-all duration-300 ease-in-out flex flex-col",
              sidebarOpen ? "opacity-100" : "w-0 opacity-0 overflow-hidden"
            )}
          >
            <ChatSidebar
              userClerkId={user.id}
              onSelectChat={(id) => {
                console.log("Selected chat:", id);
                setChatId(id);
              }}
              activeChatId={chatId ?? undefined}
            />
          </div>

          {/* Main chat content */}
          <div className="flex-1 flex flex-col">
            {/* Messages area */}
            <CardContent className="flex-1 p-0 overflow-hidden">
              <ScrollArea className="h-full w-full">
                <div className="flex flex-col gap-4 p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-3 max-w-[80%]",
                        message.role === "user" ? "ml-auto" : ""
                      )}
                    >
                      {message.role === "assistant" && (
                        <Avatar className="h-8 w-8 shrink-0 bg-primary flex items-center justify-center">
                          <div className="text-xs font-medium text-primary-foreground">
                            <Brain />
                          </div>
                        </Avatar>
                      )}

                      <div
                        className={cn(
                          "rounded-lg p-3 break-words",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        <ReactMarkdown
                          remarkPlugins={[remarkMath]}
                          rehypePlugins={[rehypeKatex]}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>

                      {message.role === "user" && (
                        <Avatar className="h-8 w-8 shrink-0 bg-muted">
                          <div>
                            <img
                              src={user.imageUrl}
                              alt="User avatar"
                              className="object-cover"
                            />
                          </div>
                        </Avatar>
                      )}
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex gap-3 max-w-[80%]">
                      <Avatar className="h-8 w-8 shrink-0 bg-primary flex justify-center items-center">
                        <div className="text-xs font-medium text-primary-foreground">
                          <Brain />
                        </div>
                      </Avatar>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="flex gap-1">
                          <div className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce"></div>
                          <div className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce delay-75"></div>
                          <div className="h-2 w-2 rounded-full bg-foreground/40 animate-bounce delay-150"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            </CardContent>

            {/* Input area - stays fixed at bottom */}
            <CardFooter className="p-3 border-t shrink-0">
              <form onSubmit={handleSubmit} className="flex w-full gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
