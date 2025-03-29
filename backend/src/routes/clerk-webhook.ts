import { createUser } from "../db/users/create-user";
import express from "express";

const router = express.Router();

interface ClerkUserCreatedBody {
  type: string;
  data: {
    id: string;
    email_addresses?: { email_address: string }[];
  };
}

//@ts-ignore
router.post("/api/webhooks", express.json(), async (req, res) => {
  const event = req.body;

  if (event.type === "user.created") {
    const user = event.data;

    try {
      await createUser({
        clerkId: user.id,
        email: user.email_addresses?.[0]?.email_address || "",
      });

      return res.status(200).json({ message: "User created" });
    } catch (error) {
      console.error("Error creating user in DB:", error);
      return res.status(500).json({ error: "Failed to create user" });
    }
  }

  return res.status(200).json({ message: "Event ignored" });
});

export default router;
