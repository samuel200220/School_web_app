'use client';

import React, { useState } from 'react';

const mockNotes = [
  { id: 1, eleve: 'Kamga Lionel', matiere: 'Mathématiques', sequence: 1, note: 16 },
  { id: 2, eleve: 'Ngapgou Farelle', matiere: 'Français', sequence: 1, note: 14.5 },
  { id: 3, eleve: 'Kamga Lionel', matiere: 'Histoire', sequence: 2, note: 12 },
  { id: 4, eleve: 'Ngapgou Farelle', matiere: 'Mathématiques', sequence: 2, note: 18 },
];

const NotesPage = () => {
  const [sequence, setSequence] = useState(1);

  const filteredNotes = mockNotes.filter((note) => note.sequence === sequence);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Notes – Séquence {sequence}</h1>

        <div className="mb-6">
          <label className="mr-2 font-medium text-gray-700">Sélectionner une séquence :</label>
          <select
            className="border border-gray-300 rounded-md px-3 py-1 text-gray-800"
            value={sequence}
            onChange={(e) => setSequence(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6].map((seq) => (
              <option key={seq} value={seq}>
                Séquence {seq}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg text-black shadow-md overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left text-black px-4 py-2">Élève</th>
                <th className="text-left text-black px-4 py-2">Matière</th>
                <th className="text-left text-black px-4 py-2">Note (/20)</th>
              </tr>
            </thead>
            <tbody>
              {filteredNotes.length > 0 ? (
                filteredNotes.map((note) => (
                  <tr key={note.id} className="border-t text-black">
                    <td className="px-4 py-2">{note.eleve}</td>
                    <td className="px-4 py-2">{note.matiere}</td>
                    <td className="px-4 py-2">{note.note}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-4 py-4 text-center text-gray-500">
                    Aucune note enregistrée pour cette séquence.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
