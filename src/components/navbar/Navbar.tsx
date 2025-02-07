"use client";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-primary text-primary-foreground top-0 sticky flex flex-nowrap z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="md:text-xl font-bold flex flex-row justify-center items-center gap-2"
            >
              <Image src="/logo.png" alt="icon" width={40} height={40} />
              Time Logger
            </Link>
            <div className="flex gap-6">
              <Button variant={pathname === "/" ? "secondary" : "ghost"}>
                <Link href="/">Dashboard</Link>
              </Button>
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
