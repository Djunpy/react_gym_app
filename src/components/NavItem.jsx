import { Link } from "react-scroll";

export const NavItem = ({ link }) => {
    const { name } = link;
    return (
        <li>
            <Link to={name} spy={true} smooth={true} duration={500}>
                <button className="hover:text-primary-200 transition-all">
                    {name}
                </button>
            </Link>
        </li>
    );
};
