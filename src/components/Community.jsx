import React from "react";
import CommunityImg1 from "../assets/img/community/img1.png";
import CommunityImg2 from "../assets/img/community/img2.png";
import CommunityImg3 from "../assets/img/community/img3.png";
import CommunityImg4 from "../assets/img/community/img4.png";
import CommunityIcn from "../assets/img/community/icons/community-icn.svg";
import { CommunitySlider } from "./CommunitySlider";

const community = {
    icon: CommunityIcn,
    title: "Отзывы",
    testimonials: [
        {
            id: 1,
            image: CommunityImg1,
            name: "Mark A.",
            message: "“Отличная команда тренеров, спасибо за полотенце.”",
        },
        {
            id: 2,
            image: CommunityImg2,
            name: "Lauren K.",
            message:
                "“Сауна после тренировки настоящее удовольствие, рекомендую зал.”",
        },
        {
            id: 3,
            image: CommunityImg3,
            name: "Jhon D.",
            message:
                "“Давно не встречал столь внимательных трениров, респект!”",
        },
        {
            id: 4,
            image: CommunityImg4,
            name: "Anne R.",
            message: "“Ркомендую зал, отличная команда, внимательный персонал”",
        },
    ],
};

export const Community = () => {
    const { icon, title, testimonials } = community;
    return (
        <section
            name="Отзывы"
            className=" section  container mx-auto"
            data-aos-delay="500"
            data-aos="fade-right"
            data-aos-duration="1500"
        >
            <div className="container mx-auto">
                <div className="flex flex-col   xl:flex-row">
                    <div className="section-title-group  mx-auto">
                        <img src={icon} alt={title} />
                        <h2 className="h2 section-title">
                            {title} <span className="text-primary-200">.</span>
                        </h2>
                    </div>
                    <div className="  lg:top-0 w-[992px]">
                        <CommunitySlider testimonials={testimonials} />
                    </div>
                </div>
            </div>
        </section>
    );
};
