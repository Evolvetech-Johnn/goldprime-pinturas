import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    { title: "Mansão Royal Park", type: "Residencial", image: "https://images.unsplash.com/photo-1600585154340-be6199fbfd1d?q=80&w=1470&auto=format&fit=crop" },
    { title: "Escritório Advocia Londrina", type: "Corporativo", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1470&auto=format&fit=crop" },
    { title: "Penthouse Lake Shore", type: "Residencial", image: "https://images.unsplash.com/photo-1600607687940-c52af096999a?q=80&w=1470&auto=format&fit=crop" },
    { title: "Fachada Boutique Fashion", type: "Comercial", image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=1477&auto=format&fit=crop" },
    { title: "Residencial Terras de Santana", type: "Residencial", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1470&auto=format&fit=crop" },
    { title: "Showroom Móveis Planejados", type: "Comercial", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1470&auto=format&fit=crop" }
  ];

  return (
    <div className="pt-32 pb-24 bg-off-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-bold tracking-[0.3em] uppercase text-sm block mb-6"
            >
              Nossas Obras
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif text-black-rich"
            >
              Galeria de <br /> <span className="italic text-gold">Projetos Executados.</span>
            </motion.h1>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
            <button className="px-6 py-3 bg-gold text-black rounded-xl font-bold text-sm">Todos</button>
            <button className="px-6 py-3 text-gray-500 hover:text-gold transition-colors font-bold text-sm">Residencial</button>
            <button className="px-6 py-3 text-gray-500 hover:text-gold transition-colors font-bold text-sm">Comercial</button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] bg-black"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1.5 bg-gold/20 backdrop-blur-md border border-gold/30 rounded-full text-gold text-[10px] font-bold uppercase tracking-widest mb-4">
                  {project.type}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-gold font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Ver Detalhes do Projeto <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-40 text-center">
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Cada obra é tratada como uma peça única de arte. Deixe-nos elevar o nível do seu próximo projeto.</p>
          <Button variant="primary" className="px-12 py-5 text-lg">
            Quero um Projeto Personalizado
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
