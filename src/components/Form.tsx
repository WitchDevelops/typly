"use client";
import React, { useState } from "react";
import { namesMap } from "@/data/nameMap";
import { useForm, useFieldArray } from "react-hook-form";
import { FaTrash, FaUserPlus } from "react-icons/fa6";
import { ActionButton } from "@/components/ActionButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const NameMapper: React.FC = () => {
  const { register, handleSubmit, control, watch } = useForm<{
    names: { name: string }[];
  }>({
    defaultValues: {
      names: [{ name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "names",
  });
  const names = watch("names");
  const isSubmitDisabled = names ? names.some(({ name }) => !name) : true;
  const [mappedName, setMappedName] = useState("");

  const onSubmit = (data: { names: { name: string }[] }) => {
    const mappedNames = data.names.map(({ name }, index) => ({
      id: index,
      name: namesMap[name] || "Unknown",
    }));
    setMappedName(JSON.stringify(mappedNames));
  };

  return (
    <div className="flex flex-col gap-4 items-center max-w-full w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full min-w-[300px]"
      >
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-4">
            <input
              className="bg-slate-200 text-slate-950 text-xl p-2 px-4 rounded-md w-full"
              type="text"
              placeholder="Enter name"
              id={`name-${index}`}
              {...register(`names.${index}.name`)}
            />

            <ActionButton className="bg-pink-800" onClick={() => remove(index)}>
              <FaTrash />
            </ActionButton>

            <ActionButton
              className="bg-teal-700"
              onClick={() => append({ name: "" })}
            >
              <FaUserPlus />
            </ActionButton>
          </div>
        ))}

        <button
          className="bg-amber-700 p-2 rounded-full text-bold text-xl disabled:bg-[#2B2B2B]"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </form>
      {mappedName && (
        <div className="max-w-full">
          <SyntaxHighlighter language="json" style={a11yDark}>
            {mappedName}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
