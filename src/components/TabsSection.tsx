import { motion } from "framer-motion";
import brunaImg from "@/assets/bruna.png";
import widsBrasilImg from "@/assets/events/wids-brasil.png";
import googleCloudImg from "@/assets/events/google-cloud.jpeg";
import githubImg from "@/assets/events/github.jpeg";
import hackathonNestleImg from "@/assets/events/hackathon-nestle.png";
import isiOracleImg from "@/assets/events/isi-oracle.jpeg";
import nbsLatamImg from "@/assets/events/nbs-latam-nestle.jpeg";
import aiBrasilImg from "@/assets/events/ai-brasil.jpg";
import microsoft50Img from "@/assets/events/microsoft-50anos.jpg";
import aiBuilderOracleImg from "@/assets/events/ai-builder-oracle.jpg";
import cafeIaOracleImg from "@/assets/events/cafe-ia-oracle.jpg";
import microsoftAiTourImg from "@/assets/events/microsoft-ai-tour.jpg";

interface TabsSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "sobre", label: "Sobre Mim" },
  { id: "trajetoria", label: "Trajetória" },
  { id: "projetos", label: "Projetos" },
  { id: "eventos", label: "Eventos" },
  { id: "formacao", label: "Formação" },
];

const skills = [
  "Inteligência Artificial", "Automação de Processos", "Gestão Comercial",
  "CRM & ERP", "Análise de Dados", "Liderança", "Marketing Digital",
  "Inovação", "Engenharia", "Estratégia", "n8n / No-code", "Oracle · Microsoft · Google",
];

const timeline = [
  { date: "2024 — Presente", role: "Founder & Consultora", company: "Descomplica Ops", desc: "Fundei e lidero a Descomplica Ops, empresa focada em automação inteligente e IA para negócios.", tags: ["Founder", "IA", "Automação", "Consultoria"] },
  { date: "2022 — 2024", role: "Especialista em Automação & Operações", company: "Projetos & Consultoria", desc: "Implementação de fluxos automatizados para equipes comerciais, integrando CRM Exact Sales, ERP Bling e RD Marketing.", tags: ["CRM", "ERP", "Marketing", "Operações"] },
  { date: "2020 — 2022", role: "Analista Comercial & Projetos", company: "Setor Comercial / SaaS", desc: "Atuação direta com liderança e apoio à equipe de marketing e área comercial.", tags: ["Comercial", "Projetos", "Dados"] },
  { date: "2015 — 2019", role: "Graduação em Engenharia", company: "Instituto Mauá de Tecnologia (IMT)", desc: "Formação sólida em Engenharia, com projetos práticos voltados à resolução de problemas reais.", tags: ["Engenharia", "IMT", "Projetos Práticos"] },
];

