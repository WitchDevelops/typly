"use client";
import React, { useState } from "react";
import { namesMap } from "@/data/nameMap";
import { useForm } from "react-hook-form";

export const NameMapper: React.FC = () => {
  const [mappedName, setMappedName] = useState("");
  const { register, handleSubmit } = useForm<{ name: string }>();

  const onSubmit = (data: { name: string }) => {
    const mappedValue = namesMap[data.name] || "Unknown";
    setMappedName(mappedValue);
    alert(`Result: ${mappedValue}`);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full min-w-[300px]"
      >
        <div>
          <input
            className="bg-slate-200 text-blue-900 text-xl p-2"
            type="text"
            {...register("name")}
          />
          <button>add more</button>
        </div>

        <button
          className="bg-blue-700 p-2 rounded-full text-bold text-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
      {mappedName && <p>Mapped name: {mappedName}</p>}
    </div>
  );
};
