'use client';

import { useRouter } from 'next/navigation';
import { Brush, PlusCircle, ListOrdered } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/navbar/header';

const PersonnelEntretienPage = () => {
  const router = useRouter();

  return (
    <div className='w-full h-screen bg-fixed bg-white'>
      <Header/>
    <div className="min-h-screen w-full bg-[url('/entretien.jpg')] bg-fixed bg-cover bg-center p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center gap-4 mb-6">
          <Brush className="text-yellow-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-800">Personnel d'Entretien</h1>
        </div>

        <p className="text-gray-600 mb-6">
          Gérer les agents responsables de l’entretien des locaux, ainsi que les outils et fournitures scolaires.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/personnel-entretien/ajouter"
            className="flex items-center gap-4 p-6 rounded-xl shadow hover:shadow-lg bg-yellow-50 border border-yellow-200 hover:bg-yellow-100 transition"
          >
            <PlusCircle className="text-yellow-600" size={28} />
            <div>
              <h3 className="font-semibold text-yellow-700">Ajouter un agent</h3>
              <p className="text-sm text-yellow-600">Enregistrer un nouveau membre du personnel</p>
            </div>
          </Link>

          <Link
            href="/personnel-entretien/liste"
            className="flex items-center gap-4 p-6 rounded-xl shadow hover:shadow-lg bg-yellow-50 border border-yellow-200 hover:bg-yellow-100 transition"
          >
            <ListOrdered className="text-yellow-600" size={28} />
            <div>
              <h3 className="font-semibold text-yellow-700">Liste du personnel</h3>
              <p className="text-sm text-yellow-600">Afficher tous les membres d’entretien</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PersonnelEntretienPage;
