import { db } from "../index";
import { users } from "../schema";
import { eq } from "drizzle-orm";

export const getUserByClerkId = async (clerkId: string) => {
  return db.select().from(users).where(eq(users.clerkId, clerkId)).limit(1);
};
