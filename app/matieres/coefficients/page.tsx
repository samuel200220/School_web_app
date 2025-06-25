'use client';

import React, { useState } from 'react';
import { BarChartBig } from 'lucide-react';
import Header from '@/app/components/navbar/header';

interface Coefficient {
  id: number;
  nom: string;
  coefficient: number;
}

const PageCoefficients = () => {
  const [matieres, setMatieres] = useState<Coefficient[]>([
    { id: 1, nom: 'Mathématiques', coefficient: 4 },
    { id: 2, nom: 'Français', coefficient: 3 },
    { id: 3, nom: 'Sciences', coefficient: 2 },
    { id: 4, nom: 'Histoire-Géographie', coefficient: 2 },
  ]);

  const modifierCoefficient = (id: number) => {
    const nouveauCoef = prompt("Nouveau coefficient ?");
    if (nouveauCoef) {
      setMatieres(matieres.map(m =>
        m.id === id ? { ...m, coefficient: parseInt(nouveauCoef) } : m
      ));
    }
  };

  return (
    <div className='w-full h-screen bg-white'>
      <Header/>
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <BarChartBig size={32} className="text-amber-400" />
          <h1 className="text-3xl font-bold">Gestion des Coefficients</h1>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-md bg-white/10 backdrop-blur-md">
          <table className="min-w-full text-white table-auto text-left">
            <thead className="bg-white/20 text-sm uppercase">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Matière</th>
                <th className="px-6 py-4">Coefficient</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {matieres.map((matiere) => (
                <tr key={matiere.id} className="border-t border-white/20 hover:bg-white/10 transition">
                  <td className="px-6 py-4">{matiere.id}</td>
                  <td className="px-6 py-4">{matiere.nom}</td>
                  <td className="px-6 py-4">{matiere.coefficient}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => modifierCoefficient(matiere.id)}
                      className="text-blue-400 hover:text-blue-600 font-medium"
                    >
                      Modifier
                    </button>
                  </td>
                </tr>
              ))}
              {matieres.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-300">
                    Aucune matière définie.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PageCoefficients;
