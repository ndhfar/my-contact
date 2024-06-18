"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HeaderForm } from "./headerForm";
import { AvatarNew } from "./avatarNew";
import { InputForm } from "./inputForm";

export const FormContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isNameEmpty, setIsNameEmpty] = useState(true);
  const router = useRouter();

  function handleNameChange(event) {
    const { value } = event.target;
    setName(value);
    setIsNameEmpty(value === "");
  }

  function handlePhoneChange(event) {
    const { value } = event.target;
    setPhone(value);
  }

  function handleOnClose() {
    router.push("/");
    router.refresh();
    setName("");
    setPhone("");
  }

  function validatePhone(number) {
    const phoneRegex = /^\d{1,12}$/;
    return phoneRegex.test(number);
  }

  async function handleOnSave() {
    if (!validatePhone(phone)) {
      alert("The phone number is incorrect");
      return;
    }

    const res = await fetch("https://v1.appbackend.io/v1/rows/mL6VWZIVGSsf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ name_0: name, phone }]),
    });

    if (res.status === 200) {
      alert("Contact has been saved.");
      setName("");
      setIsNameEmpty(true);
      setPhone("");
      router.refresh();
      router.push("/");
    } else {
      alert("The phone number is incorrect");
    }
  }

  return (
    <div className="h-screen mx-auto md:w-[576px] md:shadow-xl">
      <HeaderForm onClose={handleOnClose} onSave={handleOnSave} />
      <main className="flex flex-col items-center gap-8 p-6 text-customBlack">
        <AvatarNew isNameEmpty={isNameEmpty} name={name} />
        <InputForm
          name={name}
          handleNameChange={handleNameChange}
          phone={phone}
          handlePhoneChange={handlePhoneChange}
        />
      </main>
    </div>
  );
};
