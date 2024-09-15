import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const TextInput = ({
  name,
  id,
  type,
  placeHolder,
  Icon,
  isPhone,
  value,
  error,
  errorText,
  isPassword,
  onChange,
  handlePasswordShow,
}: {
  name: string;
  id: string;
  type: string;
  placeHolder: string;
  Icon: any;
  isPhone?: boolean;
  value?: any;
  error?: boolean;
  isPassword?: boolean;
  errorText?: string;
  onChange: (e: any) => void;
  handlePasswordShow?: () => void;
}) => {
  return (
    <div className="pt-2">
      <div className="relative">
        <label
          htmlFor={name}
          className=" py-4 px-5 flex items-center border border-[#DFE0E2] rounded-2xl"
        >
          <span className="after:w-[1px] after:rounded-full after:h-[13px] after:bg-[#DFE0E2] after:inline-block after:ml-3 after:mr-5 inline-flex items-center">
            <Icon />
          </span>
        </label>{" "}
        {isPassword && (
          <div
            className="absolute right-8 top-4 cursor-pointer"
            onClick={handlePasswordShow}
          >
            {type === "password" ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </div>
        )}
        {isPhone && (
          <b className="font-semibold mr-4 inline-block absolute top-3.5 left-16">
            +91
          </b>
        )}
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeHolder}
          className={`absolute top-0 ${
            isPhone ? "left-24" : "left-16"
          } h-full w-auto focus:outline-none placeholder:italic bg-transparent placeholder:text-[#787D81] placeholder:font-light`}
          autoComplete="off"
          value={value}
          onChange={onChange}
        />
      </div>
      {error && (
        <p className="text-red-500 pt-2 text-sm lg:text-xs xl:text-sm">
          {errorText}
        </p>
      )}
    </div>
  );
};

export default TextInput;
