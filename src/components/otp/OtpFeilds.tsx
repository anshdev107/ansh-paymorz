import { useEffect, useRef } from "react";
const inputDefaultStyles = {
  width: 40,
  height: 50,
  textAlign: "center",
  border: "double 2px transparent",
  borderRadius: "10px",
  backgroundImage:
    "linear-gradient(white, white), linear-gradient(77.11deg, #F6DEC6 -5.32%, #E872D4 48.06%, #C190D9 69.25%, #A2DCFE 94.8%)",
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
};
const OtpFeilds = ({
  focus,
  autoFocus,
  value,
  onInputFocus,
  index,
  secure,
  inputStyles,
  ...rest
}: any) => {
  const input: any = useRef(null);
  const componentMounted = useRef(false);
  useEffect(() => {
    if (autoFocus && focus) {
      input.current.focus();
    }
  }, []);

  useEffect(() => {
    if (componentMounted.current && focus) {
      input.current.focus();
    }
    componentMounted.current = true;
  }, [focus]);

  const handelInputFocus = (event: any) => onInputFocus(index, event);
  let inputType = "text";

  return (
    <input
      style={{ ...inputDefaultStyles, ...inputStyles }}
      type={inputType}
      maxLength={1}
      className="text-gradient w-5 focus:ring-0 focus:outline-none text-center text-xl sm:text-2xl font-bold"
      ref={input}
      onFocus={handelInputFocus}
      value={value || ""}
      {...rest}
    />
  );
};
export default OtpFeilds;
