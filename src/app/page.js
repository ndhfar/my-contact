"use client";
import { HeaderHome } from "@/components/headerHome";
import { Card } from "@/components/card";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("https://v1.appbackend.io/v1/rows/mL6VWZIVGSsf", {
        cache: "no-store",
      });
      const result = await res.json();

      const sortedData = result.data.sort((a, b) => {
        if (a.name_0 < b.name_0) return -1;
        if (a.name_0 > b.name_0) return 1;
        return 0;
      });

      setData(sortedData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  return (
    <div className="relative mx-auto min-h-screen md:w-[576px] md:shadow-xl pb-4">
      <HeaderHome />
      <main className="pt-16 flex flex-col gap-3">
        {data.length === 0 ? (
          <p className="m-auto py-[40%] text-customBlack text-lg">No Contact</p>
        ) : (
          data.map((item) => {
            return <Card key={item._id} item={item} fetchData={fetchData} />;
          })
        )}
      </main>
    </div>
  );
}
