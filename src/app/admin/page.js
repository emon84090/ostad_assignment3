import Adminlayout from "@/components/Layout/Adminlayout";
import Newslist from "@/components/Newslist";
import React from "react";

const page = () => {
  return (
    <>
      <Adminlayout>
        <div className="bloglist mt-2">
          <h1 className="py-4">All Blogs</h1>
          <Newslist></Newslist>
        </div>
      </Adminlayout>
    </>
  );
};

export default page;
