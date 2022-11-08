import { NavItem } from "./NavItem";
export const Nav = ({ navItems }) => {
    return (
        <nav className="hidden md:block">
            <ul className="flex items-center gap-x-3 font-bold ">
                {navItems.map((link) => (
                    <NavItem key={link.id} link={link} />
                ))}
            </ul>
        </nav>
    );
};
