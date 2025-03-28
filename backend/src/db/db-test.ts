import "dotenv/config";
import { db } from "./index";
import { users } from "./schema";

async function testDb() {
  // Create a user
  await db.insert(users).values({ clerkId: "clerkId", email: "email" });
  console.log("User inserted");

  // Read all users
  const result = await db.select().from(users);
  console.log("All users:", result);
}

testDb().catch((err) => {
  console.error("Error:", err);
});
