"use client";
import Header from '@/app/components/navbar/header';
import React, { useState } from 'react';

const AjouterNote = () => {
  const [formData, setFormData] = useState({
    eleve: '',
    matiere: '',
    sequence: '',
    note: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Note soumise :', formData);
    // Intégrer ici une requête POST vers une API si nécessaire
  };

  return (
    <div className='w-full h-screen bg-white'>
      <Header/>
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-white to-rose-100 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-rose-600 mb-6 text-center">Ajouter une Note</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Élève</label>
            <input
              type="text"
              name="eleve"
              value={formData.eleve}
              onChange={handleChange}
              required
              className="w-full border text-black border-gray-300 rounded-md p-2 mt-1"
              placeholder="Nom de l'élève"
            />
          </div>
          <div>
            <label className="block text-gray-700">Matière</label>
            <input
              type="text"
              name="matiere"
              value={formData.matiere}
              onChange={handleChange}
              required
              className="w-full border text-black border-gray-300 rounded-md p-2 mt-1"
              placeholder="Nom de la matière"
            />
          </div>
          <div>
            <label className="block text-gray-700">Séquence</label>
            <select
              name="sequence"
              value={formData.sequence}
              onChange={handleChange}
              required
              className="w-full border text-black border-gray-300 rounded-md p-2 mt-1"
            >
              <option value="">-- Choisir une séquence --</option>
              <option value="1">Séquence 1</option>
              <option value="2">Séquence 2</option>
              <option value="3">Séquence 3</option>
              <option value="4">Séquence 4</option>
              <option value="5">Séquence 5</option>
              <option value="6">Séquence 6</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Note</label>
            <input
              type="number"
              name="note"
              min="0"
              max="20"
              value={formData.note}
              onChange={handleChange}
              required
              className="w-full border text-black border-gray-300 rounded-md p-2 mt-1"
              placeholder="Note sur 20"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition"
          >
            Enregistrer la Note
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AjouterNote;
