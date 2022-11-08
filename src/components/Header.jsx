import { useState, useEffect } from "react";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import Logo from "../assets/logo.png";
import { Nav } from "./Nav";
import { NavMobile } from "./NavMobile";

const navItems = [
    { id: 1, name: "Главная", href: "/" },
    { id: 2, name: "О Нас", href: "/" },
    { id: 3, name: "Тренировки", href: "/" },
    { id: 4, name: "Прайс", href: "/" },
    { id: 5, name: "Отзывы", href: "/" },
    // { id: 6, name: "FAQ", href: "/" },
];

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [headerActive, setHeaderActive] = useState(false);
    const handleMobileMenu = () => {
        setShowMenu(!showMenu);
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 80
                ? setHeaderActive(true)
                : setHeaderActive(false);
        });
    }, []);
    return (
        <header className={` z-30 left-0 ring-0 fixed top-0 w-full`}>
            <div
                className={`${
                    headerActive ? "bg-neutral-500 " : "bg-transparent "
                }container mx-auto text-white transition-all duration-300 flex gap-x-1 items-center justify-between`}
            >
                <div className="w-16 shrink-0 relative">
                    <img src={Logo} alt="logo" />
                    <span className="text-sm font-bold absolute top-11 text-primary-200 left-6">
                        GYM
                    </span>
                </div>
                <NavMobile showMenu={showMenu} navItems={navItems} />
                <Nav navItems={navItems} />
                <div className="flex gap-4 items-center pr-2">
                    <div className="hidden md:flex gap-1">
                        <button className="btn btn-sm hover:text-primary-200 ">
                            LogIn
                        </button>
                        <button className="btn btn-sm btn-primary hover:text-neutral-500 transition">
                            SignUp
                        </button>
                    </div>
                    <div
                        className="block md:hidden text-primary-200 transition"
                        onClick={handleMobileMenu}
                    >
                        {!showMenu ? (
                            <RiMenu4Fill
                                size={30}
                                className="cursor-pointer hover:text-white transition-all"
                            />
                        ) : (
                            <RiCloseFill
                                size={30}
                                className="cursor-pointer hover:text-white transition-all"
                            />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};
