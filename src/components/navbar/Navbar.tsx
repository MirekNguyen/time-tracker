"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const Navbar = () => {
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
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Button variant={pathname === "/" ? "secondary" : "ghost"}>
            <Link href="/">Dashboard</Link>
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="grid gap-4 p-4">
                    <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                      Dashboard
                    </Link>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Navigation Menu</DialogTitle>
                  <div className="grid gap-4 p-4">
                    <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                      Dashboard
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* User Options */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

