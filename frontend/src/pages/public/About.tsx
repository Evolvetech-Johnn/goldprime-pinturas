import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Sparkles, Paintbrush2, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-off-white">
      <div className="container mx-auto px-6">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1595844730298-b960ff98fed0?q=80&w=1470&auto=format&fit=crop" 
                alt="Equipe GoldPrime" 
                className="rounded-[40px] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-black-rich p-10 rounded-[30px] border border-gold/20 shadow-2xl hidden md:block">
                <p className="text-gold text-5xl font-serif font-black mb-2">15+</p>
                <p className="text-white text-xs uppercase tracking-widest font-bold">Anos de Maestria</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gold font-bold tracking-[0.3em] uppercase text-sm block"
            >
              Nossa Herança
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif text-black-rich leading-tight"
            >
              Transformando Ambientes em <br /> <span className="italic text-gold">Legados Visuais.</span>
            </motion.h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              A GoldPrime Pinturas nasceu com um propósito claro: elevar o padrão da pintura profissional em Londrina e região. Não somos apenas pintores; somos especialistas em acabamentos de luxo que valorizam seu patrimônio.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="font-serif font-bold text-xl mb-2 flex items-center gap-2">
                  <Sparkles size={20} className="text-gold" /> Visão
                </h4>
                <p className="text-sm text-gray-500">Ser a referência absoluta em estética residencial de alto padrão no Brasil.</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-2 flex items-center gap-2">
                  <Shield size={20} className="text-gold" /> Valores
                </h4>
                <p className="text-sm text-gray-500">Integridade, limpeza cirúrgica e perfeccionismo obsessivo em cada detalhe.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team / Credibility Grid */}
        <div className="bg-black-rich rounded-[60px] p-16 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]"></div>
          
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Por que escolher a <span className="text-gold">GoldPrime?</span></h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              { title: "Mão de Obra Certificada", icon: <Award />, desc: "Pintores treinados pelas melhores fabricantes." },
              { title: "Equipamentos de Ponta", icon: <Paintbrush2 />, desc: "Uso de sistemas airless para acabamento de espelho." },
              { title: "Gestão Profissional", icon: <Users />, desc: "Acompanhamento diário com engenharia dedicada." },
              { title: "Limpiza Absoluta", icon: <Clock />, desc: "Proteção total de móveis e entrega impecável." }
            ].map((card, i) => (
              <div key={i} className="text-center group">
                <div className="h-16 w-16 bg-white/5 rounded-2xl flex items-center justify-center text-gold mx-auto mb-6 group-hover:bg-gold group-hover:text-black transition-all">
                  {React.cloneElement(card.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h4 className="text-white font-serif font-bold text-lg mb-3">{card.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
