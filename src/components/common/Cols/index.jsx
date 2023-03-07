import React from "react";
import clsx from "clsx";

export default function Cols({ children, className }) {
  return (
    <div className="container p-0">
      <div className={clsx("grid grid-cols-12 my-16", className)}>
        {children}
      </div>
    </div>
  );
}
