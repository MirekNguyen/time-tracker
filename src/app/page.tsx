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

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hours, setHours] = useState<number>(0);
  const submit = () => {
    console.log(date, hours);
  }
  return (
    <Card className="w-80">
      <CardHeader><h1>Time tracker</h1></CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          className="rounded-md border"
          selected={date}
          onSelect={setDate}
        />
        <Input type="number" placeholder="Hours" value={hours} onChange={(e) => setHours(e.target.valueAsNumber)}/>
      </CardContent>
      <CardFooter><Button onClick={submit}>Save</Button></CardFooter>
    </Card>
  );
}
