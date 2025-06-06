"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  FileText, 
  Settings, 
  Home,
  UserPlus,
  School,
  ClipboardList,
  AlertCircle,
  BarChart3,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Filter,
  ChevronRight,
  Menu,
  X,
  Bell,
  LogOut,
  User
} from 'lucide-react';

const SchoolManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({ name: 'Admin', role: 'SUPER_ADMIN' });
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data - in real app, this would come from API
  const [students, setStudents] = useState([
    { id: 1, nom: 'Doe', prenom: 'John', classe: 'CM2', section: 'Francophone', age: 12 },
    { id: 2, nom: 'Smith', prenom: 'Jane', classe: 'CM1', section: 'Anglophone', age: 11 },
    { id: 3, nom: 'Dupont', prenom: 'Pierre', classe: 'CE2', section: 'Bilingue', age: 10 }
  ]);

  const [teachers, setTeachers] = useState([
    { id: 1, nom: 'Martin', prenom: 'Sophie', matiere: 'Mathématiques', classe: 'CM2' },
    { id: 2, nom: 'Durand', prenom: 'Paul', matiere: 'Français', classe: 'CM1' }
  ]);

  const [classes, setClasses] = useState([
    { id: 1, nom: 'CM2-A', section: 'Francophone', effectif: 25, enseignant: 'Sophie Martin' },
    { id: 2, nom: 'CM1-B', section: 'Anglophone', effectif: 23, enseignant: 'Paul Durand' }
  ]);

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de Bord', icon: Home },
    { id: 'students', label: 'Élèves', icon: Users },
    { id: 'teachers', label: 'Enseignants', icon: GraduationCap },
    { id: 'classes', label: 'Classes', icon: School },
    { id: 'subjects', label: 'Matières', icon: BookOpen },
    { id: 'grades', label: 'Notes', icon: FileText },
    { id: 'attendance', label: 'Absences', icon: Calendar },
    { id: 'discipline', label: 'Discipline', icon: AlertCircle },
    { id: 'materials', label: 'Matériel', icon: ClipboardList },
    { id: 'reports', label: 'Rapports', icon: BarChart3 },
    { id: 'settings', label: 'Paramètres', icon: Settings }
  ];

  const StatCard: React.FC<{ title: string; value: string | number; icon: React.ElementType; color?: string }> = ({ title, value, icon: Icon, color = 'blue' }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-full bg-${color}-100`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord</h1>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Nouvelle Action
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Élèves" value="248" icon={Users} />
        <StatCard title="Enseignants" value="18" icon={GraduationCap} />
        <StatCard title="Classes" value="12" icon={School} />
        <StatCard title="Matières" value="10" icon={BookOpen} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Activités Récentes</h3>
          <div className="space-y-3">
            {[
              { action: 'Nouvel élève inscrit', details: 'Marie Dubois - CM1', time: '2h' },
              { action: 'Note ajoutée', details: 'Mathématiques - CM2', time: '4h' },
              { action: 'Absence signalée', details: 'Paul Martin - CE1', time: '6h' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                </div>
                <span className="text-xs text-gray-500">il y a {activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Statistiques Rapides</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Taux de Présence</span>
              <span className="font-bold text-green-600">94.5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '94.5%'}}></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Moyenne Générale</span>
              <span className="font-bold text-blue-600">14.2/20</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '71%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const StudentList = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Gestion des Élèves</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <UserPlus className="w-4 h-4 mr-2" />
          Nouvel Élève
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un élève..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4 mr-2" />
              Filtrer
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Élève</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classe</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Âge</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.filter(student => 
                student.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.prenom.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.prenom} {student.nom}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.classe}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {student.section}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.age} ans</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const TeacherList = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Gestion des Enseignants</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Nouvel Enseignant
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enseignant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matière</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classe</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{teacher.prenom} {teacher.nom}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.matiere}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.classe}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const ClassList = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Gestion des Classes</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Nouvelle Classe
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classe) => (
          <div key={classe.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{classe.nom}</h3>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <School className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Section: {classe.section}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Effectif: {classe.effectif} élèves</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Enseignant: {classe.enseignant}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center">
                <Eye className="w-4 h-4 mr-2" />
                Voir Détails
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const GenericPage: React.FC<{ title: string; icon: React.ElementType }> = ({ title, icon: Icon }) => (
    <div className="space-y-6">
      <div className="flex items-center">
        <Icon className="w-8 h-8 text-blue-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <Icon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Module {title}</h3>
        <p className="text-gray-600">Cette section sera développée pour gérer {title.toLowerCase()}.</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Commencer
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'students': return <StudentList />;
      case 'teachers': return <TeacherList />;
      case 'classes': return <ClassList />;
      case 'subjects': return <GenericPage title="Matières" icon={BookOpen} />;
      case 'grades': return <GenericPage title="Notes" icon={FileText} />;
      case 'attendance': return <GenericPage title="Absences" icon={Calendar} />;
      case 'discipline': return <GenericPage title="Discipline" icon={AlertCircle} />;
      case 'materials': return <GenericPage title="Matériel" icon={ClipboardList} />;
      case 'reports': return <GenericPage title="Rapports" icon={BarChart3} />;
      case 'settings': return <GenericPage title="Paramètres" icon={Settings} />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center ml-2 lg:ml-0">
              <School className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">EcoleManager</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700 hidden sm:block">{user.name}</span>
            </div>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative inset-y-0 left-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-30 lg:block`}>
          <div className="flex items-center justify-between p-4 lg:hidden">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="mt-4 lg:mt-0">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 text-left hover:bg-blue-50 transition-colors ${
                    activeTab === item.id ? 'bg-blue-50 border-r-2 border-blue-600 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                  {activeTab === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default SchoolManagementSystem;