import React from "react";

type ActionButtonProps = {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  className,
  children,
  onClick,
}) => {
  return (
    <button
      className={`p-2 px-6 rounded-md text-bold text-xl flex items-center justify-center gap-2 ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
