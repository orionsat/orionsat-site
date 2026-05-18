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
              <h1 className="font-black text-3xl tracking-tight">
                ORIONSAT
              </h1>

              <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs">
                Gestão Inteligente
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm text-zinc-300">
            <a href="#sobre" className="hover:text-cyan-400 transition">
              Sobre
            </a>

            <a href="#plataforma" className="hover:text-cyan-400 transition">
              Plataforma
            </a>

            <a href="#tecnologia" className="hover:text-cyan-400 transition">
              Tecnologia
            </a>

            <a href="#clientes" className="hover:text-cyan-400 transition">
              Clientes
            </a>

            <a href="#faq" className="hover:text-cyan-400 transition">
              FAQ
            </a>
          </nav>

          <a
            href="https://linktr.ee/orionsatgestao"
            target="_blank"
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
              Tecnologia
              <span className="text-cyan-400 block">
                que abre caminhos.
              </span>

              Inteligência
              <span className="text-cyan-400 block">
                que entrega resultados.
              </span>
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mt-10">
              Plataforma de gestão operacional,
              telemetria avançada, rastreamento inteligente e
              monitoramento em tempo real para empresas que
              exigem controle, performance e eficiência.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <a
                href="https://linktr.ee/orionsatgestao"
                target="_blank"
                className="bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-5 rounded-2xl font-bold flex items-center gap-3 transition hover:scale-105"
              >
                Solicitar demonstração
                <ArrowRight size={20} />
              </a>

              <a
                href="#plataforma"
                className="border border-white/10 hover:border-cyan-400/40 px-8 py-5 rounded-2xl transition"
              >
                Conhecer as soluções
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-14">
              <div>
                <h3 className="text-5xl font-black text-cyan-400">
                  24h
                </h3>

                <p className="text-zinc-500 mt-2">
                  Monitoramento contínuo
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-cyan-400">
                  98%
                </h3>

                <p className="text-zinc-500 mt-2">
                  Eficiência operacional
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-cyan-400">
                  API
                </h3>

                <p className="text-zinc-500 mt-2">
                  Integrações inteligentes
                </p>
              </div>
            </div>
          </div>

          {/* DASHBOARD */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-[120px]" />

            <div className="relative bg-white/5 border border-white/10 rounded-[36px] p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-zinc-500 text-sm">
                    Dashboard Operacional
                  </p>

                  <h3 className="text-4xl font-black mt-2">
                    ORIONSAT DASHBOARD
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  ONLINE
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-black/30 rounded-3xl p-6">
                  <Car className="text-cyan-400 mb-5" />
                  <h4 className="text-5xl font-black">248</h4>
                  <p className="text-zinc-500 mt-3">
                    Veículos Online
                  </p>
                </div>

                <div className="bg-black/30 rounded-3xl p-6">
                  <Bell className="text-cyan-400 mb-5" />
                  <h4 className="text-5xl font-black">12</h4>
                  <p className="text-zinc-500 mt-3">
                    Alertas em tempo real
                  </p>
                </div>

                <div className="bg-black/30 rounded-3xl p-6">
                  <BarChart3 className="text-cyan-400 mb-5" />
                  <h4 className="text-5xl font-black">98%</h4>
                  <p className="text-zinc-500 mt-3">
                    Performance operacional
                  </p>
                </div>

                <div className="bg-black/30 rounded-3xl p-6">
                  <ShieldCheck className="text-cyan-400 mb-5" />
                  <h4 className="text-5xl font-black">24h</h4>
                  <p className="text-zinc-500 mt-3">
                    Monitoramento contínuo
                  </p>
                </div>
              </div>

              <div className="bg-black/30 rounded-3xl p-8 mt-5">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-black">
                    Eficiência operacional
                  </h4>

                  <Activity className="text-cyan-400" />
                </div>

                <div className="flex items-end gap-4 h-44">
                  <div className="bg-blue-500 rounded-t-2xl h-24 w-full animate-pulse" />
                  <div className="bg-blue-500 rounded-t-2xl h-16 w-full animate-pulse" />
                  <div className="bg-blue-500 rounded-t-2xl h-36 w-full animate-pulse" />
                  <div className="bg-blue-500 rounded-t-2xl h-28 w-full animate-pulse" />
                  <div className="bg-blue-500 rounded-t-2xl h-44 w-full animate-pulse" />
                  <div className="bg-blue-500 rounded-t-2xl h-32 w-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* BANNER PREMIUM */}
      <section className="relative py-40 overflow-hidden">
        {/* FUNDO */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-700/10" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        {/* LOGO BG */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <img
            src={logo}
            alt="logo"
            className="w-[700px]"
          />
        </div>

        {/* GLOW */}
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/20 blur-[180px]" />

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-10">
            ORIONSAT
          </p>

          <h2 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            Tecnologia
            <span className="block text-cyan-400">
              que abre caminhos.
            </span>

            Inteligência
            <span className="block text-cyan-400">
              que domina o mercado.
            </span>
          </h2>

          <p className="text-zinc-500 text-xl mt-10 max-w-3xl mx-auto leading-relaxed">
            Plataforma inteligente para monitoramento,
            telemetria, gestão operacional e controle
            avançado de ativos em tempo real.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap justify-center gap-5 mt-14">
            <a
              href="https://wa.me/5511911021692"
              target="_blank"
              className="bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition hover:scale-105"
            >
              Solicitar demonstração
              <ArrowRight size={20} />
            </a>

            <a
              href="#plataforma"
              className="border border-white/10 hover:border-cyan-400/40 px-10 py-5 rounded-2xl transition"
            >
              Conhecer as soluções
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="max-w-7xl mx-auto px-6 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
              Sobre a ORIONSAT
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Gestão operacional inteligente para operações modernas.
            </h2>
          </div>

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              A ORIONSAT atua com soluções de gestão de
              frotas, telemetria, rastreamento operacional e
              monitoramento inteligente.
            </p>

            <p>
              Nossa plataforma foi desenvolvida para empresas
              que precisam controlar ativos, otimizar custos,
              aumentar produtividade e centralizar operações
              em tempo real.
            </p>

            <p>
              Com tecnologia escalável, dashboards avançados
              e inteligência operacional, entregamos mais
              controle, conectividade e eficiência.
            </p>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section
        id="plataforma"
        className="max-w-7xl mx-auto px-6 pb-32"
      >
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Plataforma
          </p>

          <h2 className="text-5xl font-black">
            Soluções completas de gestão operacional
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {funcionalidades.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:border-cyan-400/30 transition duration-500 hover:-translate-y-2"
            >
              <div className="text-cyan-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-5">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SEGMENTOS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Segmentos
          </p>

          <h2 className="text-5xl font-black">
            Operações que atendemos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {segmentos.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition"
            >
              <Route className="text-cyan-400 mb-6" />

              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* TECNOLOGIA */}
      <section
        id="tecnologia"
        className="max-w-7xl mx-auto px-6 pb-32"
      >
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Tecnologia
          </p>

          <h2 className="text-5xl font-black">
            Infraestrutura moderna e escalável
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <Cpu />,
              title: "Processamento inteligente",
            },
            {
              icon: <Database />,
              title: "Dados em tempo real",
            },
            {
              icon: <Server />,
              title: "Infraestrutura escalável",
            },
            {
              icon: <Globe />,
              title: "Conectividade contínua",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <div className="flex justify-center text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        id="beneficios"
        className="max-w-7xl mx-auto px-6 pb-32"
      >
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Benefícios
          </p>

          <h2 className="text-5xl font-black">
            Mais controle e eficiência operacional
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {beneficios.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center gap-5"
            >
              <CheckCircle2 className="text-cyan-400" />

              <p className="text-xl text-zinc-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTES */}
      <section
        id="clientes"
        className="max-w-7xl mx-auto px-6 pb-32"
      >
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Empresas atendidas
          </p>

          <h2 className="text-5xl font-black">
            Operações que confiam na ORIONSAT
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {empresas.map((empresa, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400/30 transition"
            >
              <Waves className="mx-auto text-cyan-400 mb-5" />

              <p className="font-semibold text-zinc-200">
                {empresa}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="max-w-5xl mx-auto px-6 pb-32"
      >
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            FAQ
          </p>

          <h2 className="text-5xl font-black">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-6">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {item.pergunta}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {item.resposta}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 rounded-[40px] p-14 text-center">
          <h2 className="text-5xl font-black max-w-4xl mx-auto leading-tight">
            Tecnologia, conectividade e inteligência operacional.
          </h2>

          <p className="text-zinc-400 text-xl mt-8 max-w-2xl mx-auto">
            Conheça a plataforma ORIONSAT e transforme a gestão operacional da sua empresa.
          </p>

          <a
            href="https://linktr.ee/orionsatgestao"
            target="_blank"
            className="inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-5 rounded-2xl font-bold mt-10 transition hover:scale-105"
          >
            Falar com comercial
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logo}
                alt="ORIONSAT"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h3 className="font-black text-3xl">
                  ORIONSAT
                </h3>

                <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
                  Gestão Inteligente
                </p>
              </div>
            </div>

            <p className="text-zinc-500 leading-relaxed">
              Tecnologia • Conectividade • Inteligência • Resultados
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5">
              Plataforma
            </h4>

            <ul className="space-y-3 text-zinc-500">
              <li>Gestão de Frotas</li>
              <li>Telemetria</li>
              <li>Monitoramento</li>
              <li>Dashboard Web</li>
              <li>Aplicativo Mobile</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5">
              Contato
            </h4>

            <ul className="space-y-3 text-zinc-500">
              <li>ORION SAT LTDA</li>
              <li>CNPJ: 66.620.074/0001-39</li>
              <li>(11) 91102-1692</li>
              <li>comercial@orionsatgestao.com.br</li>
              <li>www.orionsatgestao.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-zinc-600 text-sm">
          © 2026 ORIONSAT Gestão Inteligente. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
