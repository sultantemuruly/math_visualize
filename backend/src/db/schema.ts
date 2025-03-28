import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: text("clerk_id").notNull(),
  email: text("email").notNull(),
  name: text("name"), // optional
  createdAt: timestamp("created_at").defaultNow(),
});
