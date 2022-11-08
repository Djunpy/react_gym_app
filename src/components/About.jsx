import { IoIosArrowDroprightCircle } from "react-icons/io";
import UsersIcon from "../assets/img/about/icons/users-icn.svg";
const about = {
    icon: UsersIcon,
    title: "О нашей команде",
    subtitle1:
        "Мы молодая, амбизиозная команда трениров, которая хочет улучшить ваше восприятие к спорту, и изменить ваш образ жизни, если вы еще не занимались спортом, но если вы бывалый спортсмен, в таком случае мы привнесем много тонкостей в ваш тренировочный процесс.",
    subtitle2: "С любовью к своим клиетам команда",
    link: "Присоединиться",
};

export const About = () => {
    const { icon, title, subtitle1, subtitle2, link } = about;
    return (
        <section
            name="О Нас"
            className="py-[80px]  md:py-[110px] lg:pt-[140px] lg:pb-[180px]"
        >
            <div className="container mx-auto px-[20px] lg:px-[134px]">
                <div
                    className="section-title-group justify-start"
                    data-aos-delay="500"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <img src={icon} alt="about-icon" />
                    <h2 className="h2 section-title">
                        {title} <span className="text-primary-200">.</span>
                    </h2>
                </div>
                <p
                    data-aos="fade-left"
                    data-aos-delay="600"
                    data-aos-duration="1500"
                    className="md:text-body-md mb-12"
                >
                    {subtitle1}
                </p>
                <p
                    data-aos="fade-left"
                    data-aos-delay="700"
                    data-aos-duration="1500"
                    className="md:text-body-md mb-12"
                >
                    {subtitle2}{" "}
                    <span className="text-primary-200 font-bold">
                        DjunpyGYM
                    </span>
                </p>
                <div data-aos="fade-right" data-aos-duration="1500">
                    <button className="link flex items-center gap-x-4 transition-all hover:gap-x-6">
                        {link} <IoIosArrowDroprightCircle size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};
