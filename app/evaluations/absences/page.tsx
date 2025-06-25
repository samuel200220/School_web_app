'use client';

import Link from 'next/link';
import { ClipboardPlus, List } from 'lucide-react';
import Header from '@/app/components/navbar/header';

export default function AbsencesPage() {
  return (
    <div className='w-full h-screen bg-fixed bg-white'>
      <Header/>
    <div className="mx-auto w-full h-screen py-12 px-4 bg-blue-600">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Gestion des Absences</h1>

      <div className="grid sm:grid-cols-2 gap-6">
        <Link
          href="/evaluations/absences/ajouter"
          className="bg-white border border-gray-200 text-black rounded-xl shadow p-6 hover:shadow-lg transition"
        >
          <div className="flex items-center justify-center mb-4">
            <ClipboardPlus className="text-green-600" size={40} />
          </div>
          <h3 className="text-lg font-semibold text-black text-center">Ajouter une absence</h3>
        </Link>

        <Link
          href="/evaluations/absences/liste"
          className="bg-white border border-gray-200 text-black rounded-xl shadow p-6 hover:shadow-lg transition"
        >
          <div className="flex items-center justify-center mb-4">
            <List className="text-blue-600" size={40} />
          </div>
          <h3 className="text-lg font-semibold text-black text-center">Liste des absences</h3>
        </Link>
      </div>
    </div>
    </div>
  );
}
