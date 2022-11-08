import React from "react";
import QuestionMarkIcn from "../assets/img/faq/icons/question-mark.svg";
import { Accordion } from "./Accordion";

const faq = {
    icon: QuestionMarkIcn,
    title: "FAQ",
    accordions: [
        {
            id: 1,
            question: "Как мне начать тренировки?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
        },
        {
            id: 2,
            question: "Какой рекомендуемый возраст для занятий спортом?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
        },
        {
            id: 3,
            question: "Могу ли я приобрести абонемент на 1год?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
        },
        {
            id: 4,
            question: "Как выбрать направление для тренировок ?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
        },
        {
            id: 5,
            question: "Со скольки лет можно отдать ребенка в секцию?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
        },
        {
            id: 6,
            question: "Можно ли приходить просто в сауну ?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
        },
    ],
};

export const Faq = () => {
    const { icon, title, accordions } = faq;
    return (
        <section
            className="section  lg:pt-[150px]"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-offset="200"
            data-aos-duration="1500"
        >
            <div className="max-w-[768px] mx-auto  lg:bg-faq bg-custom bg-center lg:p-6 lg:h-[1160px] bg-no-repeat">
                <div className="section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0">
                    <img className="lg:hidden" src={icon} alt={title} />
                    <h2 className="h2 section-title lg:mt-[100px]">
                        {title} <span className="text-primary-200 ">.</span>
                    </h2>
                </div>
                <div className="flex flex-col gap-y-4">
                    {accordions.map((accordion) => (
                        <Accordion key={accordion.id} accordion={accordion} />
                    ))}
                </div>
            </div>
        </section>
    );
};
