import { CardTimeLogger } from "@/components/CardTimeLogger";
import { TimeEntriesList } from "@/components/TimeTable";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row my-2">
        <CardTimeLogger />
        <Card className="w-full my-2 md:m-2">
          <CardHeader>
            <h1>Time logged</h1>
          </CardHeader>
          <CardContent>
            <TimeEntriesList />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
