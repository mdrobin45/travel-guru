import bg from "../../assets/images/Rectangle1.png";

const Home = () => {
   return (
      <div
         style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url(${bg})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
         }}
         className="h-screen px-28 flex flex-col items-start justify-center">
         <div className="flex items-center justify-between w-full gap-10">
            <div className=" w-2/5">
               <h2 className="text-6xl text-white">Hello</h2>
            </div>
            <div className=" w-3/5">
               <h2 className="text-6xl text-right text-white">Slider</h2>
            </div>
         </div>
      </div>
   );
};

export default Home;
