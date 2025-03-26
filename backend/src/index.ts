import app from "./app";
import dotenv from "dotenv";
import OpenAI from "openai";
import { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
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

// Read the initial prompt from a file
const getInitialPrompt = (): string => {
  try {
    const promptPath = path.join(__dirname, "..", "initial_prompt.txt");
    return fs.readFileSync(promptPath, "utf-8");
  } catch (error) {
    console.error("Error reading initial prompt file:", error);
    return "You are a helpful assistant."; // Default prompt if file not found
  }
};

// Use CORS middleware to allow all origins
app.use(cors());

// POST /api/chat
app.post(
  "/api/chat",
  async (req: Request<{}, {}, { message: string }>, res: Response) => {
    const { message } = req.body;

    const chatRequest: ChatCompletionCreateParams = {
      model: "gpt-4o",
      messages: [
        // Use the initial prompt read from the file
        { role: "system", content: getInitialPrompt() },
        // User message
        { role: "user", content: message },
      ],
    };

    try {
      const completion: ChatCompletion = await openai.chat.completions.create(
        chatRequest
      );

      const reply = completion.choices[0].message?.content;

      // Check if the reply contains the "clear the graph" instruction
      if (reply?.toLowerCase().includes("clear the graph")) {
        res.json({ reply: "clear the graph" }); // Send clear command to frontend
      } else {
        res.json({ reply });
      }
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
