"use client";

import { removeTimeEntry } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Trash2 } from "lucide-react";

export const DeleteTimeEntry = ({ id }: { id: number }) => {
  const deleteEntry = async (id: number) => {
    await removeTimeEntry(id);
    toast({ description: "Time entry deleted" });
  };

  return (
    <Button variant="destructive" onClick={() => deleteEntry(id)}>
      <Trash2 />Delete
    </Button>
  );
};
