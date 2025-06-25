'use client';
import React from 'react';
import { PackageSearch, PlusCircle, ClipboardList, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/navbar/header';

const cardClass =
  "bg-white/80 text-gray-900 rounded-2xl p-6 shadow-md text-center hover:shadow-xl hover:-translate-y-2 transform transition duration-300";

const Page = () => {
  return (
    <div className='w-full h-screen bg-white'>
      <Header/>
    <div className="min-h-screen w-full bg-[url('/materielimg.jpg')] bg-fixed bg-cover bg-center text-white">
      <div className="backdrop-brightness-50 min-h-screen py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Gestion du Matériel Scolaire</h1>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="/materiel/ajouter">
            <div className={cardClass}>
              <PlusCircle className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">Ajouter un Matériel</h3>
              <p>Entrée d'un nouveau matériel scolaire</p>
            </div>
          </Link>

          <Link href="/materiel/liste">
            <div className={cardClass}>
              <ClipboardList className="mx-auto text-blue-600" size={40} />
              <h3 className="font-semibold mt-4">Inventaire</h3>
              <p>Liste, états et localisation du matériel</p>
            </div>
          </Link>

          <Link href="/materiel/etat">
            <div className={cardClass}>
              <CheckCircle2 className="mx-auto text-lime-600" size={40} />
              <h3 className="font-semibold mt-4">État du Matériel</h3>
              <p>Suivi des réparations, remplacements ou pertes</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
