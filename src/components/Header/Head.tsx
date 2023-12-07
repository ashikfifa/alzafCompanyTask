import React from "react";
import downArrow from "../../svgs/downArrow.svg";
const Head = () => {
  return (
    <>
      <section className="bg-gray-100 text-gray-800 py-0.5 px-7">
        <div className="container flex justify-between items-center">
          <div className="left flex items-center">
            <i className="fa fa-phone mr-1"></i>
            <label className="mr-4 flex items-center text-xs font-normal cursor-pointer">
              {" "}
              Language &nbsp; <img src={downArrow} alt="down arrow" />{" "}
            </label>

            <label className="mr-4 text-xs font-normal"> Help Center</label>

            <label className="mr-4 text-xs font-normal">
              {" "}
              Helpline: 0964781656
            </label>
          </div>
          <div className="right flex items-center">
            <label className="mr-4 text-xs font-normal">Become a Seller</label>
            <label className="mr-4 text-xs font-normal">Order Track</label>
            <label className="mr-4 text-xs font-normal text-orange-500 cursor-pointer">
              {" "}
              Sign up / Login
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
