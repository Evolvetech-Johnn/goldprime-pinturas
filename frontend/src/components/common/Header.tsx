import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col group">
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${scrolled ? 'text-white' : 'text-gold'}`}>GoldPrime</span>
          <span className={`text-[10px] tracking-[0.4em] uppercase font-sans font-black transition-colors ${scrolled ? 'text-gold' : 'text-white/80'}`}>Pinturas</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`font-sans text-xs font-bold uppercase tracking-widest transition-all hover:text-gold relative group ${location.pathname === link.path ? 'text-gold' : (scrolled ? 'text-white' : 'text-white/80')}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'group-hover:w-full'}`}></span>
            </Link>
          ))}
          <Button variant="primary" className="text-xs px-8 py-3 rounded-full">
            <MessageSquare size={14} />
            Solicitar Orçamento
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={`font-sans text-lg ${location.pathname === link.path ? 'text-gold font-bold' : 'text-black'}`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="cta" fullWidth className="flex justify-center items-center gap-2">
            <MessageSquare size={18} />
            Pedir Orçamento
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
