import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const PlanList = ({ plans }) => {
    const [currentIndex, setIndex] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row justify-center max-w-[1280px] mx-auto gap-y-4">
            {plans.map((item, index) => (
                <div
                    data-aos="fade-right"
                    data-aos-delay={item.delay}
                    data-aos-duration="1500"
                    className="w-full px-4 md:max-w-[620px] lg:max-w-[405px] lg:min-h-[550px] rounded-sm"
                    key={item.id}
                >
                    <div>
                        <div
                            className={`${
                                currentIndex === index
                                    ? "bg-neutral-500 text-white"
                                    : "bg-neutral-400/10 text-neutral-500"
                            } flex justify-center items-center`}
                            onClick={() => setIndex(index)}
                        >
                            <div className="flex flex-row lg:flex-col gap-x-8 gap-y-8 lg-gap-x-0 items-center py-[40px] px-[30px] lg:min-h-[550px] transition duration-100">
                                <div
                                    className={`${
                                        currentIndex === index
                                            ? "bg-white text-neutral-500"
                                            : "bg-neutral-500 text-white "
                                    } rounded-sm p-1 h-[26px] font-primary text-sm font-semibold min-w-min mx-auto px-[14px] flex items-center justify-center mb-8`}
                                >
                                    {item.name}
                                </div>
                                <div className="text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center">
                                    <div className="leading-none">
                                        <span className="tracking-[0.1px]">
                                            {item.price}
                                        </span>
                                        <span className="text-[30px] font-extrabold">
                                            $
                                        </span>
                                    </div>
                                    {/* <span>/month</span> */}
                                </div>
                                <ul className="flex flex-col gap-y-4 mb-8">
                                    {item.list.map((item) => (
                                        <li
                                            className="flex items-center gap-x-[10px]"
                                            key={item.id}
                                        >
                                            <IoIosCheckmarkCircle className="text-lg shrink-0" />
                                            <div>{item.name}</div>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`${
                                        currentIndex === index
                                            ? "bg-white text-neutral-500"
                                            : "border border-neutral-500 border-solid"
                                    } btn btn-lg`}
                                >
                                    Купить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
