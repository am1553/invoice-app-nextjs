"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";

function CalendarInput() {
  const [date, setDate] = React.useState<Date>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-auto justify-between text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default CalendarInput;
