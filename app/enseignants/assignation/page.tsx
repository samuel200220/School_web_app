'use client';

import React, { useState } from 'react';
import { ClipboardCheck } from 'lucide-react';

const AssignationPage = () => {
  const [form, setForm] = useState({
    enseignant: '',
    classe: '',
    matiere: '',
  });

  const enseignants = ['Jean Mbarga', 'Sophie Nana', 'Paul Kouam'];
  const classes = ['CP', 'CE1', 'CE2', 'CM1', 'CM2'];
  const matieres = ['Mathématiques', 'Français', 'Histoire', 'Sciences', 'Anglais'];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assignation envoyée :', form);
    // Ici tu pourras intégrer un appel à ton backend
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-900 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <ClipboardCheck className="text-indigo-700" size={30} />
          <h1 className="text-2xl font-bold text-gray-800">Assignation Enseignant</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Enseignant</label>
            <select
              name="enseignant"
              value={form.enseignant}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm p-2"
            >
              <option value="">-- Sélectionner --</option>
              {enseignants.map((ens, i) => (
                <option key={i} value={ens}>{ens}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Classe</label>
            <select
              name="classe"
              value={form.classe}
              onChange={handleChange}
              required
              className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">-- Sélectionner --</option>
              {classes.map((classe, i) => (
                <option key={i} value={classe}>{classe}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Matière</label>
            <select
              name="matiere"
              value={form.matiere}
              onChange={handleChange}
              required
              className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">-- Sélectionner --</option>
              {matieres.map((matiere, i) => (
                <option key={i} value={matiere}>{matiere}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white font-semibold py-2 rounded-lg hover:bg-indigo-800 transition"
          >
            Assigner
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignationPage;
