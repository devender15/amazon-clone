import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import countryArray from "../constants/Countries";

const Address = () => {
  const navigate = useNavigate();
  const countries = countryArray();
  const [details, setDetails] = useState({
    fname: "",
    add1: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleSubmit = () => {
    navigate("/verify");
  };

  return (
    <>
      <Header />

      <main className="w-[23%] mx-auto mt-2 border rounded-[4px] border-[#dad4d4] font-amazonMain px-6">
        <p className="text-black text-[18px] font-normal w-fit my-5">
          Enter the primary billing address registered on file{" "}
        </p>

        <form method="post" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full font-bold">
            <label htmlFor="fname" className="text-black font-bold text-[13px]">
              Full name
            </label>

            <input
              type="text"
              id="fname"
              value={details?.fname}
              onChange={(e) =>
                setDetails({ ...details, fname: e.target.value })
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
            <label htmlFor="add1" className="text-black font-bold text-[13px]">
              Address line 1
            </label>

            <input
              type="text"
              id="add1"
              value={details?.add1}
              onChange={(e) => setDetails({ ...details, add1: e.target.value })}
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
              required
            />
          </div>

          <div className="flex flex-col w-full font-bold my-3">
            <label htmlFor="city" className="text-black font-bold text-[13px]">
              City
            </label>

            <input
              type="text"
              id="city"
              value={details?.city}
              onChange={(e) => setDetails({ ...details, city: e.target.value })}
              className="mt-1 bg-[#fff] w-full h-[31px] py-[3px] px-[7px] leading-normal border rounded-[3px] outline-none border-[#949494] text-[#111] focus:border-[#e77600] focus:shadow-[0 0 3px 2px rgba(228,121,17,.5)] focus:shadow-[rgba(228,121,17,.5)]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5),0 1px 0 rgba(0,0,0,.07) inset",
              }}
              required
            />
          </div>

          <div className="flex flex-col w-full font-bold">
            <label htmlFor="state" className="text-black font-bold text-[13px]">
              State/Province/Region
            </label>

            <input
              type="text"
              id="state"
              value={details?.state}
              onChange={(e) =>
                setDetails({ ...details, state: e.target.value })
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
            <label htmlFor="zip" className="text-black font-bold text-[13px]">
              Zip
            </label>

            <input
              type="text"
              id="zip"
              maxLength="9"
              value={details?.zip}
              onChange={(e) => setDetails({ ...details, zip: e.target.value })}
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
              htmlFor="country"
              className="text-black font-bold text-[13px]"
            >
              Country
            </label>

            <select
              name="country"
              id="country"
              value={details?.country}
              onChange={(e) =>
                setDetails({ ...details, country: e.target.value })
              }
              className="w-full bg-[#fff] h-[32px] py-[5px] px-[7px] leading-normal border rounded-[3px] outline-0 text-[#111]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.5), 0 1px 0 rgba(0,0,0,.07) inset",
                borderColor: "#949494 #a6a6a6 #a6a6a6",
              }}
              required
            >
              <option value="--" disabled="">
                Select Country
              </option>
              {countries?.map((country, idx) => {
                return (
                  <option
                    key={idx}
                    value={country?.Code}
                    className="font-light font-amazonMain"
                  >
                    {country?.Name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col w-full font-bold my-3">
            <label htmlFor="phone" className="text-black font-bold text-[13px]">
              Phone number
            </label>

            <input
              type="text"
              id="phone"
              value={details?.phone}
              onChange={(e) =>
                setDetails({ ...details, phone: e.target.value })
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

export default Address;
