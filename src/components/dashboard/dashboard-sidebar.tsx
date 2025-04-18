"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart,
  Package,
  Settings,
  Truck,
  Users,
  Home,
  LogOut,
  Search,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Truck className="h-6 w-6" />
          <span className="">Impala Express</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <div className="px-4 py-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full appearance-none bg-background pl-8 shadow-none"
            />
          </div>
        </div>
        <nav className="grid items-start px-2 text-sm font-medium">
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === "/dashboard" && "bg-muted text-primary"
            )}
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/orders"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === "/dashboard/orders" && "bg-muted text-primary"
            )}
          >
            <Package className="h-4 w-4" />
            Orders
          </Link>
          <Link
            href="/dashboard/operators"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === "/dashboard/operators" && "bg-muted text-primary"
            )}
          >
            <Truck className="h-4 w-4" />
            Operators
          </Link>
          <Link
            href="/dashboard/customers"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === "/dashboard/customers" && "bg-muted text-primary"
            )}
          >
            <Users className="h-4 w-4" />
            Customers
          </Link>
          <Link
            href="/dashboard/analytics"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === "/dashboard/analytics" && "bg-muted text-primary"
            )}
          >
            <BarChart className="h-4 w-4" />
            Analytics
          </Link>
          <Link
            href="/dashboard/settings"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === "/dashboard/settings" && "bg-muted text-primary"
            )}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/logout">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Link>
        </Button>
      </div>
    </div>
  );
}
