"use client";

import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactHtmlParser from "react-html-parser";
const Page = ({ placeholder }) => {
  const [cat, setCat] = useState();
  const [post, setPosts] = useState();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(() => {
    return {
      readonly: false,
      placeholder: placeholder || "Start typings...",
    };
  }, [placeholder]);

  const getCat = async () => {
    const { data } = await axios.get("http://localhost:3000/api/category");
    setCat(data);
  };

  const getPost = async () => {
    const { data } = await axios.get("http://localhost:3000/api/blog");
    setPosts(data);
  };

  useEffect(() => {
    getCat();
    getPost();
  }, []);

  const subFun = async (e) => {
    try {
      e.preventDefault();
      const cat = e.target.cat.value;
      const information = {
        title: "hello",
        short_des: "short_dis",
        description: content,
        keywords: "web design",
        image: "image",
        type: "topweek",
        userId: 1,
        cid: Number(cat),
      };
      console.log(information);
      const data = await axios.post(
        `http://localhost:3000/api/blog`,
        information
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="all py-4 min-h-screen">
        <div className="from max-w-5xl shadow-md rounded-xl mx-auto mt-10 bg-slate-200 p-10">
          <form onSubmit={subFun}>
            <select className="w-full h-12 mt-2 mb-4" name="cat">
              {cat?.data?.map((val) => (
                <option value={val?.id}>{val?.name}</option>
              ))}
            </select>

            <JoditEditor
              ref={editor}
              config={config}
              tabIndex={1}
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />
            <button
              type="submit"
              className="text-white mt-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Post
            </button>
          </form>
        </div>

        <div className="posts">
          {ReactHtmlParser(post?.data[0]?.description)}
        </div>
      </div>
    </>
  );
};

export default Page;
