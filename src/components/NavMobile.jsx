import { NavItem } from "./NavItem";
export const NavMobile = ({ showMenu, navItems }) => {
    return (
        <nav
            className={`${
                showMenu ? "min-h-screen" : "min-h-0"
            } md:hidden w-full min-h-screen bg-neutral-500 min-w-full fixed left-0 -z-10 ring-0 top-0 -bottom-12 overflow-hidden transition-all h-0`}
        >
            <ul className="w-full h-full flex flex-col items-center justify-center gap-y-5">
                {navItems.map((link) => (
                    <NavItem key={link.id} link={link} />
                ))}
                <div className="flex justify-center items-center gap-10 mt-10">
                    <button className="bg-primary-200 tracking-wide p-2 text-neutral-500 font-bold hover:text-white">
                        LogIn
                    </button>
                    <button className="bg-primary-200 tracking-wide p-2 text-neutral-500 font-bold hover:text-white">
                        SignUp
                    </button>
                </div>
            </ul>
        </nav>
    );
};
