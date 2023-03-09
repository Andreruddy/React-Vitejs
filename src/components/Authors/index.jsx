import React from "react";
import facebook from "@/assets/images/facebook.svg";
import instagram from "@/assets/images/instagram.svg";
import linkedin from "@/assets/images/linkedin.svg";
import twitter from "@/assets/images/twitter.svg";
export default function Authors({ img, name, company }) {
  const socmed = [facebook, twitter, instagram, linkedin];

  return (
    <div className="col-span-3 mr-8 text-center w-[296px]">
      <div className="w-[298] bg-[#F4F4F4] hover:bg-[#FBF6EA] py-10">
        <div className="flex justify-center pb-5">
          <img src={img} className="rounded-full w-32 h-32" />
        </div>
        <div className="pb-3">
          <h3 className="font-bold text-2xl">{name}</h3>
          <p className="text-slate-400">{company}</p>
        </div>
        <div className="flex justify-center gap-3">
          {socmed.map((item, i) => (
            <img key={i} className="w-4 h-4" src={item} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
