"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchChatIds();
  }, [userClerkId]);

  const fetchChatIds = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `http://localhost:3001/api/chats/${userClerkId}`
      );
      setChatIds(res.data.chatIds);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch chat IDs:", error);
    }
  };

  const handleCreateChat = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:3001/api/chats/upsert-chat",
        {
          userClerkId,
          newMessage: {
            role: "system",
            content: "New chat started",
          },
        }
      );

      const newChatId = res.data.chatId;
      setChatIds((prev) => [newChatId, ...prev]); // show new chat at top
      onSelectChat(newChatId);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to create new chat:", error);
    }
  };

  const handleChatDelete = async (chatId: number) => {
    try {
      setIsLoading(true);
      await axios.delete(
        `http://localhost:3001/api/chats/${userClerkId}/${chatId}`
      );
      fetchChatIds();
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to delete chat:", error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div className="p-4 font-semibold border-b flex justify-between items-center">
            <span>Your Chats</span>
            <Button variant="outline" size="sm" onClick={handleCreateChat}>
              +
            </Button>
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-2 p-2">
              {chatIds.map((id) => (
                <div key={id} className="relative">
                  <Button
                    variant={activeChatId === id ? "default" : "ghost"}
                    className="justify-start w-full pr-10"
                    onClick={() => onSelectChat(id)}
                  >
                    Chat {id}
                  </Button>
                  <Button
                    variant="destructive"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-7 w-7"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChatDelete(id);
                    }}
                  >
                    <Trash2 className="w-2 h-2" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
