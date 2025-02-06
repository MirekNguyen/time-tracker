import { CardTimeLogger } from "@/components/CardTimeLogger";
import { TimeEntriesTable } from "@/components/TimeTable";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-column">
      <CardTimeLogger />
      <Card className="w-96">
        <CardHeader>
          <h1>Time logged</h1>
        </CardHeader>
        <CardContent>
          <TimeEntriesTable />
        </CardContent>
      </Card>
    </div>
  );
}
