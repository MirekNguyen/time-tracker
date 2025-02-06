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
import { submit } from "../actions/actions";
import { Label } from "./ui/label";

export const CardTimeLogger = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hours, setHours] = useState<number>(0);
  return (
    <Card className="md:w-80 m-2 w-full">
      <CardHeader>
        <h1>Time tracker</h1>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Calendar
          mode="single"
          className="rounded-md border"
          selected={date}
          onSelect={setDate}
        />
        <div>
          <Label htmlFor="hours">Hours</Label>
          <Input
            id="hours"
            type="number"
            placeholder="Hours"
            value={hours}
            pattern="[0-9]+(\.[0-9]{1,2})?"
            defaultValue={0}
            min={0.25}
            step={0.25}
            onChange={(e) => setHours(e.target.valueAsNumber)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => submit(date, hours)} className="w-full">
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};
