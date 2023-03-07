import React from "react";
import exampleJson from "@/json/example.json";
import StepByStep from "@/components/StepByStep";
import Posts from "@/components/Posts";
import Cols from "@/components/common/Cols";
import FeatImg from "@/assets/images/feature_2.png";
import Logo1 from "@/assets/images/Logo_1.png";
import Logo2 from "@/assets/images/Logo_2.png";
import Logo3 from "@/assets/images/Logo_3.png";
import Logo4 from "@/assets/images/Logo_4.png";
import Logo5 from "@/assets/images/Logo_5.png";
import Logo6 from "@/assets/images/Logo_6.png";
import Category from "@/components/Category";
import Authors from "@/components/Authors";
import Footer from "@/components/Footer";
import Grid from "@/components/common/Grid";
export default function Hero() {
  return (
    <div className="container-xl">
      <StepByStep />
      <Posts />
      <Cols className="bg-[#F4F0F8] p-24">
        <div className="col-span-6 w-[515] pr-16">
          <div>
            <h2 className="uppercase font-semibold tracking-widest pb-4">
              about us
            </h2>
            <h3 className="text-4xl font-bold pb-4 text-justify">
              We are a community of content writers who share their learnings
            </h3>
            <p className="text-slate-400 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="font-bold text-lg text-purple-800">
              Learn More >
            </a>
          </div>
        </div>
        <div className="col-span-6">
          <div>
            <h2 className="uppercase font-semibold tracking-widest pb-4">
              our mission
            </h2>
            <h3 className="text-2xl font-bold pb-4">
              Creating valuable content for creatives all around the world
            </h3>
            <p className="text-slate-400 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Cols>
      <div className="pt-32">
        <h1 className="text-4xl font-bold text-center">Choose A Category</h1>
      </div>
      <Cols>
        {exampleJson.category.map((item, i) => {
          let dd = i < 4 ? "mr-3" : "";
          console.log(dd);
          return (
            <Category
              className={`${dd}`}
              key={i}
              img={item.img}
              type={item.type}
              desc={item.desc}
            />
          );
        })}
      </Cols>
      <Cols className="pt-32">
        <div className="col-span-8">
          <img src={FeatImg} className="w-[949px] relative" alt="feture 2" />
        </div>
        <div className="col-span-6">
          <div className="content absolute">
            <h2 className="uppercase font-semibold tracking-widest pb-4">
              why we started
            </h2>
          </div>
        </div>
      </Cols>
      <div className="pt-32">
        <h1 className="text-4xl font-bold text-center">List of Authors</h1>
      </div>
      <Cols>
        {exampleJson.authors.map((item, i) => {
          let dd = i < 4 ? "mr-3" : "";
          return (
            <Authors
              className={`${dd}`}
              key={i}
              img={item.profpict}
              name={item.name}
              company={item.job}
            />
          );
        })}
      </Cols>
      <Cols>
        <div className="col-span-12 self-center text-center w-[414px]">
          <h1 className="text-3xl font-bold">
            Join our team to be a apart of our story
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </Cols>
      <Cols>
        <div className="col-span-2">
          <img src={Logo6} className="w-32" alt="" />
        </div>
        <div className="col-span-2">
          <img src={Logo1} className="w-32" alt="" />
        </div>
        <div className="col-span-2">
          <img src={Logo2} className="w-32" alt="" />
        </div>
        <div className="col-span-2">
          <img src={Logo3} alt="" className="w-32" />
        </div>
        <div className="col-span-2">
          <img src={Logo4} alt="" className="w-32" />
        </div>
        <div className="col-span-2">
          <img src={Logo5} alt="" className="w-32" />
        </div>
      </Cols>
      <Footer />
    </div>
  );
}
