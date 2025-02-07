"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { LogOut, MenuIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { SignOutButton } from "@clerk/nextjs";

export const Navbar = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  return (
    <nav className="bg-primary text-primary-foreground top-0 sticky flex flex-nowrap z-10 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex items-center h-16 justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/"
            className="md:text-xl font-bold flex flex-row justify-center items-center gap-2"
          >
            <Image src="/logo.png" alt="icon" width={40} height={40} />
            Time Logger
          </Link>
          <div className="hidden md:flex gap-6">
            <Button variant={pathname === "/" ? "secondary" : "ghost"}>
              <Link href="/">Dashboard</Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <div className="hidden md:block">{children}</div>
          <div className="flex flex-row items-center">
            <ModeToggle />
          </div>

          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTitle></SheetTitle>
              <SheetTrigger asChild>
                <Button variant="secondary" size="icon">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="md:hidden">
                <SheetClose asChild>
                  <div>
                    {children}
                    <Link href="/">Dashboard</Link>
                  </div>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
          <SignOutButton>
            <Button variant="secondary">
              Sign out <LogOut />
            </Button>
          </SignOutButton>
        </div>
      </div>
    </nav>
  );
};
