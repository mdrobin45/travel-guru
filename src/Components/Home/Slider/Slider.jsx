import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "./SliderCard/SliderCard";

const Slider = ({ bgImage }) => {
   const [tour, setTour] = useState([]);

   // Fetch tour
   useEffect(() => {
      fetch("/public/tour.json")
         .then((res) => res.json())
         .then((data) => setTour(data));
   }, []);
   return (
      <>
         <Swiper
            effect="fade"
            slidesPerView={2}
            navigation={true}
            pagination={{
               clickable: true,
            }}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}>
            {tour.map((item) => (
               <SwiperSlide key={item.id}>
                  <SliderCard bgImage={bgImage} tourDetail={item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
};

export default Slider;
