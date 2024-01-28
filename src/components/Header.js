"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = ({ category }) => {
  const router = useRouter();

  const [inputdata, setInput] = useState("");

  const searchFun = () => {
    router.push(`/search?search=${inputdata}`);
  };
  return (
    <>
      <div className="header-all bg-black text-white">
        <div className="topbar bg-maincolor">
          <div className="container mx-auto">
            <div className="topbar-all flex justify-between items-center">
              <div className="social">
                <div class="flex  gap-2">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button class=" p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                      <svg
                        class="w-5 h-5 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div className="phone">
                <div class="flex items-center space-x-2">
                  <svg
                    class="h-6 w-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 8h2m3-6a8 8 0 018 8c0 4.418-3.582 8-8 8a8 8 0 01-8-8 8 8 0 018-8zm4 0a2 2 0 100 4 2 2 0 000-4z"
                    ></path>
                  </svg>

                  <span class="text-white">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Navbar border-b border-gray-600 py-3">
          <div className="container mx-auto">
            <div className="navbar-all flex justify-between items-center">
              <div className="logo">
                <Link href="/" className="text-2xl">
                  Sesh Alo
                </Link>
              </div>
              <div className="search max-w-xl w-full">
                <div class="flex items-center">
                  <label for="simple-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                      placeholder="Search branch name..."
                      required
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    class="p-2.5 ms-2 text-sm font-medium text-white bg-maincolor rounded-lg  focus:ring-4 focus:outline-none "
                    onClick={searchFun}
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                </div>
              </div>
              <div className="action">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="category">
          <div className="cat-all text-center">
            <ul>
              {category?.data?.map((val) => {
                return (
                  <>
                    <li className="inline-block mx-2 leading-[55px]">
                      <Link
                        className="capitalize block"
                        href={`category?name=${val?.name}`}
                      >
                        {val?.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
