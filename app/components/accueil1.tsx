'use client';

import React, { JSX, useState } from 'react';
import {
  UserCog, ShieldCheck, Brush, BookOpenCheck, Users2, UserCheck,
  GraduationCap, ScrollText, BookMarked, FileBarChart,
  ClipboardList, FileCheck, PackageSearch, LayoutGrid
} from "lucide-react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Accueil = () => {
  const [selectedSection, setSelectedSection] = useState('personnel');
  const router = useRouter();

  const sections = [
    { key: 'dashboard', label: 'Tableau de bord' },
    { key: 'personnel', label: 'Gestion du Personnel' },
    { key: 'pedagogique', label: 'Gestion Pédagogique' },
    { key: 'evaluation', label: 'Évaluations et Suivi' },
    { key: 'administratif', label: 'Gestion Administrative' },
  ];

  const handleSectionClick = (key: string) => {
    if (key === 'dashboard') {
      router.push('/dashboard'); // redirection vers la page de stats
    } else {
      setSelectedSection(key);
    }
  };

  const sectionCards: Record<string, JSX.Element[]> = {
    personnel: [
      <Link href="/personnel" key="admin">
        <div className={cardClass}>
          <ShieldCheck className="mx-auto text-blue-600" size={40} />
          <h3 className="font-semibold mt-4">Personnel Administratif</h3>
          <p>ADMIN et SUPER_ADMIN avec authentification JWT</p>
        </div>
      </Link>,
      <Link href="/enseignants" key="enseignants">
        <div className={cardClass}>
          <UserCog className="mx-auto text-green-600" size={40} />
          <h3 className="font-semibold mt-4">Enseignants</h3>
          <p>Assignation aux classes et matières</p>
        </div>
      </Link>,
      <Link href="/personnel-entretien" key="entretien">
        <div className={cardClass}>
          <Brush className="mx-auto text-yellow-600" size={40} />
          <h3 className="font-semibold mt-4">Personnel d'Entretien</h3>
          <p>Gestion du matériel scolaire</p>
        </div>
      </Link>,
    ],
    pedagogique: [
      <div className={cardClass} key="sections">
        <Users2 className="mx-auto text-purple-600" size={40} />
        <h3 className="font-semibold mt-4">Sections</h3>
        <p>Francophone, Anglophone, Bilingue</p>
      </div>,
      <div className={cardClass} key="classes">
        <BookOpenCheck className="mx-auto text-red-600" size={40} />
        <h3 className="font-semibold mt-4">Classes</h3>
        <p>Maternelle, CP, CE1, CE2, CM1, CM2</p>
      </div>,
      <Link href="/gestionpeleve" key="eleves">
        <div className={cardClass}>
          <UserCheck className="mx-auto text-indigo-600" size={40} />
          <h3 className="font-semibold mt-4">Élèves</h3>
          <p>Inscription, suivi, statistiques</p>
        </div>
      </Link>,
      <Link href="/matieres" key="matieres">
        <div className={cardClass}>
          <BookMarked className="mx-auto text-pink-600" size={40} />
          <h3 className="font-semibold mt-4">Matières</h3>
          <p>10 matières avec coefficients</p>
        </div>
      </Link>,
    ],
    evaluation: [
      <Link href="/notes" key="notes">
        <div className={cardClass}>
          <ScrollText className="mx-auto text-rose-600" size={40} />
          <h3 className="font-semibold mt-4">Notes</h3>
          <p>Système de notation par séquences (1-6)</p>
        </div>
      </Link>,
      <Link href="/evaluations/bulletins" key="bulletins">
        <div className={cardClass}>
          <FileBarChart className="mx-auto text-teal-600" size={40} />
          <h3 className="font-semibold mt-4">Bulletins</h3>
          <p>Génération automatique avec moyennes et classements</p>
        </div>
      </Link>,
      <Link href="/evaluations/absences" key="absences">
        <div className={cardClass}>
          <ClipboardList className="mx-auto text-orange-600" size={40} />
          <h3 className="font-semibold mt-4">Absences</h3>
          <p>Suivi avec justifications</p>
        </div>
      </Link>,
      <div className={cardClass} key="discipline">
        <FileCheck className="mx-auto text-lime-600" size={40} />
        <h3 className="font-semibold mt-4">Discipline</h3>
        <p>Gestion des dossiers disciplinaires</p>
      </div>,
    ],
    administratif: [
      <div className={cardClass} key="inscriptions">
        <GraduationCap className="mx-auto text-fuchsia-600" size={40} />
        <h3 className="font-semibold mt-4">Inscriptions</h3>
        <p>Suivi des paiements et états</p>
      </div>,
      <div className={cardClass} key="examens">
        <ScrollText className="mx-auto text-sky-600" size={40} />
        <h3 className="font-semibold mt-4">Examens</h3>
        <p>Dossiers d'examens officiels</p>
      </div>,
      <Link href="/materiel" key="materiel">
        <div className={cardClass}>
          <PackageSearch className="mx-auto text-amber-600" size={40} />
          <h3 className="font-semibold mt-4">Matériel</h3>
          <p>Inventaire et état du matériel scolaire</p>
        </div>
      </Link>,
    ],
  };

  return (
    <div className="min-h-screen flex bg-[url('/accueil.jpg')] bg-cover bg-center bg-fixed text-center text-white">

      {/* Main content */}
      <div className="flex items-center p-6 backdrop-brightness-50 min-h-screen text-center overflow-y-auto">
        <h1 className="text-8xl font-bold mb-8 text-center">
          Bienvenue sur le Portail de Gestion Scolaire
        </h1>
      </div>
    </div>
  );
};

const cardClass =
  "bg-white/80 text-gray-900 rounded-2xl p-6 shadow-md text-center hover:shadow-xl hover:-translate-y-2 transform transition duration-300";

export default Accueil;
