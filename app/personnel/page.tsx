'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/navbar/header';

const PersonnelPage = () => {
  return (
    <div className='w-full h-screen bg-fixed bg-white'>
      <Header/>
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 to-sky-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <ShieldCheck size={32} className="text-blue-400" />
          <h1 className="text-3xl font-bold">Gestion du Personnel Administratif</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/personnel/ajouter" className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow hover:bg-white/20 transition">
            <h2 className="text-xl font-semibold mb-2">Ajouter un membre</h2>
            <p>Créer un compte ADMIN ou SUPER_ADMIN</p>
          </Link>

          <Link href="/personnel/liste" className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow hover:bg-white/20 transition">
            <h2 className="text-xl font-semibold mb-2">Liste du personnel</h2>
            <p>Voir, modifier ou désactiver les comptes</p>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PersonnelPage;
