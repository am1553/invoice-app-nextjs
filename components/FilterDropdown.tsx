import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Checkbox } from "./ui/checkbox";
function FilterDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center h-10 px-2 gap-2">
          <span className="font-semibold">Filter</span>
          <KeyboardArrowDown className="text-purple" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ul className="flex flex-col gap-2 py-2">
          <li className="flex items-center gap-2">
            <Checkbox />
            <span>Draft</span>
          </li>
          <li className="flex items-center gap-2">
            <Checkbox />
            <span>Pending</span>
          </li>
          <li className="flex items-center gap-2">
            <Checkbox />
            <span>Paid</span>
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FilterDropdown;
