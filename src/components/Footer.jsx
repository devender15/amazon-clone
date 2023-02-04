import React from 'react';

const Footer = () => {
  return (
    <div className="mt-[30px] w-[20%] mx-auto pb-[30px]">
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
  )
}

export default Footer;
