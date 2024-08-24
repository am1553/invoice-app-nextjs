import InvoiceForm from "@/components/forms/InvoiceForm";
import { KeyboardArrowLeft } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

function CreateInvoice() {
  return (
    <section className="p-10 flex flex-col gap-6">
      <nav>
        <Link href={"/dashboard"} className="flex gap-2 items-center">
          <KeyboardArrowLeft className="text-purple" />
          <span className="font-semibold">Go back</span>
        </Link>
      </nav>

      <InvoiceForm />
    </section>
  );
}

export default CreateInvoice;
