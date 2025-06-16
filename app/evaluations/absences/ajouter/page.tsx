'use client';

import { useState } from 'react';

export default function AjouterAbsence() {
  const [formData, setFormData] = useState({
    nomEleve: '',
    classe: '',
    date: '',
    motif: '',
    justifiee: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Absence enregistrée :', formData);
    alert('Absence ajoutée avec succès.');
    setFormData({
      nomEleve: '',
      classe: '',
      date: '',
      motif: '',
      justifiee: false,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-white to-green-300 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Ajouter une Absence</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Nom de l'élève</label>
            <input
              type="text"
              name="nomEleve"
              value={formData.nomEleve}
              onChange={handleChange}
              required
              className="w-full text-black border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Classe</label>
            <input
              type="text"
              name="classe"
              value={formData.classe}
              onChange={handleChange}
              required
              className="w-full text-black border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Date de l'absence</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full text-black border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Motif</label>
            <textarea
              name="motif"
              value={formData.motif}
              onChange={handleChange}
              rows={3}
              required
              className="w-full text-black border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="justifiee"
              checked={formData.justifiee}
              onChange={handleChange}
              className="h-5 w-5 text-green-600"
            />
            <label className="text-gray-700">Absence justifiée</label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}
