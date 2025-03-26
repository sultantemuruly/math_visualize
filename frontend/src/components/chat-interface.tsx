"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
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

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      role: "assistant",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/api/chat", {
        message: input,
      });
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: response.data.reply,
        role: "assistant",
      };
      setMessages((prev) => [...prev, aiMessage]);
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

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Card className="w-full h-full flex flex-col">
        <CardHeader className="px-4 py-3 border-b shrink-0">
          <CardTitle className="text-lg font-medium">Math AI</CardTitle>
        </CardHeader>

        <CardContent className="flex-1 p-0 overflow-hidden">
          <ScrollArea className="h-full">
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
                    <Avatar className="h-8 w-8 shrink-0 bg-primary">
                      <div className="text-xs font-medium text-primary-foreground">
                        AI
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
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>

                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 shrink-0 bg-muted">
                      <div className="text-xs font-medium">You</div>
                    </Avatar>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 max-w-[80%]">
                  <Avatar className="h-8 w-8 shrink-0 bg-primary">
                    <div className="text-xs font-medium text-primary-foreground">
                      AI
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
      </Card>
    </div>
  );
}
