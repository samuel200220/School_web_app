'use client';
import React from 'react';
import Link from 'next/link';
import { ScrollText } from 'lucide-react';

const NotesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white/90 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center space-x-4 mb-8">
          <ScrollText className="text-rose-600" size={40} />
          <h1 className="text-3xl font-bold text-gray-800">Gestion des Notes</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Lien vers Ajouter une note */}
          <Link href="/notes/ajouter" className="block bg-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
            <h2 className="text-xl font-semibold text-rose-700 mb-2">Ajouter une Note</h2>
            <p className="text-gray-700">Enregistrer les notes d’un élève pour une séquence donnée.</p>
          </Link>

          {/* Lien vers tableau de notes */}
          <Link href="/notes/tableau" className="block bg-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
            <h2 className="text-xl font-semibold text-rose-700 mb-2">Tableau des Notes</h2>
            <p className="text-gray-700">Voir toutes les notes par classe, matière, élève ou séquence.</p>
          </Link>

          {/* Lien vers statistiques ou moyenne */}
          <Link href="/notes/statistiques" className="block bg-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
            <h2 className="text-xl font-semibold text-rose-700 mb-2">Statistiques / Moyennes</h2>
            <p className="text-gray-700">Afficher les moyennes générales, classements et analyses.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
