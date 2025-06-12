"use client";
import Link from "next/link";
import ExperienceModal from "./ExperienceModal";
import { useState } from "react";
import { Check, Hourglass } from 'lucide-react';

const ExperienceSection = () => {
    const experiences = [
        {
            id: 1,
            title: "Ingénieur Full Stack : META-VIDEO",
            tags: ["Front-end", "Back-end", "BDD", "SQL", "PHP", "JS", "ChartJS", "Git", "HTML5", "CSS", "Anglais", "NodeJS"],
            description: "Réalisation de différents projets pour plusieurs clients.",
            fullDescription: "Développement clé en main de projets pour différents clients avec maintient. Gestion des bases données. Automatisation des tableaux de bords statistiques réalisés pendant l’alternance pour les rendre personalisable par les clients. Aide au déploiement.",
            image: "/chartJSDashboard.png",
            status: {color: "purple", text: "CDD"},
            techStack: ["SQL", "PHP", "JS", "ChartJS", "Git", "HTML5", "CSS", "Anglais", "NodeJS"],
        },
        {
            id: 2,
            title: "Développeur Unity 3D : App4Convergence",
            tags: ["Unity", "API REST", "VR", "C#"],
            description: "Réalisation d’une application sur casque VR.",
            fullDescription: "Développement d’une application de sécurité sur Unity pour le casque VR Meta Quest 3.",
            image: "/casqueVR.jpg",
            status: {color: "pink", text: "Stage"},
            techStack: ["Unity", "API REST", "VR", "C#"],
        },
        {
            id: 3,
            title: "Développeur Full Stack : META-VIDEO",
            tags: ["Front-end", "Back-end", "BDD", "SQL", "PHP", "JS", "ChartJS", "Git", "HTML5", "CSS", "Anglais", "NodeJS"],
            description: "Réalisation de dashboards statistiques pour plusieurs clients.",
            fullDescription: "Développement des tableaux de bords statistiques en ChartJS. Gestion des bases de données. Aide au déploiement.",
            image: "/chartJSDashboard.png",
            status: {color: "cyan", text: "Alternance"},
            techStack: ["SQL", "PHP", "JS", "ChartJS", "Git", "HTML5", "CSS", "Anglais", "NodeJS"],
        },
        // {
        //     id: 4,
        //     title: "Employé libre service : AUCHAN",
        //     tags: ["Organisation", "Service client", "Esprit d’équipe", "Communication"],
        //     description: "Gestion du rayon papeterie",
        //     fullDescription: "Mise en rayon. Service client. Drive.",
        //     image: "/papeterie.jpg",
        //     status: {color: "blue", text: "CDD"},
        //     techStack: [],
        // },
    ];

    const [selectedExperience, setSelectedExperience] = useState(null);

    const handleExperienceClick = (id) => {
        setSelectedExperience(id);
    }

    const handleCloseModal = () => {
        setSelectedExperience(null);
    }

    const handleNextExperience = () => {
        const currentIndex = experiences.findIndex((experience) => experience.id === selectedExperience);

        if (currentIndex === -1) {
            return null;
        }

        const nextIndex = (currentIndex + 1) % experiences.length;

        setSelectedExperience(experiences[nextIndex].id);
    }

    const handlePrevExperience = () => {
        const currentIndex = experiences.findIndex((experience) => experience.id === selectedExperience);

        if (currentIndex === -1) {
            return null;
        }

        const prevIndex = (currentIndex - 1 + experiences.length) % experiences.length;

        setSelectedExperience(experiences[prevIndex].id);
    }

    return (
        <section id="experiences" className="py-10 sm:py-12 bg-gray-900/80 border-t border-b border-gray-600">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Expériences professionnelles</h2>
            <div className="container mx-auto px-8 sm:px-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {experiences.map((experience, index) => {
                    return (
                        <button 
                            onClick={() => handleExperienceClick(experience.id)} 
                            key={index} 
                            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500 50 transition-colors hover:shadow-sm text-left"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                                    <span className={`flex items-center px-2 py-0.5 text-xs rounded-full bg-${experience.status.color}-500/20 text-blue-200 border border-${experience.status.color}-500/30`}>
                                        {experience.status.text}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {
                                        experience.tags.map((tag, index) => (
                                            <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30">
                                                {tag}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
            {selectedExperience && (
                <ExperienceModal
                    experience={experiences.find((experience) => experience.id === selectedExperience)}
                    onClose={handleCloseModal}
                    onNext={handleNextExperience}
                    onPrev={handlePrevExperience}
                />
            )}
        </section>
    );
}

export default ExperienceSection;
