import { useState } from "react";
import "swiper/css";
import Slider from "../../Components/Home/Slider/Slider";

const Home = () => {
   const [bgImage, setBgImage] = useState("");
   const [tourName, setTourName] = useState("");
   const [tourDescription, setTourDescription] = useState("");

   // Slider click handler
   const sliderClickHandler = (tourDetail) => {
      const { name, image, description } = tourDetail;
      setBgImage(image);
      setTourName(name);

      const shortDes =
         description.length > 150
            ? description.slice(0, 150) + " ..."
            : description;
      setTourDescription(shortDes);
   };
   return (
      <div
         style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url(${bgImage})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
         }}
         className="h-screen pl-28 flex flex-col items-start justify-center">
         <div className="flex items-center justify-between w-full gap-10">
            <div className=" w-2/5">
               <h1 className="text-6xl font-bebas tracking-wider uppercase font-normal text-white">
                  {tourName}
               </h1>
               <p className="text-white my-4">{tourDescription}</p>
               <button
                  type="button"
                  className="text-white bg-primary hover:bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                  Booking
                  <svg
                     className="w-3.5 h-3.5 ml-2"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 14 10">
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                     />
                  </svg>
               </button>
            </div>
            <div className=" w-3/5">
               <Slider bgImage={sliderClickHandler} />
            </div>
         </div>
      </div>
   );
};

export default Home;
