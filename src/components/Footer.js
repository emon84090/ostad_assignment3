import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer mt-5 py-5 ">
        <div className="container mx-auto">
          <div className="border mb-14">
            <img src="top border.png"></img>
          </div>
          <div className="footer-all grid grid-cols-12 gap-5 border-b-2 border-titlescolor pb-9">
            <div className="footer-about col-span-12 md:col-span-4 lg:col-span-4">
              <div className="footer-head">
                <h3 className="mb-3 text-titlescolor font-spartan font-normal text-2xl border-b pb-1">
                  About
                </h3>
              </div>
              <p className="text-base text-bodytextcolor">
                We have much planned for the future, working with great clients
                and continued software development. If you'd like to join our
                team, then we'd also love to hear from you.
              </p>
            </div>
            <div className="footer-cat col-span-12 md:col-span-4 lg:col-span-5">
              <div className="footer-head">
                <h3 className="mb-3 pb-1 text-titlescolor font-spartan font-normal text-2xl border-b pt-1">
                  Categories
                </h3>
              </div>
              <div className="footer-cat flex flex-col justify-between md:flex-row pr-10">
                <div className="f-cat-item">
                  <ul>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="f-cat-item">
                  <ul>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="f-cat-item">
                  <ul>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className=" text-bodytextcolor uppercase">
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-social col-span-12 md:col-span-4 lg:col-span-3">
              <div className="footer-head">
                <h3 className="mb-3 text-titlescolor font-spartan font-normal text-2xl border-b pb-1">
                  Follow Us
                </h3>
              </div>
              <div className="social-item flex ">
                <div className="social ">
                  <div className="social-list mr-4 bg-[#EFF2FB] w-12 h-12 flex-center rounded-full text-xl">
                    <i className="bx bxl-facebook"></i>
                  </div>
                  <p className="text-center mt-1 text-sm">2,1 k+</p>
                </div>
                <div className="social ">
                  <div className="social-list mr-4 bg-[#EFF2FB] w-12 h-12 flex-center rounded-full text-xl">
                    <i className="bx bxl-twitter"></i>
                  </div>
                  <p className="text-center mt-1 text-sm">2,1 k+</p>
                </div>
                <div className="social ">
                  <div className="social-list mr-4 bg-[#EFF2FB] w-12 h-12 flex-center rounded-full text-xl">
                    <i className="bx bxl-youtube"></i>
                  </div>
                  <p className="text-center mt-1 text-sm">2,1 k+</p>
                </div>
                <div className="social ">
                  <div className="social-list mr-4 bg-[#EFF2FB] w-12 h-12 flex-center rounded-full text-xl">
                    <i className="bx bxl-instagram"></i>
                  </div>
                  <p className="text-center mt-1 text-sm">2,1 k+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom flex justify-between mt-3">
            <p className="text-bodytextcolor">
              © Benchy 2021. All rights reserved
            </p>
            <p className="text-bodytextcolor">
              <span>Privacy Policy</span>-<span>Terms & Conditions</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
