"use client";
import Link from "next/link";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { Check, Hourglass } from 'lucide-react';

const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            title: "Tableaux de bords statistiques",
            tags: ["Front-end", "Back-end", "BDD", "SQL", "PHP", "JS", "ChartJS"],
            description: "Réalisation de différents tableaux de bords statistiques intéractifs avec chartJS.",
            fullDescription: "Le développement des différents tableaux de bords statistiques a été réalisé pendant mon alternance et CDD chez META-VIDEO. En raison de la nature confidentielle du projet, seules des représentations génériques sont affichées. Le but était de récupérer les données avec SQL et PHP et les afficher selon les besoins du clients à l'aide de ChartJS. La dernière étape du projet a été de permettre au client d'entièrement customiser lui même ses tableaux.",
            image: "/chartJSDashboard.png",
            status: {icon: Check, color: "green", text: "Terminé"},
            techStack: ["SQL", "PHP", "JS", "ChartJS"],
        },
        {
            id: 2,
            title: "Portfolio personnel (ce site)",
            tags: ["Front-end", "NextJS", "React", "TailwindCSS"],
            description: "Site portfolio conçu en suivant un tutoriel pour la structure, puis personnalisé pour refléter ma propre identité et mon univers.",
            fullDescription: "Le site a été conçu en suivant le tutoriel de webdecoded sur youtube (https://youtu.be/K-hGb9W6wHc?si=GHjnh3Hmt1n7ftYm) pour la structure et apprendre à me servir de Next.js, Tailwind et React.",
            image: "/portfolio.png",
            status: {icon: Check, color: "green", text: "Terminé"},
            techStack: ["NextJS", "React", "TailwindCSS"],
        },
        {
            id: 3,
            title: "IA : Traduction scan automatisée",
            tags: ["IA", "DeepLearning", "Python", "TensorFlow"],
            description: "Développement d'un outil basé sur le deep learning pour automatiser la traduction de scans de manga, de la reconnaissance OCR à la génération de texte naturel.",
            fullDescription: "La traduction en français des mangas les moins connus est généralement très en retard par rapport à l'anglais et faîtes par des bénévoles. J'ai donc eu l'idée après ma formation en IA sur coursera de créer une IA qui prend un entrée les scans d'un manga en japonais et le sort traduit en français. La difficulté ne réside pas dans la traduction mais dans l'extraction du texte et le replacer correctement. Le japonais pouvant également s'écrire de heut en bas, ce n'est pas évident à adapter au français.",
            image: "/japanese.jpg",
            status: {icon: Hourglass, color: "gray", text: "En cours"},
            techStack: ["Python", "TensorFlow"],
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const handleprojectClick = (id) => {
        setSelectedProject(id);
    }

    const handleCloseModal = () => {
        setSelectedProject(null);
    }

    const handleNextProject = () => {
        const currentIndex = projects.findIndex((project) => project.id === selectedProject);

        if (currentIndex === -1) {
            return null;
        }

        const nextIndex = (currentIndex + 1) % projects.length;

        setSelectedProject(projects[nextIndex].id);
    }

    const handlePrevProject = () => {
        const currentIndex = projects.findIndex((project) => project.id === selectedProject);

        if (currentIndex === -1) {
            return null;
        }

        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

        setSelectedProject(projects[prevIndex].id);
    }

    return (
        <section id="projects" className="py-10 sm:py-12 bg-gray-900/80 border-t border-b border-gray-600">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Projets</h2>
            <div className="container mx-auto px-8 sm:px-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {projects.map((project, index) => {
                    const Icon = project.status.icon;
                    return (
                        <button 
                            onClick={() => handleprojectClick(project.id)} 
                            key={index} 
                            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-blue-500 50 transition-colors hover:shadow-sm text-left"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                    <span className={`flex items-center px-2 py-0.5 text-xs rounded-full bg-${project.status.color}-500/20 text-blue-200 border border-${project.status.color}-500/30`}>
                                        <Icon size={12} className="mr-1"/>
                                        {project.status.text}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {
                                        project.tags.map((tag, index) => (
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
            {selectedProject && (
                <ProjectModal
                    project={projects.find((project) => project.id === selectedProject)}
                    onClose={handleCloseModal}
                    onNext={handleNextProject}
                    onPrev={handlePrevProject}
                />
            )}
        </section>
    );
}

export default ProjectSection;
