'use client';

import React, { useState } from 'react';
import { BookMarked, Pencil, Trash2 } from 'lucide-react';

interface Matiere {
  id: number;
  nom: string;
  coefficient: number;
}

const ListeMatieres = () => {
  const [matieres, setMatieres] = useState<Matiere[]>([
    { id: 1, nom: 'Mathématiques', coefficient: 4 },
    { id: 2, nom: 'Français', coefficient: 3 },
    { id: 3, nom: 'Sciences', coefficient: 2 },
  ]);

  const handleDelete = (id: number) => {
    setMatieres(matieres.filter((m) => m.id !== id));
  };

  const handleEdit = (id: number) => {
    const nouvelleValeur = prompt('Nouveau nom de la matière ?');
    const nouveauCoef = prompt('Nouveau coefficient ?');

    if (nouvelleValeur && nouveauCoef) {
      setMatieres(
        matieres.map((m) =>
          m.id === id
            ? { ...m, nom: nouvelleValeur, coefficient: parseInt(nouveauCoef) }
            : m
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookMarked className="text-pink-400" size={32} />
          <h1 className="text-3xl font-bold">Liste des Matières</h1>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg bg-white/10 backdrop-blur-md">
          <table className="min-w-full table-auto text-left text-white">
            <thead className="bg-white/20 text-sm uppercase">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Nom</th>
                <th className="px-6 py-4">Coefficient</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {matieres.map((matiere) => (
                <tr
                  key={matiere.id}
                  className="border-t border-white/20 hover:bg-white/10 transition"
                >
                  <td className="px-6 py-4">{matiere.id}</td>
                  <td className="px-6 py-4">{matiere.nom}</td>
                  <td className="px-6 py-4">{matiere.coefficient}</td>
                  <td className="px-6 py-4 text-center space-x-4">
                    <button
                      onClick={() => handleEdit(matiere.id)}
                      className="text-blue-400 hover:text-blue-600"
                      title="Éditer"
                    >
                      <Pencil size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(matiere.id)}
                      className="text-red-400 hover:text-red-600"
                      title="Supprimer"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
              {matieres.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-300">
                    Aucune matière enregistrée.
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

export default ListeMatieres;
