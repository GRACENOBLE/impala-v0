"use client";

import * as React from "react";
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  BookUser,
  CameraIcon,
  CarFront,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  House,
  LayoutDashboardIcon,
  ListIcon,
  Package,
  SearchIcon,
  SettingsIcon,
  Truck,
  UsersIcon,
  Warehouse,
} from "lucide-react";

import { NavDocuments } from "./nav-documents";
import { NavMain } from "./main-nav";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "Kevin",
    email: "kevin@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/customer-dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Orders",
      url: "/customer-orders",
      icon: Package,
    },
    {
      title: "My Fleet",
      url: "/customer-fleet",
      icon: BookUser,
    },
    {
      title: "Rentals",
      url: "customer-rentals",
      icon: CarFront,
    },
    {
      title: "Warehousing",
      url: "/customer-warehousing",
      icon: Warehouse,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/customer-settings",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "/customer-get-help",
      icon: HelpCircleIcon,
    },
    // {
    //   title: "Search",
    //   url: "#",
    //   icon: SearchIcon,
    // },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      name: "Reports",
      url: "#",
      icon: ClipboardListIcon,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: FileIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <House className="h-5 w-5" />
                <span className="text-base font-semibold">Impala Express</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
