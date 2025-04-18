import Link from "next/link";
import Container from "../common/container";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="sticky top-0 border py-4 z-1 bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold">Impala</span>
          <div className="flex gap-4">
            <Link
              href={"/customer-dashboard"}
              className={cn(buttonVariants({ variant: "default" }))}
            >
              LogIn
            </Link>
            <Link
              href={"/customer-dashboard"}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Signup
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
