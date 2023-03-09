import React from "react";
import Cols from "@/components/common/Cols";
import { Swiper, SwiperSlide } from "swiper/react";
import exampleJson from "@/json/example.json";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Carousel from "../common/Carousel";

export default function Testimoni() {
  return (
    <Cols className="bg-[#FBF6EA] my-32">
      <div className="col-span-6 p-32">
        <div className="border-r-2">
          <h4 className="uppercase font-semibold tracking-widest">
            testimonial
          </h4>
          <h3 className="font-bold text-3xl py-4">
            What people say about our blog
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
      <div className="col-span-6 p-32">
        <div>
          <h3 className="font-bold text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        </div>
        <Carousel />
      </div>
    </Cols>
  );
}
