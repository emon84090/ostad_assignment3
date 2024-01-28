import Link from "next/link";
import React from "react";

const Recentstories = async ({ recent }) => {
  return (
    <>
      <section className="recent mt-5 py-5 ">
        <div className="container mx-auto">
          <div className="heading lg:flex-center">
            <div className="text ">
              <h2 className="heading-text">Latest stories</h2>
            </div>
            <div className="borderimage hidden lg:block">
              <img src="top border.png"></img>
            </div>
          </div>
          <div className="recent-content grid grid-cols-12 gap-7 mt-5">
            <div className="left-content col-span-12 lg:col-span-8">
              {recent?.data?.map((val) => {
                return (
                  <>
                    <div className="grand mt-4 grid grid-cols-12 border  shadow-md rounded-md ">
                      <div className="image-left col-span-12 md:col-span-4">
                        <img
                          className="h-72 w-full object-cover"
                          src="https://res.cloudinary.com/ddurduw4z/image/upload/v1700981800/pexels-carsten-kohler-17855161_ng6pxb.jpg"
                        ></img>
                      </div>
                      <div className="all-content col-span-12 md:col-span-8 p-7">
                        <h2 className="sub-heading-text">{val?.title}</h2>
                        <p className="text-sm text-bodytextcolor capitalize font-spartan mt-3">
                          {val?.short_des}
                        </p>
                        <div className="extra mt-5 flex-center">
                          <div className="line w-full h-px bg-gray-300"></div>
                          <Link href={`/details?id=${val?.id}`}>
                            <div className="arrow w-10 h-9 ml-3 rounded-full flex-center bg-gradient-to-r from-[#D93D59] shadow-md cursor-pointer to-[#d93d599c] text-white">
                              <i className="bx bx-chevron-right text-xl"></i>
                            </div>
                          </Link>
                        </div>

                        <span className="text-bodytextcolor font-light text-xs mt-3">
                          Jul 06, 2021 -{" "}
                          <span className="text-before">Marvin McKinney</span>
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="right-content col-span-12 lg:col-span-4">
              {recent?.data?.map(() => {
                return (
                  <>
                    <div className="right-card mt-2">
                      <img
                        className="h-40 mt-3 w-full object-cover rounded-sm shadow-md"
                        src="https://res.cloudinary.com/ddurduw4z/image/upload/v1700981800/pexels-carsten-kohler-17855161_ng6pxb.jpg"
                      ></img>
                      <span className="text-bodytextcolor font-normal text-md mt-4 block uppercase">
                        Jul 06, 2021 - <span className="">#Garden</span>
                      </span>
                      <h2 className="text-xl capitalize font-semibold mt-3 border-t-2 border-gray-300 pt-1">
                        fresh home photo session. see how we love our pets
                      </h2>
                    </div>
                  </>
                );
              })}

              <button className="bg-gradient-to-r from-[#D93D59] shadow-md cursor-pointer mt-5 w-full h-11 rounded-3xl uppercase to-[#d93d599c] text-white">
                view more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recentstories;
