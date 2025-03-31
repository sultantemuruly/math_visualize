import { db } from "../index";
import { chats } from "../schema";
import { eq } from "drizzle-orm";

export async function deleteChatById(chatId: number): Promise<boolean> {
  const result = await db.delete(chats).where(eq(chats.id, chatId));
  return result.rowCount > 0;
}
