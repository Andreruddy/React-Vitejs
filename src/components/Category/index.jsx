import clsx from "clsx";
import React from "react";

export default function Category({ type, img, desc, className }) {
  return (
    <div className={clsx("col-span-3", className)}>
      <div className="w-[296] border-solid border-2 hover:bg-yellow-400 p-6">
        <div className="w-12 bg-[#FBF6EA] p-3 rounded-md mb-4">
          <img src={img} />
        </div>
        <div>
          <h5 className="text-2xl font-bold text-slate-900 mb-4">{type}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
