import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 gap-8">
          <div className="gap-2">
            <Link href="/" className="text-xl font-bold">
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
