import React from "react";
import clsx from "clsx";

export default function Button({ children, variant, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "text-sm font-bold transition-all",
        className,
        variant === "warning" && [
          "text-slate-700 bg-[#FFD050] hover:bg-yellow-500",
        ],
        variant === "white" && ["text-slate-700 bg-white"]
      )}
    >
      {children}
    </button>
  );
}
