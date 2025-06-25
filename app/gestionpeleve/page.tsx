import React from 'react';
import {
  UserCog, ShieldCheck, Brush, BookOpenCheck, Users2, UserCheck,
  GraduationCap, ScrollText, BookMarked, FileBarChart,
  ClipboardList, FileCheck, PackageSearch
} from "lucide-react";
import Link from 'next/link';
import Header from '../components/navbar/header';

const Accueil = () => {

  return (
    <div className='w-full h-screen'>
      <Header/>
    <div className="min-h-screen w-full bg-[url('/eleve1.jpg')] bg-cover bg-center bg-fixed text-white">
  <div className="backdrop-brightness-50 min-h-screen py-16 px-4">
    <h1 className="text-4xl font-bold mb-6 text-center">Gestion des Élèves</h1>
    <p className="text-lg text-center mb-12 text-white/80">
      Inscription, suivi, édition et statistiques des élèves
    </p>

    {/* Zone de boutons/actions */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      <button className="bg-white text-gray-900 px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
        ➕ Nouvel Élève
      </button>
      <button className="bg-white text-gray-900 px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
        📄 Exporter
      </button>
    </div>

    {/* Table / Liste des élèves */}
    <div className="bg-white/90 text-gray-900 rounded-2xl shadow-md p-6 overflow-auto">
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-3">Nom</th>
            <th className="p-3">Prénom</th>
            <th className="p-3">Classe</th>
            <th className="p-3">Statut</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Exemple de ligne */}
          <tr className="border-b hover:bg-gray-50 transition">
            <td className="p-3">Ngono</td>
            <td className="p-3">Paul</td>
            <td className="p-3">CM2</td>
            <td className="p-3">Inscrit</td>
            <td className="p-3">
              <button className="text-blue-600 hover:underline mr-2">Voir</button>
              <button className="text-green-600 hover:underline mr-2">Modifier</button>
              <button className="text-red-600 hover:underline">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>

  );
}

export default Accueil;
