// app/dashboard/page.tsx ou pages/dashboard.tsx

'use client';

import { Users2, UserCog, ShieldCheck } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center">Tableau de Bord</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <UserCog size={40} className="mx-auto text-green-500" />
          <h2 className="mt-4 text-xl font-semibold">Enseignants</h2>
          <p className="text-3xl font-bold">48</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <Users2 size={40} className="mx-auto text-indigo-500" />
          <h2 className="mt-4 text-xl font-semibold">Élèves</h2>
          <p className="text-3xl font-bold">612</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <ShieldCheck size={40} className="mx-auto text-blue-500" />
          <h2 className="mt-4 text-xl font-semibold">Personnel Admin</h2>
          <p className="text-3xl font-bold">9</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
