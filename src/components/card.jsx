"use client";
import { ContactInfo } from "./contactInfo";

export const Card = ({ item, fetchData }) => {
  async function handleDeleteData() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/mL6VWZIVGSsf", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });

    if (res.status === 200) {
      fetchData();
    }
  }

  return (
    <ContactInfo
      name={item.name_0}
      phone={item.phone}
      handleDeleteData={handleDeleteData}
    />
  );
};
