"use client";

import { removeTimeEntry } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export const DeleteTimeEntry = ({ id }: { id: number }) => {
  const deleteEntry = async (id: number) => {
    await removeTimeEntry(id);
  };

  return (
    <Button variant="destructive" onClick={() => deleteEntry(id)}>
      <Trash2 />Delete
    </Button>
  );
};
