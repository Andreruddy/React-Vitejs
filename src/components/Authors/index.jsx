import React from "react";

export default function Authors({ img, name, company }) {
  return (
    <div className="col-span-3 mr-8 text-center w-[296px]">
      <div className="w-[298] bg-[#F4F4F4] hover:bg-[#FBF6EA] py-10">
        <div className="flex justify-center pb-5">
          <img src={img} className="rounded-full w-32 h-32" />
        </div>
        <div className="body">
          <h3 className="font-bold text-2xl">{name}</h3>
          <p className="text-slate-400">{company}</p>
        </div>
      </div>
    </div>
  );
}
