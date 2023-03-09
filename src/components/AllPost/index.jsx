import React from "react";
import Cols from "../common/Cols";

export default function AllPost({ img, heading, desc, text }) {
  return (
    <Cols className="mb-14">
      <div className="col-span-5">
        <img src={img} className="w-[490px] h-[318px] pr-3" alt="" />
      </div>
      <div className="col-span-6 self-center">
        <h3 className="uppercase font-semibold tracking-widest text-purple-700 pb-5">
          {heading}
        </h3>
        <h2 className="text-4xl font-bold pb-5">{desc}</h2>
        <p className="text-slate-400">{text}</p>
      </div>
    </Cols>
  );
}
