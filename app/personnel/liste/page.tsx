'use client';

import React, { useEffect, useState } from 'react';
import { ShieldCheck, Eye, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/components/navbar/header';

type Personnel = {
  id: number;
  nom: string;
  email: string;
  role: 'ADMIN' | 'SUPER_ADMIN';
};

const ListePersonnelPage = () => {
  const [personnels, setPersonnels] = useState<Personnel[]>([]);

  useEffect(() => {
    // Ici tu peux remplacer par un appel à ton API
    const fakeData: Personnel[] = [
      { id: 1, nom: 'Paul Martin', email: 'paul@ecole.com', role: 'ADMIN' },
      { id: 2, nom: 'Alice Ndem', email: 'alice@ecole.com', role: 'SUPER_ADMIN' },
    ];
    setPersonnels(fakeData);
  }, []);

  const handleDelete = (id: number) => {
    if (confirm('Confirmer la suppression de ce membre ?')) {
      setPersonnels((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="w-full h-screen bg-white">
      <Header/>
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-950 to-blue-900 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <ShieldCheck size={32} className="text-blue-400" />
            <h1 className="text-2xl font-bold">Liste du Personnel Administratif</h1>
          </div>
          <Link
            href="/personnel/ajouter"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            + Ajouter
          </Link>
        </div>

        <div className="overflow-x-auto bg-white/10 backdrop-blur-md rounded-xl shadow">
          <table className="min-w-full text-sm text-left text-white">
            <thead className="bg-white/20 text-white uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Nom</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Rôle</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {personnels.map((personnel) => (
                <tr
                  key={personnel.id}
                  className="border-b border-white/10 hover:bg-white/10 transition"
                >
                  <td className="px-6 py-4">{personnel.nom}</td>
                  <td className="px-6 py-4">{personnel.email}</td>
                  <td className="px-6 py-4 font-semibold">
                    {personnel.role === 'SUPER_ADMIN' ? (
                      <span className="text-yellow-400">{personnel.role}</span>
                    ) : (
                      <span className="text-blue-300">{personnel.role}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 flex justify-end gap-2">
                    <button className="text-green-400 hover:text-green-600">
                      <Eye size={18} />
                    </button>
                    <button className="text-yellow-400 hover:text-yellow-600">
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(personnel.id)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {personnels.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-white/70">
                    Aucun membre du personnel enregistré.
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

export default ListePersonnelPage;
