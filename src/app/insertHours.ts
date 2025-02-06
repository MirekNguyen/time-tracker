"use server";

import { db } from "@/db";
import { timeEntriesTable, TimeEntry } from "@/db/schema";
import { eq } from "drizzle-orm";

export const submit = async (date: Date | undefined, hours: number) => {
  if (!date) return;
  await db.insert(timeEntriesTable).values({ date, hours }).execute();
};

export const getTimeEntries = async (): Promise<TimeEntry[]> => {
  return await db.query.timeEntriesTable.findMany();
}

export const deleteEntry = async (id: number) => {
  if (!id) return;
  return await db.delete(timeEntriesTable).where(eq(timeEntriesTable.id, id));
}
