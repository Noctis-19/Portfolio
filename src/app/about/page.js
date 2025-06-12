"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const images = [
    "/profil.jpg",
    "/annecy.jpeg",
    "/glace.jpeg"
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container mx-auto px-8 py-10 sm:px-20 sm:py-14 grid grid-cols-1 gap-4 sm:grid-cols-2 font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
        <div className="pattern-bg"></div>
        <h1 className="text-4xl font-bold tracking-light">
          Maxime <span className="block text-blue-500">VERGER</span>
        </h1>
        <p className="mt-6 text-xl text-white leading-8">
          Ingénieur Informatique & Multimédia | Développeur Full-Stack orienté bases de données | Formé en Deep Learning
        </p>
        <div className="flex mt-10 gap-4">
          <Link href="/" className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500">
            Projets
          </Link>
          <Link href="/contact" className="px-8 py-3 rounded-lg border border-gray-600 hover:border-blue-500 font-medium bg-slate-900">
            Contact
          </Link>
        </div>
        <div className="mt-8 p-5 bg-blue-900/90 rounded-2xl text-justify">
          <h5 className="font-bold">
            Bienvenue sur mon portfolio ! <br/> Je suis Maxime VERGER.
          </h5>
          <br/>
          <p className="">
            Mon parcours m’a permis de développer des compétences solides en informatique, que ce soit à travers des projets professionels, personnels ou
            des formations.
            Tout comme pour ma préparation au marathon en 2026, je cherche à avancer avec détermination.
            <br/>
            Je m'intéresse particulièrement aux projets qui conjuguent technologie, éthique et engagement.
            <br/>
            Mon objectif : Contribuer, à mon échelle, à un avenir plus harmonieux entre environnement, humanité et progrès.
            <br/>
            Ce portfolio présente les étapes de ce cheminement, entre apprentissages continus et expériences concrètes.
            Il est en perpétuelle évolution, à l’image de ma volonté d’apprendre et d'élargir mes horizons.
            <br/>
            Merci de votre attention, et au plaisir d’échanger.
          </p>
        </div>
      </div>
      <div className="relative w-12/12 h-100 sm:ml-35 sm:w-8/12 sm:h-12/12 place-self-center">
        <Image
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-4xl ring-2 ring-blue-900/90 transition-opacity duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
}
