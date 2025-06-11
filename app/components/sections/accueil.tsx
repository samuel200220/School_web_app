import React from 'react';
import { User, Shield, GraduationCap } from "lucide-react";
import Link from 'next/link';

const Accueil = () => {
  return (
    <div className="min-h-screen bg-[url('/accueil.jpg')] bg-cover bg-center text-white">
      {/* Overlay sombre */}
      <div className="backdrop-brightness-50 min-h-screen px-6 py-12">
        {/* Titre centré */}
        <div className="flex items-center justify-center mb-16">
          <h1 className="text-6xl md:text-9xl font-bold text-center">Bienvenue cher utilisateur</h1>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Carte Enseignant */}
          <Link href={'#'}>
          <div className="bg-white/80 text-gray-900 rounded-2xl p-6 shadow-md text-center cursor-pointer hover:shadow-xl hover:-translate-y-2 transform transition duration-300">
            <User className="mx-auto text-blue-500" size={48} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Enseignant</h2>
            <p>Accédez à vos cours, notes et planning.</p>
          </div>
          </Link>

          {/* Carte Enseignant Responsable */}
          <Link href={'#'}>
          <div className="bg-white/80 text-gray-900 rounded-2xl p-6 shadow-md text-center cursor-pointer hover:shadow-xl hover:-translate-y-2 transform transition duration-300">
            <Shield className="mx-auto text-green-500" size={48} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Enseignant Responsable</h2>
            <p>Gérez vos classes, enseignants et programmes.</p>
          </div>
          </Link>

          {/* Carte Étudiant */}
          <Link href={'#'}>
          <div className="bg-white/80 text-gray-900 rounded-2xl p-6 shadow-md text-center cursor-pointer hover:shadow-xl hover:-translate-y-2 transform transition duration-300">
            <GraduationCap className="mx-auto text-purple-500" size={48} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Étudiant</h2>
            <p>Consultez vos emplois du temps et le planning des salles.</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Accueil