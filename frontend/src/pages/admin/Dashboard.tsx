import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, TrendingUp, Clock, ArrowUpRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import Button from '../../components/ui/Button';
import api from '../../utils/api';

const Dashboard: React.FC = () => {
  const { data: leadsData, isLoading: isLoadingLeads } = useQuery({
    queryKey: ['leads'],
    queryFn: async () => {
      const response = await api.get('/leads');
      return response.data.data;
    },
  });

  const { data: quotesData, isLoading: isLoadingQuotes } = useQuery({
    queryKey: ['quotes'],
    queryFn: async () => {
      const response = await api.get('/quotes');
      return response.data.data;
    },
  });

  const stats = [
    { label: 'Total de Leads', value: String(leadsData?.length || '0'), icon: Users, color: 'from-blue-500/20 to-blue-600/20', text: 'text-blue-400' },
    { label: 'Novos Orçamentos', value: String(quotesData?.length || '0'), icon: MessageSquare, color: 'from-gold/20 to-gold-dark/20', text: 'text-gold' },
    { label: 'Leads Pendentes', value: String(leadsData?.filter((l: { status: string }) => l.status === 'new').length || '0'), icon: Clock, color: 'from-orange-500/20 to-orange-600/20', text: 'text-orange-400' },
    { label: 'Taxa de Conversão', value: '12%', icon: TrendingUp, color: 'from-emerald-500/20 to-emerald-600/20', text: 'text-emerald-400' },
  ];

  if (isLoadingLeads || isLoadingQuotes) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin"></div>
        <p className="text-gold font-bold tracking-widest text-xs uppercase">Sincronizando Dados...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-12">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-black-rich mb-2">Painel de Performance</h1>
          <p className="text-gray-500 text-sm">Bem-vindo de volta ao centro de comando GoldPrime.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="text-xs px-6 py-2.5">Extrair Relatório</Button>
          <Button variant="primary" className="text-xs px-6 py-2.5">Novo Lead Manual</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-bl-[100px] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform`}></div>
            <div className="relative z-10">
              <div className={`mb-6 p-3 rounded-2xl bg-off-white inline-block ${stat.text}`}>
                <stat.icon size={24} />
              </div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-serif font-bold text-black-rich">{stat.value}</h3>
                <span className="text-[10px] text-emerald-500 font-bold">+2.4%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Leads Table */}
        <div className="lg:col-span-2 bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
            <div>
              <h3 className="font-serif font-bold text-xl text-black-rich">Leads de Alta Prioridade</h3>
              <p className="text-gray-400 text-xs mt-1">Últimas interações recebidas via website</p>
            </div>
            <button className="flex items-center gap-2 text-gold text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-transform">
              Gerenciar Todos <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-black border-b border-gray-50">
                  <th className="px-8 py-5">Cliente</th>
                  <th className="px-8 py-5">Interesse</th>
                  <th className="px-8 py-5">Capturado em</th>
                  <th className="px-8 py-5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {(leadsData?.slice(0, 6) || []).map((lead: any, idx: number) => (
                  <tr key={idx} className="group hover:bg-off-white transition-all cursor-pointer">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-xs">
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-black-rich text-sm">{lead.name}</p>
                          <p className="text-[10px] text-gray-400 truncate max-w-[120px]">{lead.email || 'whatsapp-only'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-xs text-gray-600 font-medium">{lead.service}</span>
                    </td>
                    <td className="px-8 py-5">
                      <p className="text-xs text-black-rich font-medium">{new Date(lead.createdAt).toLocaleDateString('pt-BR')}</p>
                      <p className="text-[10px] text-gray-400 uppercase">{new Date(lead.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        lead.status === 'new' ? 'text-blue-600 bg-blue-50 border border-blue-100' : 
                        lead.status === 'contacted' ? 'text-gold-dark bg-gold/10 border border-gold/20' : 
                        'text-gray-400 bg-gray-50'
                      }`}>
                        {lead.status === 'new' ? 'Novo' : lead.status === 'contacted' ? 'Contatado' : lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Health / Quick Insights */}
        <div className="space-y-8">
          <div className="bg-black-rich rounded-[32px] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
            <h3 className="font-serif font-bold text-2xl mb-8 leading-tight">Geração de Leads <br /> <span className="text-gold italic">este mês</span></h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">Meta de Conversão</p>
                <p className="text-gold font-bold">85%</p>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  className="h-full bg-gradient-to-r from-gold to-gold-light"
                />
              </div>
              <p className="text-xs text-gray-500 italic">"Você está acima da média do setor."</p>
            </div>
            <Button variant="primary" fullWidth className="mt-10 py-5">Análise Detalhada</Button>
          </div>

          <div className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm">
            <h3 className="font-bold text-black-rich mb-6">Próximos Passos</h3>
            <div className="space-y-6">
              {[
                { title: 'Responder Orçamento #122', time: 'Restam 2h', type: 'urgent' },
                { title: 'Atualizar Portfólio Mansão', time: 'Pendente', type: 'low' }
              ].map((task, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-off-white transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                  <div className={`h-2 w-2 rounded-full mt-2 ${task.type === 'urgent' ? 'bg-gold' : 'bg-gray-300'}`}></div>
                  <div>
                    <p className="text-sm font-bold text-black-rich">{task.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