const projects = [
  { icon: "🚀", type: "Startup · Founder", name: "Descomplica Ops", desc: "Empresa de automação inteligente e IA fundada para conectar negócios ao futuro.", tags: ["Founder", "IA", "Automação"] },
  { icon: "🤖", type: "Automação & IA", name: "Automação de Processos Comerciais", desc: "Implementação de fluxos automatizados com n8n e ferramentas no-code.", tags: ["n8n", "CRM", "ERP Bling"] },
  { icon: "📊", type: "Dados & Estratégia", name: "Dashboard de Inteligência Comercial", desc: "Painel de dados unificado para monitoramento de KPIs de vendas e operações.", tags: ["BI", "Dados", "KPIs"] },
  { icon: "⚙️", type: "Transformação Digital", name: "Implementação de ERP & CRM Integrados", desc: "Liderança do projeto de implantação de ERP Bling e CRM Exact Sales.", tags: ["ERP Bling", "Exact Sales", "RD Marketing"] },
  { icon: "🧩", type: "SaaS · Sales Ops · RevOps · DevOps", name: "Arquitetura de Stack Operacional Unificado", desc: "Arquitetei e implantei soluções SaaS end-to-end e fluxos automatizados em Sales Ops, RevOps e DevOps, criando um stack operacional unificado e de alta performance.", tags: ["SaaS", "Sales Ops", "RevOps", "DevOps"], wide: true },
  { icon: "🧠", type: "Agentes de IA · Atendimento", name: "Agentes Autônomos de IA para Atendimento e Comercial", desc: "Desenvolvi agentes autônomos de IA para atendimento ao cliente e operações comerciais, transformando suporte reativo em sistemas proativos e autossustentáveis.", tags: ["AI Agents", "Atendimento", "Comercial", "Automação"] },
  { icon: "⚡", type: "Process Mining · Automação", name: "Eliminação de Gargalos Sistêmicos", desc: "Identifiquei e eliminei gargalos sistêmicos por meio de mapeamento profundo de processos e automação inteligente, acelerando significativamente o time-to-value para clientes enterprise.", tags: ["Process Mapping", "Automação", "Time-to-Value"] },
  { icon: "🔗", type: "Data Orchestration · Integrações", name: "Orquestração de Dados CRM & ERP", desc: "Implementei camadas robustas de orquestração de dados que conectam sistemas fragmentados de CRM e ERP, garantindo integridade dos dados e visibilidade full-funnel.", tags: ["CRM", "ERP", "Data Integrity", "Full-Funnel"], wide: true },
  { icon: "💡", type: "Inovação · Comunidade", name: "WomanTech Hackathon NBS Latam — Nestlé", desc: "Participação no hackathon feminino de inovação e tecnologia.", tags: ["Hackathon", "Inovação", "WomanTech", "Nestlé"], wide: true },
];

const events = [
  { name: "AI.Brasil Experience", badge: "Out 2024", type: "🤖 Conferência · Participante", date: "Outubro 2024", local: "📍 São Paulo, SP", wide: true, img: aiBrasilImg },
  { name: "Microsoft AI Tour", badge: "Fev 2025", type: "💙 Microsoft · Participante", date: "11 Fev 2025", local: "📍 São Paulo, Brasil", img: microsoftAiTourImg },
  { name: "Microsoft — 50 Anos de Inovação", badge: "2025", type: "💙 Microsoft · Evento", date: "2025", local: "📍 Escritório Microsoft, São Paulo", img: microsoft50Img },
  { name: "Scaling AI in Healthcare — from Strategy to Execution", badge: "Oracle · Painel", type: "🔴 Oracle Innovation Center · Painel", local: "📍 Oracle Innovation Center, São Paulo", wide: true, img: cafeIaOracleImg },
  { name: "Google Cloud — Comunidade de IA", badge: "Google Cloud", type: "☁️ Google Cloud · Comunidade", local: "📍 Google Cloud, São Paulo", img: googleCloudImg },
  { name: "WomanTech Hackathon NBS Latam — Nestlé", badge: "Hackathon", type: "👩‍💻 WomanTech · Hackathon", local: "📍 São Paulo, SP", wide: true, img: hackathonNestleImg },
  { name: "Build AI-First Applications — Fast, Scalable & Autonomous", badge: "n8n · CUGO", type: "⚙️ n8n · Promovaweb", local: "📍 CUGO, São Paulo", img: aiBuilderOracleImg },
  { name: "NBS LATAM Nestlé", badge: "Nestlé", type: "🎤 NBS LATAM · Nestlé", local: "📍 São Paulo, SP", wide: true, img: nbsLatamImg },
  { name: "Women in Data Science (WiDS) Brasil", badge: "WiDS", type: "👩‍💻 WiDS · Women in Tech", local: "📍 São Paulo, SP", img: widsBrasilImg },
  { name: "Oracle — Networking & Inovação", badge: "Oracle", type: "🔴 Oracle · Networking", local: "📍 São Paulo, SP", img: isiOracleImg },
  { name: "GitHub Universe Watch Party", badge: "GitHub", type: "🐙 GitHub · Comunidade", local: "📍 São Paulo, SP", img: githubImg },
];

