import Button from "@/components/common/Button";
import Cols from "@/components/common/Cols";
import Navbar from "@/layout/Navbar";
import React from "react";
import post_1 from "@/assets/images/post-1.png";
import exampleJson from "@/json/example.json";
import AllPost from "@/components/AllPost";
import Category from "@/components/Category";
import Join from "@/components/Join";
import Footer from "@/layout/Footer";
export default function index() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-slate-200">
        <Cols className="px-8 py-24 gap-12">
          <div className="col-span-6">
            <h3 className="uppercase font-semibold tracking-widest pb-4">
              Featured post
            </h3>
            <h2 className="text-3xl font-bold pt-5 pb-4">
              Step-by-step guide to choosing great font pairs
            </h2>
            <p className="text-slate-600 pb-4">By John Doe | May 23, 2022</p>
            <p className="text-slate-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <Button variant="warning" className="px-12 py-4 mt-8">
              Read More >
            </Button>
          </div>
          <div className="col-span-6 flex justify-end">
            <img
              src={post_1}
              className="w-[515px] h-[359px]"
              alt="men wearing suites jas"
            />
          </div>
        </Cols>
      </div>
      <Cols className="mt-12">
        <div className="col-span-12">
          <h1 className="font-bold text-4xl">All Post</h1>
          <div className="border-b-4 my-4" />
        </div>
      </Cols>
      {exampleJson.all_post.map((item, i) => {
        return (
          <AllPost
            key={i}
            img={item.img}
            heading={item.themes}
            desc={item.desc}
            text={item.text}
          />
        );
      })}

      <div className="container">
        <h1 className="font-bold text-4xl pb-12">All Category</h1>
      </div>
      <Cols className="mb-32">
        {exampleJson.category.map((item, i) => {
          let dd = i < 4 ? "mr-3" : "";
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
      <Join />
      <Footer />
    </>
  );
}
