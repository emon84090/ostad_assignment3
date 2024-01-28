"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const Banner = ({ banner }) => {
  return (
    <>
      <div className="banner mt-5">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          slidesPerView={2}
          spaceBetween={30}
          className="mySwiper "
        >
          {banner?.data?.map((val) => {
            return (
              <>
                <SwiperSlide
                  className={`!h-96 bg-[linear-gradient(to_right_bottom,#ffffff80,#000000),url('https://res.cloudinary.com/ddurduw4z/image/upload/v1700940372/Umbrella_SRGB_1_rlqxlf.png')] text-white p-5   object-cover`}
                >
                  <div className="content !flex justify-end items-center flex-col h-full">
                    <span className="font-bold bg-white mb-2 text-titlescolor px-2 py-0.5 text-sm">
                      {val?.category?.name}
                    </span>
                    <h2 className="text-3xl text-center capitalize mt-2 font-spartan">
                      {val?.title}
                    </h2>
                    <span className="text-white font-light text-sm mt-3">
                      Jul 06, 2021 -{" "}
                      <span className="text-before">Marvin McKinney</span>
                    </span>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
