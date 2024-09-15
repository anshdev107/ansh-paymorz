import { useMemo } from "react";
import OtpFeilds from "./OtpFeilds";
import useOTP from "../../hooks/useOtp";

const OtpInput = ({ value = "", onChange, OTPLength, inputClassName }: any) => {
  const {
    activeInput,
    getOtpValue,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
  } = useOTP({
    value,
    onChange,
    OTPLength,
  });

  const renderInputs = useMemo(() => {
    const otp = getOtpValue();
    const inputs = [];

    for (let index = 0; index < OTPLength; index++) {
      inputs.push(
        <OtpFeilds
          className={inputClassName}
          key={index}
          focus={activeInput === index}
          value={otp[index]}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          onInput={handelOnInput}
          onPaste={handleOnPaste}
          onInputFocus={onInputFocus}
          index={index}
        />
      );
    }

    return inputs;
  }, [
    getOtpValue,
    OTPLength,
    inputClassName,
    activeInput,
    handleOnChange,
    handleOnKeyDown,
    handelOnInput,
    handleOnPaste,
    onInputFocus,
  ]);

  return (
    <div className={`flex space-x-1 mt-8 justify-center`}>{renderInputs}</div>
  );
};
export default OtpInput;
