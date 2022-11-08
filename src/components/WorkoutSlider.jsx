import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export const WorkoutSlider = ({ workouts }) => {
    const { programs } = workouts;
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={32}
            navigation={true}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
            modules={[Navigation]}
            className="workoutSlider"
        >
            {programs.map((item) => (
                <SwiperSlide
                    className="max-w-[320px] max-h-[320px] relative"
                    key={item.id}
                >
                    <img
                        className="w-full h-full object-cover"
                        src={item.image}
                        alt={item.name}
                    />
                    <div className="absolute left-[20px] bottom-[20px] h-[26px] flex items-center ">
                        <div className="rounded-lg text-white bg-primary-200 p-2 font-semibold">
                            {item.name}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
