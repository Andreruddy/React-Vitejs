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
import Footer from "@/layout/Footer";
import Testimoni from "@/components/Testimoni";
import Join from "@/components/Join";
import Button from "@/components/common/Button";
import Navbar from "@/layout/Navbar";
export default function Hero() {
  return (
    <div className="container-xl">
      <Navbar />
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
      <div className="mt-32 mb-20">
        <h1 className="text-4xl font-bold text-center">Choose A Category</h1>
      </div>
      <Cols className="mb-32">
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
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
        <Cols className="gap-6 w-100vw">
          <div className="col-span-8 col-start-1 relative z-0 row-start-1">
            <img src={FeatImg} alt="feature" />
          </div>
          <div class="col-span-6 col-end-13 relative z-10 self-end  row-start-1">
            <div className=" bg-white p-20">
              <h3 className="uppercase font-semibold tracking-widest pb-4">
                why we started
              </h3>
              <h2 className="text-4xl font-bold pb-4">
                It started out as a simple idea and evolved into our passion
              </h2>
              <p className="text-slate-400 pb-11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <Button variant="warning" className="px-6 py-3">
                Discovery our story >
              </Button>
            </div>
          </div>
        </Cols>
      </div>
      <div className="mt-32 mb-20">
        <h1 className="text-4xl font-bold text-center">List of Authors</h1>
      </div>
      <Cols className="mb-20">
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
      <Join />
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
      <Testimoni />
      <Footer />
    </div>
  );
}
