import React from "react";
import FilterDropdown from "./FilterDropdown";
import { Button } from "./ui/button";
import { Add } from "@mui/icons-material";
import Link from "next/link";

function InvoicesHeader() {
  return (
    <header className="flex">
      <div className="flex-1">
        <h2>Invoices</h2>
        <span>7 Invoices</span>
      </div>
      <div className="flex items-center gap-4">
        <FilterDropdown />
        <Link href={"/invoice/create"}>
          <Button className="gap-2" size={"icon-left"}>
            <div className="bg-white text-purple rounded-full">
              <Add />
            </div>
            <span className="font-semibold ">New</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default InvoicesHeader;
