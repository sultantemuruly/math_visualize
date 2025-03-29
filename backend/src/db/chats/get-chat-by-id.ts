import { db } from "../index";
import { chats } from "../schema";
import { eq } from "drizzle-orm";
import type { ChatMessage } from "./types";

export async function getChatById(
  chatId: number
): Promise<ChatMessage[] | null> {
  const [chat] = (await db
    .select({ content: chats.content })
    .from(chats)
    .where(eq(chats.id, chatId))) as { content: ChatMessage[] }[];

  return chat ? chat.content : null;
}
