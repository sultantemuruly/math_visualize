import {
  pgTable,
  serial,
  text,
  timestamp,
  jsonb,
  integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// USERS table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: text("clerk_id").notNull().unique(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// CHATS table
export const chats = pgTable("chats", {
  id: serial("id").primaryKey(),
  userClerkId: text("user_clerk_id")
    .notNull()
    .references(() => users.clerkId, { onDelete: "cascade" }),
  content: jsonb("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// RELATIONS
export const usersRelations = relations(users, ({ many }) => ({
  chats: many(chats),
}));

export const chatsRelations = relations(chats, ({ one }) => ({
  user: one(users, {
    fields: [chats.userClerkId],
    references: [users.clerkId],
  }),
}));
