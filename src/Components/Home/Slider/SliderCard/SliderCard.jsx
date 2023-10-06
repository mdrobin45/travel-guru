const SliderCard = ({ tourDetail, bgImage }) => {
   const { name, thumbnail } = tourDetail;
   return (
      <>
         <div
            onClick={() => {
               bgImage(tourDetail);
            }}
            className="relative  grid h-[26rem] w-[17rem] flex-col items-end justify-start overflow-hidden shadow-md border-2 rounded-xl bg-white bg-clip-border text-center text-gray-700 ">
            <div
               style={{
                  backgroundImage: `url("${thumbnail}")`,
               }}
               className={`absolute inset-0 m-0 w-full overflow-hidden rounded-none bg-transparent bg-clip-border bg-center text-gray-700 shadow-none`}>
               <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/100 via-black/30"></div>
            </div>
            <div className="relative pl-4">
               <h2 className="mb-6 font-bebas text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                  {name}
               </h2>
            </div>
         </div>
      </>
   );
};

export default SliderCard;
