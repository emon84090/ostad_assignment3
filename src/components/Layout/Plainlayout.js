import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import axios from "axios";

const getCat = async () => {
  try {
    const { data } = await axios.get(`${process.env.BASE_URL}/api/category`);
    return data;
  } catch (err) {
    console.log("something went wrong");
  }
};

// const getSocial = async () => {
//   try {
//     const { data } = await axios.get(`${process.env.BASE_URL}/api/category`);
//     return data;
//   } catch (err) {
//     console.log("something went wrong");
//   }
// };

const Plainlayout = async ({ children }) => {
  const data = await getCat();

  return (
    <>
      <Header category={data}></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Plainlayout;
