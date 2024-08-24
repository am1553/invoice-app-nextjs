import InvoicesHeader from "@/components/InvoicesHeader";
import NoInvoices from "@/components/NoInvoices";
import React from "react";

function Dashboard() {
  return (
    <section className="p-8 h-full flex flex-col w-full">
      <InvoicesHeader />
      <aside className="flex-center h-full">
        <NoInvoices />
      </aside>
    </section>
  );
}

export default Dashboard;
