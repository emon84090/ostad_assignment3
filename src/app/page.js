import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Plainlayout from "@/components/Layout/Plainlayout";
import Mostread from "@/components/Mostread";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Recentstories from "@/components/Recentstories";
import Topweek from "@/components/Topweek";
import axios from "axios";

import React from "react";

const getCat = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/category?details=true"
    );
    return data;
  } catch (err) {
    console.log("something went wrong");
  }
};
const getData = async () => {
  try {
    const slider = await axios.get(
      "http://localhost:3000/api/blog?type=slider"
    );
    const latest = await axios.get(
      "http://localhost:3000/api/blog?type=latest"
    );
    const popular = await axios.get(
      "http://localhost:3000/api/blog?type=popular"
    );

    return {
      slider: slider.data,
      latest: latest.data,
      popular: popular.data,
    };
  } catch (err) {
    console.log(err?.message);
  }
};

const page = async () => {
  const data = await getData();

  const category = await getCat();
  return (
    <>
      <Plainlayout>
        <Banner banner={data?.slider}></Banner>
        <Recentstories recent={data?.latest}></Recentstories>
        <Mostread mostread={data?.popular} category={category}></Mostread>
        <Newsletter></Newsletter>
      </Plainlayout>
    </>
  );
};

export default page;
