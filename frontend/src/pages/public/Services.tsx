import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { Shield, CheckCircle2, Home, Building2, Paintbrush2, Sparkles, Droplets, Layers, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const categories = [
    {
      title: "Residencial de Luxo",
      icon: <Home className="text-gold" size={40} />,
      services: [
        "Pintura de Mansões e Casas de Alto Padrão",
        "Acabamentos em Gesso e Sancas",
        "Paredes de Destaque com Texturas Premium",
        "Tratamento de Portas e Janelas de Madeira"
      ],
      image: "https://images.unsplash.com/photo-1544450173-8c8757a336c7?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Comercial e Corporativo",
      icon: <Building2 className="text-gold" size={40} />,
      services: [
        "Pintura de Escritórios Executivos",
        "Revitalização de Fachadas Comerciais",
        "Pintura de Hotéis e Restaurantes",
        "Sinalização Interna e Estética de Marcas"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Especiais e Decorativos",
      icon: <Paintbrush2 className="text-gold" size={40} />,
      services: [
        "Efeito Mármore e Cimento Queimado",
        "Pintura Artística e Geométrica",
        "Laqueamento de Móveis",
        "Tratamento Antimofo e Impermeabilização"
      ],
      image: "https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=1471&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-off-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold tracking-[0.3em] uppercase text-sm block mb-6"
          >
            Serviços de Elite
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-black-rich mb-8"
          >
            A Excelência em <br /> <span className="italic">cada pincelada.</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-24 bg-gold mx-auto"
          ></motion.div>
        </div>

        {/* Categories Section */}
        <div className="space-y-32">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-gold/10 rounded-[40px] -z-10 transform scale-95 transition-transform group-hover:scale-100"></div>
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full aspect-[4/3] object-cover rounded-[30px] shadow-2xl"
                />
                <div className="absolute bottom-6 right-6 h-20 w-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  {cat.icon}
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-black-rich leading-tight group">
                  {cat.title}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                  Utilizamos apenas as marcas mais prestigiadas do mercado (Sherwin-Williams, Coral, Suvinil) aliadas a técnicas exclusivas de aplicação.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.services.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 size={20} className="text-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button variant="outline" className="px-10 py-4 flex items-center gap-2">
                    Solicitar Orçamento <Sparkles size={18} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Features */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: "Tintas Ecológicas", icon: <Droplets />, desc: "Produtos com baixo VOC e odor reduzido." },
            { title: "Nível de Acabamento 5", icon: <Layers />, desc: "O padrão mais alto de lisura reconhecido globalmente." },
            { title: "Garantia de 5 Anos", icon: <Shield />, desc: "Segurança total para seu investimento." },
            { title: "Prazo Pontual", icon: <Clock />, desc: "Entrega rigorosamente dentro do combinado." }
          ].map((feature, i) => (
            <div key={i} className="text-center group">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-gold mx-auto mb-6 group-hover:bg-gold group-hover:text-black transition-all">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h4 className="font-serif font-bold text-xl mb-3">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
