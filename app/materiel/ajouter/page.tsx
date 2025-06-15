'use client';
import React, { useState } from 'react';
import { PackagePlus, Save } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AjouterMaterielPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    nom: '',
    type: '',
    quantite: '',
    etat: 'Neuf',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Matériel ajouté :', form);
    // Ici tu pourras remplacer par un appel API POST plus tard
    router.push('/materiel');
  };

  return (
    <div className="min-h-screen bg-[url('/materielimg.jpg')] bg-fixed bg-cover bg-center text-white">
      <div className="backdrop-brightness-50 min-h-screen py-16 flex items-center justify-center">
        <div className="bg-white/90 text-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <PackagePlus className="text-green-600" size={32} />
            <h2 className="text-2xl font-bold">Ajouter un Matériel</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">Nom du matériel</label>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ex: Tableau blanc"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Type</label>
              <input
                type="text"
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ex: Mobilier, Électronique, Fourniture..."
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Quantité</label>
              <input
                type="number"
                name="quantite"
                value={form.quantite}
                onChange={handleChange}
                required
                min={1}
                className="w-full px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">État</label>
              <select
                name="etat"
                value={form.etat}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="Neuf">Neuf</option>
                <option value="Bon">Bon</option>
                <option value="Abîmé">Abîmé</option>
                <option value="À remplacer">À remplacer</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex justify-center items-center gap-2"
            >
              <Save size={20} />
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjouterMaterielPage;
