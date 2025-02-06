import Link from "next/link";
import { Button } from "./ui/button";
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 gap-8">
          <div className="gap-2">
            <Link href="/" className="text-xl font-bold flex flex-row justify-center items-center gap-2">
              <Image src='/logo.png' alt="icon" width={40} height={40} />
              Time Logger
            </Link>
          </div>
          <div className="flex">
            <Button variant="ghost">
              <Link href="/">Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
