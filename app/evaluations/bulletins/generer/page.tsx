'use client';

import React, { useState } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  tableHeader: { flexDirection: 'row', backgroundColor: '#f0f0f0', padding: 5 },
  tableRow: { flexDirection: 'row', padding: 5 },
  cell: { flex: 1, textAlign: 'center' },
});

const BulletinPDF = ({ student, sequence, notes }: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Bulletin Scolaire</Text>

      <View style={styles.section}>
        <Text>Nom : {student.nom}</Text>
        <Text>Classe : {student.classe}</Text>
        <Text>Sequence : {sequence}</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={styles.cell}>Matière</Text>
        <Text style={styles.cell}>Note</Text>
        <Text style={styles.cell}>Coefficient</Text>
        <Text style={styles.cell}>Total</Text>
      </View>

      {notes.map((note: any, idx: number) => (
        <View style={styles.tableRow} key={idx}>
          <Text style={styles.cell}>{note.matiere}</Text>
          <Text style={styles.cell}>{note.note}</Text>
          <Text style={styles.cell}>{note.coef}</Text>
          <Text style={styles.cell}>{(note.note * note.coef).toFixed(2)}</Text>
        </View>
      ))}

      <View style={{ marginTop: 20 }}>
        <Text>Total Général : {notes.reduce((acc: number, n: any) => acc + n.note * n.coef, 0).toFixed(2)}</Text>
        <Text>Moyenne Générale : {(notes.reduce((acc: number, n: any) => acc + n.note * n.coef, 0) / notes.reduce((acc: number, n: any) => acc + n.coef, 0)).toFixed(2)}</Text>
      </View>
    </Page>
  </Document>
);

export default function GenererBulletinPage() {
  const [student, setStudent] = useState({ nom: 'Jean Dupont', classe: 'CM2' });
  const [sequence, setSequence] = useState('Séquence 2');
  const [notes, setNotes] = useState([
    { matiere: 'Mathématiques', note: 15, coef: 3 },
    { matiere: 'Français', note: 14, coef: 2 },
    { matiere: 'Histoire', note: 13, coef: 1 },
  ]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Génération de Bulletin PDF</h1>

      <div className="mb-6">
        <label className="block mb-1 font-semibold">Séquence :</label>
        <select
          className="w-full border border-gray-300 p-2 rounded"
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
        >
          <option>Séquence 1</option>
          <option>Séquence 2</option>
          <option>Séquence 3</option>
          <option>Séquence 4</option>
          <option>Séquence 5</option>
          <option>Séquence 6</option>
        </select>
      </div>

      <div className="mt-8">
        <PDFDownloadLink
          document={<BulletinPDF student={student} sequence={sequence} notes={notes} />}
          fileName={`bulletin_${student.nom.replace(' ', '_')}_${sequence}.pdf`}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          {({ loading }) => (loading ? 'Génération...' : 'Télécharger le Bulletin PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
