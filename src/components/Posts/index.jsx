import React from "react";
import Cols from "@/components/common/Cols";
import FeatImg from "@/assets/images/feature_1.png";
import exampleJson from "@/json/example.json";
import Grid from "../common/Grid";
import Button from "../common/Button";

export default function Posts() {
  return (
    <Cols>
      <div className="col-span-7">
        <h2 className="font-bold text-2xl mb-5">Feature Post</h2>
        <div className="border-solid border-2 p-8">
          <div className="w-full h-auto">
            <img
              src={FeatImg}
              className="w-[669px] h-[282px]"
              alt="post-images"
            />
            <div className="py-6">
              <p className="text-slate-400 py-4">By John Doe | May, 23, 2022</p>
              <h3 className="leading-10 text-3xl text-justify font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h3>
              <p className="pt-6 text-slate-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <Button variant="warning" className="py-3 px-10">
              Read More >
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-5 mx-10">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl mb-5">All Post</h2>
          <a href="#" className="text-slate-400">
            View All
          </a>
        </div>
        <div className="mr-4">
          {exampleJson.posts.map((item, i) => {
            return (
              <div key={i} className="p-8 hover:bg-pink-200">
                <p className="text-slate-400 pb-2">
                  By {item.author} | {item.date}
                </p>
                <h3 className="font-bold text-2xl">{item.desc}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </Cols>
  );
}
