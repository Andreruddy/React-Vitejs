import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import arrow_1 from "@/assets/images/icons/arrow_1.svg";
import arrow_2 from "@/assets/images/icons/arrow_2.svg";
import exampleJson from "@/json/example.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Carousel({ img }) {
  return (
    <div className="flex justify-between">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {exampleJson.authors.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div>
                <div className="mt-9 flex">
                  <img
                    src={item.profpict}
                    className="h-14 w-14 rounded-full mr-4"
                    alt=""
                  />
                  <h3 className="font-bold">{item.name}</h3>
                </div>
                <p>{item.address}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
