import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import UserIcon from "../icons/UserIcon";
import TextInput from "./TextInput";
import "../style/SignUpComp.css";
import { useFormik } from "formik";
import * as yup from "yup";

const SignUpComp = () => {
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
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    validationSchema: yup.object().shape({
      first_name: yup.string().required("First Name is required"),
      middle_name: yup.string().required("Middle Name is required"),
      last_name: yup.string().required("Last Name is required"),
    }),
    onSubmit: () => {
      navigate("/sign-up");
    },
  });
  return (
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
            Sign Up :
            <span className="text-gradient font-semibold ml-1 inline-block">
              01 / 02
            </span>
          </span>
          <form onSubmit={handleSubmit}>
            <TextInput
              id={"first_name"}
              name={"first_name"}
              placeHolder={"First Name ..."}
              type={"text"}
              Icon={UserIcon}
              value={values.first_name}
              onChange={handleChange}
              error={errors.first_name && touched.first_name ? true : false}
              errorText={errors.first_name}
            />
            <TextInput
              id={"middle_name"}
              name={"middle_name"}
              placeHolder={"Middle Name ..."}
              type={"text"}
              Icon={UserIcon}
              value={values.middle_name}
              onChange={handleChange}
              error={errors.middle_name && touched.middle_name ? true : false}
              errorText={errors.middle_name}
            />
            <TextInput
              id={"last_name"}
              name={"last_name"}
              placeHolder={"Last name ..."}
              type={"text"}
              Icon={UserIcon}
              value={values.last_name}
              onChange={handleChange}
              error={errors.last_name && touched.last_name ? true : false}
              errorText={errors.last_name}
            />
            <button
              type="submit"
              className="font-semibold text-sm mt-6 flex justify-center items-center bg-dark  text-white hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-blue-300 hover:text-white w-full py-[18px] lg:py-3 xl:py-[18px] px-5 rounded-2xl login-sumbit-btn"
            >
              Next
              <ArrowRightIcon />
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
                <img src={item.icon} alt={item.alt} className="mx-auto mb-1" />
                <span className="text-[#03081F] font-semibold">
                  {item.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignUpComp;
