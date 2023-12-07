import React from "react";
import "./style.css";
const MegaMenu: React.FC = () => {
  return (
    <div className="p-4">
      <div className="group inline-block">
        <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
          <span className="pr-1 font-semibold flex-1">categories</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
        >
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
            Womens’ & Girls’ Fashion
          </li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
            Health & Beauty
          </li>
          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">Watches, Bags, Jewellery</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
            >
              <li className="px-3 py-1 hover:bg-gray-100">kids bags</li>
              <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                  <span className="pr-1 flex-1">Women’s Bag</span>
                  <span className="mr-auto">
                    <svg
                      className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                >
                  <li className="px-3 py-1 hover:bg-gray-100">
                    Top-Handle Bags
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100">Tote bags</li>
                </ul>
              </li>
              <li className="px-3 py-1 hover:bg-gray-100">Men’s Watches</li>
              <li className="px-3 py-1 hover:bg-gray-100">Women’s Watches</li>
            </ul>
          </li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
            Men's & Boys' Fashion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
