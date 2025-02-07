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
import React, { useState } from "react";
import { Label } from "./ui/label";
import { createTimeEntry } from "@/actions/actions";

export const CardTimeLogger = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hours, setHours] = useState<string>("0");
  return (
    <Card className="md:w-80 md:m-2 w-full">
      <CardHeader>
        <h1>Time tracker</h1>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Calendar
          mode="single"
          className="rounded-md border h-full w-full flex"
          selected={date}
          onSelect={setDate}
          classNames={{
            months:
              "flex w-full flex-col sm:flex-row flex-1",
            month: "w-full flex flex-col",
            table: "w-full h-full border-collapse",
            head_row: "",
            row: "w-full",
          }}
        />
        <div>
          <Label htmlFor="hours">Hours</Label>
          <Input
            id="hours"
            type="number"
            placeholder="Hours"
            value={hours}
            min={0.25}
            step={0.25}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => createTimeEntry(date, hours)} className="w-full">
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};
