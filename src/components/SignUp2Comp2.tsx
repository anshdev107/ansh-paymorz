import { Link, useNavigate } from "react-router-dom";
import CheveronLeftIcon from "../icons/CheveronLeftIcon";
import EmailIcon from "../icons/EmailIcon";
import PasswordIcon from "../icons/PasswordIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import PhoneIon from "../icons/PhoneIon";
import TextInput from "./TextInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
const SignUpComp2 = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [conformPassType, setConformPassType] = useState("password");

  const navigate = useNavigate();
  const socialLogin = [
    {
      name: "Google",
      icon: "./images/google-logo.svg",
      alt: "google logo",
    },
    {
      name: "Apple",
      icon: "./images/apple-logo.png",
      alt: "apple logo",
    },
  ];
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      phone_number: "",
      email: "",
      password: "",
      conform_password: "",
    },
    validationSchema: yup.object().shape({
      phone_number: yup
        .string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 10 digits")
        .max(10, "Must be exactly 10 digits")
        .required("Phone number is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      conform_password: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: () => {
      navigate("/individual");
    },
  });
  return (
    <>
      <div className="h-auto min-h-screen">
        <div className="flex items-center justify-between w-full flex-col gap-10 md:gap-0 md:flex-row px-10 py-8">
          <div className="logo">
            <img src="./images/logo.svg" alt="logo" />
          </div>
          <div className="">
            Already Have An Account ?{" "}
            <span
              onClick={() => {
                navigate("/login");
              }}
              className="text-gradient underline cursor-pointer"
            >
              Log In
            </span>
          </div>
        </div>

        <div className="md:max-w-[400px] 2xl:max-w-[500px] px-5 md:mx-auto w-full items-center min-h-[50vh] my-8 2xl:my-16 flex justify-center">
          <div className="w-full flex flex-col gap-5">
            <span className="block text-center mb-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center mr-4 w-[18px] h-[18px] rounded-full bg-[#DFE0E2]"
              >
                <CheveronLeftIcon />
              </Link>
              Sign Up :
              <span className="text-gradient font-semibold ml-1 inline-block">
                02 / 02
              </span>
            </span>
            <form onSubmit={handleSubmit}>
              <TextInput
                Icon={PhoneIon}
                id={"phone_number"}
                name={"phone_number"}
                type={"number"}
                placeHolder={"Enter Your Phone..."}
                isPhone
                value={values.phone_number}
                onChange={handleChange}
                error={
                  errors.phone_number && touched.phone_number ? true : false
                }
                errorText={errors.phone_number}
              />
              <TextInput
                Icon={EmailIcon}
                id={"email"}
                name={"email"}
                type={"email"}
                value={values.email}
                placeHolder={"Enter Your Mail..."}
                onChange={handleChange}
                error={errors.email && touched.email ? true : false}
                errorText={errors.email}
              />
              <TextInput
                Icon={PasswordIcon}
                id={"password"}
                name={"password"}
                type={passwordType}
                value={values.password}
                placeHolder={"Enter Password..."}
                onChange={handleChange}
                error={errors.password && touched.password ? true : false}
                errorText={errors.password}
                handlePasswordShow={() => {
                  passwordType === "password"
                    ? setPasswordType("text")
                    : setPasswordType("password");
                }}
                isPassword
              />
              <TextInput
                Icon={PasswordIcon}
                id={"conform_password"}
                name={"conform_password"}
                type={conformPassType}
                value={values.conform_password}
                placeHolder={"Confirm Password..."}
                onChange={handleChange}
                error={
                  errors.conform_password && touched.conform_password
                    ? true
                    : false
                }
                errorText={errors.conform_password}
                handlePasswordShow={() => {
                  conformPassType === "password"
                    ? setConformPassType("text")
                    : setConformPassType("password");
                }}
                isPassword
              />

              <button
                type="submit"
                className="font-semibold text-sm mt-6 flex justify-center items-center bg-dark  text-white hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-blue-300 hover:text-white w-full py-[18px] lg:py-3 xl:py-[18px] px-5 rounded-2xl login-sumbit-btn"
              >
                Sign Up <ArrowRightIcon />
              </button>
            </form>
            <p className="font-light text-[10px] text-center max-w-[300px] mx-auto tracking-wider italic text-[#787D81]">
              By clicking Continue, you agree to Paymorz's
              <a href="#" className="underline text-primary font-semibold">
                Terms & Conditions{" "}
              </a>
              <span>&</span>
              <a href="#" className="underline text-primary font-semibold">
                {" "}
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="md:max-w-[400px] md:block md:mx-auto w-full flex justify-center flex-col items-center pb-10 pt-10">
          <span className="mb-4  text-[#CDCED1] before:min-w-20 md:before:min-w-32 before:rounded-full before:h-[1px] text-nowrap before:bg-[#DFE0E2] before:inline-block after:min-w-20 md:after:min-w-32 after:rounded-full after:h-[1px] after:bg-[#DFE0E2] after:inline-block md:after:ml-2 md:before:mr-2 flex items-center">
            Or Continue With
          </span>
          <div className="flex flex-nowrap md:flex-wrap justify-center -mx-[7px]">
            {socialLogin.map((item, index) => (
              <div key={index} className="w-2/4 md:w-1/3 px-[7px]">
                <button className="border border-[#DFE0E2] p-[10px] bg-white md:px-2 w-full rounded-[18px] text-center">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="mx-auto mb-1"
                  />
                  <span className="text-[#03081F] font-semibold">
                    {item.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComp2;
