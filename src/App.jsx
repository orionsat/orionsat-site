import {
  Activity,
  Bell,
  Car,
  ShieldCheck,
  Smartphone,
  MapPinned,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  Database,
  Waves,
  Server,
  Radar,
  Route,
  MonitorSmartphone,
} from "lucide-react";

import "./App.css";
import logo from "./assets/logo.png";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {

  if (window.location.pathname === "/privacidade") {
    return <PrivacyPolicy />;
  }

  const empresas = [
    "Advance Facilities",
    "Fênix Telecom",
    "Nanis Car Locações",
    "Nevinho Car Locações",
    "ZLS Transportes",
  ];

  const segmentos = [
    "Transportadoras",
    "Locadoras",
    "Facilities",
    "Operações Técnicas",
    "Máquinas e Equipamentos",
    "Operações Náuticas",
  ];

  const funcionalidades = [
    {
      icon: <MapPinned size={34} />,
      title: "Geolocalização Inteligente",
      desc: "Rastreamento operacional em tempo real com precisão e histórico completo.",
    },
    {
      icon: <Activity size={34} />,
      title: "Telemetria Avançada",
      desc: "Análise comportamental, performance operacional e dados estratégicos.",
    },
    {
      icon: <MonitorSmartphone size={34} />,
      title: "Plataforma Web + Mobile",
      desc: "Controle completo através de dashboard web e aplicativos Android/iOS.",
    },
    {
      icon: <Bell size={34} />,
      title: "Alertas Operacionais",
      desc: "Notificações inteligentes e eventos em tempo real.",
    },
    {
      icon: <BarChart3 size={34} />,
      title: "Dashboards & Relatórios",
      desc: "Indicadores estratégicos para tomada de decisão operacional.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Monitoramento 24/7",
      desc: "Operação contínua com alta disponibilidade e segurança.",
    },
  ];

  const beneficios = [
    "Redução de custos operacionais",
    "Maior controle de produtividade",
    "Centralização da operação",
    "Mais eficiência logística",
    "Gestão inteligente de equipes",
    "Tomada de decisão em tempo real",
  ];

  const faq = [
    {
      pergunta: "A plataforma possui aplicativo?",
      resposta: "Sim. Plataforma web completa e aplicativo Android/iOS para monitoramento operacional em tempo real.",
    },
    {
      pergunta: "Funciona para máquinas e equipamentos?",
      resposta: "Sim. Nossa tecnologia atende veículos leves, pesados, máquinas, operações especiais e ativos operacionais.",
    },
    {
      pergunta: "Possui telemetria avançada?",
      resposta: "Sim. Trabalhamos desde telemetria básica até análises operacionais avançadas.",
    },
    {
      pergunta: "Possui API e integração?",
      resposta: "Sim. A plataforma suporta integrações API, ERPs, sistemas operacionais e soluções externas.",
    },
  ];

  return (
    <div className="bg-[#020817] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-cyan-400 blur-[180px]" />
        <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] bg-blue-700 blur-[180px]" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-[#020817]/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="ORIONSAT"
              className="w-14 h-14 object-contain"
              translate="no"
            />
            <div translate="no">
              <h1 className="font-black text-3xl tracking-tight">ORIONSAT</h1>
              <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs">
                Gestão Inteligente
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm text-zinc-300">
            <a href="#sobre" className="hover:text-cyan-400 transition">Sobre</a>
            <a href="#plataforma" className="hover:text-cyan-400 transition">Plataforma</a>
            <a href="#tecnologia" className="hover:text-cyan-400 transition">Tecnologia</a>
            <a href="#clientes" className="hover:text-cyan-400 transition">Clientes</a>
            <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
          </nav>

          <a
            href="https://linktr.ee/orionsatgestao"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 hover:bg-cyan-300 text-black px-7 py-3 rounded-2xl font-bold transition hover:scale-105"
          >
            Comercial
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-36 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm mb-10">
              <Radar size={16} />
              Plataforma premium de gestão operacional
            </div>

            <h2 className="text-6xl lg:text-8xl font-black leading-[0.92] tracking-tight">
              Tecnologia <span className="text-cyan-400 block">que abre caminhos.</span>
              Inteligência <span className="text-cyan-400 block">que entrega resultados.</span>
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mt-10">
              Plataforma de gestão operacional, telemetria avançada, rastreamento inteligente e
              monitoramento em tempo real para empresas que exigem controle
