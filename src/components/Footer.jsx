import React from "react";
import LogoImg from "../assets/logo.png";

export const Footer = () => {
    return (
        <footer className="bg-neutral-500 h-[125px] p-4 rounded-sm">
            <div className="container mx-auto h-full flex justify-between items-center ">
                <img className="w-28" src={LogoImg} alt="logo" />

                <p className="text-primary-200">
                    Lorem ipsum dolor sit amet consectet
                </p>
            </div>
        </footer>
    );
};
