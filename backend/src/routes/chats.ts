import express, { Request, Response } from "express";
import { getAllChatIds } from "../db/chats/get-chats";

const router = express.Router();

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

export default router;
