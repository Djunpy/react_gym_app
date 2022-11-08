import React, { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
export const Accordion = ({ accordion }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { question, answer } = accordion;
    return (
        <div onClick={() => setIsOpen(!isOpen)}>
            <div className="cursor-pointer">
                <div className="bg-white border border-solid rounded-none">
                    <div className="min-h-[60px] flex items-center justify-between px-[30px]">
                        <h6 className="h6">{question}</h6>
                        <div>
                            {isOpen ? (
                                <FaChevronCircleUp />
                            ) : (
                                <FaChevronCircleDown />
                            )}
                        </div>
                    </div>
                    <div
                        className={` ${
                            isOpen
                                ? "min-h-[200px] lg:min-h-[160px]"
                                : "min-h-[0]"
                        } max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}
                    >
                        {" "}
                        <div className="mt-6">{answer}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
