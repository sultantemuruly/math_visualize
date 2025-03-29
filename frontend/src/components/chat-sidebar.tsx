"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

type ChatSidebarProps = {
  userClerkId: string;
  onSelectChat: (chatId: number) => void;
  activeChatId?: number;
};

export default function ChatSidebar({
  userClerkId,
  onSelectChat,
  activeChatId,
}: ChatSidebarProps) {
  const [chatIds, setChatIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchChatIds = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/get-chats/${userClerkId}`
        );
        setChatIds(res.data.chatIds);
      } catch (error) {
        console.error("Failed to fetch chat IDs:", error);
      }
    };

    fetchChatIds();
  }, [userClerkId]);

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 font-semibold border-b">Your Chats</div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-2">
          {chatIds.map((id) => (
            <Button
              key={id}
              variant={activeChatId === id ? "default" : "ghost"}
              className="justify-start w-full"
              onClick={() => onSelectChat(id)}
            >
              Chat {id}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
