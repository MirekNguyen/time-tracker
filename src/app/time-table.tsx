"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteEntry } from "./insertHours";

type TimeEntry = {
  id: number;
  date: Date;
  hours: number;
};

type TimeEntriesTableProps = {
  timeEntries: TimeEntry[];
};

export function TimeEntriesTable({ timeEntries }: TimeEntriesTableProps) {
  const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);

  const deleteTimeEntry = async (id: number) => {
     await deleteEntry(id);
  }
  return (
    <Table>
      <TableCaption>A record of time entries.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Date</TableHead>
          <TableHead className="text-right">Hours Worked</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {timeEntries.map((entry) => (
          <TableRow key={entry.id}>
            <TableCell className="font-medium">{entry.date.toDateString()}</TableCell>
            <TableCell className="text-right">{entry.hours}</TableCell>
            <TableCell className="text-right"><Button variant="destructive" onClick={() => deleteTimeEntry(entry.id)}>Delete</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right">{totalHours}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

