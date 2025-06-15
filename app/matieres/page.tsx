'use client';

import React from 'react';
import {
  BookMarked,
  PlusCircle,
  ListOrdered,
  SlidersHorizontal
} from 'lucide-react';
import Link from 'next/link';

const MatierePage = () => {
  const cardClass =
    "bg-white/80 text-gray-900 rounded-2xl p-6 shadow-md text-center hover:shadow-xl hover:-translate-y-2 transform transition duration-300";
  const gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <BookMarked className="mx-auto text-pink-500" size={50} />
          <h1 className="text-4xl font-bold mt-4">Gestion des Matières</h1>
          <p className="mt-2 text-lg text-white/80">
            Configurez et gérez les matières scolaires ainsi que leurs coefficients.
          </p>
        </div>

        <div className={gridClass}>
          <Link href="/matieres/ajouter">
            <div className={cardClass}>
              <PlusCircle className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">Ajouter une Matière</h3>
              <p>Créez une nouvelle matière pour votre programme.</p>
            </div>
          </Link>

          <Link href="/matieres/liste">
            <div className={cardClass}>
              <ListOrdered className="mx-auto text-blue-600" size={40} />
              <h3 className="font-semibold mt-4">Liste des Matières</h3>
              <p>Consultez toutes les matières enregistrées.</p>
            </div>
          </Link>

          <Link href="/matieres/coefficients">
            <div className={cardClass}>
              <SlidersHorizontal className="mx-auto text-amber-600" size={40} />
              <h3 className="font-semibold mt-4">Gérer les Coefficients</h3>
              <p>Attribuez ou modifiez les coefficients des matières.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MatierePage;
