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
  Route as RouteIcon,
  MonitorSmartphone,
  Gauge,
  Navigation2,
  AlertTriangle,
  TrendingUp,
  Video,
  Clock,
  Wrench,
  Eye,
  Camera
} from "lucide-react";

import "./App.css";

// IMPORTAÇÃO DAS LOGOS DOS CLIENTES E DA ORIONSAT
import logo from "./assets/logo.png";
import logoAdvance from "./assets/advance.jpg";
import logoFenix from "./assets/fenix.png";
import logoNanis from "./assets/nanis.jpg";
import logoNevinho from "./assets/nevinho.jpeg";
import logoZls from "./assets/zls.jpeg";

export default function App() {
  const [docAtivo, setDocAtivo] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("doc") || null;
    }
    return null;
  });

  const alternarDocumento = (tipo) => {
    setDocAtivo(tipo);
    if (typeof window !== "undefined") {
      if (tipo) {
        window.history.pushState({}, "", `?doc=${tipo}`);
      } else {
        window.history.pushState({}, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const empresas = [
    { nome: "Advance Facilities", logo: logoAdvance },
    { nome: "Fênix Telecom", logo: logoFenix },
    { nome: "Nanis Car Locações", logo: logoNanis },
    { nome: "Nevinho Car Locações", logo: logoNevinho },
    { nome: "ZLS Transportes", logo: logoZls },
  ];

  // SEGMENTOS FOCADOS EM GESTÃO PARA QUALQUER TAMANHO DE OPERAÇÃO
  const segmentos = [
    "Transportadoras e Logística",
    "Pequenas e Médias Frotas",
    "Máquinas e Agronegócio",
    "Locadoras de Veículos",
    "Facilities e Serviços Externos",
    "Motoristas Autônomos (CNPJ/CPF)",
  ];

  const funcionalidades = [
    {
      icon: <Video size={34} />,
      title: "Videomonitoramento com IA",
      desc: "Câmeras veiculares que processam comportamentos. Detecte fadiga, uso de celular e audite a condução da sua equipe em tempo real.",
    },
    {
      icon: <Gauge size={34} />,
      title: "Performance e Telemetria",
      desc: "Dashboard de eficiência. Meça acelerações, freadas bruscas e RPM para identificar gargalos de consumo e desgaste prematuro.",
    },
    {
      icon: <MapPinned size={34} />,
      title: "Controle de Velocidade na Via",
      desc: "O sistema mapeia o limite regulamentado de cada rua ou rodovia e cruza com a telemetria do veículo, mitigando risco de multas.",
    },
    {
      icon: <RouteIcon size={34} />,
      title: "Logistics e Roteirização",
      desc: "Gestão inteligente de entregas e coletas. Programe itinerários, acompanhe ordens de serviço e automatize a logística de campo.",
    },
    {
      icon: <Clock size={34} />,
      title: "Jornada de Trabalho",
      desc: "Conformidade com a Lei do Motorista. Apontamento preciso de horas trabalhadas, intervalos e espera via App Onboard ou RFID.",
    },
    {
      icon: <Wrench size={34} />,
      title: "Manutenção e Abastecimento",
      desc: "Aumente a vida útil da frota. Defina planos de manutenção baseados no hodômetro real e gere métricas de custo por quilômetro.",
    },
  ];

  const beneficios = [
    "Redução drástica de custos com combustível através de telemetria avançada",
    "Mitigação do passivo de multas com o módulo de Velocidade na Via",
    "Controle total e auditoria visual da operação via Videomonitoramento IA",
    "Conformidade e transparência trabalhista na gestão de horas da equipe",
    "Maior disponibilidade da frota através de ciclos automatizados de manutenção",
    "Arquitetura escalável: da gestão de 1 veículo a operações complexas de logística",
  ];

  const faq = [
    {
      pergunta: "A Orion Sat atende frotistas menores ou apenas grandes transportadoras?",
      resposta:
        "Nossa plataforma é escalável. Fornecemos o mesmo ecossistema de software robusto para uma grande transportadora ou para um autônomo gerindo seu próprio utilitário. O licenciamento é feito por veículo conectado, permitindo que você tenha tecnologia de ponta independente do tamanho da sua operação.",
    },
    {
      pergunta: "O sistema auxilia na recuperação em caso de roubo?",
      resposta:
        "A Orion Sat é uma plataforma de gestão de performance, logística e telemetria (SaaS). Não atuamos no mercado de gerenciamento de risco, escolta ou pronta resposta. Nosso foco é entregar dados estratégicos para reduzir seus custos com multas, combustível, manutenção e passivos trabalhistas.",
    },
    {
      pergunta: "Como o Videomonitoramento IA reduz custos operacionais?",
      resposta:
        "O sistema identifica condutas inapropriadas (como uso do celular e desatenção prolongada) e gera eventos na central. Auditar e corrigir a condução dos motoristas reflete diretamente na economia de insumos, freios e pneus, além de evitar afastamentos operacionais por acidentes.",
    },
    {
      pergunta: "A leitura de velocidade funciona em vias urbanas?",
      resposta:
        "Sim. Diferente de plataformas básicas que usam um limitador único (ex: 80km/h), o nosso módulo 'Velocidade na Via' cruza os dados do veículo com o mapa de trânsito em tempo real. Se o veículo transitar a 60km/h em uma via de 40km/h, a central recebe o alerta de violação.",
    },
  ];

  if (docAtivo) {
    return (
      <div className="bg-[#020817] text-white min-h-screen py-24 px-6 relative overflow-hidden font-sans">
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-400 blur-[150px] animate-[pulse_6s_ease-in-out_infinite]" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <button
            onClick={() => alternarDocumento(null)}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold mb-8 md:mb-12 transition-all duration-300 group cursor-pointer hover:bg-cyan-400/10 px-4 py-2 rounded-xl"
          >
            <ArrowRight className="rotate-180 transition-transform duration-300 group-hover:-translate-x-2" size={20} />
            Voltar para o site principal
          </button>

          {/* PRIVACIDADE */}
          {docAtivo === "privacidade" && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <p className="text-zinc-500 uppercase tracking-widest text-[10px] md:text-xs mb-2">GOVERNANÇA CORPORATIVA E TI</p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Política de Privacidade</h1>
              <p className="text-zinc-500 mb-8 md:mb-12 text-sm">Versão Premium Final | Atualização: Maio de 2026</p>

              <div className="space-y-8 text-zinc-400 text-base md:text-lg leading-relaxed">
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">1. Introdução</h2>
                  <p>A ORION SAT LTDA ("Orion Sat") é uma corporação de tecnologia dedicada exclusivamente ao desenvolvimento de inteligência operacional, conectividade avançada, telemetria analítica e soluções para a gestão inteligente de frotas, motoristas independentes, operações individuais e usuários autônomos. Nossos sistemas atuam sob as estritas diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e do Marco Civil da Internet (Lei nº 12.965/2014).</p>
                </section>
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">2. Categorias de Dados Tratados</h2>
                  <ul className="list-disc list-inside space-y-3 text-zinc-300 pl-2">
                    <li><strong>Dados Cadastrais:</strong> Nome do gestor ou usuário, e-mail, telefone e dados documentais (CPF/CNPJ).</li>
                    <li><strong>Dados de Telemetria e Videomonitoramento:</strong> Indicadores técnicos do veículo, imagens captadas por câmeras embarcadas, velocidade, RPM e padrões de condução.</li>
                    <li><strong>Dados Logísticos:</strong> Coordenadas de geolocalização coletadas para roteirização e gestão operacional.</li>
                    <li><strong>Dados Técnicos:</strong> Registros obrigatórios de conexão (logs) e identificadores de hardware.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">3. Finalidade e Justificativas Jurídicas</h2>
                  <p>O tratamento estrutura-se nas bases legais de: Execução de Contrato (operação estável do software), Cumprimento de Obrigação Legal (guarda de logs por 6 meses) e Legítimo Interesse para segurança cibernética e operacional.</p>
                </section>
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">4. Diretrizes de Compartilhamento</h2>
                  <p>A Orion Sat adota uma política corporativa inflexível de não comercialização de dados. O fluxo limita-se ao armazenamento criptografado em nuvem global e fornecimento direto para a pessoa ou empresa contratante legítima da licença.</p>
                </section>
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">5. Direitos do Titular</h2>
                  <p>Asseguramos todos os direitos previstos no Art. 18 da LGPD, viabilizando o acesso facilitado, retificação e exclusão definitiva, observados os prazos fiscais e cíveis obrigatórios.</p>
                </section>
                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">6. Contato</h2>
                  <p className="mt-4 text-zinc-300 font-medium bg-white/5 p-5 rounded-2xl border border-white/10 text-sm md:text-base break-words">
                    <strong className="text-white text-lg">ORION SAT LTDA</strong><br />
                    E-mail Oficial: <span className="text-cyan-400">privacidade@orionsatgestao.com.br</span>
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* COOKIES */}
          {docAtivo === "cookies" && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <p className="text-zinc-500 uppercase tracking-widest text-[10px] md:text-xs mb-2">TRANSPARÊNCIA E EXPERIÊNCIA DIGITAL</p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Política de Cookies</h1>
              <p className="text-zinc-500 mb-8 md:mb-12 text-sm">Versão Premium Final | Atualização: Maio de 2026</p>

              <div className="space-y-8 text-zinc-400 text-base md:text-lg leading-relaxed">
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">1. Escopo e Conceito</h2>
                  <p>Cookies são pequenos arquivos temporários inseridos no navegador do usuário para viabilizar logins estáveis, guardar preferências de exibição de relatórios e coletar métricas básicas de uso das páginas da Orion Sat.</p>
                </section>
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">2. Gerenciamento Técnico pelo Usuário</h2>
                  <p>O usuário pode gerenciar, bloquear ou limpar os cookies armazenados acessando as configurações do navegador web. A recusa total de cookies essenciais impede a autenticação e o uso dos painéis em nuvem.</p>
                </section>
                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">3. Contato</h2>
                  <p className="mt-4 text-cyan-400 font-bold text-lg md:text-xl bg-white/5 p-5 rounded-2xl border border-white/10 break-words">
                    privacidade@orionsatgestao.com.br
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* TERMOS DE USO */}
          {docAtivo === "termos" && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <p className="text-zinc-500 uppercase tracking-widest text-[10px] md:text-xs mb-2">CONTRATOS E REGULAMENTOS DIGITAIS</p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Termos de Uso</h1>
              <p className="text-zinc-500 mb-8 md:mb-12 text-sm">Versão Premium Final | Canal CPF e B2B Híbrido | Maio de 2026</p>

              <div className="space-y-8 text-zinc-400 text-base md:text-lg leading-relaxed">
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">1. Escopo das Soluções de Software</h2>
                  <p>Os presentes Termos regulam o direito de acesso e utilização dos sistemas de software, painéis e aplicativos móveis de propriedade da ORION SAT LTDA.</p>
                </section>
                <section className="bg-red-500/5 border border-red-500/20 p-5 md:p-6 rounded-2xl">
                  <h2 className="text-xl md:text-2xl font-bold text-red-400 mb-3">2. Delimitação Tecnológica Importante</h2>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Por se tratar de um ambiente puramente de análise de dados, processamento de telemetria e gestão de software informacional (SaaS), as soluções da Orion Sat <strong>NÃO possuem escopo, vinculação ou aderência com o mercado de gerenciamento de riscos civis de ativos, atividades corporativas de pronta resposta, intervenções físicas de campo ou qualquer modalidade de salvaguarda material de bens</strong>. A Orion Sat exime-se inteiramente de qualquer natureza de cobertura financeira ou securitária sobre os veículos cadastrados.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">3. Responsabilidade Operacional e Uso</h2>
                  <p>As credenciais de acesso possuem caráter pessoal e intransferível. Compete exclusivamente ao usuário (físico ou jurídico) a guarda segura de suas chaves.</p>
                </section>
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">4. Propriedade Intelectual e Suspensão</h2>
                  <p>A outorga de acesso não transfere direitos. A Orion Sat reserva-se o direito de suspender o acesso em casos de inadimplência ou violação destes Termos.</p>
                </section>
                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">5. Foro de Eleição</h2>
                  <p>As partes elegem o foro da Comarca de <strong>Itaquaquecetuba/SP</strong> como competente para dirimir controvérsias técnicas.</p>
                </section>
              </div>
            </div>
          )}

          <button
            onClick={() => alternarDocumento(null)}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] px-6 py-4 md:py-3 rounded-xl font-bold mt-12 mb-8 transition-all duration-300 cursor-pointer"
          >
            Fechar janela legal e retornar ao site
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDERIZAÇÃO DA PÁGINA PRINCIPAL (SITE)
  // ==========================================
  return (
    <div className="bg-[#020817] text-white overflow-x-hidden font-sans">
      
      {/* INJEÇÃO DE CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes slow-pulse {
          0% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
          100% { opacity: 0.15; transform: scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slow-pulse { animation: slow-pulse 8s ease-in-out infinite; }
        .blend-logo { mix-blend-mode: screen; }
      `}</style>

      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 md:left-1/3 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-cyan-400 blur-[150px] md:blur-[200px] -translate-x-1/2 md:-translate-x-0 animate-slow-pulse" />
        <div className="absolute bottom-0 right-0 md:right-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-700 blur-[150px] md:blur-[200px] animate-slow-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* HEADER NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-40 border-b border-white/5 backdrop-blur-2xl bg-[#020817]/70 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div 
            onClick={voltarAoTopo} 
            className="flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img src={logo} alt="ORIONSAT" className="w-10 h-10 md:w-14 md:h-14 object-contain" translate="no" />
            <div translate="no">
              <h1 className="font-black text-xl md:text-3xl tracking-tight leading-none bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">ORIONSAT</h1>
              <p className="text-cyan-400 uppercase tracking-[0.2em] md:tracking-[0.35em] text-[8px] md:text-xs mt-1">Gestão Inteligente</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-zinc-300">
            <a href="#sobre" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Plataforma</a>
            <a href="#solucoes" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Soluções</a>
            <a href="#tecnologia" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Ecossistema</a>
            <a href="#faq" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">FAQ</a>
          </nav>

          <a
            href="https://linktr.ee/orionsatgestao"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group bg-cyan-400 text-black px-5 md:px-7 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95"
          >
            <span className="relative z-10">Acessar Sistema</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="min-h-[100dvh] flex items-center pt-28 md:pt-36 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 md:gap-24 items-center w-full">
          {/* Hero Texto */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm mb-8 mx-auto lg:mx-0 font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <Cpu size={16} className="text-cyan-400 animate-pulse" />
              Software Enterprise de Telemetria Logística
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black leading-[1.05] md:leading-[0.95] tracking-tight">
              Gestão Total
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block mt-2">da sua operação.</span>
              Inteligência
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block mt-2">que gera caixa.</span>
            </h2>

            <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-2xl mt-8 mx-auto lg:mx-0">
              Da frota corporativa ao motorista independente. Auditoria de rotas, videotelemetria em tempo real e redução comprovada de custos logísticos em uma única plataforma escalável.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5 mt-10">
              <a
                href="https://wa.me/5511911021692"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-cyan-400 text-black px-8 py-4 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95 group"
              >
                Falar com um consultor
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#solucoes"
                className="w-full sm:w-auto border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-white/10 px-8 py-4 md:py-5 rounded-2xl transition-all duration-300 font-medium text-center hover:-translate-y-1"
              >
                Explorar os módulos
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-white/10 mt-12 max-w-lg mx-auto lg:mx-0">
              <div className="group cursor-default">
                <h3 className="text-3xl md:text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform origin-left">SaaS</h3>
                <p className="text-zinc-500 text-xs md:text-sm mt-1 font-medium group-hover:text-zinc-300 transition-colors">Plataforma em Nuvem</p>
              </div>
              <div className="group cursor-default">
                <h3 className="text-3xl md:text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform origin-left">IA</h3>
                <p className="text-zinc-500 text-xs md:text-sm mt-1 font-medium group-hover:text-zinc-300 transition-colors">Vídeo IA Embarcada</p>
              </div>
              <div className="group cursor-default">
                <h3 className="text-3xl md:text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform origin-left">API</h3>
                <p className="text-zinc-500 text-xs md:text-sm mt-1 font-medium group-hover:text-zinc-300 transition-colors">Integração Nativa</p>
              </div>
            </div>
          </div>

          {/* DASHBOARD MOCKUP FLUTUANTE */}
          <div className="relative w-full mt-10 lg:mt-0 animate-float perspective-1000 hidden md:block">
            <div className="absolute inset-0 bg-cyan-400/20 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
            <div className="relative bg-[#050B1A]/80 border border-white/10 rounded-3xl md:rounded-[36px] p-5 md:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-cyan-400/30">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-cyan-400 font-bold tracking-widest text-[10px] md:text-xs mb-1 uppercase">Ecossistema Operacional</p>
                  <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                    <Activity className="text-cyan-400 animate-pulse" size={24} />
                    ORIONSAT DASHBOARD
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20 text-xs md:text-sm font-bold">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400 animate-ping absolute opacity-75" />
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400 relative" />
                  ONLINE
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-5">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 md:p-5 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <BarChart3 className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-xs md:text-sm font-medium">Performance Média</span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">98<span className="text-sm md:text-lg text-zinc-500 font-medium tracking-normal ml-1">pts</span></h4>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 md:p-5 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <TrendingUp className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-xs md:text-sm font-medium">Economia Projetada</span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">14<span className="text-sm md:text-lg text-zinc-500 font-medium tracking-normal ml-1">%</span></h4>
                </div>
              </div>

              <div className="bg-[#02050A] rounded-2xl border border-white/10 p-1 relative overflow-hidden h-40 md:h-48 group">
                <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:30px_30px] transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute top-3 left-4 text-[10px] md:text-xs font-bold text-zinc-400 tracking-wider flex items-center gap-2 z-10 bg-black/60 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
                  <Camera size={14} className="text-cyan-400" />
                  AUDITORIA OPERACIONAL
                </div>
                
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]" />
                  </div>
                  <span className="text-[8px] font-bold text-cyan-300 mt-1 bg-black/80 px-1.5 py-0.5 rounded border border-cyan-400/20">ROTA-1A</span>
                </div>

                <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center animate-[pulse_1.5s_ease-in-out_infinite]">
                    <AlertTriangle size={12} className="text-yellow-400" />
                  </div>
                  <span className="text-[8px] font-bold text-yellow-300 mt-1 bg-black/80 px-1.5 py-0.5 rounded border border-yellow-500/30 text-center">EXCESSO DE RPM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SOBRE/POSICIONAMENTO DE MERCADO */}
      <section id="sobre" className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-5 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-400"></span> Desempenho Comprovado
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Nós não vendemos rastreadores. Entregamos inteligência logística.
            </h2>
          </div>
          <div className="space-y-4 md:space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
            <p className="hover:text-zinc-300 transition-colors">
              A ORIONSAT democratizou a tecnologia que antes era exclusiva de transportadoras globais. Nosso ecossistema de software centraliza as necessidades da sua operação: desde a leitura da ignição até a <strong className="text-white">Videotelemetria com Inteligência Artificial</strong>.
            </p>
            <p className="hover:text-zinc-300 transition-colors">
              Seja você um frotista corporativo lidando com passivos trabalhistas (Lei do Motorista) ou um empreendedor autônomo buscando reduzir custos de manutenção, nossa plataforma mapeia dados precisos para a sua tomada de decisão em tempo real.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES/MÓDULOS */}
      <section id="solucoes" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Ecossistema Modular</p>
          <h2 className="text-3xl md:text-5xl font-black">Nossas frentes de gestão</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {funcionalidades.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl md:rounded-[32px] p-6 md:p-8 hover:bg-gradient-to-b hover:from-white/10 hover:to-transparent hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-cyan-400 mb-5 md:mb-6 bg-cyan-400/10 w-fit p-3 md:p-4 rounded-xl md:rounded-2xl group-hover:scale-110 group-hover:bg-cyan-400/20 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECNOLOGIA E BENEFÍCIOS */}
      <section id="tecnologia" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          
          <div>
            <div className="mb-8 md:mb-12 text-center lg:text-left">
              <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Estrutura Operacional</p>
              <h2 className="text-3xl md:text-4xl font-black">Tecnologia escalável</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {[
                { icon: <Video size={28} />, title: "Homologação Hikvision e Jimi" },
                { icon: <Database size={28} />, title: "Big Data e Nuvem Criptografada" },
                { icon: <Server size={28} />, title: "Disponibilidade de Servidor 99.9%" },
                { icon: <Globe size={28} />, title: "Cobertura Multioperação M2M" },
              ].map((item, index) => (
                <div key={index} className="group bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 text-center hover:bg-white/10 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center text-cyan-400 mb-3 md:mb-4 bg-cyan-400/10 w-fit p-3 rounded-full mx-auto group-hover:scale-110 group-hover:bg-cyan-400/20 transition-all">{item.icon}</div>
                  <h3 className="text-sm md:text-base font-bold text-zinc-200">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 md:mb-12 text-center lg:text-left mt-12 lg:mt-0">
              <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Retorno Financeiro Direto</p>
              <h2 className="text-3xl md:text-4xl font-black">Por que nossa solução se paga?</h2>
            </div>
            <div className="space-y-3 md:space-y-4">
              {beneficios.map((item, index) => (
                <div key={index} className="group bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 flex items-center gap-4 hover:bg-cyan-400/5 hover:border-cyan-400/30 hover:translate-x-2 transition-all duration-300 cursor-default">
                  <CheckCircle2 className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-sm md:text-lg text-zinc-300 font-medium group-hover:text-white transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTOS DE CLIENTES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Adaptável à sua rotina</p>
          <h2 className="text-3xl md:text-5xl font-black">Públicos que atendemos</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {segmentos.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-xl md:rounded-3xl p-5 md:p-8 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 cursor-default"
            >
              <RouteIcon className="text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={28} />
              <h3 className="text-base md:text-xl font-bold text-white leading-tight">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTES - COM AS LOGOS DE IMAGEM */}
      <section id="clientes" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Autoridade e Presença</p>
          <h2 className="text-3xl md:text-5xl font-black">Operações que confiam em nós</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          {empresas.map((empresa, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 md:px-8 md:py-6 flex items-center justify-center text-center hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1 transition-all duration-300 flex-grow max-w-[200px] md:max-w-[240px] cursor-default group h-24 md:h-32"
            >
              <img
                src={empresa.logo}
                alt={`Cliente ${empresa.nome}`}
                className="max-h-full max-w-full object-contain grayscale opacity-50 blend-logo group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Dúvidas Frequentes</p>
          <h2 className="text-3xl md:text-5xl font-black">Perguntas sobre a implantação</h2>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faq.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-lg md:text-2xl font-bold mb-3 text-white">{item.pergunta}</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{item.resposta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="relative overflow-hidden bg-[#050B1A] border border-cyan-400/30 rounded-3xl md:rounded-[40px] p-8 md:p-16 text-center group hover:border-cyan-400/50 transition-colors duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-br from-cyan-400/10 to-blue-700/10 blur-[80px] group-hover:rotate-12 transition-transform duration-1000 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black max-w-4xl mx-auto leading-[1.1] tracking-tight text-white">
              Gestão de ponta acessível para a sua realidade.
            </h2>
            <p className="text-zinc-300 text-base md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Não espere os custos saírem do controle para agir. Agende uma consultoria sem compromisso e entenda como podemos otimizar o seu negócio.
            </p>
            <a
              href="https://wa.me/5511911021692"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-cyan-400 text-black px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold mt-10 transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95 text-base md:text-lg"
            >
              Falar com um de nossos consultores
              <ArrowRight size={20} className="animate-pulse" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 md:py-16 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div 
              onClick={voltarAoTopo}
              className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6 cursor-pointer hover:scale-105 transition-transform w-fit"
            >
              <img src={logo} alt="ORIONSAT" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <div>
                <h3 className="font-black text-2xl md:text-3xl tracking-tight text-white">ORIONSAT</h3>
                <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-xs">Gestão Inteligente</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm">
              Do usuário individual às frotas logísticas: métricas visuais, telemetria avançada e a tecnologia que impulsiona seus lucros.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg md:text-xl mb-4 md:mb-5">Plataforma</h4>
            <ul className="space-y-2 md:space-y-3 text-zinc-400 text-sm md:text-base">
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Videotelemetria IA</li>
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Jornada e Roteirização</li>
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Velocidade e Manutenção</li>
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Aplicativo Mobile</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg md:text-xl mb-4 md:mb-5">Contato</h4>
            <ul className="space-y-2 md:space-y-3 text-zinc-400 text-sm md:text-base">
              <li>CNPJ: 66.620.074/0001-39</li>
              <li>Itaquaquecetuba/SP</li>
              <li className="hover:text-cyan-400 transition-colors">
                <a href="https://wa.me/5511911021692" target="_blank" rel="noopener noreferrer">(11) 91102-1692</a>
              </li>
              <li className="hover:text-cyan-400 transition-colors break-words">comercial@orionsatgestao.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 md:mt-16 pt-6 md:pt-8 max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-zinc-500 text-xs md:text-sm">
          <p className="text-center lg:text-left">© 2026 ORIONSAT Gestão Inteligente. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6 font-medium">
            <button onClick={() => alternarDocumento("privacidade")} className="hover:text-cyan-400 transition-colors">
              Privacidade
            </button>
            <button onClick={() => alternarDocumento("cookies")} className="hover:text-cyan-400 transition-colors">
              Cookies
            </button>
            <button onClick={() => alternarDocumento("termos")} className="hover:text-cyan-400 transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DO WHATSAPP (MANTÉM O USUÁRIO SEMPRE CONECTADO) */}
      <a
        href="https://wa.me/5511911021692"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group animate-bounce"
        style={{ animationDuration: '3s' }}
        aria-label="Falar no WhatsApp"
      >
        <svg className="w-7 h-7 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.422-.272.347-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
