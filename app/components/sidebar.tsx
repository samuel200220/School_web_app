'use client'

import {
  ShieldCheck, UserCog, Brush, Users2, BookOpenCheck, UserCheck,
  BookMarked, ScrollText, FileBarChart, ClipboardList, FileCheck,
  GraduationCap, PackageSearch, LayoutDashboard, Scroll,FileText
} from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { href: '/dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
  { href: '/', label: 'Accueil', icon: FileText },
  { href: '/personnel', label: 'Personnel Admin', icon: ShieldCheck },
  { href: '/enseignants', label: 'Enseignants', icon: UserCog },
  { href: '/personnel-entretien', label: 'Entretien', icon: Brush },
  { href: '/sections', label: 'Sections', icon: Users2 },
  { href: '/classes', label: 'Classes', icon: BookOpenCheck },
  { href: '/gestionpeleve', label: 'Élèves', icon: UserCheck },
  { href: '/matieres', label: 'Matières', icon: BookMarked },
  { href: '/notes', label: 'Notes', icon: ScrollText },
  { href: '/evaluations/bulletins', label: 'Bulletins', icon: FileBarChart },
  { href: '/evaluations/absences', label: 'Absences', icon: ClipboardList },
  { href: '/discipline', label: 'Discipline', icon: FileCheck },
  { href: '/inscriptions', label: 'Inscriptions', icon: GraduationCap },
  { href: '/examens', label: 'Examens', icon: Scroll },
  { href: '/materiel', label: 'Matériel', icon: PackageSearch },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    // <aside className="w-64 bg-black/70 backdrop-blur-lg p-6 hidden md:block">
    <aside className="w-64 bg-blue-900 text-white overflow-y-auto h-screen p-4">
      <h2 className="text-xl font-bold mb-6 text-center">Portail Scolaire</h2>
      <nav className="space-y-2">
        {menuItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition hover:bg-white/10 ${
              pathname.startsWith(href) ? 'bg-white/20 font-bold' : ''
            }`}
          >
            <Icon size={20} />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
