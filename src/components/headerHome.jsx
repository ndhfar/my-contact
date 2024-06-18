import React from "react";
import { Button } from "./button";

export const HeaderHome = () => {
  return (
    <header className="fixed z-50 top-0 left-2/4 -translate-x-1/2 w-full md:w-[576px] mx-auto flex items-center justify-between px-6 py-3 font-bold text-customBlack bg-white">
      <h1 className="text-xl">My Contact</h1>
      <Button>
        <i className="bx bx-user-plus"></i>
      </Button>
    </header>
  );
};
