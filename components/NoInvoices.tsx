import Image from "next/image";
import React from "react";

function NoInvoices() {
  return (
    <div className="relative flex flex-col ">
      <div className="max-w-xl text-center flex-center flex-col gap-6 mx-auto">
        <Image
          src={"illustration-empty.svg"}
          alt="no invoices"
          height={200}
          width={242}
          className="object-contain"
          priority
        />
        <div>
          <h1>There is nothing here</h1>
          <p>Create an invoice by clicking the New button and get started.</p>
        </div>
      </div>
    </div>
  );
}

export default NoInvoices;
