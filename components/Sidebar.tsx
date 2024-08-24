import Image from "next/image";
import React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import ThemeToggle from "./ThemeToggle";

function Sidebar() {
  return (
    <header className="h-14 bg-dark-blue flex justify-between">
      <div className="relative overflow-clip h-full w-14 flex-center bg-purple rounded-r-2xl after:absolute after:left-0 after:right-0 after:top-2/4 after:bg-desaturated-purple after:h-14 after:rounded-l-2xl">
        <Image
          src={"logo.svg"}
          className="relative z-10"
          width={"28"}
          height={"26"}
          alt="logo"
        />
      </div>

      <div className="flex text-white">
        <ThemeToggle />
        <hr className="w-[1px] h-full bg-grey" />
        <div className="h-full w-16 flex-center">
          <Person2Icon />
        </div>
      </div>
    </header>
  );
}

export default Sidebar;
