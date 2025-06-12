"use client";
import Link from "next/link";
import FormationModal from "./FormationModal";
import { useState } from "react";
import { Check, Hourglass } from 'lucide-react';

const FormationSection = () => {
    const formations = [
        {
            id: 1,
            title: "Formation Deep Learning en ligne",
            tags: ["IA", "DeepLearning", "Python", "TensorFlow"],
            description: "Spécialisation en Deep Learning : Coursera",
            fullDescription: "",
            image: "/coursera.png",
            status: {icon: Check, color: "green", text: "Validé"},
            techStack: ["Python", "TensorFlow"],
        },
        {
            id: 2,
            title: "Master Ingénieur Informatique et Multimédia",
            tags: ["Front-end", "Back-end", "C#", "C++", "Unity", "Unreal Engine", "IA", "Python", "Anglais", "HTML5", "CSS", "JS", "SQL"],
            description: "Formation en alternance d’Ingénieur Informatique et Multimédia : Ecole d’Ingénieur du CNAM d’Angoulême",
            fullDescription: "",
            image: "/EICnam.jpg",
            status: {icon: Check, color: "green", text: "Validé"},
            techStack: ["C#", "C++", "Unity", "Unreal Engine", "Python", "HTML5", "CSS", "JS"],
        },
        {
            id: 3,
            title: "BTS SIO SLAM",
            tags: ["Front-end", "Back-end", "Java", "JS", "PHP", "SQL", "Python", "Anglais", "HTML5", "CSS"],
            description: "BTS Services Informatiques aux Organisations option Solutions Logiciels et Applications Métiers : Lycée Gustave Eiffel à Bordeaux",
            fullDescription: "",
            image: "/GustaveEiffel.png",
            status: {icon: Check, color: "green", text: "Validé"},
            techStack: ["Java", "JS", "PHP", "SQL", "Python", "Anglais", "HTML5", "CSS"],
        },
        {
            id: 4,
            title: "Bac STI2D",
            tags: ["Java", "Arduino", "Anglais"],
            description: "Bac sciences et technologies de l’industrie et du développement durable : Lycée Gustave Eiffel à Bordeaux",
            fullDescription: "",
            image: "/GustaveEiffel.png",
            status: {icon: Check, color: "green", text: "Validé"},
            techStack: ["Java", "Arduino"],
        },
    ];

    const [selectedFormation, setSelectedFormation] = useState(null);

    const handleFormationClick = (id) => {
        setSelectedFormation(id);
    }

    const handleCloseModal = () => {
        setSelectedFormation(null);
    }

    const handleNextFormation = () => {
        const currentIndex = formations.findIndex((formation) => formation.id === selectedFormation);

        if (currentIndex === -1) {
            return null;
        }

        const nextIndex = (currentIndex + 1) % formations.length;

        setSelectedFormation(formations[nextIndex].id);
    }

    const handlePrevFormation = () => {
        const currentIndex = formations.findIndex((formation) => formation.id === selectedFormation);

        if (currentIndex === -1) {
            return null;
        }

        const prevIndex = (currentIndex - 1 + formations.length) % formations.length;

        setSelectedFormation(formations[prevIndex].id);
    }

    return (
        <section id="formations" className="py-10 sm:py-12 bg-gray-900/80 border-t border-b border-gray-600">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Formations</h2>
            <div className="container mx-auto px-8 sm:px-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {formations.map((formation, index) => {
                    const Icon = formation.status.icon;
                    return (
                        <button 
                            onClick={() => handleFormationClick(formation.id)} 
                            key={index} 
                            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500 50 transition-colors hover:shadow-sm text-left"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <h3 className="text-lg font-semibold text-white">{formation.title}</h3>
                                    <span className={`flex items-center px-2 py-0.5 text-xs rounded-full bg-${formation.status.color}-500/20 text-blue-200 border border-${formation.status.color}-500/30`}>
                                        <Icon size={12} className="mr-1"/>
                                        {formation.status.text}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {
                                        formation.tags.map((tag, index) => (
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
            {selectedFormation && (
                <FormationModal
                    formation={formations.find((formation) => formation.id === selectedFormation)}
                    onClose={handleCloseModal}
                    onNext={handleNextFormation}
                    onPrev={handlePrevFormation}
                />
            )}
        </section>
    );
}

export default FormationSection;
