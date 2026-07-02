import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import type { BreadcrumbItem } from "@/types";

interface PageShellProps {
  children: ReactNode;
  showSearch?: boolean;
  breadcrumb?: BreadcrumbItem[];
}

export default function PageShell({
  children,
  showSearch = false,
  breadcrumb,
}: PageShellProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar showSearch={showSearch} breadcrumb={breadcrumb} />
        <main className="flex-1 px-4 py-6 sm:px-6">{children}</main>
      </div>
    </div>
  );
}
