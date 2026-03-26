import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/login`, {
        email,
        password,
      });
      
      login(response.data);
      navigate('/admin/dashboard');
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Erro ao fazer login. Tente novamente.');
      } else {
        setError('Ocorreu um erro inesperado.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-12 rounded-[40px] relative z-10 shadow-2xl"
      >
        <div className="text-center mb-12">
          <motion.div 
            initial={{ rotate: -20, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-gold to-gold-dark mb-8 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          >
            <Lock className="text-black" size={40} strokeWidth={2.5} />
          </motion.div>
          <h1 className="text-4xl font-serif font-bold text-white mb-3">Portal GoldPrime</h1>
          <p className="text-gray-500 font-sans tracking-wide text-sm uppercase">Acesso Reservado à Administração</p>
          
          {error && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold rounded-2xl flex items-center gap-3"
            >
              <div className="h-2 w-2 bg-red-500 rounded-full animate-ping"></div>
              {error}
            </motion.div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-2">Identificação de E-mail</label>
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-gold transition-colors" size={18} />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/5 text-white pl-14 pr-6 py-5 rounded-2xl focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all placeholder:text-gray-700"
                placeholder="exemplo@goldprime.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-2">Chave de Segurança</label>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-gold transition-colors" size={18} />
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/5 text-white pl-14 pr-14 py-5 rounded-2xl focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all placeholder:text-gray-700"
                placeholder="••••••••••••"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gold transition-colors p-2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button type="submit" variant="cta" fullWidth className="py-5 font-black text-sm uppercase tracking-[0.3em] shadow-lg shadow-gold/20" disabled={loading}>
            {loading ? 'Validando...' : 'Autenticar Acesso'}
          </Button>
        </form>

        <div className="mt-10 text-center">
          <button className="text-sm text-gray-500 hover:text-gold transition-colors">
            Esqueceu sua senha?
          </button>
        </div>
      </motion.div>
      
      {/* Footer Branding */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-gray-700 font-bold uppercase tracking-[0.4em]">
        GoldPrime Pinturas © 2024 • Excellence in every stroke
      </div>
    </div>
  );
};

export default Login;
