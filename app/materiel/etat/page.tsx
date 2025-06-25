'use client';
import React from 'react';
import { BarChart2, PackageSearch } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import Header from '@/app/components/navbar/header';

const etatData = [
  { etat: 'Neuf', quantite: 12 },
  { etat: 'Bon', quantite: 25 },
  { etat: 'Usé', quantite: 7 },
  { etat: 'À remplacer', quantite: 4 },
];

const EtatMaterielPage = () => {
  return (
    <div className='w-full h-screen bg-white'>
      <Header/>
    <div className="min-h-screen w-full bg-[url('/materielimg.jpg')] bg-fixed bg-cover bg-center text-white">
      <div className="backdrop-brightness-50 min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="bg-white/90 text-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <BarChart2 className="text-amber-600" size={32} />
            <h2 className="text-2xl font-bold">État des Matériels</h2>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={etatData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="etat" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantite" fill="#f59e0b" name="Quantité" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div> 
    </div>
  );
};

export default EtatMaterielPage;
