"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { getTimeEntries, submit } from "./insertHours";
import { TimeEntry } from "@/db/schema";
import { TimeEntriesTable } from "./time-table";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hours, setHours] = useState<number>(0);
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await getTimeEntries();
    setTimeEntries(data);
  };
  return (
    <div className="flex flex-column">
      <Card className="w-80">
        <CardHeader>
          <h1>Time tracker</h1>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            className="rounded-md border"
            selected={date}
            onSelect={setDate}
          />
          <Input
            type="number"
            placeholder="Hours"
            value={hours}
            onChange={(e) => setHours(e.target.valueAsNumber)}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={() => submit(date, hours)}>Save</Button>
        </CardFooter>
      </Card>
      <Card className="w-80">
        <CardHeader>
          <h1>Time logged</h1>
        </CardHeader>
        <CardContent>
          {timeEntries && <TimeEntriesTable timeEntries={timeEntries} />}
        </CardContent>
      </Card>
    </div>
  );
}
