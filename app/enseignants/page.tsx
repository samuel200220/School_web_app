'use client';
import React from 'react';
import { UserCog, PlusCircle, BookOpenCheck, Users2 } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/navbar/header';

const cardClass =
  "bg-white/80 text-gray-900 rounded-2xl p-6 shadow-md text-center hover:shadow-xl hover:-translate-y-2 transform transition duration-300";

const Page = () => {
  return (
    <div className='w-full h-screen bg-fixed bg-white'>
      <Header/>
    <div className="min-h-screen w-full bg-[url('/teacher.jpg')] bg-fixed bg-cover bg-center text-white">
      <div className="backdrop-brightness-50 min-h-screen py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Gestion des Enseignants</h1>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="/enseignants/ajouter">
            <div className={cardClass}>
              <PlusCircle className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">Ajouter un Enseignant</h3>
              <p>Formulaire d'inscription avec détails</p>
            </div>
          </Link>

          <Link href="/enseignants/liste">
            <div className={cardClass}>
              <Users2 className="mx-auto text-blue-600" size={40} />
              <h3 className="font-semibold mt-4">Liste des Enseignants</h3>
              <p>Consultation, modification, suppression</p>
            </div>
          </Link>

          <Link href="/enseignants/assignation">
            <div className={cardClass}>
              <BookOpenCheck className="mx-auto text-purple-600" size={40} />
              <h3 className="font-semibold mt-4">Assignation</h3>
              <p>Affectation aux classes et matières</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
