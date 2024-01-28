import React from "react";

const Topweek = ({ topweek }) => {
  return (
    <>
      <section className="py-5 mt-5">
        <div className="container mx-auto">
          <div className="mostreadmain grid grid-cols-12 gap-5">
            <div className="left col-span-12">
              <div className="most-header flex justify-between  items-center">
                <div className="text">
                  <h2 className="heading-text mr-2">top of the week</h2>
                </div>
                <div className="borderimg hidden lg:block">
                  <img src="topweekborder.png"></img>
                </div>
                <div className="view ml-2">
                  <span className="text-sm uppercase font-semibold text-titlescolor">
                    View all posts{" "}
                    <i className="bx bx-right-arrow-alt text-maincolor"></i>
                  </span>
                </div>
              </div>
              <div className="mostreadcard-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-6">
                {topweek?.data?.map((val) => (
                  <div className="mostreadcard shadow-sm border">
                    <img
                      className="w-full h-64 object-cover"
                      src="https://res.cloudinary.com/ddurduw4z/image/upload/v1700981800/pexels-carsten-kohler-17855161_ng6pxb.jpg"
                    ></img>
                    <div className="all-content p-4">
                      <div className="cat-cheap">
                        <span className="bg-gray-100 text-titlescolor text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                          Dark
                        </span>
                      </div>
                      <h2 className="sub-heading-text mt-2">
                        how to create a cozy scent in any room using only ...
                      </h2>

                      <span className="text-bodytextcolor font-light text-xs mt-1">
                        Jul 06, 2021 -{" "}
                        <span className="text-before">Marvin McKinney</span>
                      </span>
                      <div className="view mt-4">
                        <span className="text-xs cursor-pointer uppercase font-semibold text-titlescolor hover:text-maincolor">
                          Read More
                          <i className="bx bx-right-arrow-alt text-maincolor"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topweek;
