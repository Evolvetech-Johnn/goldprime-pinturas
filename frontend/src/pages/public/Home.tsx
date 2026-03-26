import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { ChevronRight, Phone, Mail, ArrowRight, Shield, Zap, ThumbsUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative bg-off-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center overflow-hidden bg-black-rich">
        {/* Background Overlay & Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black-rich via-black-rich/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black-rich z-10"></div>
          <img 
            src="/assets/goldprime_hero_bg.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
        </div>

        {/* Floating Decor */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -z-0"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-gold font-sans font-bold tracking-[0.3em] uppercase text-sm">
                Elite em Acabamentos
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-serif text-white leading-[1.1] mb-8"
            >
              Elevando a Arte da <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold italic">
                Pintura Profissional
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 font-sans mb-12 max-w-2xl leading-relaxed"
            >
              Especialistas em projetos residenciais e comerciais de alto padrão em Londrina e região. Transformamos espaços comuns em ambientes extraordinários com técnica, luxo e perfeição.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button variant="primary" className="text-lg group py-6 px-10">
                Iniciar Orçamento Elite
                <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button variant="ghost" className="text-white text-lg group py-6">
                Ver Portfólio de Obras
                <ArrowRight size={22} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full -z-10"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden shadow-2xl relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1562663474-6cbb3fee1c77?q=80&w=1470&auto=format&fit=crop" 
                  alt="Quality Work" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 glass-card border-none rounded-none">
                  <p className="text-gold font-bold mb-1">Qualidade sem concessões</p>
                  <p className="text-black-rich text-sm">Atenção obsessiva aos detalhes e acabamentos finos.</p>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-10">
              <div>
                <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm block mb-4">Nossa Filosofia</span>
                <h2 className="text-4xl md:text-6xl font-serif text-black-rich leading-tight">
                  Tradição aliada à <br />
                  <span className="italic">tecnologia moderna.</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {[
                  { icon: Shield, title: 'Garantia Premium', text: '5 anos de garantia em todos os nossos serviços de pintura estrutural.' },
                  { icon: Zap, title: 'Agilidade Inteligente', text: 'Cronogramas precisos respeitando seu tempo e sua privacidade.' },
                  { icon: ThumbsUp, title: 'Limpeza Total', text: 'Entrega da obra 100% limpa, pronta para você desfrutar do novo ambiente.' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="h-14 w-14 shrink-0 rounded-2xl bg-off-white flex items-center justify-center text-gold shadow-inner border border-black/5">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Grid */}
      <section className="py-32 bg-black-rich relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm block mb-6">Domínios de Atuação</span>
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-8">Especialidades que <span className="italic text-gold">impressionam.</span></h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Residencial High-End', icon: '💎', desc: 'Acabamentos acetinados, foscos e semi-brilho com preparação de superfície Level 5.' },
              { title: 'Comercial Executivo', icon: '🌆', desc: 'Revitalização de escritórios e fachadas comerciais com tintas de alta performance.' },
              { title: 'Texturas de Luxo', icon: '✨', desc: 'Cimento queimado, efeito mármore e texturas personalizadas para paredes de destaque.' },
              { title: 'Tratamento de Madeiras', icon: '🪵', desc: 'Envernizamento e laqueamento de portas, janelas e decks com proteção UV avançada.' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -15, backgroundColor: 'rgba(201, 162, 39, 0.05)' }}
                className="p-10 rounded-3xl border border-white/10 glass-card bg-white/5 transition-all text-center group"
              >
                <div className="text-5xl mb-8 group-hover:scale-125 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6 leading-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.desc}</p>
                <div className="h-[2px] w-0 group-hover:w-full bg-gold transition-all duration-500 mx-auto"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-off-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto glass-card rounded-[40px] p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif text-black-rich mb-8 leading-tight">
                Seu projeto merece a <span className="italic">assinatura GoldPrime.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Estamos prontos para realizar uma visita técnica e apresentar um plano personalizado para sua obra.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="https://wa.me/5543999999999" target="_blank" rel="noreferrer" className="flex items-center gap-5 group">
                  <div className="h-14 w-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all shadow-md">
                    <Phone size={28} />
                  </div>
                  <span className="text-black-rich font-bold text-xl">(43) 99999-9999</span>
                </a>
                <div className="flex items-center gap-5 group">
                  <div className="h-14 w-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all shadow-md">
                    <Mail size={28} />
                  </div>
                  <span className="text-black-rich font-bold text-xl">contato@goldprimepinturas.com.br</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full relative z-10">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-black-rich uppercase tracking-widest block ml-1">Nome Completo</label>
                    <input type="text" className="w-full bg-off-white border border-transparent focus:border-gold px-6 py-4 rounded-xl outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-black-rich uppercase tracking-widest block ml-1">WhatsApp</label>
                    <input type="text" className="w-full bg-off-white border border-transparent focus:border-gold px-6 py-4 rounded-xl outline-none transition-all" placeholder="(43) 90000-0000" />
                  </div>
                  <Button variant="primary" fullWidth className="py-6 text-xl mt-4">Solicitar Visita Técnica</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
