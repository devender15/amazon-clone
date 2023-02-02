import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Amazon_logo.svg.webp";

const Login = () => {
  // title
  document.title = "Amazon - Sign In";

  return (
    <>
      <header>
        <div className="w-full px-1 py-4 flex justify-center items-center">
          <Link to="/" className="cursor-pointer w-[8rem]">
            <img src={Logo} alt="amazon" className="object-cover" />
          </Link>
        </div>
      </header>

      <div className="w-[25%] mx-auto mt-5 border rounded-[4px] border-black font-amazonMain px-6 py-8">
        <p className="text-black text-[28px] w-fit">Sign in</p>

        <div className="mt-5 flex flex-col w-full">
          <label htmlFor="email" className="text-black font-bold text-[13px]">
            Email or mobile phone number
          </label>

          <input
            type="text"
            id="email"
            className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] shadow-[0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
          />
        </div>

        <div className="w-full">
          <button className="text-[#111] leading-[29px] outline-none border-none bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] rounded-[2px] h-[29px] w-full mt-2 text-[13px] flex justify-center items-center hover:from-[#f5d78e] hover:to-[#eeb933]">
            Continue
          </button>
        </div>

        <div className="mt-5">
          <p className="text-[12px] leading-[1.5] text-[#111]">
            {" "}
            By continuing, you agree to Amazon's{" "}
            <span>
              <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">
                Conditions of Use
              </a>
            </span>{" "}
            and{" "}
            <span>
              <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">
                {" "}
                Privacy Notice{" "}
              </a>
            </span>{" "}
            .
          </p>
        </div>
      </div>




    </>
  );
};

export default Login;
