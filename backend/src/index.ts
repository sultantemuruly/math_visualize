import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import app from "./app";
import clerkWebhookRouter from "./routes/clerk-webhook";
import chatsRouter from "./routes/chats";
import aiChatRouter from "./routes/ai-chat";

dotenv.config();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(clerkWebhookRouter);
app.use("/api/chats", chatsRouter);
app.use("/api/chat", aiChatRouter);

// Root
app.get("/", (_req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