const education = [
  { icon: "🏛️", degree: "Graduação em Engenharia", inst: "Instituto Mauá de Tecnologia (IMT)", period: "São Caetano do Sul, SP · 2015 – 2021" },
  { icon: "🚀", degree: "Founder & Consultora", inst: "Descomplica Ops — Automação & IA", period: "2024 – Presente" },
  { icon: "🤖", degree: "IA & Automação Inteligente", inst: "Formação Contínua · n8n · No-code", period: "2022 – Presente" },
  { icon: "📈", degree: "Marketing Digital & CRM", inst: "RD Station / Exact Sales", period: "2021 – 2022" },
];

const certs = [
  { icon: "🤖", name: "AI.Brasil Experience — Participante", issuer: "Outubro 2024 · São Paulo", badge: "2024" },
  { icon: "💙", name: "Microsoft AI Tour São Paulo", issuer: "Microsoft · 11 Fev 2025", badge: "2025" },
  { icon: "🌈", name: "Google Cloud — Comunidade de IA", issuer: "Google Cloud · São Paulo", badge: "2024" },
  { icon: "🔴", name: "Oracle Innovation Center — Scaling AI in Healthcare", issuer: "Oracle · São Paulo", badge: "2024" },
  { icon: "👩‍💻", name: "WomanTech Hackathon NBS Latam", issuer: "Nestlé · Diversidade & Inclusão", badge: "2024" },
];

