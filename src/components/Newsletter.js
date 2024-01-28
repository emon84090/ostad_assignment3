import Button from "@/utils/Button";
import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter py-28">
        <div className="container mx-auto">
          <div className="newxletter-box max-w-5xl w-full  justify-center  flex flex-col">
            <div className="text mr-5">
              <h2 className="text-3xl font-semibold">
                Stay up to date!<br></br> Sunscribe!
              </h2>
            </div>
            <div className="input mr-5 w-[50%] mt-3">
              <input
                className="w-full placeholder:capitalize placeholder:pb-2 bg-transparent h-12 outline-none p-1 border-b-2 border-bodytextcolor"
                placeholder="your email"
              ></input>
            </div>
            <div className="button mt-5">
              <Button children={`button`}></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
