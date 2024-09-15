import { useNavigate } from "react-router-dom";
import IndividualIcon from "../icons/IndividualIcon";
import BusinessIcon from "../icons/BusinessIcon";
import CopyPageIcon from "../icons/CopyPageIcon";
import BagIcon from "../icons/BagIcon";
import CreditCardIcon from "../icons/CreditCardIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import TextInput from "./TextInput";
import * as yup from "yup";
import { useFormik } from "formik";
const Individual = () => {
  const navigate = useNavigate();
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  const aadharRegex = /^\d{12}$/;
  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        individual_tab: "individual",
        pan_number: "",
        aadhar_number: "",
        company_name: "",
      },
      validationSchema: yup.object().shape({
        pan_number: yup
          .string()
          .matches(panRegex, "Invalid PAN Number format")
          .required("Pan Number is required"),
        aadhar_number: yup
          .string()
          .matches(aadharRegex, "Invalid Aadhar Number format")
          .required("Aadhar Number is required"),
        company_name: yup.string().when("individual_tab", {
          is: "business",
          then: () => yup.string().required("Company Name is required"),
          otherwise: () => yup.string(),
        }),
      }),
      onSubmit: () => {
        navigate("/code-verification");
      },
    });
  const handleAccountTypeChange = (type: any) => {
    setFieldValue("individual_tab", type);
  };
  return (
    <>
      <div className="w-full h-auto min-h-screen flex justify-center items-center">
        <div className="max-w-[400px] mx-auto" id="sign-c">
          <h3 className="text-base text-dark font-semibold text-center tracking-tighter">
            Enter following details to complete your KYC verification!
          </h3>
          <p className="text-[10px] tracking-wider text-[#787D81] text-center leading-4 mt-3 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <h4 className="text-center text-[#A3A6A9]">Choose Account Type</h4>
          <div className="flex justify-center mt-4 mb-9 space-x-8 cursor-pointer">
            <a
              onClick={() => handleAccountTypeChange("individual")}
              className={`rounded-full text-center`}
            >
              <div
                className={`p-5 rounded-full inline-flex ${
                  values.individual_tab === "individual"
                    ? "bg-[linear-gradient(77.11deg,_rgba(246,222,198,0.2)_-5.32%,_rgba(232,114,212,0.2)_48.06%,_rgba(193,144,217,0.2)_69.25%,_rgba(162,220,254,0.2)_94.8%)]"
                    : "bg-[#F0F1F2]"
                }  `}
              >
                <IndividualIcon
                  isGradient={values.individual_tab === "individual"}
                />
              </div>
              <span
                className={` uppercase font-bold tracking-wide text-[9px] block mt-[10px] ${
                  values.individual_tab === "individual"
                    ? "text-gradient"
                    : "text-[#B6B8BA]"
                }`}
              >
                Individual
              </span>
            </a>
            <a
              onClick={() => handleAccountTypeChange("business")}
              className={`rounded-full text-center cursor-pointer`}
            >
              <div
                className={`p-5 rounded-full inline-flex   ${
                  values.individual_tab === "business"
                    ? "bg-[linear-gradient(77.11deg,_rgba(246,222,198,0.2)_-5.32%,_rgba(232,114,212,0.2)_48.06%,_rgba(193,144,217,0.2)_69.25%,_rgba(162,220,254,0.2)_94.8%)]"
                    : "bg-[#F0F1F2]"
                } `}
              >
                <BusinessIcon
                  isGradient={values.individual_tab === "business"}
                />
              </div>
              <span
                className={` uppercase font-bold tracking-wide text-[9px] block mt-[10px] ${
                  values.individual_tab === "business"
                    ? "text-gradient"
                    : "text-[#B6B8BA]"
                }`}
              >
                Business
              </span>
            </a>
          </div>

          {values.individual_tab === "business" ? (
            <form onSubmit={handleSubmit}>
              <TextInput
                Icon={CopyPageIcon}
                id={"pan_number"}
                name={"pan_number"}
                type={"text"}
                placeHolder={"Company PAN ..."}
                value={values.pan_number}
                onChange={handleChange}
                error={errors.pan_number && touched.pan_number ? true : false}
                errorText={errors.pan_number}
              />
              <TextInput
                Icon={BagIcon}
                id={"company_name"}
                name={"company_name"}
                type={"text"}
                placeHolder={"Company Name ..."}
                value={values.company_name}
                onChange={handleChange}
                error={
                  errors.company_name && touched.company_name ? true : false
                }
                errorText={errors.company_name}
              />
              <TextInput
                Icon={CreditCardIcon}
                id={"aadhar_number"}
                name={"aadhar_number"}
                type={"text"}
                placeHolder={"Aadhar Card ..."}
                value={values.aadhar_number}
                onChange={handleChange}
                error={
                  errors.aadhar_number && touched.aadhar_number ? true : false
                }
                errorText={errors.aadhar_number}
              />
              <button
                type="submit"
                className="font-semibold text-sm mt-6 flex justify-center items-center bg-dark  text-white hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-blue-300 hover:text-white w-full py-[18px] lg:py-3 xl:py-[18px] px-5 rounded-2xl login-sumbit-btn"
              >
                Confirm <ArrowRightIcon />
              </button>{" "}
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextInput
                Icon={CopyPageIcon}
                id={"pan_number"}
                name={"pan_number"}
                type={"text"}
                placeHolder={"PAN Number ..."}
                value={values.pan_number}
                onChange={handleChange}
                error={errors.pan_number && touched.pan_number ? true : false}
                errorText={errors.pan_number}
              />
              <TextInput
                Icon={CreditCardIcon}
                id={"aadhar_number"}
                name={"aadhar_number"}
                type={"text"}
                placeHolder={"Aadhar Card ..."}
                value={values.aadhar_number}
                onChange={handleChange}
                error={
                  errors.aadhar_number && touched.aadhar_number ? true : false
                }
                errorText={errors.aadhar_number}
              />
              <button
                type="submit"
                className="font-semibold text-sm mt-6 flex justify-center items-center bg-dark  text-white hover:bg-gradient-to-r hover:from-pink-300 hover:via-purple-300 hover:to-blue-300 hover:text-white w-full py-[18px] lg:py-3 xl:py-[18px] px-5 rounded-2xl login-sumbit-btn"
              >
                Next <ArrowRightIcon />
              </button>
            </form>
          )}

          <p className="font-light text-[10px] text-center max-w-[300px] mx-auto mt-4 tracking-wider italic text-[#787D81]">
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
    </>
  );
};

export default Individual;
