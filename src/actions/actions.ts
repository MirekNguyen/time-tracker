"use server";

import { db } from "@/db";
import { timeEntriesTable, TimeEntry } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const submit = async (date: Date | undefined, hours: string) => {
  if (!date) return;
  await db.insert(timeEntriesTable).values({ date, hours }).execute();
  revalidatePath('/');
};

export const getTimeEntries = async (): Promise<TimeEntry[]> => {
  return await db.query.timeEntriesTable.findMany();
};

export const deleteEntry = async (id: number) => {
  if (!id) return;
  await db.delete(timeEntriesTable).where(eq(timeEntriesTable.id, id));
  revalidatePath('/');
};
