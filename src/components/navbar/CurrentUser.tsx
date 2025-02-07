"use server";
import { currentUser } from "@clerk/nextjs/server";

export const CurrentUser = async () => {
  const user = await currentUser();
  return <div>Welcome <span className="font-bold underline">{user?.fullName}</span></div>
}
