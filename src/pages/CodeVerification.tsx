import { useState } from "react";
import ArrowRightFilledIcon from "../icons/ArrowRightFilledIcon";
import OtpInput from "../components/otp/OtpInputs";

const CodeVerification = () => {
  const [OTP, setOTP] = useState("");
  return (
    <div className="flex flex-wrap min-h-screen justify-center items-center py-[30px] px-[30px] lg:px-[60px]">
      <div className="max-w-[400px] mx-auto w-full">
        <h3 className="text-base text-dark font-semibold text-center tracking-tighter">
          Enter OTP code for verification!
        </h3>
        <p className="text-[10px] tracking-wider text-[#787D81] text-center leading-4 mt-3 mb-4">
          We have sent an 8-numbers OTP code <br /> to +91*******001
        </p>
        <div>
          <OtpInput value={OTP} onChange={setOTP} OTPLength={8} />
        </div>
        <span className="block text-center mt-4">
          The Code will be active in:{" "}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,rgba(193,144,217,1)_0%,_rgba(232,114,212,1)_100%)]">
            02 Min : 60 Sec
          </span>
        </span>
        <button
          type="submit"
          className="font-semibold text-white mt-7 flex justify-center items-center w-full py-[18px] px-5 rounded-2xl bg-black  text-white-700 hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-blue-300 hover:text-white hover:border-4 border-transparent hover:border-white border-4 hover:border-white-500 transition-all duration-500 ease-in-out shadow-lg hover:shadow-[0_2px_10px_0_rgba(255,105,180,0.6)] "
        >
          Verify
          <ArrowRightFilledIcon />
        </button>

        <p className="text-center mt-24">
          <span className="relative after:absolute after:top-[85%] after:w-full after:inset-x-0 after:h-[1px] after:bg-primary">
            Didn't get the OTP code?
          </span>{" "}
          <a href="" className="text-gradient underline">
            Tap Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default CodeVerification;
