import React, { useContext } from "react";
// import "./Achievement.scss";
import "./personalProjects.scss"
// import AchievementCard from "../../components/achievementCard/AchievementCard";
import PersonalProjectsCard from "../../components/personalProjects/personalProjectsCard";
// import { personalProjects } from "../../portfolio";
import { personalProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function PersonalProjects() {
    const { isDark } = useContext(StyleContext);
    if (!personalProjects.display) {
        return null;
    }
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="achievements">
                <div className="achievement-main-div">
                    <div className="achievement-header">
                        <h1
                            className={
                                isDark
                                    ? "dark-mode heading achievement-heading"
                                    : "heading achievement-heading"
                            }
                        >
                            {personalProjects.title}
                        </h1>
                        <p
                            className={
                                isDark
                                    ? "dark-mode subTitle achievement-subtitle"
                                    : "subTitle achievement-subtitle"
                            }
                        >
                            {personalProjects.subtitle}
                        </p>
                    </div>
                    <div className="achievement-cards-div">
                        {personalProjects.achievementsCards.map((card, i) => {
                            return (
                                <PersonalProjectsCard
                                    key={i}
                                    isDark={isDark}
                                    cardInfo={{
                                        title: card.title,
                                        description: card.subtitle,
                                        image: card.image,
                                        imageAlt: card.imageAlt,
                                        footer: card.footerLink
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
