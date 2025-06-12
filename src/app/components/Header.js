import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-gray-900/100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">
                <div>
                    <Link href={"/"} className="text-2xl md:text-3xl text-white font-bold mr-5 hover:text-blue-500">
                        Maxime Verger
                    </Link>
                    <a href="https://linkedin.com/in/maxime-verger19" target="_blank" className="mt-5 mr-5 text-3xl">           
                        <i className="devicon-linkedin-plain hover:text-blue-500"></i>
                    </a>
                    <a href="https://github.com/Noctis-19" target="_blank" className="text-3xl">
                        <i className="devicon-github-original hover:text-blue-500"></i>
                    </a>
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        <li key="about">
                            <Link href="/about" className="hover:text-blue-500">
                                À propos
                            </Link>
                        </li>
                        <li key="projects">
                            <Link href="/" className="hover:text-blue-500">
                                Projets
                            </Link>
                        </li>
                        <li key="experiences">
                            <Link href="/#projects" className="hover:text-blue-500">
                                Expériences
                            </Link>
                        </li>
                        <li key="formations">
                            <Link href="/#experiences" className="hover:text-blue-500">
                                Formations
                            </Link>
                        </li>
                        <li key="skills">
                            <Link href="/#skills" className="hover:text-blue-500">
                                Compétences
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-500">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
