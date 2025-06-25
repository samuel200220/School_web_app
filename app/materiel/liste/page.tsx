'use client';
import React from 'react';
import { PackageSearch, Pencil, Trash2 } from 'lucide-react';
import Header from '@/app/components/navbar/header';

const materielsMock = [
  { id: 1, nom: 'Tableau blanc', type: 'Mobilier', quantite: 3, etat: 'Bon' },
  { id: 2, nom: 'Projecteur', type: 'Électronique', quantite: 2, etat: 'Neuf' },
  { id: 3, nom: 'Chaises', type: 'Mobilier', quantite: 40, etat: 'À remplacer' },
  { id: 4, nom: 'Craies', type: 'Fourniture', quantite: 100, etat: 'Bon' },
];

const ListeMaterielPage = () => {
  return (
    <div className='w-full h-screen bg-white'>
      <Header/>
    <div className="min-h-screen w-full bg-[url('/materielimg.jpg')] bg-fixed bg-cover bg-center text-white">
      <div className="backdrop-brightness-50 min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="bg-white/90 text-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-6xl">
          <div className="flex items-center gap-3 mb-6">
            <PackageSearch className="text-amber-600" size={32} />
            <h2 className="text-2xl font-bold">Liste des Matériels</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 rounded-lg">
              <thead className="bg-amber-100 text-amber-900">
                <tr>
                  <th className="px-4 py-2 text-left">Nom</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-center">Quantité</th>
                  <th className="px-4 py-2 text-center">État</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {materielsMock.map((m) => (
                  <tr key={m.id} className="border-t hover:bg-gray-100">
                    <td className="px-4 py-3">{m.nom}</td>
                    <td className="px-4 py-3">{m.type}</td>
                    <td className="px-4 py-3 text-center">{m.quantite}</td>
                    <td className="px-4 py-3 text-center">{m.etat}</td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-blue-600 hover:text-blue-800 mx-1">
                        <Pencil size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800 mx-1">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
                {materielsMock.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center text-gray-500 py-4">
                      Aucun matériel enregistré.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ListeMaterielPage;
