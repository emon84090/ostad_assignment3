import Comments from "@/components/Comments";
import Plainlayout from "@/components/Layout/Plainlayout";
import Navbar from "@/components/Navbar";
import Button from "@/utils/Button";
import axios from "axios";
import Image from "next/image";

import React from "react";
import HtmlParser from "react-html-parser";

const getSingledata = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/api/blog/single?id=${id}`
    );
    console.log(data);
    return data?.data;
  } catch (err) {
    console.log(err);
  }
};

const getData = async () => {
  try {
    const recent = await axios.get(
      `${process.env.BASE_URL}/api/blog?type=popular`
    );
    const mostread = await axios.get(
      `${process.env.BASE_URL}/api/blog?type=latest`
    );
    const category = await axios.get(`${process.env.BASE_URL}/api/category`);
    return {
      category: category.data,
      recent: recent.data,
      mostread: mostread.data,
    };
  } catch (err) {
    console.log(err);
  }
};

const page = async (props) => {
  const data = await getSingledata(props.searchParams.id);
  console.log(data);
  const extradata = await getData();
  return (
    <>
      <Plainlayout>
        <section id="post">
          <div className="container mx-auto">
            <h1 className="heading-text mt-5">Post</h1>

            <div className="post-all grid grid-cols-12 gap-10">
              <div className="left col-span-8">
                <div className="root mt-3">
                  <span className="text-bodytextcolor">
                    Home <span className="!text-titlescolor">-</span> Travel{" "}
                    <span className="!text-titlescolor">-</span> A set of the
                    most necessary things on vacation
                  </span>
                </div>

                <div className="content-all">
                  <div className="post-image mt-5 border-b pb-5">
                    <Image
                      src={`https://res.cloudinary.com/ddurduw4z/image/upload/v1700981800/pexels-carsten-kohler-17855161_ng6pxb.jpg`}
                      width={500}
                      height={500}
                      className="w-full h-96 object-cover"
                    ></Image>
                    <span className="text-bodytextcolor block  font-light text-xs mt-2">
                      Jul 06, 2021 -{" "}
                      <span className="text-before">Marvin McKinney</span>
                    </span>
                  </div>
                  <h1 className="heading-text font-spartan mt-5 mb-8">
                    {data?.title}
                  </h1>
                  {HtmlParser(data?.description)}
                </div>
                <div className="add-comments grid grid-cols-2 gap-5 mt-10">
                  <div className="input ">
                    <input
                      placeholder="Your Name"
                      className="border-b-2 h-12 placeholder:font-spartan placeholder:p w-full border-titlescolor outline-none"
                      type="text"
                    ></input>
                  </div>
                  <div className="input ">
                    <input
                      placeholder="Your Email"
                      className="border-b-2 h-12 placeholder:font-spartan placeholder:p w-full border-titlescolor outline-none"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="input mt-9">
                  <textarea
                    placeholder="Enter Your Comment"
                    rows="6"
                    cols="30"
                    className="border-b-2 resize-none  placeholder:font-spartan placeholder:p w-full border-titlescolor outline-none"
                  ></textarea>
                </div>
                <div className="button mt-5">
                  <Button children={`Post Comment`}></Button>
                </div>

                <div className="comments">
                  <Comments></Comments>
                </div>
              </div>
              <div className="right col-span-3 mt-10">
                <div className="search flex items-end w-full">
                  <div className="input w-3/4">
                    <input
                      className="border-b-2 w-full border-titlescolor outline-none"
                      type="text"
                    ></input>
                  </div>
                  <div className="icon w-14 h-14 ml-3 rounded-full flex-center bg-gradient-to-r from-[#D93D59] shadow-md cursor-pointer to-[#d93d599c] text-white">
                    <i className="bx bx-search-alt-2"></i>
                  </div>
                </div>
                <div className="recent mt-10">
                  <h2 className="sub-heading-text">Recent Stories</h2>

                  {extradata?.recent?.data.map((val) => (
                    <div className="r-item mt-4">
                      <img
                        className="w-full h-56  object-cover"
                        src="https://res.cloudinary.com/ddurduw4z/image/upload/v1700981800/pexels-carsten-kohler-17855161_ng6pxb.jpg"
                      ></img>
                      <span className="text-bodytextcolor font-light text-xs mt-3">
                        Jul 06, 2021 - <span className="">Marvin McKinney</span>
                      </span>
                      <h2 className="text-xl pb-3 capitalize border-t text-titlescolor font-spartan mt-4">
                        fresh home photo session. see how we love our pets
                      </h2>
                    </div>
                  ))}
                </div>

                <div className="categories mt-5 py-5">
                  <h2 className="sub-heading-text">Categories</h2>

                  <div className="cat-item mt-8 ">
                    {extradata?.category?.data.map((val) => {
                      return (
                        <>
                          <span className="border py-1 px-2 uppercase text-sm m-2 inline-block">
                            Sports
                          </span>
                        </>
                      );
                    })}
                  </div>
                </div>

                <div className="s-social ">
                  <div className="">
                    <h3 className="mb-3 text-titlescolor font-spartan font-normal text-2xl border-b pb-1">
                      Follow Us
                    </h3>
                  </div>
                  <div className="social-item flex ">
                    <div className="social ">
                      <div className="social-list mr-4 bg-[#EFF2FB] w-12 h-12 flex-center rounded-full text-xl">
                        <i className="bx bxl-facebook"></i>
                      </div>
                      <p className="text-center mt-1 text-sm">2,1 k+</p>
                    </div>
                    <div className="social ">
                      <div className="social-list mr-4 bg-[#EFF2FB] w-12 h-12 flex-center rounded-full text-xl">
                        <i className="bx bxl-twitter"></i>
                      </div>
                      <p className="text-center mt-1 text-sm">2,1 k+</p>
                    </div>
                    <div className="social ">
                      <div className="social-list mr-4 bg-[#EFF2FB] w-12 h-12 flex-center rounded-full text-xl">
                        <i className="bx bxl-youtube"></i>
                      </div>
                      <p className="text-center mt-1 text-sm">2,1 k+</p>
                    </div>
                    <div className="social ">
                      <div className="social-list mr-4 bg-[#EFF2FB] w-12 h-12 flex-center rounded-full text-xl">
                        <i className="bx bxl-instagram"></i>
                      </div>
                      <p className="text-center mt-1 text-sm">2,1 k+</p>
                    </div>
                  </div>
                </div>

                <div className="popular mt-8 py-5">
                  <h2 className="sub-heading-text">Mostread Posts</h2>
                  {extradata?.mostread?.data.map((val) => (
                    <div className="post-item flex  items-center mt-10 border-b-2 pb-1">
                      <div className="left ">
                        <img
                          src="https://res.cloudinary.com/ddurduw4z/image/upload/v1700981800/pexels-carsten-kohler-17855161_ng6pxb.jpg"
                          className="w-40 h-20 object-cover"
                        ></img>
                      </div>
                      <div className="right">
                        <h3 className="text-lg ml-4 font-medium font-jost capitalize">
                          the best indoor plants to create comfort ...
                        </h3>
                        <span className="text-bodytextcolor flex items-center ml-4 font-light text-xs mt-3">
                          Jul 06
                          <p>
                            <span className="mx-1 text-2xl text-titlescolor">
                              -
                            </span>
                            <i className="bx bx-comment text-sm"></i>
                            <span className="text-sm ml-1">5</span>
                          </p>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Plainlayout>
    </>
  );
};

export default page;
