import { useState, useEffect } from "react";
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
  Server,
  Radar,
  MonitorSmartphone,
  Gauge,
  Navigation2,
  AlertTriangle,
  TrendingUp,
  Video,
  Clock,
  Wrench,
  Eye,
  Camera,
  Layers,
  Fuel,
  Map,
  CheckSquare,
  Truck,
  ChevronRight
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

  const [dashTab, setDashTab] = useState("visaoGeral");
  const [moduloAtivo, setModuloAtivo] = useState("video");

  // CARROSSEL AUTOMÁTICO DE 13 SEGUNDOS
  useEffect(() => {
    if (docAtivo) return; 
    const abas = ["visaoGeral", "logistica", "videoIA", "telemetria"];
    const intervalo = setInterval(() => {
      setDashTab((abaAtual) => {
        const indexAtual = abas.indexOf(abaAtual);
        const proximoIndex = (indexAtual + 1) % abas.length;
        return abas[proximoIndex];
      });
    }, 13000); 
    return () => clearInterval(intervalo);
  }, [docAtivo]); 

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

  const voltarAoTopo = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const empresas = [
    { nome: "Advance Facilities", logo: logoAdvance },
    { nome: "Fênix Telecom", logo: logoFenix },
    { nome: "Nanis Car Locações", logo: logoNanis },
    { nome: "Nevinho Car Locações", logo: logoNevinho },
    { nome: "ZLS Transportes", logo: logoZls },
  ];

  const segmentos = [
    "Logística e Transportadoras",
    "Frotas Corporativas e Executivas",
    "Operações de Máquinas e Equipamentos",
    "Locadoras e Terceirização de Frotas",
    "Facilities e Operações de Campo",
    "Pequenos Frotistas e Autônomos",
  ];

  const detalhesModulos = [
    {
      id: "video",
      icon: <Video size={24} />,
      title: "Videotelemetria com IA",
      subtitle: "Seus olhos dentro e fora da cabine, prevenindo acidentes.",
      description: "Esqueça as câmeras comuns que apenas gravam. Nosso sistema utiliza Inteligência Artificial embarcada (Edge AI) para ler o rosto do motorista e o ambiente. Ele identifica sinais de sono (bocejos, olhos fechando), uso de celular, cigarro ou ausência de cinto. O motorista recebe um alerta sonoro instantâneo para evitar o acidente, e a central recebe o vídeo do evento salvo na nuvem.",
      topics: ["Prevenção ativa de acidentes e tombamentos", "Auditoria de sinistros (prova em vídeo irrefutável)", "Melhoria contínua do comportamento da equipe"]
    },
    {
      id: "logistics",
      icon: <RouteIcon size={24} />,
      title: "Logistics e Roteirização",
      subtitle: "Do planejamento à entrega final, sem usar papel.",
      description: "Um módulo focado em acabar com o telefone sem fio entre a base e o motorista. Você importa seus pontos de entrega/coleta, e o sistema traça a rota mais inteligente. O motorista acessa tudo pelo App, dá o 'check-in' no local, coleta assinaturas ou tira fotos do canhoto. Se algo der errado (cliente ausente), ele registra o motivo na hora.",
      topics: ["Redução drástica de quilometragem rodada em falso", "Comprovação digital de entregas em tempo real", "Controle exato de pontualidade (SLA)"]
    },
    {
      id: "jornada",
      icon: <Clock size={24} />,
      title: "Jornada de Trabalho",
      subtitle: "Sua blindagem contra passivos trabalhistas.",
      description: "Adequar-se à Lei do Motorista não precisa ser uma dor de cabeça. Nossa plataforma automatiza o apontamento de horas. O motorista inicia o expediente via App ou crachá (RFID). O sistema registra automaticamente o tempo de direção, paradas para descanso, refeição, horas de espera e horas extras, gerando folhas de ponto precisas e auditáveis.",
      topics: ["Adequação rigorosa à legislação vigente", "Fim das planilhas manuais e erros de apontamento", "Alertas para o motorista realizar suas pausas obrigatórias"]
    },
    {
      id: "telemetria",
      icon: <Gauge size={24} />,
      title: "Telemetria e Velocidade na Via",
      subtitle: "O fim do desperdício de combustível e das multas surpresa.",
      description: "Nós lemos a 'mente' do veículo. Monitoramos a RPM (conta-giros), acelerações, freadas bruscas e curvas acentuadas. O grande diferencial é o módulo 'Velocidade na Via': o GPS cruza a posição do carro com os limites de velocidade reais de cada rua (placas). Se a via é de 40km/h e o motorista passa a 60km/h, a central fica sabendo na hora.",
      topics: ["Redução de até 65% em multas de trânsito", "Ranking de motoristas baseado em direção econômica", "Diminuição do desgaste prematuro de freios e pneus"]
    },
    {
      id: "manutencao",
      icon: <Wrench size={24} />,
      title: "Manutenção e Abastecimento",
      subtitle: "Gestão inteligente da saúde da sua frota.",
      description: "Não dependa da memória da equipe para trocar óleo ou pastilhas. Crie planos preventivos baseados no hodômetro ou horímetro real lido pela plataforma. Além disso, o módulo cruza as informações de litragem abastecida com a quilometragem rodada para te dar o custo real de Km/L, identificando imediatamente fraudes ou veículos com defeito.",
      topics: ["Aumento da disponibilidade operacional dos veículos", "Avisos automáticos de manutenções vencidas e a vencer", "Controle de notas fiscais e custos de oficinas"]
    }
  ];

  const funcionalidades = [
    { icon: <Video size={34} />, title: "Videotelemetria com IA", desc: "Auditoria visual em tempo real. Câmeras com Inteligência Artificial que detectam fadiga, distração, uso de celular e garantem a segurança da operação." },
    { icon: <RouteIcon size={34} />, title: "Logistics e Roteirização", desc: "Gestão inteligente de entregas e coletas. Programe itinerários, acompanhe ordens de serviço e automatize a logística de campo de ponta a ponta." },
    { icon: <Smartphone size={34} />, title: "Jornada de Trabalho", desc: "Conformidade total com a Lei do Motorista. Apontamento preciso de horas trabalhadas, intervalos e espera via App Onboard ou RFID, mitigando passivos." },
    { icon: <MapPinned size={34} />, title: "Velocidade na Via", desc: "Reduza multas em até 65%. O sistema mapeia o limite regulamentado de cada rua ou rodovia e cruza com a telemetria do veículo instantaneamente." },
    { icon: <Gauge size={34} />, title: "Telemetria Avançada", desc: "Dashboard de eficiência operacional. Meça acelerações, freadas bruscas, uso de RPM e crie rankings de condução para reduzir o desperdício." },
    { icon: <ShieldCheck size={34} />, title: "Manutenção e Abastecimento", desc: "Aumente a disponibilidade da frota. Defina planos de manutenção preditiva e corretiva com base no hodômetro real e monitore custos de consumo." },
  ];

  const beneficios = [
    "Ecossistema unificado: elimine a necessidade de contratar múltiplos softwares",
    "Mitigação drástica do passivo de multas (Velocidade na Via) e riscos trabalhistas (Jornada)",
    "Redução comprovada de custos com combustível e manutenções corretivas",
    "Controle total e auditoria visual da operação via Videomonitoramento IA",
    "Tomada de decisão baseada em dados reais (Big Data e Telemetria Avançada)",
    "Arquitetura escalável: atende com excelência desde 1 até 5.000 veículos",
  ];

  const faq = [
    { pergunta: "A Orion Sat atua como um sistema integrado (ERP Logístico)?", resposta: "Sim. Nosso maior diferencial é entregar um ecossistema completo. Você não precisa de um sistema para câmeras, outro para roteirização de entregas e outro para a Lei do Motorista. A plataforma Orion Sat centraliza Videotelemetria, Logistics, Jornada, Manutenção e Telemetria em um único painel de controle." },
    { pergunta: "A plataforma é acessível para frotas de menor porte e veículos particulares?", resposta: "Sim. Nossa tecnologia Enterprise foi desenhada para ser totalmente escalável. Pequenos frotistas, locadoras menores e até profissionais autônomos têm acesso à mesma inteligência operacional utilizada por grandes transportadoras, pagando apenas pelas licenças ativas na sua rotina." },
    { pergunta: "Qual o prazo de implantação da plataforma?", resposta: "A implantação inicial do painel é rápida, ocorrendo logo após a ativação dos equipamentos ou aplicativos. O tempo total varia conforme o tamanho da frota e os módulos escolhidos, mas nossa equipe acompanha você em todo o processo para garantir uma transição sem dores de cabeça." }
  ];

  // TEXTOS CORPORATIVOS E JURÍDICOS COMPLETOS
  if (docAtivo) {
    return (
      <div className="bg-[#020817] text-white min-h-screen py-24 px-6 relative overflow-hidden font-sans">
        <div className="max-w-3xl mx-auto relative z-10">
          <button
            onClick={() => alternarDocumento(null)}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold mb-8 transition-all duration-300 group cursor-pointer hover:bg-cyan-400/10 px-4 py-2 rounded-xl"
          >
            <ArrowRight className="rotate-180 transition-transform duration-300 group-hover:-translate-x-2" size={20} />
            Voltar para o site principal
          </button>

          {docAtivo === "privacidade" && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Política de Privacidade</h1>
              <p className="text-zinc-500 mb-8 text-sm">Versão Premium Corporativa | Atualização: Maio de 2026</p>
              <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed">
                <p><strong>1. Escopo:</strong> A ORION SAT LTDA está totalmente comprometida com a privacidade e proteção de dados de seus clientes, parceiros e motoristas operacionais, atuando em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
                <p><strong>2. Coleta de Informações:</strong> Nossos softwares coletam registros analíticos de telemetria, posicionamento geográfico em primeiro e segundo plano (essencial para módulos de rotas e jornada de trabalho), além de dados de mídia gerados pela videotelemetria veicular proativa.</p>
                <p><strong>3. Finalidade:</strong> Todas as informações processadas possuem finalidade única e exclusiva de execução contratual logística, auditoria operacional e fornecimento de inteligência corporativa para os contratantes das licenças de uso.</p>
                <p><strong>4. Não Comercialização:</strong> A Orion Sat adota uma política inflexível de segurança: nenhum dado coletado em nossos servidores, logs de navegação ou imagens de videotelemetria são comercializados, alugados ou compartilhados com terceiros para fins publicitários.</p>
              </div>
            </div>
          )}

          {docAtivo === "cookies" && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Política de Cookies</h1>
              <p className="text-zinc-500 mb-8 text-sm">Transparência e Governança | Atualização: Maio de 2026</p>
              <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed">
                <p><strong>1. O que são Cookies:</strong> São pequenos arquivos temporários inseridos no navegador do usuário com o objetivo exclusivo de otimizar a experiência técnica e segurança nas nossas plataformas.</p>
                <p><strong>2. Cookies Essenciais:</strong> Utilizados para manter sessões seguras e estáveis de usuários e administradores logados nos dashboards de telemetria logicial em nuvem.</p>
                <p><strong>3. Cookies Analíticos e Funcionais:</strong> Armazenam de forma anônima as preferências de layout de mapas, filtros de relatórios e métricas de desempenho de carregamento do site.</p>
              </div>
            </div>
          )}

          {docAtivo === "termos" && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Termos de Uso</h1>
              <p className="text-zinc-500 mb-8 text-sm">Contrato de Licenciamento de Software | Atualização: Maio de 2026</p>
              <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed">
                <p><strong>1. Natureza do Serviço (SaaS):</strong> A Orion Sat é uma plataforma de software como serviço dedicada exclusivamente ao fornecimento de dados analíticos, telemetria avançada, otimização de frotas e gerenciamento de jornadas trabalhistas de equipes de campo.</p>
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-zinc-300">
                  <p><strong>2. CLÁUSULA DE ESCOPO TECNOLÓGICO RESTRITO:</strong> Por se tratar de um ambiente focado em análise informacional de dados operacionais, as soluções Orion Sat <strong>NÃO possuem escopo de gerenciamento de riscos civis patrimoniais, atividades de pronta resposta tática, escoltas ou salvaguarda material de ativos corporativos</strong>. Nossos sistemas não dão coberturas securitárias ou financeiras de qualquer natureza sobre os bens cadastrados.</p>
                </div>
                <p><strong>3. Responsabilidade de Uso:</strong> O usuário e o contratante corporativo são os únicos responsáveis pela guarda segura de suas chaves e credenciais de acesso, bem como pela conformidade na coleta de imagens de sua equipe nos termos da lei.</p>
              </div>
            </div>
          )}

          <button onClick={() => alternarDocumento(null)} className="w-full md:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 px-6 py-4 rounded-xl font-bold mt-12 transition-all duration-300">Fechar janela legal</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#020817] text-white overflow-x-hidden font-sans">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-40 border-b border-white/5 backdrop-blur-2xl bg-[#020817]/70 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div onClick={voltarAoTopo} className="flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={logo} alt="ORIONSAT" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
            <div>
              <h1 className="font-black text-xl md:text-3xl tracking-tight leading-none bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">ORIONSAT</h1>
              <p className="text-cyan-400 uppercase tracking-[0.2em] md:tracking-[0.35em] text-[8px] md:text-xs mt-1">Gestão Inteligente</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">Visão Geral</a>
            <a href="#modulos-detalhados" className="hover:text-cyan-400 transition-colors">Módulos</a>
            <a href="#tecnologia" className="hover:text-cyan-400 transition-colors">Infraestrutura</a>
            <a href="#clientes" className="hover:text-cyan-400 transition-colors">Clientes</a>
          </nav>
          <a href="https://linktr.ee/orionsatgestao" target="_blank" rel="noopener noreferrer" className="bg-cyan-400 text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105">Acessar Sistema</a>
        </div>
      </header>

      {/* HERO & DASHBOARD INTERATIVO */}
      <section className="min-h-[100dvh] flex items-center pt-28 md:pt-36 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 md:gap-24 items-center w-full">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs mb-8 mx-auto lg:mx-0 font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <Layers size={16} className="animate-pulse" /> Ecossistema Definitivo de Gestão Operacional
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-tight tracking-tight mb-4">
              Visibilidade total <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block">da sua operação.</span>
              Controle absoluto <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block">dos seus resultados.</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-2xl mt-8 mx-auto lg:mx-0">
              Integração total em uma única plataforma Enterprise. Videotelemetria com IA, roteirização logística, controle de jornada trabalhista e telemetria avançada. Escale sua frota com eficiência e segurança comprovada.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10">
              <a href="https://wa.me/5511911021692" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.5)]">Solicitar Demonstração <ArrowRight size={20} /></a>
              <a href="#modulos-detalhados" className="w-full sm:w-auto border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/50 px-8 py-4 rounded-2xl transition-all text-center">Conhecer Módulos</a>
            </div>
          </div>

          {/* DASHBOARD MOCKUP FUNCIONAL NO PC E NO CELULAR */}
          <div className="relative w-full mt-10 lg:mt-0 animate-float">
            <div className="absolute inset-0 bg-cyan-400/20 blur-[80px] rounded-full animate-pulse" />
            <div className="relative bg-[#050B1A]/90 border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                <div>
                  <p className="text-cyan-400 font-bold tracking-widest text-[9px] md:text-xs uppercase">Centro de Controle Operacional</p>
                  <h3 className="text-lg md:text-2xl font-black text-white flex items-center gap-2"><Activity className="text-cyan-400" size={20} /> ORIONSAT DASHBOARD</h3>
                </div>
                <div className="text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20 text-[10px] md:text-sm font-bold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-ping absolute opacity-75" />
                  <div className="w-2 h-2 rounded-full bg-green-400 relative" /> CONECTADO
                </div>
              </div>

              {/* TABS DO DASHBOARD */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar border-b border-white/10">
                <button onClick={() => setDashTab("visaoGeral")} className={`px-3 md:px-4 py-2 rounded-full text-[10px] md:text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${dashTab === 'visaoGeral' ? 'bg-cyan-400 text-black shadow-md' : 'bg-white/5 text-zinc-400'}`}><Activity size={14} /> Visão Geral</button>
                <button onClick={() => setDashTab("videoIA")} className={`px-3 md:px-4 py-2 rounded-full text-[10px] md:text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${dashTab === 'videoIA' ? 'bg-cyan-400 text-black shadow-md' : 'bg-white/5 text-zinc-400'}`}><Video size={14} /> Câmera IA</button>
                <button onClick={() => setDashTab("logistica")} className={`px-3 md:px-4 py-2 rounded-full text-[10px] md:text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${dashTab === 'logistica' ? 'bg-cyan-400 text-black shadow-md' : 'bg-white/5 text-zinc-400'}`}><Map size={14} /> Logística</button>
                <button onClick={() => setDashTab("telemetria")} className={`px-3 md:px-4 py-2 rounded-full text-[10px] md:text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${dashTab === 'telemetria' ? 'bg-cyan-400 text-black shadow-md' : 'bg-white/5 text-zinc-400'}`}><Gauge size={14} /> Telemetria</button>
              </div>

              {dashTab === "visaoGeral" && (
                <div className="animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-5">
                    <div className="bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-3 md:p-5">
                      <span className="text-[10px] md:text-sm font-medium text-zinc-400 flex items-center gap-2"><CheckSquare className="text-cyan-400 w-4 h-4" /> Ordens de Serviço</span>
                      <h4 className="text-xl md:text-4xl font-black text-white mt-1">1.248 <span className="text-[9px] md:text-sm font-normal text-zinc-500">entregas</span></h4>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-3 md:p-5">
                      <span className="text-[10px] md:text-sm font-medium text-zinc-400 flex items-center gap-2"><Clock className="text-cyan-400 w-4 h-4" /> Jornadas Ativas</span>
                      <h4 className="text-xl md:text-4xl font-black text-white mt-1">142 <span className="text-[9px] md:text-sm font-normal text-zinc-500">mot.</span></h4>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-3 md:p-5">
                      <span className="text-[10px] md:text-sm font-medium text-zinc-400 flex items-center gap-2"><Gauge className="text-cyan-400 w-4 h-4" /> Score da Frota</span>
                      <h4 className="text-xl md:text-4xl font-black text-white mt-1">94 <span className="text-[9px] md:text-sm font-normal text-zinc-500">pts</span></h4>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl md:rounded-2xl p-3 md:p-5">
                      <span className="text-[10px] md:text-sm font-medium text-zinc-400 flex items-center gap-2"><Wrench className="text-cyan-400 w-4 h-4" /> Preventivas</span>
                      <h4 className="text-xl md:text-4xl font-black text-white mt-1">08 <span className="text-[9px] md:text-sm font-normal text-zinc-500">veíc.</span></h4>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-red-500/10 rounded-lg p-2.5 flex items-center justify-between text-[10px] md:text-sm border border-red-500/20">
                      <div className="flex items-center gap-2"><Video className="text-red-400 w-4 h-4" /><span className="text-zinc-200 font-medium line-clamp-1">Câmera IA: Sinal de fadiga (TRK-44)</span></div>
                      <span className="text-red-400 font-bold flex items-center gap-1 flex-shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"/>GRAVANDO</span>
                    </div>
                  </div>
                </div>
              )}

              {dashTab === "videoIA" && (
                <div className="animate-in fade-in duration-300">
                  <div className="bg-black rounded-2xl border border-white/10 relative h-36 md:h-48 flex flex-col items-center justify-center overflow-hidden shadow-inner">
                     <video src="/video-ia.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-70" />
                     <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent pointer-events-none" />
                     <div className="absolute top-2 left-2 md:top-3 md:left-3 text-red-400 text-[8px] md:text-[10px] font-bold flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded border border-white/10 z-10">LIVE FEED: CABINE IA</div>
                     <span className="relative z-10 mt-auto mb-3 text-white text-[8px] md:text-[10px] font-bold bg-black/70 px-3 py-1 rounded-full border border-cyan-400/30 backdrop-blur-md">RECONHECIMENTO FACIAL ATIVO</span>
                  </div>
                </div>
              )}

              {dashTab === "logistica" && (
                <div className="animate-in fade-in duration-300">
                  <div className="bg-[#0b101e] rounded-xl md:rounded-2xl border border-white/10 relative h-36 md:h-48 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full opacity-80" preserveAspectRatio="none">
                      <path d="M -50 150 Q 150 180 250 80 T 450 50" fill="none" stroke="#22d3ee" strokeWidth="3" strokeDasharray="6,6" />
                    </svg>
                    <div className="absolute top-2 left-2 text-cyan-400 text-[8px] md:text-[10px] font-bold bg-black/60 px-2 py-1 rounded border border-white/10">ROTEIRIZAÇÃO AO VIVO</div>
                    <div className="absolute top-[40%] left-[62%] animate-bounce"><Truck className="text-green-400 w-4 h-4 md:w-5 md:h-5 drop-shadow-md" /></div>
                  </div>
                </div>
              )}

              {dashTab === "telemetria" && (
                <div className="animate-in fade-in duration-500">
                  <div className="bg-black/40 rounded-xl md:rounded-2xl border border-white/5 p-3.5 space-y-2.5">
                    <div>
                      <div className="flex justify-between text-[8px] md:text-[9px] mb-1 font-medium text-zinc-300"><span>Excesso de Velocidade</span><span className="text-red-400">12 Ocorrências</span></div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden"><div className="bg-red-400 h-full rounded-full animate-bar" style={{ width: '85%' }} /></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[8px] md:text-[9px] mb-1 font-medium text-zinc-300"><span>Freada Brusca</span><span className="text-yellow-400">04 Ocorrências</span></div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden"><div className="bg-yellow-400 h-full rounded-full animate-bar" style={{ width: '30%' }} /></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[8px] md:text-[9px] mb-1 font-medium text-zinc-300"><span>Curva Acidentada</span><span className="text-orange-400">02 Ocorrências</span></div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden"><div className="bg-orange-400 h-full rounded-full animate-bar" style={{ width: '15%' }} /></div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section id="sobre" className="max-w-7xl mx-auto px-4 md:px-6 py-20 relative z-10 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2"><span className="w-8 h-px bg-cyan-400"></span> Visão Geral Corporativa</p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">O fim dos softwares fragmentados na sua operação.</h2>
          </div>
          <div className="space-y-4 text-zinc-400 text-base md:text-lg leading-relaxed">
            <p>O mercado logístico e de transportes sofre com a falta de centralização. Uma ferramenta para câmeras, outra para rastreamento, planilhas para manutenção e papéis para a jornada do motorista. <strong>A ORIONSAT unifica todos os pilares da sua gestão.</strong></p>
          </div>
        </div>
      </section>

      {/* SEÇÃO EXPLICAÇÃO COMPLETA */}
      <section id="modulos-detalhados" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 relative z-10">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-3">Funcionalidades na Prática</p>
          <h2 className="text-3xl md:text-5xl font-black">Entenda a fundo nossas soluções</h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 bg-white/5 border border-white/10 rounded-[32px] p-4 md:p-10">
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {detalhesModulos.map((modulo) => (
              <button
                key={modulo.id}
                onClick={() => setModuloAtivo(modulo.id)}
                className={`flex items-center gap-4 text-left p-4 rounded-2xl transition-all duration-300 active:scale-95 ${moduloAtivo === modulo.id ? "bg-cyan-400 text-black font-bold shadow-xl" : "bg-black/30 text-zinc-400 hover:bg-white/5"}`}
              >
                <div className={moduloAtivo === modulo.id ? "text-black" : "text-cyan-400"}>{modulo.icon}</div>
                <span className="flex-1 text-xs md:text-sm font-semibold">{modulo.title}</span>
                {moduloAtivo === modulo.id && <ChevronRight size={18} />}
              </button>
            ))}
          </div>
          <div className="lg:col-span-8 bg-[#02050A] rounded-2xl p-5 md:p-10 border border-white/5 min-h-[320px] flex flex-col justify-center">
            {detalhesModulos.map((modulo) => moduloAtivo === modulo.id && (
              <div key={modulo.id} className="animate-in fade-in duration-300">
                <h3 className="text-xl md:text-3xl font-black mb-3 text-white">{modulo.subtitle}</h3>
                <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed">{modulo.description}</p>
                <div className="space-y-2">
                  {modulo.topics.map((topico, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-300 text-xs md:text-sm"><CheckCircle2 size={16} className="text-green-400 flex-shrink-0" /> {topico}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARQUITETURA DE REDE & IMPACTO FINANCEIRO */}
      <section id="tecnologia" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black mb-6">Arquitetura de Software</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Video />, title: "Homologação de Câmeras de Ponta" },
                { icon: <Database />, title: "Big Data e Nuvem Criptografada" },
                { icon: <Server />, title: "Disponibilidade de Servidor 99.9%" },
                { icon: <Globe />, title: "Integrações ERP via API Rest" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <div className="text-cyan-400 mb-3 flex justify-center">{item.icon}</div>
                  <h3 className="text-sm font-bold text-zinc-200">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-2">Impacto Financeiro Real</h2>
            <p className="text-zinc-500 mb-6 text-sm">Resultados que transformam dados em redução de custos.</p>
            <div className="space-y-3">
              {beneficios.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3"><CheckCircle2 className="text-cyan-400 flex-shrink-0" size={20} /> <p className="text-zinc-300 text-xs md:text-sm">{item}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES PARCEIROS */}
      <section id="clientes" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 relative z-10">
        <h2 className="text-center text-2xl font-bold mb-8">Empresas que confiam em nós</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {empresas.map((empresa, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 flex items-center justify-center w-full max-w-[140px] md:max-w-[180px] h-20 md:h-24 group">
              <img src={empresa.logo} alt={empresa.nome} className="max-h-full max-w-full object-contain md:opacity-70 group-hover:opacity-100 transition-all duration-300 blend-logo" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 md:px-6 pb-20 relative z-10">
        <h2 className="text-center text-3xl font-black mb-10">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">{item.pergunta}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.resposta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 relative z-10">
        <div className="bg-[#050B1A] border border-cyan-400/30 rounded-3xl p-6 md:p-16 text-center shadow-xl">
          <h2 className="text-2xl md:text-5xl font-black mb-4">Gestão de ponta acessível para a sua realidade.</h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto mb-8">Não espere os custos saírem do controle. Agende uma consultoria estratégica hoje mesmo.</p>
          <a href="https://wa.me/5511911021692" target="_blank" rel="noopener noreferrer" className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 active:scale-90 transition-transform">Falar com um consultor <ArrowRight size={18} /></a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 bg-black/40 relative z-10 text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div onClick={voltarAoTopo} className="flex items-center gap-3 mb-4 cursor-pointer">
              <img src={logo} alt="ORIONSAT" className="w-10 h-10" />
              <h3 className="font-black text-xl">ORIONSAT</h3>
            </div>
            <p className="text-zinc-500">Métricas visuais, telemetria avançada e inteligência a favor do seu negócio.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Módulos</h4>
            <ul className="space-y-1.5 text-zinc-400 text-xs">
              <li>Videotelemetria com IA</li>
              <li>Logistics e Roteirização</li>
              <li>Jornada de Trabalho</li>
              <li>Manutenção e Abastecimento</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Contato</h4>
            <ul className="space-y-1.5 text-zinc-400 text-xs">
              <li>CNPJ: 66.620.074/0001-39</li>
              <li>Itaquaquecetuba/SP</li>
              <li>comercial@orionsatgestao.com.br</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs gap-4">
          <p>© 2026 ORIONSAT Gestão Inteligente. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-zinc-500 font-medium">
            <button onClick={() => alternarDocumento("privacidade")} className="hover:text-cyan-400 transition-colors">Privacidade</button>
            <button onClick={() => alternarDocumento("cookies")} className="hover:text-cyan-400 transition-colors">Cookies</button>
            <button onClick={() => alternarDocumento("termos")} className="hover:text-cyan-400 transition-colors">Termos de Uso</button>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a
        href="https://wa.me/5511911021692"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl transition-transform active:scale-90 flex items-center justify-center animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.48-1.459-1.653-1.756-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.422-.272.347-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
