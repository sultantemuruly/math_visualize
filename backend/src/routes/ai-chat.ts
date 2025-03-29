import express, { Request, Response } from "express";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import type {
  ChatCompletionCreateParams,
  ChatCompletion,
} from "openai/resources/chat/completions";

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper to get system prompt
const getInitialPrompt = (): string => {
  try {
    const promptPath = path.join(__dirname, "..", "initial_prompt.txt");
    return fs.readFileSync(promptPath, "utf-8");
  } catch (error) {
    console.error("Error reading initial prompt file:", error);
    return "You are a helpful assistant.";
  }
};

// POST /api/chat
router.post(
  "/",
  async (req: Request<{}, {}, { message: string }>, res: Response) => {
    const { message } = req.body;

    const chatRequest: ChatCompletionCreateParams = {
      model: "gpt-4o",
      messages: [
        { role: "system", content: getInitialPrompt() },
        { role: "user", content: message },
      ],
    };

    try {
      const completion: ChatCompletion = await openai.chat.completions.create(
        chatRequest
      );

      const reply = completion.choices[0].message?.content;

      if (reply?.toLowerCase().includes("clear the graph")) {
        res.json({ reply: "clear the graph" });
      } else {
        res.json({ reply });
      }
    } catch (error) {
      console.error("AI chat error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default router;
