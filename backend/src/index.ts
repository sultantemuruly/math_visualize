import app from "./app";
import dotenv from "dotenv";
import OpenAI from "openai";
import { Request, Response } from "express";
import cors from "cors";
import type {
  ChatCompletionCreateParams,
  ChatCompletion,
} from "openai/resources/chat/completions";

dotenv.config();

const port = process.env.PORT || 3001;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Use CORS middleware to allow all origins
app.use(cors());

// POST /api/chat
app.post(
  "/api/chat",
  async (req: Request<{}, {}, { message: string }>, res: Response) => {
    const { message } = req.body;

    const chatRequest: ChatCompletionCreateParams = {
      model: "gpt-4o",
      messages: [{ role: "user", content: message }],
    };

    try {
      const completion: ChatCompletion = await openai.chat.completions.create(
        chatRequest
      );

      res.json({ reply: completion.choices[0].message?.content });
    } catch (error) {
      console.error("Error processing AI response:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Root route
app.get("/", async (_req: Request, res: Response) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
