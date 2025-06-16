"use client";

import React from "react";
import Link from "next/link";

const BulletinsPage = () => {
  return (
    <div className="min-h-screen bg-gray-600 p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Bulletins des Élèves</h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <Link
            href="/evaluations/bulletins"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Générer un bulletin
          </Link>
          <input
            type="text"
            placeholder="Rechercher par nom ou classe..."
            className="px-4 py-2 text-black border border-gray-300 rounded-lg w-full sm:w-80"
          />
        </div>

        {/* Exemple de tableau */}
        <table className="w-full border border-gray-300 rounded overflow-hidden">
          <thead className="bg-gray-200 text-left text-sm text-gray-700">
            <tr>
              <th className="p-3">Élève</th>
              <th className="p-3">Classe</th>
              <th className="p-3">Moyenne</th>
              <th className="p-3">Rang</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            <tr className="border-t">
              <td className="p-3">Ngapgou Farelle</td>
              <td className="p-3">CM2</td>
              <td className="p-3">16.5</td>
              <td className="p-3">1er</td>
              <td className="p-3 space-x-2">
                <button className="text-blue-600 hover:underline">Voir</button>
                <button className="text-red-600 hover:underline">Supprimer</button>
              </td>
            </tr>
            {/* Autres lignes */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BulletinsPage;
