import express, { Request, Response } from "express";
import { getAllChatIds, getChatById } from "../db/chats/get-chats";
import { deleteChatById } from "../db/chats/delete-chat";
import { upsertChat } from "../db/chats/upsert-chat";

const router = express.Router();

router.get("/:userClerkId/:chatId", async (req: Request, res: Response) => {
  const { chatId } = req.params;
  try {
    const messages = await getChatById(Number(chatId));
    res.json({ messages });
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:userClerkId/:chatId", async (req: Request, res: Response) => {
  const { chatId } = req.params;
  try {
    const messages = await deleteChatById(Number(chatId));
    res.json({ messages });
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:userClerkId", async (req: Request, res: Response) => {
  const { userClerkId } = req.params;

  try {
    const chatIds = await getAllChatIds(userClerkId);
    res.json({ chatIds });
  } catch (error) {
    console.error("Error fetching chat IDs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//@ts-ignore
router.post("/upsert-chat", async (req: Request, res: Response) => {
  const { userClerkId, chatId, newMessage } = req.body;

  if (!userClerkId || !newMessage) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newChatId = await upsertChat(userClerkId, chatId ?? -1, newMessage);
    res.json({ chatId: newChatId });
  } catch (error) {
    console.error("Error creating/updating chat:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