export default function TabsSection({ activeTab, onTabChange }: TabsSectionProps) {
  return (
    <section className="relative z-10" id="tabs-section">
      <div className="max-w-[1100px] mx-auto px-6 py-24">
        {/* Tab nav */}
        <div className="flex gap-1 mb-12 bg-surface border border-border rounded-lg p-1.5 w-fit flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => onTabChange(t.id)}
              className={`px-6 py-2.5 rounded-md border-none font-heading text-xs font-semibold tracking-[0.1em] uppercase cursor-pointer transition-all ${
                activeTab === t.id
                  ? "bg-accent-purple text-primary-foreground shadow-[0_0_20px_oklch(0.45_0.28_285/40%)]"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Sobre */}
        {activeTab === "sobre" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="relative">
                <img src={brunaImg} alt="Bruna Liborio Tonon" className="w-full aspect-[3/4] object-cover object-top rounded border border-border" />
                <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-accent-purple-light" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-accent-purple-light" />
              </div>
              <div>
                <p className="text-[0.7rem] tracking-[0.25em] uppercase text-accent-cyan mb-3 flex items-center gap-3">
                  <span className="inline-block w-8 h-px bg-accent-cyan" />Quem sou eu
                </p>
                <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-6 text-foreground">
                  Conecto negócios ao futuro<br />por meio de inovação e tecnologia.
                </h2>
                <div className="space-y-5 text-base leading-7 text-muted-foreground">
                  <p>Sou <strong className="text-foreground font-medium">Bruna Liborio Tonon</strong>, Founder & Consultora da <strong className="text-foreground font-medium">Descomplica Ops</strong> e engenheira formada pelo <strong className="text-foreground font-medium">Instituto Mauá de Tecnologia (IMT)</strong>.</p>
                  <p>Com mais de <strong className="text-foreground font-medium">5 anos de experiência</strong> em operações e gestão comercial, minha missão é transformar processos complexos em soluções inteligentes e escaláveis por meio de <strong className="text-foreground font-medium">Automação e Inteligência Artificial</strong>.</p>
                  <p>Ativamente presente no ecossistema de tecnologia brasileiro — dos palcos da <strong className="text-foreground font-medium">Microsoft</strong> e <strong className="text-foreground font-medium">Google Cloud</strong> às comunidades de IA e inovação.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                  {skills.map((s) => (
                    <span key={s} className="px-4 py-1.5 bg-surface2 border border-border rounded text-sm text-muted-foreground tracking-wide hover:border-accent-purple-light hover:text-accent-purple-light transition-all">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Trajetória */}
        {activeTab === "trajetoria" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-accent-cyan mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-accent-cyan" />Linha do tempo
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-12 text-foreground">
              Minha Trajetória<br />Profissional
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple to-transparent" />
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative mb-12 pl-8"
                >
                  <div className="absolute -left-[1.22rem] top-1 w-2.5 h-2.5 bg-accent-purple-light rounded-full shadow-[0_0_12px_var(--accent-purple-light)]" />
                  <div className="text-xs text-accent-cyan tracking-[0.15em] uppercase mb-1">{item.date}</div>
                  <div className="font-heading text-lg font-bold text-foreground mb-1">{item.role}</div>
                  <div className="text-sm text-accent-purple-light mb-3">{item.company}</div>
                  <div className="text-sm leading-7 text-muted-foreground">{item.desc}</div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-accent-purple/10 border border-accent-purple/20 rounded-sm text-xs text-accent-purple-light">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projetos */}
        {activeTab === "projetos" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-accent-cyan mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-accent-cyan" />O que construí
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-12 text-foreground">
              Projetos de<br />Impacto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className={`bg-surface border border-border rounded-lg p-8 transition-all hover:border-accent-purple/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group ${p.wide ? "md:col-span-2" : ""}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-cyan scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="text-2xl mb-5">{p.icon}</div>
                  <div className="text-[0.68rem] tracking-[0.2em] uppercase text-accent-cyan mb-2">{p.type}</div>
                  <div className="font-heading text-lg font-bold text-foreground mb-3">{p.name}</div>
                  <div className="text-sm leading-7 text-muted-foreground mb-5">{p.desc}</div>
                  <div className="flex gap-1.5 flex-wrap">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-accent-cyan/8 border border-accent-cyan/20 rounded-sm text-[0.68rem] text-accent-cyan">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Eventos */}
        {activeTab === "eventos" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-accent-cyan mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-accent-cyan" />Participações & Comunidade
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-12 text-foreground">
              Eventos &<br />Presença
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className={`bg-surface border border-border rounded-xl overflow-hidden transition-all hover:border-gold/35 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] group ${e.wide ? "md:col-span-2" : ""}`}
                >
                  <div className="relative overflow-hidden aspect-[16/9] bg-gradient-to-br from-surface2 to-surface">
                    {e.img ? (
                      <img src={e.img} alt={e.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold/20 border border-gold/50 rounded-full text-[0.68rem] text-gold tracking-[0.1em] uppercase backdrop-blur-lg">
                      {e.badge}
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[0.68rem] tracking-[0.15em] uppercase text-accent-cyan">{e.type}</span>
                      {e.date && <span className="text-xs text-muted-foreground">{e.date}</span>}
                    </div>
                    <div className="font-heading text-lg font-bold text-foreground mb-2 leading-snug">{e.name}</div>
                    <div className="text-sm text-muted-foreground">{e.local}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Formação */}
        {activeTab === "formacao" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-accent-cyan mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-accent-cyan" />Educação & Certificações
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight mb-12 text-foreground">
              Formação<br />Acadêmica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {education.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-surface border border-border rounded-lg p-8 hover:border-accent-purple/40 transition-colors"
                >
                  <div className="text-2xl mb-4">{e.icon}</div>
                  <div className="font-heading text-base font-bold text-foreground mb-1 leading-snug">{e.degree}</div>
                  <div className="text-sm text-accent-purple-light mb-1">{e.inst}</div>
                  <div className="text-xs text-muted-foreground tracking-wide">{e.period}</div>
                </motion.div>
              ))}
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">Certificações & Conquistas</h3>
            <div className="flex flex-col gap-3">
              {certs.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-4 p-4 bg-surface border border-border rounded-md hover:border-accent-purple/40 transition-all"
                >
                  <div className="text-xl">{c.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">{c.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{c.issuer}</div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-[0.65rem] text-emerald-400 tracking-wide">{c.badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
