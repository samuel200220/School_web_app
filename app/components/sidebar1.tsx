'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Menu, Home, User, Settings, LogOut,
  HelpCircle, LayoutDashboard, History, Crown,PartyPopper,
  ShieldCheck,
  UserCog,
  Brush,
  Users2,
  BookOpenCheck,
  UserCheck,
  BookMarked,
  ScrollText,
  PackageSearch,
  Scroll,
  GraduationCap,
  ClipboardList,
  FileBarChart,
  FileCheck
} from 'lucide-react';

export default function SidebarToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Fermer la sidebar en cliquant en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative w-10 h-10 flex bg-blue-700">
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full overflow-y-auto w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar"
      >
        <div className="p-5 text-2xl font-bold text-blue-700 text-center border-b border-gray-300 flex items-center gap-2">
          School & CO
          {/* <Crown className="w-6 h-6 text-yellow-500" /> */}
        </div>
        <nav className="p-4 space-y-4 text-gray-700">
          <NavItem href="/" icon={<PartyPopper />} label="Bienvenue" />
          <NavItem href="/dashboard" icon={<LayoutDashboard />} label="Tableau de bord" />
          <NavItem href="/personnel" icon={<ShieldCheck />} label="Personnel Admin" />
          <NavItem href="/enseignants" icon={<UserCog />} label="Enseignants" />
          <NavItem href="/personnel-entretien" icon={<Brush />} label="Entretien" />
          <NavItem href="/sections" icon={<Users2 />} label="Sections" />
          <NavItem href="/classes" icon={<BookOpenCheck />} label="Classes" />
          <NavItem href="/gestionpeleve" icon={<UserCheck />} label="Élèves" />
          <NavItem href="/matieres" icon={<BookMarked />} label="Matières" />
          <NavItem href="/notes" icon={<ScrollText />} label="Notes" />
          <NavItem href="/evaluations/bulletins" icon={<FileBarChart />} label="Bulletins" />
          <NavItem href="/evaluations/absences" icon={<ClipboardList />} label="Abscences" />
          <NavItem href="/discipline" icon={<FileCheck />} label="Discipline" />
          <NavItem href="/inscriptions" icon={<GraduationCap />} label="Inscriptions" />
          <NavItem href="/examens" icon={<Scroll />} label="Examens" />
          <NavItem href="/materiel" icon={<PackageSearch />} label="Matériel" />
        </nav>
      </aside>

      {/* Bouton d'ouverture */}
      <button
        className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-md shadow hover:bg-blue-800"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </button>
    </div>
  );
}

// Composant NavItem avec lien
function NavItem({ icon, label, href }: { icon: JSX.Element; label: string; href: string }) {
  return (
    <Link href={href}>
      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  );
}
