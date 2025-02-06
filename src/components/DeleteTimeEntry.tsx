"use client";

import { Button } from "@/components/ui/button";
import { deleteEntry } from "../actions/actions";
import { Trash2 } from "lucide-react";

export const DeleteTimeEntry = ({ id }: { id: number }) => {
  const deleteTimeEntry = async (id: number) => {
    await deleteEntry(id);
  };

  return (
    <Button variant="destructive" onClick={() => deleteTimeEntry(id)}>
      <Trash2 />Delete
    </Button>
  );
};
