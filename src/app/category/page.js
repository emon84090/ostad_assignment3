import Plainlayout from "@/components/Layout/Plainlayout";

import Button from "@/utils/Button";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const getCatdata = async (catname) => {
  try {
    const category = await axios.get(
      `${process.env.BASE_URL}/api/category?name=${catname}&details=true`
    );
    return {
      category: category.data,
    };
  } catch (err) {
    console.log(err);
  }
};

const page = async (props) => {
  const data = await getCatdata(props.searchParams.name);
  const posts = data["category"]["data"][0]["post"];
  return (
    <>
      <Plainlayout>
        <div className="container mx-auto mt-5">
          <h2 className="text-4xl font-semibold capitalize">
            Category :{" "}
            <span className="text-maincolor">{props.searchParams.name}</span>
          </h2>
          {posts.length === 0 && (
            <p className="text-center text-3xl font-semibold">No Posts Found</p>
          )}
          <div className="all-cat py-20">
            <div className="all-cat-post grid grid-cols-3 gap-10">
              {posts.map((val) => {
                return (
                  <>
                    <div className="mostreadcard shadow-sm border">
                      <img
                        className="w-full h-64 object-cover"
                        src="https://res.cloudinary.com/ddurduw4z/image/upload/v1700981800/pexels-carsten-kohler-17855161_ng6pxb.jpg"
                      ></img>
                      <div className=" p-4">
                        <h2 className="sub-heading-text mt-2">{val?.title}</h2>
                        <div className="extra mt-2 flex-center">
                          <div className="line w-full h-px bg-gray-300"></div>
                          <Link href={`/details?id=${val?.id}`}>
                            <div className="arrow w-10 h-9 ml-3 rounded-full flex-center  shadow-md cursor-pointer bg-[#EFF2FB]  text-bodytextcolor">
                              <i className="bx bx-chevron-right text-xl"></i>
                            </div>
                          </Link>
                        </div>
                        <span className="text-bodytextcolor font-light text-xs mt-1">
                          Jul 06, 2021 -{" "}
                          <span className="text-before">Marvin McKinney</span>
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Plainlayout>
    </>
  );
};

export default page;
