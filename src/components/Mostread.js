import React from "react";

const Mostread = ({ mostread, category }) => {
  return (
    <>
      <section className="py-5 mt-5">
        <div className="container mx-auto px-2">
          <div className="mostreadmain grid grid-cols-12 gap-5">
            <div className="left col-span-12 md:col-span-9">
              <div className="most-header flex justify-between  items-center">
                <div className="text">
                  <h2 className="heading-text">Popular posts</h2>
                </div>
                <div className="borderimg hidden lg:block">
                  <img src="border.png"></img>
                </div>
                <div className="view">
                  <span className="text-sm uppercase font-semibold text-titlescolor">
                    View all posts{" "}
                    <i className="bx bx-right-arrow-alt text-maincolor"></i>
                  </span>
                </div>
              </div>
              <div className="mostreadcard-main grid grid-cols-1 md:grid-cols-2  mt-5 gap-6">
                {mostread?.data?.map((val) => (
                  <div className="mostreadcard shadow-sm border">
                    <img
                      className="w-full h-64 object-cover"
                      src="https://res.cloudinary.com/ddurduw4z/image/upload/v1700981800/pexels-carsten-kohler-17855161_ng6pxb.jpg"
                    ></img>
                    <div className=" p-4">
                      <h2 className="sub-heading-text mt-2">
                        how to create a cozy scent in any room using only ...
                      </h2>
                      <div className="extra mt-2 flex-center">
                        <div className="line w-full h-px bg-gray-300"></div>
                        <div className="arrow w-10 h-9 ml-3 rounded-full flex-center  shadow-md cursor-pointer bg-[#EFF2FB]  text-bodytextcolor">
                          <i className="bx bx-chevron-right text-xl"></i>
                        </div>
                      </div>
                      <span className="text-bodytextcolor font-light text-xs mt-1">
                        Jul 06, 2021 -{" "}
                        <span className="text-before">Marvin McKinney</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right  col-span-12 md:col-span-3">
              <div className="most-cats flex items-center">
                <div className="text">
                  <h2 className="heading-text">Categories</h2>
                </div>
                <div className="borderimg ml-2">
                  <img src="catborder.png"></img>
                </div>
              </div>
              <div className="all-cat-item mt-5">
                {category?.data?.map((val) => {
                  return (
                    <>
                      <div className="cat-item border-b pb-3 mt-5">
                        <p className="text-titlescolor font-semibold uppercase">
                          {val?.name}
                          <span className="text-bodytextcolor ">
                            ({val?.post?.length})
                          </span>
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mostread;
