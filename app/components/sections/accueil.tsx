import React from 'react';
import {
  UserCog, ShieldCheck, Brush, BookOpenCheck, Users2, UserCheck,
  GraduationCap, ScrollText, BookMarked, FileBarChart,
  ClipboardList, FileCheck, PackageSearch
} from "lucide-react";
import Link from 'next/link';

const Accueil = () => {
  const sectionClass = "mt-16 max-w-7xl mx-auto px-4";
  const titleClass = "text-3xl font-bold text-white mb-8";

  const cardClass =
    "bg-white/80 text-gray-900 rounded-2xl p-6 shadow-md text-center hover:shadow-xl hover:-translate-y-2 transform transition duration-300";

  const gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";

  return (
    <div className="min-h-screen bg-[url('/accueil.jpg')] bg-cover bg-center bg-fixed text-white">
      <div className="backdrop-brightness-50 min-h-screen py-16">
        <h1 className="text-5xl text-center font-bold mb-12">
          Bienvenue sur le Portail de Gestion Scolaire
        </h1>

        {/* Section 1 - Gestion du Personnel */}
        <section className={sectionClass}>
          <h2 className={titleClass}>Gestion du Personnel</h2>
          <div className={gridClass}>
            <Link href={"/personnel"}>
            <div className={cardClass}>
              <ShieldCheck className="mx-auto text-blue-600" size={40} />
              <h3 className="font-semibold mt-4">Personnel Administratif</h3>
              <p>ADMIN et SUPER_ADMIN avec authentification JWT</p>
            </div>
            </Link>
            <Link href={'/enseignants'}>
            <div className={cardClass}>
              <UserCog className="mx-auto text-green-600" size={40} />
              <h3 className="font-semibold mt-4">Enseignants</h3>
              <p>Assignation aux classes et matières</p>
            </div>
            </Link>
            <Link href={'/personnel-entretien'}>
            <div className={cardClass}>
              <Brush className="mx-auto text-yellow-600" size={40} />
              <h3 className="font-semibold mt-4">Personnel d'Entretien</h3>
              <p>Gestion du matériel scolaire</p>
            </div>
            </Link>
          </div>
        </section>

        {/* Section 2 - Gestion Pédagogique */}
        <section className={sectionClass}>
          <h2 className={titleClass}>Gestion Pédagogique</h2>
          <div className={gridClass}>
            <div className={cardClass}>
              <Users2 className="mx-auto text-purple-600" size={40} />
              <h3 className="font-semibold mt-4">Sections</h3>
              <p>Francophone, Anglophone, Bilingue</p>
            </div>
            <div className={cardClass}>
              <BookOpenCheck className="mx-auto text-red-600" size={40} />
              <h3 className="font-semibold mt-4">Classes</h3>
              <p>Maternelle, CP, CE1, CE2, CM1, CM2</p>
            </div>
            <Link href={'/gestionpeleve'}>
            <div className={cardClass}>
              <UserCheck className="mx-auto text-indigo-600" size={40} />
              <h3 className="font-semibold mt-4">Élèves</h3>
              <p>Inscription, suivi, statistiques</p>
            </div>
            </Link>
            <Link href={'/matieres'}>
            <div className={cardClass}>
              <BookMarked className="mx-auto text-pink-600" size={40} />
              <h3 className="font-semibold mt-4">Matières</h3>
              <p>10 matières avec coefficients</p>
            </div>
            </Link>
          </div>
        </section>

        {/* Section 3 - Évaluations et Suivi */}
        <section className={sectionClass}>
          <h2 className={titleClass}>Évaluations et Suivi</h2>
          <div className={gridClass}>
            <Link href={"/notes"}>
            <div className={cardClass}>
              <ScrollText className="mx-auto text-rose-600" size={40} />
              <h3 className="font-semibold mt-4">Notes</h3>
              <p>Système de notation par séquences (1-6)</p>
            </div>
            </Link>
            <Link href={"/evaluations/bulletins"}>
            <div className={cardClass}>
              <FileBarChart className="mx-auto text-teal-600" size={40} />
              <h3 className="font-semibold mt-4">Bulletins</h3>
              <p>Génération automatique avec moyennes et classements</p>
            </div>
            </Link>
            <Link href={"/evaluations/absences"}>
            <div className={cardClass}>
              <ClipboardList className="mx-auto text-orange-600" size={40} />
              <h3 className="font-semibold mt-4">Absences</h3>
              <p>Suivi avec justifications</p>
            </div>
            </Link>
            <div className={cardClass}>
              <FileCheck className="mx-auto text-lime-600" size={40} />
              <h3 className="font-semibold mt-4">Discipline</h3>
              <p>Gestion des dossiers disciplinaires</p>
            </div>
          </div>
        </section>

        {/* Section 4 - Gestion Administrative */}
        <section className={sectionClass}>
          <h2 className={titleClass}>Gestion Administrative</h2>
          <div className={gridClass}>
            <div className={cardClass}>
              <GraduationCap className="mx-auto text-fuchsia-600" size={40} />
              <h3 className="font-semibold mt-4">Inscriptions</h3>
              <p>Suivi des paiements et états</p>
            </div>
            <div className={cardClass}>
              <ScrollText className="mx-auto text-sky-600" size={40} />
              <h3 className="font-semibold mt-4">Examens</h3>
              <p>Dossiers d'examens officiels</p>
            </div>
            <Link href={'/materiel'}>
            <div className={cardClass}>
              <PackageSearch className="mx-auto text-amber-600" size={40} />
              <h3 className="font-semibold mt-4">Matériel</h3>
              <p>Inventaire et état du matériel scolaire</p>
            </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Accueil;
