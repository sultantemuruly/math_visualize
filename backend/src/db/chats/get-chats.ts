import { db } from "../index";
import { chats } from "../schema";
import { eq } from "drizzle-orm";
import type { ChatMessage } from "./types";

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
};

// Get the content of a specific chat
export async function getChatById(chatId: number): Promise<Message[]> {
  const [chat] = (await db
    .select({ content: chats.content })
    .from(chats)
    .where(eq(chats.id, chatId))) as { content: Message[] }[];

  return chat?.content ?? [];
}

// Get all chat IDs for a specific user
export async function getAllChatIds(userClerkId: string): Promise<number[]> {
  const results = await db
    .select({ id: chats.id })
    .from(chats)
    .where(eq(chats.userClerkId, userClerkId));

  return results.map((row) => row.id);
}
