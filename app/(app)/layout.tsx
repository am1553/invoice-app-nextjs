import Sidebar from "@/components/Sidebar";
import React from "react";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-full flex flex-col">
      <Sidebar />
      {children}
    </main>
  );
}

export default AppLayout;
