'use client';

import React, { useState } from 'react';
import { BookMarked, CheckCircle } from 'lucide-react';
import Header from '@/app/components/navbar/header';

const AjouterMatiere = () => {
  const [nom, setNom] = useState('');
  const [coefficient, setCoefficient] = useState(1);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulation d'envoi
    setMessage(`La matière "${nom}" (coef ${coefficient}) a été ajoutée.`);
    setNom('');
    setCoefficient(1);
  };

  return (
    <div className='w-full h-screen bg-white'>
      <Header/>
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 py-16 px-4 text-white">
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <BookMarked className="text-pink-400" size={32} />
          <h1 className="text-3xl font-bold">Ajouter une Matière</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Nom de la matière</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full rounded-lg px-4 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              placeholder="Ex: Mathématiques"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Coefficient</label>
            <input
              type="number"
              min={1}
              max={10}
              value={coefficient}
              onChange={(e) => setCoefficient(parseInt(e.target.value))}
              className="w-full rounded-lg px-4 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg font-semibold transition duration-200"
          >
            Ajouter
          </button>

          {message && (
            <div className="mt-4 flex items-center gap-2 text-green-400 font-medium">
              <CheckCircle size={20} />
              <span>{message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
    </div>
  );
};

export default AjouterMatiere;
