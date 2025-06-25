'use client'

import { Users2 } from 'lucide-react'
import Header from '../components/navbar/header'

export default function SectionsPage() {
  const sections = [
    { nom: 'Francophone', couleur: 'bg-blue-600' },
    { nom: 'Anglophone', couleur: 'bg-green-600' },
    { nom: 'Bilingue', couleur: 'bg-purple-600' },
  ]

  return (
    <div className='
  w-full h-screen bg-fixed bg-white'>
      <Header/>
    <div className="min-h-screen w-full p-6 bg-[url('/accueil.jpg')] bg-cover bg-center bg-fixed text-white backdrop-brightness-50">
      <h1 className="text-4xl font-bold mb-8 text-center">Gestion des Sections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div
            key={section.nom}
            className="bg-white/80 text-gray-900 rounded-2xl p-6 shadow-md text-center hover:shadow-xl hover:-translate-y-2 transform transition duration-300"
          >
            <Users2 className={`mx-auto ${section.couleur}`} size={40} />
            <h3 className="font-semibold mt-4">{section.nom}</h3>
            <p>Gestion des classes associées</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
