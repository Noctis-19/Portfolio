"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillModal from "./SkillModal";

const SkillSection = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const skills = [
        {
            id: 1,
            name: "Développement Web",
            percentage: "85",
        },
        {
            id: 2,
            name: "Base de données",
            percentage: "75",
        },
        {
            id: 3,
            name: "IA",
            percentage: "55",
        },
        {
            id: 4,
            name: "Développement logiciel",
            percentage: "65",
        },
        {
            id: 5,
            name: "Anglais",
            percentage: "90",
        },
    ];

    return (
        <section id="skills" className="py-10 sm:py-12 bg-gray-900/80 border-t border-b border-gray-600">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Compétences</h2>
            <div className="container mx-auto px-8 sm:px-20">
                <Carousel 
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    infinite={true}
                >
                    {skills.map((skill, index) => {
                        return (
                            <div key={index}>
                                <SkillModal name={skill.name} percentage={skill.percentage} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
}

export default SkillSection;
