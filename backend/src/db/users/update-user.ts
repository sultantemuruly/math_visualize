import { db } from "../index";
import { users } from "../schema";
import { eq } from "drizzle-orm";

export const updateUserEmail = async (clerkId: string, email: string) => {
  return db.update(users).set({ email }).where(eq(users.clerkId, clerkId));
};
