import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export const CommunitySlider = ({ testimonials }) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={32}
            centeredSlides={"auto"}
            grabCursor={true}
            modules={[]}
        >
            {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                    <div>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="absolute bottom-[30px] text-white p-[20px] text-center">
                        <div className="mb-8 italic font-light text-lg">
                            {item.message}
                        </div>
                        <div className="flex items-center justify-center gap-x-[3px]">
                            <span className="text-[30px] text-primary-200 font-bold">
                                ~
                            </span>
                            <div className="text-[20px] font-bold">
                                {item.name}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
