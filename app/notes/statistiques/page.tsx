'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import React from 'react';

const notesData = [
  { nom: 'Séquence 1', moyenne: 13.2 },
  { nom: 'Séquence 2', moyenne: 14.5 },
  { nom: 'Séquence 3', moyenne: 12.7 },
  { nom: 'Séquence 4', moyenne: 15.1 },
  { nom: 'Séquence 5', moyenne: 13.8 },
  { nom: 'Séquence 6', moyenne: 14.0 },
];

const repartitionData = [
  { name: 'Élèves', value: 400 },
  { name: 'Enseignants', value: 80 },
  { name: 'Personnel Entretien', value: 40 },
  { name: 'Administratifs', value: 20 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const StatistiquesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Statistiques Générales</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Graphique des Moyennes par Séquence */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Moyennes par Séquence</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={notesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nom" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="moyenne" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Graphique de Répartition */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Répartition des Personnels</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={repartitionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {repartitionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatistiquesPage;
