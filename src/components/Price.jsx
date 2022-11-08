import React from "react";
import PriceIcn from "../assets/img/pricing/icons/price.svg";
import { PlanList } from "./PlanList";
const pricing = {
    icon: PriceIcn,
    title: "Прайс лист",
    plans: [
        {
            id: 1,
            name: "Basic",
            price: "50",
            list: [
                { name: "1 тренировочная программа" },
                { name: "Сауна" },
                { name: "бесплатное полотенце" },
            ],
            delay: 600,
        },
        {
            id: 2,
            name: "Premium",
            price: "100",
            list: [
                { name: "3 тренировочная программа" },
                { name: "Сауна" },
                { name: "бесплатное полотенце" },
            ],
            delay: 800,
        },
        {
            id: 3,
            name: "Elite",
            price: "150",
            list: [
                { name: "5 тренировочная программа" },
                { name: "Сауна" },
                { name: "бесплатное полотенце" },
            ],
            delay: 1000,
        },
    ],
};

export const Price = () => {
    const { title, icon, plans } = pricing;
    return (
        <section
            name="Прайс"
            className="section"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-offset="200"
            data-aos-duration="1500"
        >
            <div className="section-title-group mx-auto px-4 lg:px-0 max-w-[540px]">
                <img src={icon} alt={title} />
                <h2 className="h2">
                    {title}
                    <span className="text-primary-200">.</span>
                </h2>
            </div>
            <PlanList plans={plans} />
        </section>
    );
};
