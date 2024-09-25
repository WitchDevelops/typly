"use client";
import React, { useState } from "react";
import { namesMap } from "@/data/nameMap";


export const NameMapper: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [mappedName, setMappedName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mappedValue = namesMap[inputValue] || "Unknown";
    setMappedName(mappedValue);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full min-w-[300px]"
      >
        <input
          className="bg-slate-200 text-blue-900 text-xl p-2"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
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
