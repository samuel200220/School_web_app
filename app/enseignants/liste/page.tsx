'use client';

import React, { useState, useEffect } from 'react';
import { Users2 } from 'lucide-react';

const mockEnseignants = [
  {
    id: 1,
    nom: 'Mbarga',
    prenom: 'Jean',
    email: 'jean.mbarga@ecole.cm',
    telephone: '690112233',
    matiere: 'Mathématiques',
    classe: 'CM2',
  },
  {
    id: 2,
    nom: 'Nana',
    prenom: 'Sophie',
    email: 'sophie.nana@ecole.cm',
    telephone: '694556677',
    matiere: 'Histoire',
    classe: 'CE1',
  },
];

const ListeEnseignants = () => {
  const [enseignants, setEnseignants] = useState(mockEnseignants);

  useEffect(() => {
    // Ici tu pourras plus tard appeler une API
    // Exemple : fetch('/api/enseignants').then(res => res.json()).then(data => setEnseignants(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-900 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          <Users2 size={32} className="text-indigo-700" />
          <h1 className="text-3xl font-bold text-gray-800">Liste des Enseignants</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nom</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Prénom</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Téléphone</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Matière</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Classe</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {enseignants.map((enseignant) => (
                <tr key={enseignant.id} className="hover:bg-gray-50 text-black transition">
                  <td className="px-4 py-3">{enseignant.nom}</td>
                  <td className="px-4 py-3">{enseignant.prenom}</td>
                  <td className="px-4 py-3">{enseignant.email}</td>
                  <td className="px-4 py-3">{enseignant.telephone}</td>
                  <td className="px-4 py-3">{enseignant.matiere}</td>
                  <td className="px-4 py-3">{enseignant.classe}</td>
                </tr>
              ))}
              {enseignants.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center text-gray-500 py-4">
                    Aucun enseignant enregistré.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListeEnseignants;
