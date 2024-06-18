"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const Button = ({ children }) => {
  const router = useRouter();

  function handleOpenNewContact() {
    router.push("/newContact");
  }

  return (
    <button
      className="text-3xl cursor-pointer transform transition-transform active:scale-90"
      onClick={handleOpenNewContact}
    >
      {children}
    </button>
  );
};
