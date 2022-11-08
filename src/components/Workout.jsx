import React from "react";
import { WorkoutSlider } from "./WorkoutSlider";
import ResistanceImg from "../assets/img/workouts/resistance.png";
import BoxingImg from "../assets/img/workouts/boxing.png";
import BodyPumpImg from "../assets/img/workouts/body-pump.png";
import YogaImg from "./../assets/img/workouts/yoga.png";
import FullBodyImg from "../assets/img/workouts/full-body.png";
import FitnessImg from "../assets/img/workouts/fitness.png";
import BattleRopeImg from "../assets/img/workouts/battle-rope.png";
import CalendarIcn from "../assets/img/workouts/icons/calendar.svg";

const workouts = {
    icon: CalendarIcn,
    title: "Тренировки",
    programs: [
        {
            id: 1,
            image: ResistanceImg,
            name: "Resistance",
        },
        {
            id: 2,
            image: BoxingImg,
            name: "Boxing",
        },
        {
            id: 3,
            image: BodyPumpImg,
            name: "Body Pump",
        },
        {
            id: 4,
            image: YogaImg,
            name: "Yoga",
        },
        {
            id: 5,
            image: FullBodyImg,
            name: "Full Body",
        },
        {
            id: 6,
            image: FitnessImg,
            name: "Fitness",
        },
        {
            id: 7,
            image: BattleRopeImg,
            name: "CrossFit",
        },
    ],
};

export const Workout = () => {
    const { title, icon } = workouts;
    return (
        <section
            name="Тренировки"
            className="section"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1500"
        >
            <div className="section-title-group max-w-[600px] mx-auto px-4 lg:px-0">
                <img src={icon} alt={title} />
                <h2 className="h2 section-title">
                    {title}
                    <span className="text-primary-200">.</span>
                </h2>
            </div>
            <WorkoutSlider workouts={workouts} />
        </section>
    );
};
