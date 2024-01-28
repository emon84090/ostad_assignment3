"use client";
import React, { useState } from "react";
import Sidenav from "../Sidenav";

const Adminlayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidenav open={open} setOpen={setOpen}></Sidenav>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="w-full h-full fixed top-0 left-0 bg-black bottom-0 opacity-50"
        ></div>
      )}

      <div className={`p-4 sm:ml-64`}>{children}</div>
    </>
  );
};

export default Adminlayout;
