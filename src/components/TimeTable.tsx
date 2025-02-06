"use server";
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
import { getTimeEntries } from "../actions/actions";
import { DeleteTimeEntry } from "./DeleteTimeEntry";

export async function TimeEntriesTable() {
  const timeEntries = await getTimeEntries();

  const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);

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
            <TableCell className="text-right"><DeleteTimeEntry id={entry.id} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right">{totalHours}</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

