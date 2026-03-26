import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Camera, Briefcase, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-3xl font-serif font-bold text-gold">GoldPrime</span>
              <span className="text-sm tracking-widest uppercase font-sans text-white">Pinturas</span>
            </Link>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8">
              Transformando ambientes com excelência e sofisticação. Pintura residencial e comercial em toda Londrina e região.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 hover:border-gold hover:text-gold transition-all">
                <Camera size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 hover:border-gold hover:text-gold transition-all">
                <Share2 size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 hover:border-gold hover:text-gold transition-all">
                <Briefcase size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6 underline decoration-gold underline-offset-8">Links Rápidos</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400">
              <li><Link to="/servicos" className="hover:text-gold transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfólio</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Dicas de Pintura</Link></li>
              <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-gold transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6 underline decoration-gold underline-offset-8">Serviços</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400">
              <li><Link to="/servicos/pintura-residencial" className="hover:text-gold transition-colors">Pintura Residencial</Link></li>
              <li><Link to="/servicos/pintura-comercial" className="hover:text-gold transition-colors">Pintura Comercial</Link></li>
              <li><Link to="/servicos/pintura-interna" className="hover:text-gold transition-colors">Pintura Interna</Link></li>
              <li><Link to="/servicos/pintura-externa" className="hover:text-gold transition-colors">Pintura Externa</Link></li>
              <li><Link to="/servicos/mecanizada" className="hover:text-gold transition-colors">Pintura Mecanizada</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6 underline decoration-gold underline-offset-8">Contato</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold mt-1" size={18} />
                <span>Londrina, PR e Região Metropolitana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold" size={18} />
                <span>(43) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold" size={18} />
                <span>contato@goldprimepinturas.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center bg-transparent">
          <p className="text-gray-500 text-xs font-sans mb-4 md:mb-0">
            © {new Date().getFullYear()} GoldPrime Pinturas. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs font-sans">
            Desenvolvido por <a href="#" className="hover:text-gold">Evolvetech</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
