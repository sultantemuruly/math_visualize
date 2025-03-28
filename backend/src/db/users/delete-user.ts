import { db } from "../index";
import { users } from "../schema";
import { eq } from "drizzle-orm";

export const deleteUserByClerkId = async (clerkId: string) => {
  return db.delete(users).where(eq(users.clerkId, clerkId));
};
