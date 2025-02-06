import { date, integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const timeEntriesTable = pgTable("time_entries", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  date: timestamp().notNull(),
  hours: integer().notNull(),
});

export const schema = {
  usersTable,
  timeEntriesTable,
}

export type TimeEntry = typeof timeEntriesTable.$inferSelect;
