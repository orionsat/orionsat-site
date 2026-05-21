import { useState } from "react";
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

export default function App() {
  // Lê a URL ao carregar o site para ver se o Google/Apple estão pedindo um documento específico
  const [docAtivo, setDocAtivo] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("doc") || null;
    }
    return null;
  });

  // Função inteligente que muda a tela e atualiza a barra de endereço do navegador
  const alternarDocumento = (tipo) => {
    setDocAtivo(tipo);
    if (typeof window !== "undefined") {
      if (tipo) {
        window.history.pushState({}, "", `?doc=${tipo}`);
      } else {
        window.history.pushState({}, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

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
      resposta:
        "Sim. Plataforma web completa e aplicativo Android/iOS para monitoramento operacional em tempo real.",
    },
    {
      pergunta: "Funciona para máquinas e equipamentos?",
      resposta:
        "Sim. Nossa tecnologia atende veículos leves, pesados, máquinas, operações especiais e ativos operacionais.",
    },
    {
      pergunta: "Possui telemetria avançada?",
      resposta:
        "Sim. Trabalhamos desde telemetria básica até análises operacionais avançadas.",
    },
    {
      pergunta: "Possui API e integração?",
      resposta:
        "Sim. A plataforma suporta integrações API, ERPs, sistemas operacionais e soluções externas.",
    },
  ];

  // SE HOUVER UM DOCUMENTO ATIVO NA URL, COMPILA A TELA JURÍDICA IMEDIATAMENTE
  if (docAtivo) {
    return (
      <div className="bg-[#020817] text-white min-h-screen py-24 px-6 relative overflow-hidden">
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-400 blur-[150px]" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <button
            onClick={() => alternarDocumento(null)}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold mb-12 transition group cursor-pointer"
          >
            <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-1" size={20} />
            Voltar para o site
          </button>

          {/* DOCUMENTO 1: POLÍTICA DE PRIVACIDADE */}
          {docAtivo === "privacidade" && (
            <div>
              <p className="text-zinc-500 uppercase tracking-widest text-xs mb-2
