import { CardTimeLogger } from "@/components/CardTimeLogger";
import { Navbar } from "@/components/Navbar";
import { TimeEntriesTable } from "@/components/TimeTable";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <CardTimeLogger />
        <Card className="w-full m-2">
          <CardHeader>
            <h1>Time logged</h1>
          </CardHeader>
          <CardContent>
            <TimeEntriesTable />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
