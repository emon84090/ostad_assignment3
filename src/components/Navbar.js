"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const menuitem1 = [
    {
      text: "recent post",
      path: "/",
    },
    {
      text: "popular",
      path: "/",
    },
    {
      text: "most read",
      path: "/",
    },
  ];
  const menuitem2 = [
    {
      text: "hot stuff",
      path: "/",
    },
    {
      text: "top to the week",
      path: "/",
    },
    {
      text: "must read",
      path: "/",
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div
        className={`sidebar pt-5 lg:hidden transition-all  w-[320px] h-full fixed top-0 ${
          menu ? "left-0" : "-left-96"
        } bg-white  shadow-md z-50`}
      >
        <div className="logo p-5 flex-center">
          <img src={`logo.png`}></img>
        </div>
        <div className="border">
          <img src="top border.png"></img>
        </div>
        <div className="flex mb-4 ml-1 mt-3">
          <button
            className={`px-4 py-2 flex-center  text-base border-b-2 ${
              activeTab === "tab1"
                ? "border-maincolor text-maincolor"
                : "border-transparent text-titlescolor"
            } focus:outline-none active`}
            onClick={() => openTab("tab1")}
          >
            <i className="bx bx-list-ul mr-1"></i> Menu
          </button>
          <button
            className={`px-4 py-2 text-base  border-b-2 ${
              activeTab === "tab2"
                ? "border-maincolor text-maincolor"
                : "border-transparent text-titlescolor"
            } focus:outline-none `}
            onClick={() => openTab("tab2")}
          >
            <i className="bx bxs-category mr-0.5"></i> Categories
          </button>
        </div>

        <div
          id="tab1"
          className={`tab-content ${activeTab === "tab1" ? "" : "hidden"}`}
        >
          <div className="menu mt-10">
            <ul>
              {menuitem1.concat(menuitem2).map((val) => {
                return (
                  <>
                    <li className="block leading-[46px]  border-b last:border-none">
                      <Link
                        className="uppercase block font-spartan font-normal text-titlescolor hover:bg-gray-200 px-3"
                        href={`${val?.path}`}
                      >
                        {val?.text}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          id="tab2"
          className={`tab-content ${activeTab === "tab2" ? "" : "hidden"}`}
        >
          <div className="category mt-10">
            <ul>
              {menuitem1.map((val) => {
                return (
                  <>
                    <li className="block leading-[46px]  border-b last:border-none">
                      <Link
                        className="uppercase block font-spartan font-normal text-titlescolor hover:bg-gray-200 px-3"
                        href={`${val?.path}`}
                      >
                        {val?.text}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div
        onClick={() => setMenu(false)}
        className={`overlay ${
          menu ? "block" : "hidden"
        } fixed lg:hidden top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-950 z-40 opacity-60`}
      ></div>
      <div
        className={`full sticky top-0 z-30 bg-white ${
          scrollY > 15 && "shadow-md"
        }`}
      >
        <div className="container mx-auto ">
          <div className="topbar hidden lg:flex  justify-between items-center py-2">
            <div className="left flex items-center">
              <span className="text-bodytextcolor  text-sm">
                <i className="bx bx-category"></i>
                <span className="ml-1.5">Categories</span>
              </span>
            </div>
            <div className="right flex items-center">
              <span className="text-bodytextcolor text-sm">
                <i className="bx bx-envelope"></i>
                <span className="ml-1.5">info@gmail.com</span>
              </span>
            </div>
          </div>
          <div className="border hidden lg:block">
            <img src="/top border.png"></img>
          </div>
          <div
            className={`header mt-3 flex   justify-between items-center ${
              scrollY < 15 && "lg:border-b-2"
            } border-titlescolor py-5`}
          >
            <div className="leftmenu hidden  lg:block">
              <ul>
                {menuitem1.map((val) => {
                  return (
                    <>
                      <li className="inline-block first:ml-0  ml-10">
                        <Link
                          className="uppercase  font-spartan font-semibold text-titlescolor"
                          href={`${val?.path}`}
                        >
                          {val?.text}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            {menu ? (
              <>
                <div
                  className="close lg:hidden "
                  onClick={() => setMenu(false)}
                >
                  <i className="bx bx-x text-2xl cursor-pointer"></i>
                </div>
              </>
            ) : (
              <>
                <div
                  className="navmenu lg:hidden "
                  onClick={() => setMenu(true)}
                >
                  <i className="bx bx-menu-alt-left text-2xl cursor-pointer"></i>
                </div>
              </>
            )}

            <div className="logo ">
              <img src="/logo.png"></img>
            </div>
            <div className="social lg:hidden">
              <i className="bx bxl-facebook-circle"></i>
            </div>
            <div className="rightmenu hidden lg:block">
              <ul>
                {menuitem2.map((val) => {
                  return (
                    <>
                      <li className="inline-block last:mr-0  ml-10">
                        <Link
                          className="uppercase font-spartan font-semibold text-titlescolor"
                          href={`${val?.path}`}
                        >
                          {val?.text}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
