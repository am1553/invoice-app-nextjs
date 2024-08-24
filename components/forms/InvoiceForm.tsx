import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import CalendarInput from "../CalendarInput";
import { Textarea } from "../ui/textarea";

function InvoiceForm() {
  return (
    <form className="flex flex-col gap-8">
      <h1>New Invoice</h1>

      <div className="flex flex-col gap-3">
        <span className="font-semibold text-purple">Bill From</span>
        <div>
          <Label htmlFor="street-address">Street Addresss</Label>
          <Input
            type="text"
            id="street-address"
            placeholder="e.g. 19 Union Terrace"
          />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" placeholder="e.g. London" />
        </div>
        <div>
          <Label htmlFor="post-code">Post Code</Label>
          <Input type="text" id="post-code" placeholder="e.g. E1 3EZ" />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Input type="text" id="country" placeholder="e.g. United Kingdom" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-semibold text-purple">Bill To</span>
        <div>
          <Label htmlFor="client-name">Client's Name</Label>
          <Input type="text" id="client-name" placeholder="e.g. Alex Grim" />
        </div>
        <div>
          <Label htmlFor="client-email">Client's Email</Label>
          <Input
            type="text"
            id="client-email"
            placeholder="e.g. alexgrim@gmail.com"
          />
        </div>
        <div>
          <Label htmlFor="client-street-address">Street Addresss</Label>
          <Input
            type="text"
            id="client-street-address"
            placeholder="e.g. 19 Union Terrace"
          />
        </div>
        <div>
          <Label htmlFor="client-city">City</Label>
          <Input type="text" id="client-city" placeholder="e.g. London" />
        </div>
        <div>
          <Label htmlFor="client-post-code">Post Code</Label>
          <Input type="text" id="client-post-code" placeholder="e.g. E1 3EZ" />
        </div>
        <div>
          <Label htmlFor="client-country">Country</Label>
          <Input
            type="text"
            id="client-country"
            placeholder="e.g. United Kingdom"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label>Invoice Date</Label>
          <CalendarInput />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="project-description">Project Description</Label>
          <Textarea
            placeholder="e.g. Graphic Design"
            id="project-description"
          />
        </div>
      </div>
    </form>
  );
}

export default InvoiceForm;
