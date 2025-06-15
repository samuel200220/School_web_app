'use client';

import React, { useState } from 'react';
import { ShieldPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AjouterPersonnelPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    role: 'ADMIN',
    motDePasse: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Appelle à ton API backend ici
    console.log('Membre ajouté :', formData);
    router.push('/personnel');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-sky-900 text-white py-16 px-4">
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <ShieldPlus size={28} className="text-blue-400" />
          <h1 className="text-2xl font-bold">Ajouter un Membre du Personnel</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Nom complet</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/90 text-gray-900 px-4 py-2 shadow focus:outline-none"
              placeholder="Ex: Paul Martin"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Adresse email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/90 text-gray-900 px-4 py-2 shadow focus:outline-none"
              placeholder="exemple@domaine.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Rôle</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-lg bg-white/90 text-gray-900 px-4 py-2 shadow focus:outline-none"
            >
              <option value="ADMIN">ADMIN</option>
              <option value="SUPER_ADMIN">SUPER_ADMIN</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mot de passe</label>
            <input
              type="password"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/90 text-gray-900 px-4 py-2 shadow focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AjouterPersonnelPage;
