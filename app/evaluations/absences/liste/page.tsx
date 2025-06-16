'use client';

import { useState } from 'react';

interface Absence {
  id: number;
  nomEleve: string;
  classe: string;
  date: string;
  motif: string;
  justifiee: boolean;
}

export default function ListeAbsences() {
  const [absences, setAbsences] = useState<Absence[]>([
    {
      id: 1,
      nomEleve: 'Jean Dupont',
      classe: 'CM1',
      date: '2025-06-10',
      motif: 'Maladie',
      justifiee: true,
    },
    {
      id: 2,
      nomEleve: 'Alice Mbiandou',
      classe: 'CE2',
      date: '2025-06-08',
      motif: 'Problème familial',
      justifiee: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-white to-green-300 px-4 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Liste des Absences</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Nom de l'élève</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Classe</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Motif</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Justifiée</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {absences.map((absence) => (
                <tr key={absence.id}>
                  <td className="px-4 py-2 text-sm text-gray-800">{absence.nomEleve}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{absence.classe}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{absence.date}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{absence.motif}</td>
                  <td className="px-4 py-2 text-sm text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${absence.justifiee ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {absence.justifiee ? 'Oui' : 'Non'}
                    </span>
                  </td>
                </tr>
              ))}

              {absences.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-500 italic">
                    Aucune absence enregistrée.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
