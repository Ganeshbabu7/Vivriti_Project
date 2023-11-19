import React from "react";

// Image Import :
import Social from "../Assets/Social.png";
import WeAccept from "../Assets/WeAccept.png";
import Platform from "../Assets/Platform.png";

function Footer() {
  return (
    <div className="bg-[#F9FAFB] flex flex-row justify-between py-10">
      <div className="flex flex-col ml-10">
        <div className="flex flex-row">
          <ol className="flex flex-col ">
            <li className="uppercase font-semibold">Company Info</li>
            <li className="text-[#6D7482] py-1 font-semibold">About</li>
            <li className="text-[#6D7482] py-1 font-semibold">
              Social Responsibility
            </li>
            <li className="text-[#6D7482] py-1 font-semibold">Affiliate</li>
            <li className="text-[#6D7482] py-1 font-semibold">
              Fashion Blogger
            </li>
          </ol>
          <ol className="flex flex-col px-[7em]">
            <li className="uppercase font-semibold">Help & Support</li>
            <li className="text-[#6D7482] py-1 font-semibold">Shipping Info</li>
            <li className="text-[#6D7482] py-1 font-semibold">Returns</li>
            <li className="text-[#6D7482] py-1 font-semibold">How to Order</li>
            <li className="text-[#6D7482] py-1 font-semibold">How to Track</li>
            <li className="text-[#6D7482] py-1 font-semibold">Size Chart</li>
          </ol>
          <ol className="flex flex-col">
            <li className="uppercase font-semibold">Customer Care</li>
            <li className="text-[#6D7482] py-1 font-semibold">Contact Us</li>
            <li className="text-[#6D7482] py-1 font-semibold">Payment</li>
            <li className="text-[#6D7482] py-1 font-semibold">Bonous Point</li>
            <li className="text-[#6D7482] py-1 font-semibold">Notices</li>
          </ol>
        </div>
        <div className="text-[#6D7482] py-1 pt-20">
          2010-2022 All Rights Reserved
        </div>
        <div className="flex flex-col pt-5">
          <ol className="flex flex-row">
            <li className="text-[#6D7482] py-1 underline border-r-2 pr-2 cursor-pointer">
              Privacy Center
            </li>
            <li className="text-[#6D7482] py-1 underline border-r-2 px-2 cursor-pointer">
              Privacy & Cookie Policy
            </li>
            <li className="text-[#6D7482] py-1 underline border-r-2 px-2 cursor-pointer">
              Manage Cookies
            </li>
          </ol>
          <ol className="flex flex-row">
            <li className="text-[#6D7482] py-1 underline border-r-2 pr-2 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="text-[#6D7482] py-1 underline border-r-2 px-2 cursor-pointer">
              Copyright Notice
            </li>
            <li className="text-[#6D7482] py-1 underline px-2 cursor-pointer">Imprint</li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col mr-10">
        <div className="flex flex-row justify-between pb-8">
          <div className="uppercase font-semibold">
            SOCIALS
            <div className="flex flex-row">
              <img src={Social} alt="" className="w-[15em] pt-2"></img>
              {/* <i className="fa-brands fa-facebook text-4xl" ></i>
              <i className="fa-brands fa-twitter text-4xl bg-[#1E3050]"></i> */}
            </div>
          </div>
          <div className="uppercase font-semibold">
            PLATFORMS
            <img src={Platform} alt="" className="w-[5em] pt-2"></img>
          </div>
        </div>
        <div>
          <span className="uppercase font-semibold">SIGN UP</span> <br></br>
          <div className="flex justify-between py-2">
            <input
              className="h-[3em] w-[27.5em] pl-4 border-2 rounded-sm"
              placeholder="Your email"
              type="email"
              name="email"
            ></input>
            <button className="uppercase w-[8em] h-[3em] bg-slate-900 text-[#FFFFFF] rounded-sm">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-[#6D7482]">
            By clicking the SUBSCRIBE button, you are agreeing to our{" "}
            <span className="text-[#1453CF] underline hover:cursor-pointer">
              Privacy & Cookie Policy
            </span>
          </p>
        </div>
        <div className="uppercase font-semibold pt-10">
          we accept
          <div>
            <img src={WeAccept} alt="" className="w-[27.5em] pt-4"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
