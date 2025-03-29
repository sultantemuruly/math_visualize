import { db } from "../index";
import { chats } from "../schema";
import { eq } from "drizzle-orm";
import type { ChatMessage } from "./types";

export async function upsertChat(
  userClerkId: string,
  chatId: number,
  newMessage: ChatMessage
) {
  const [chat] = (await db
    .select()
    .from(chats)
    .where(eq(chats.id, chatId))) as { content: ChatMessage[] }[];

  if (chat) {
    // Chat exists, append message
    const updatedContent: ChatMessage[] = [...chat.content, newMessage];

    await db
      .update(chats)
      .set({ content: updatedContent })
      .where(eq(chats.id, chatId));

    return chatId;
  } else {
    // Create new chat
    const result = await db
      .insert(chats)
      .values({
        userClerkId,
        content: [newMessage],
      })
      .returning({ id: chats.id });

    return result[0]?.id;
  }
}
