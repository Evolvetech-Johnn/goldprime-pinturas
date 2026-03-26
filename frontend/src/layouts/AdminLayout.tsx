import React, { useState } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell
} from 'lucide-react';

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Leads', path: '/admin/leads', icon: Users },
    { name: 'Orçamentos', path: '/admin/quotes', icon: MessageSquare },
    { name: 'Portfólio', path: '/admin/portfolio', icon: Briefcase },
    { name: 'Blog', path: '/admin/blog', icon: FileText },
    { name: 'Configurações', path: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    // Logout logic
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-off-white flex">
      {/* Sidebar */}
      <aside className={`bg-black-rich text-white transition-all duration-500 ease-in-out flex flex-col relative z-20 ${isSidebarOpen ? 'w-72' : 'w-24'}`}>
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <Link to="/admin/dashboard" className={`font-serif font-black text-2xl text-gold tracking-tight ${!isSidebarOpen && 'hidden'}`}>
            Gold<span className="text-white">Prime</span>
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="h-10 w-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-gold transition-all hover:bg-white/10"
          >
            {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className="flex-1 mt-10 px-6 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
                location.pathname === item.path 
                ? 'bg-gold text-black shadow-lg shadow-gold/20' 
                : 'hover:bg-white/5 text-gray-500 hover:text-white'
              }`}
            >
              <item.icon size={20} className={location.pathname === item.path ? 'text-black' : 'group-hover:text-gold'} />
              {isSidebarOpen && <span className="font-bold text-sm tracking-wide">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl w-full text-gray-500 hover:bg-red-500/10 hover:text-red-400 transition-all font-bold text-sm"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span>Encerrar Sessão</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-10 relative z-10 font-sans">
          <div>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Visão Geral</p>
            <h2 className="text-2xl font-serif font-bold text-black-rich">
              {menuItems.find(item => item.path === location.pathname)?.name || 'Administração'}
            </h2>
          </div>
          
          <div className="flex items-center gap-8">
            <button className="h-12 w-12 rounded-2xl bg-gray-50 text-gray-400 hover:text-gold transition-all flex items-center justify-center relative group">
              <Bell size={22} />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-gold rounded-full border-2 border-white"></span>
            </button>

            <div className="flex items-center gap-4 pl-8 border-l border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-black-rich leading-none tracking-tight">Admin GoldPrime</p>
                <p className="text-[10px] text-gray-400 font-bold mt-1.5 uppercase tracking-widest">Master Cloud</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-black font-black text-lg shadow-lg shadow-gold/20">
                G
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-10 bg-off-white/50">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
