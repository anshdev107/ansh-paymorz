import { useState } from "react";

const ZERO_KEYCODE = 48;
const NINE_KEYCODE = 57;

const useOTP = ({ autoFocus, value, onChange, OTPLength }: any) => {
  const [activeInput, setActiveInput] = useState(autoFocus ? 0 : -1);

  const getOtpValue = () => (value ? value.toString().split("") : []);

  const handleOtpChange = (otp: any) => {
    let otpValue = otp.join("");
    onChange(otpValue);
  };

  const focusInput = (input: any) => {
    const nextActiveInput = Math.max(Math.min(OTPLength - 1, input), 0);
    setActiveInput(nextActiveInput);
  };

  const focusInputByDirection = (direction = "next") => {
    focusInput(direction === "next" ? activeInput + 1 : activeInput - 1);
  };

  const changeActiveInputValue = ([nextValue]: any) => {
    const otp = getOtpValue();
    otp[activeInput] = nextValue;
    handleOtpChange(otp);
  };

  const handleOnPaste = (e: any) => {
    e.preventDefault();
    const otp = getOtpValue();

    const clipboardData = e.clipboardData
      .getData("text/plain")
      .slice(0, OTPLength - activeInput)
      .split("");
    //   process.env.NODE_ENV === "test"
    //     ? data.slice(0, OTPLength - activeInput).split("")
    //     : e.clipboardData
    //         .getData("text/plain")
    //         .slice(0, OTPLength - activeInput)
    //         .split("");

    for (let pos = 0; pos < OTPLength; ++pos) {
      if (pos >= activeInput && clipboardData.length > 0) {
        otp[pos] = clipboardData.shift();
      }
    }

    let filteredOtpValue = [otp.length];
    let validCharIndex = 0;
    for (let charIndex = 0; charIndex < otp.length; ++charIndex) {
      if (isValidateChar(otp[charIndex])) {
        filteredOtpValue[validCharIndex] = otp[charIndex];
        validCharIndex++;
      }
    }

    handleOtpChange(filteredOtpValue);
  };

  const isValidateChar = (char: any) => {
    return !(
      char.charCodeAt(0) > NINE_KEYCODE || char.charCodeAt(0) < ZERO_KEYCODE
    );
  };

  const handleOnChange = (e: any) => {
    if (isValidateChar(e.target.value)) {
      changeActiveInputValue(e.target.value);
      focusInputByDirection("next");
    }
  };

  const handleOnKeyDown = (e: any) => {
    switch (e.key) {
      case "Backspace":
        e.preventDefault();
        changeActiveInputValue("");
        focusInputByDirection("prev");
        break;
      case "Delete":
        e.preventDefault();
        changeActiveInputValue("");
        break;
      case "ArrowLeft":
        e.preventDefault();
        focusInputByDirection("prev");
        break;
      case "ArrowRight":
        e.preventDefault();
        focusInputByDirection("next");
        break;
      default:
        break;
    }
  };

  const handelOnInput = (e: any) => {
    if (e.target.value.length > 1) {
      e.preventDefault();
      focusInputByDirection("next");
    }
  };

  const onInputFocus = (index: any, event: any) => {
    setActiveInput(index);
    event.target.select();
  };

  return {
    activeInput,
    getOtpValue,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
  };
};

export default useOTP;
