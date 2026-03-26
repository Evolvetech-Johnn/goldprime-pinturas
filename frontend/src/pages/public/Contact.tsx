import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gold font-bold tracking-[0.3em] uppercase text-sm block mb-6"
                >
                  Fale Conosco
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl font-serif text-black-rich mb-8"
                >
                  Dê o <br /> <span className="italic text-gold">Primeiro Passo</span> <br /> para a Mudança.
                </motion.h1>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="h-14 w-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-black transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Telefone / WhatsApp</p>
                    <p className="text-xl font-serif font-bold text-black-rich">(43) 99999-9999</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="h-14 w-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-black transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">E-mail Corporativo</p>
                    <p className="text-xl font-serif font-bold text-black-rich">contato@goldprime.com</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="h-14 w-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-black transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Escritório Central</p>
                    <p className="text-xl font-serif font-bold text-black-rich">Londrina, PR - Gleba Palhano</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 flex gap-4">
                <button className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                  <Instagram size={20} />
                </button>
                <button className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                  <Facebook size={20} />
                </button>
                <button className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all">
                  <MessageCircle size={20} />
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-12 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-3xl font-serif font-bold text-black-rich mb-10">Solicite uma Consultoria</h3>
                
                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Nome Completo</label>
                      <input type="text" className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-gold/20 transition-all" placeholder="Como podemos te chamar?" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Celular com DDD</label>
                      <input type="tel" className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-gold/20 transition-all" placeholder="(00) 00000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Tipo de Serviço</label>
                    <select className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-gold/20 transition-all appearance-none cursor-pointer">
                      <option>Pintura Residencial Luxo</option>
                      <option>Pintura Comercial / Corporativa</option>
                      <option>Acabamentos Especiais / Texturas</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Mensagem ou Detalhes</label>
                    <textarea rows={4} className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-gold/20 transition-all resize-none" placeholder="Conte-nos um pouco sobre seu projeto..."></textarea>
                  </div>

                  <Button variant="cta" fullWidth className="py-5 font-black text-sm uppercase tracking-[0.3em]">
                    Enviar Solicitação Premium
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
