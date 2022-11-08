import React from "react";

const banner = {
    titlePart1: "Сделай свой день лучше",
    titlePart2: "– вы заслуживаете это!",
    subtitle:
        "Занятия спортом улучшает моральное самочувствие, а утренние тренировки увеличиват продуктивность.",
    textBtn: "Присоединиться",
    img: "",
};
export const Banner = () => {
    const { titlePart1, titlePart2, subtitle, textBtn } = banner;
    return (
        <section name="Главная" className="bg-neutral-500 h-[790px]">
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full -space-x-44 relative pl-6 ">
                    <div className="text-white flex-1 sm:flex-auto z-10">
                        <h1
                            className="h1 text-white  mb-8"
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            data-aos-delay="500"
                        >
                            {titlePart1}{" "}
                            <span className="text-primary-200">
                                {titlePart2}
                            </span>
                        </h1>
                        <p
                            className="max-w-[415px] mb-8 text-body-md md:text-body-lg "
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-delay="600"
                        >
                            {subtitle}
                        </p>
                        <button
                            className="btn btn-sm lg:btn-lg btn-secondary"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-delay="600"
                        >
                            {textBtn}
                        </button>
                    </div>
                    <div
                        className="bg-blue-300  w-full bg-cover bg-right md:bg-center bg-no-repeat h-full bg-banner"
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-delay="700"
                    ></div>
                </div>
            </div>
        </section>
    );
};
