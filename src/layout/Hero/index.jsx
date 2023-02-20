import React from "react";
import HeroImage from "../../assets/images/Hero.png";
import FeatImg from "../../assets/images/feature_1.png";
import exampleJson from "../../json/example.json";
export default function Hero() {
  return (
    <div className="container-xl">
      <div
        className="w-full bg-center bg-cover h-auto"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="grid grid-rows-2 sm:grid-rows-1 pl-10">
          <div className="row-span-1 w-1/2">
            <div className="text-slate-200 py-14">
              <h3 className=" text-base uppercase tracking-widest">
                posted on <span className="font-semibold">startup</span>
              </h3>
              <h1 className="text-5xl font-semibold py-5">
                Step-by-step guide to choosing great font pairs
              </h1>
              <p className="pb-5">
                By : <span className="text-yellow-400">James West</span> | May
                23, 2022
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <button className="bg-yellow-300 px-10 py-3 my-28 font-bold">
              Read More >
            </button>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-slate-700 text-lg font-bold pb-10">
              Feature Post
            </h1>
            <div className="w-full h-auto pl-5">
              <img src={FeatImg} alt="feature Image" />
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h1 className="text-slate-700  text-lg font-bold pb-10">
                All Post
              </h1>
              <a href="#">View All</a>
            </div>
            <div className="pl-5">
              {exampleJson.posts.map((item, i) => {
                return (
                  <div key={i} className="p-4 hover:bg-pink-200">
                    <p className="text-slate-400">
                      By {item.author} | {item.date}
                    </p>
                    <h3 className="font-bold">{item.desc}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 bg-slate-200">
        <div className="grid grid-cols-2 gap-8 my-5">
          <div className="pr-3 mr-14">
            <div className="tracking-widest pb-4">
              <h2 className="font-semibold">About us</h2>
            </div>
            <h3 className="font-bold text-4xl pb-4">
              We are community of content writers who share their learnings
            </h3>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              similique quam, eaque ratione temporibus odio unde repudiandae
              officia culpa officiis.
            </p>
          </div>
          <div className="pr-3 mr-14">
            <div className="tracking-widest pb-4">
              <h2 className="font-semibold">Our Mission</h2>
            </div>
            <h3 className="font-bold text-3xl pb-4">
              Creating valuable content for creatives all around the world
            </h3>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellat, numquam reprehenderit esse quaerat odio voluptatum et
              perspiciatis natus eaque vero dolorum sequi quasi, officiis magnam
              eligendi eum, nihil pariatur rem.
            </p>
          </div>
        </div>
        <a href="#" className="text-purple-700 font-bold">
          Read More >
        </a>
      </div>
      <div className="container">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold">Choose A Category</h1>
        </div>
        <div className="div grid grid-cols-4 gap-4">
          {exampleJson.category.map((item, i) => {
            return (
              <div key={i} className="flex justify-center">
                <div className="w-60 border-slate-700">
                  <div className="w-12 bg-pink-200 p-3 rounded-md">
                    <img src={item.img} alt="icon_1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
