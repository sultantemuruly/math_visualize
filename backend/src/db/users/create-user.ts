import { db } from "../index";
import { users } from "../schema";

export const createUser = async ({
  clerkId,
  email,
}: {
  clerkId: string;
  email: string;
}) => {
  return db.insert(users).values({ clerkId, email });
};
