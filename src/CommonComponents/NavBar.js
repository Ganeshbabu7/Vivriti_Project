import React from "react";

// Image Import :
import Basket from "../Assets/Basket.png";

function NavBar({ setSearch }) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center pt-5">
        <h1>
          <span className="text-[#F70B9E] text-[30px] font-bold">M</span>
          <span className="text-[#333333] text-[30px] font-bold">oBoo</span>
          <span className="text-[#F70B9E] text-[30px] font-bold">M</span>
        </h1>
        <ol className="flex flex-row items-center">
          <li>
            <input
              className="border-2 rounded-lg h-[3.5em] w-[50em] px-5 mr-10"
              placeholder="What do you want to buy today?"
              type="search"
              name="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
          </li>
          <li className="text-[#6D7482] pr-10">Store</li>
          <li className="text-[#6D7482] pr-10">Account</li>
          <li className="text-[#6D7482] pr-10">Wish List</li>
          <li className="text-[#6D7482] pr-2">Basket</li>
          <li>
            <img src={Basket} alt="" className="w-[1.5em]"></img>
          </li>
        </ol>
      </div>
      <div className="flex items-center h-[7em] rounded-[0.75em] bg-gradient-to-r from-gray-800 to-red-500 text-[#FFFFFF] my-5 pl-10">
        <div className="flex flex-col">
          <h1 className="text-[20px] mb-2">Lorem</h1>
          <p className="text-[#CDD1D7]">
            Slash Sales begin in june. Get up to 80% Discount on all products{" "}
            <span className="font-bold text-[#FFFFFF]">Read More</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
