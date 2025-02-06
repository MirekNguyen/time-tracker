"use client";

import { Button } from "@/components/ui/button";
import { deleteEntry } from "../actions/actions";

export const DeleteTimeEntry = ({ id }: { id: number }) => {
  const deleteTimeEntry = async (id: number) => {
    await deleteEntry(id);
  };

  return (
    <Button variant="destructive" onClick={() => deleteTimeEntry(id)}>
      Delete
    </Button>
  );
};
