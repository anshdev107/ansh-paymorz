import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../style/SignUp.css";

const imageSources = [
  "./images/dot1.png",
  "./images/dot2.png",
  "./images/dot.png",
  "./images/dot.png", // Added fourth image
  "./images/dot.png", // Added fifth image
];

// Fixed positions for each dot
const initialPositions = [
  { x: 450, y: 250 }, // Position for dot 1
  { x: 150, y: 600 }, // Position for dot 2
  { x: 250, y: 800 }, // Position for dot 3
  { x: 823, y: 150 }, // Position for dot 4
  { x: 500, y: 400 }, // Position for dot 5 (newly added)
];

// Sizes for each dot
const sizes = [
  { width: "80px", height: "80px" }, // Size for dot 1
  { width: "80px", height: "80px" }, // Size for dot 2
  { width: "10px", height: "10px" }, // Size for dot 3
  { width: "20px", height: "20px" }, // Size for dot 4
  { width: "10px", height: "10px" }, // Size for dot 5 (newly added)
];

const ZigzagDots = () => {
  const dotsRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const imageContainer = document.getElementById("image-container");

    if (imageContainer) {
      dotsRef.current.forEach((dot, index) => {
        const storedPosition = localStorage.getItem(`dot-${index}-position`);
        const pos = storedPosition
          ? JSON.parse(storedPosition)
          : initialPositions[index];

        // Set fixed initial positions within the image container
        gsap.set(dot, { x: pos.x, y: pos.y });

        // Animate in a zigzag pattern based on fixed positions
        gsap.to(dot, {
          duration: 5,
          x: pos.x + (index % 2 === 0 ? 50 : -50),
          y: pos.y + (index % 2 === 0 ? 50 : -50),
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.5,
          onUpdate: () => {
            const { x, y } = dot?.style;
            localStorage.setItem(
              `dot-${index}-position`,
              JSON.stringify({ x, y })
            );
          },
        });
      });
    }

    return () => {
      // Clear localStorage when component unmounts
      dotsRef.current.forEach((_, index) =>
        localStorage.removeItem(`dot-${index}-position`)
      );
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(imageSources.length)].map((_, index) => {
        const size = sizes[index]; // Get the size for the current dot
        return (
          <img
            key={index}
            ref={(el) => (dotsRef.current[index] = el!)}
            src={imageSources[index]}
            alt={`dot ${index}`}
            className="absolute object-cover"
            style={{ width: size.width, height: size.height }} // Apply the size
          />
        );
      })}
    </div>
  );
};

const SignUp = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-col lg:flex-row h-auto">
      <div className="w-full lg:w-1/2 flex flex-col justify-between h-auto order-2 lg:order-1">
        {children}
      </div>
      <div
        id="image-container"
        className="w-full lg:w-1/2 bg-[url('./images/planeImage.png')] h-auto bg-cover bg-center relative order-1 lg:order-2 hidden lg:block"
      >
        <div className="absolute inset-0 p-4 lg:p-16 overflow-hidden">
          <div className="max-w-[436px] w-full">
            <h5 className="text-lg text-gradient mb-5">
              Welcome To <b className="italic text-gradient">Paymorz</b>
            </h5>
            <h2 className="mb-5 text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/67">
              Payments Have Never Been{" "}
              <span className="text-gradient inline-block">Easier!</span>
            </h2>
            <p className="leading-6 text-[#BBBBBF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <ZigzagDots />
          </div>
          <div className="absolute card-img-main">
            <img
              src="images/ring5.png"
              className="absolute zoom-in-out-ring1"
              alt=""
            />
            <img
              src="images/card.png"
              className="relative z-20 card-img"
              alt=""
            />
            <img
              src="images/ring5.png"
              className="absolute zoom-in-out-img"
              alt=""
            />
          </div>
          <div className="hover-section absolute zoom-in-out-round">
            <img src="images/hoverr.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
