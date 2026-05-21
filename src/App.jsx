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
  TrendingUp
} from "lucide-react";

import "./App.css";
import logo from "./assets/logo.png";

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
      icon: <Gauge size={34} />,
      title: "Telemetria Avançada",
      desc: "Análise comportamental (RPM, frenagens, aceleração) e performance de frota.",
    },
    {
      icon: <MonitorSmartphone size={34} />,
      title: "Plataforma Web + Mobile",
      desc: "Controle completo através de dashboard web e aplicativos Android/iOS.",
    },
    {
      icon: <AlertTriangle size={34} />,
      title: "Alertas Operacionais",
      desc: "Notificações inteligentes sobre desvios de rota, ignição e violações em tempo real.",
    },
    {
      icon: <BarChart3 size={34} />,
      title: "Dashboards & Relatórios",
      desc: "Indicadores estratégicos de economia de combustível e produtividade.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Monitoramento 24/7",
      desc: "Operação contínua com alta disponibilidade de servidores e segurança criptografada.",
    },
  ];

  const beneficios = [
    "Redução de custos com combustível e manutenção",
    "Maior controle logístico e de produtividade",
    "Centralização operacional em uma única tela",
    "Auditoria completa de condução dos motoristas",
    "Prevenção inteligente de acidentes e desgastes",
    "Tomada de decisão baseada em dados em tempo real",
  ];

  const faq = [
    {
      pergunta: "A plataforma possui aplicativo mobile?",
      resposta:
        "Sim. Possuímos uma plataforma web completa para os gestores e aplicativo Android/iOS dedicado para o acompanhamento em tempo real na palma da mão.",
    },
    {
      pergunta: "A tecnologia funciona para frotas pesadas e máquinas?",
      resposta:
        "Sim. Nossa arquitetura atende desde veículos de passeio leves até caminhões pesados, máquinas agrícolas, operações logísticas complexas e embarcações.",
    },
    {
      pergunta: "O que a telemetria avançada analisa?",
      resposta:
        "Analisamos parâmetros críticos como excesso de velocidade, rotação do motor (RPM), curvas acentuadas, frenagens bruscas, uso em marcha lenta e estimativa de consumo.",
    },
    {
      pergunta: "É possível integrar com ERPs da minha empresa?",
      resposta:
        "Sim. A plataforma ORIONSAT foi desenvolvida para suportar integrações robustas via API com sistemas operacionais, ERPs e outras soluções externas de gestão.",
    },
  ];

  // ==========================================
  // RENDERIZAÇÃO DAS PÁGINAS LEGAIS
  // ==========================================
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
                    <li><strong>Dados Cadastrais:</strong> Nome do gestor ou usuário, e-mail comercial ou pessoal, telefone e dados cadastrais (CPF/CNPJ).</li>
                    <li><strong>Dados de Telemetria:</strong> Indicadores técnicos do veículo como velocidade, rotação do motor (RPM), consumo estimado, frenagens abruptas e curvas acentuadas.</li>
                    <li><strong>Dados de Posicionamento Logístico:</strong> Coordenadas de geolocalização coletadas em primeiro e segundo plano para roteirização automatizada.</li>
                    <li><strong>Dados de Sessão Técnica:</strong> Registros obrigatórios de conexão (logs), especificações de navegadores e identificadores de hardware.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">3. Finalidade e Justificativas Jurídicas</h2>
                  <p>O tratamento estrutura-se nas bases legais de: Execução de Contrato (operação estável do software), Cumprimento de Obrigação Legal (guarda de logs por 6 meses) e Legítimo Interesse (segurança cibernética e prevenção contra inconsistências).</p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">4. Diretrizes de Compartilhamento e Não Comercialização</h2>
                  <p>A Orion Sat adota uma política corporativa inflexível de não comercialização de dados. As informações operacionais nunca serão vendidas ou compartilhadas com terceiros para fins comerciais. O fluxo limita-se ao armazenamento criptografado em nuvem global e fornecimento direto para a empresa contratante.</p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">5. Operação de Geolocalização em Segundo Plano</h2>
                  <p>Para assegurar a continuidade dos indicadores logísticos, o aplicativo móvel requer autorização para processar dados de localização de forma ininterrupta, inclusive em segundo plano (aplicativo minimizado ou tela bloqueada). A desativação manual interrompe a análise de frotas.</p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">6. Direitos do Titular</h2>
                  <p>Asseguramos todos os direitos previstos no Art. 18 da LGPD, viabilizando o acesso facilitado, retificação de inconsistências, confirmação de tratamento e exclusão definitiva, observados os prazos fiscais e cíveis obrigatórios.</p>
                </section>

                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">7. Governança e Contato</h2>
                  <p>Para dúvidas operacionais ou requisições técnicas de dados, entre em contato:</p>
                  <p className="mt-4 text-zinc-300 font-medium bg-white/5 p-5 rounded-2xl border border-white/10 text-sm md:text-base break-words">
                    <strong className="text-white text-lg">ORION SAT LTDA</strong><br />
                    CNPJ: 66.620.074/0001-39<br />
                    Sede: Itaquaquecetuba/SP<br />
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
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">2. Tipos de Cookies Armazenados</h2>
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                      <h3 className="text-lg font-bold text-zinc-200 mb-1">Cookies de Sessão (Essenciais)</h3>
                      <p className="text-sm mb-3 text-zinc-400">Imprescindíveis para validar a autenticação do usuário gestor ou autônomo e manter sua área logada ativa com estabilidade técnica.</p>
                      <span className="text-[10px] md:text-xs font-bold text-red-400 uppercase bg-red-400/10 px-3 py-1.5 rounded-full inline-block">Duração: Sessão / Obrigatório</span>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                      <h3 className="text-lg font-bold text-zinc-200 mb-1">Cookies de Preferências (Funcionais)</h3>
                      <p className="text-sm mb-3 text-zinc-400">Guardam as configurações personalizadas aplicadas pelo usuário na ordenação de tabelas, filtragem de relatórios ou escolha de layouts de mapas.</p>
                      <span className="text-[10px] md:text-xs font-bold text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1.5 rounded-full inline-block">Duração: Persistente / Opcional</span>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                      <h3 className="text-lg font-bold text-zinc-200 mb-1">Cookies Analíticos</h3>
                      <p className="text-sm mb-3 text-zinc-400">Coletam estatísticas de uso consolidadas para monitorar o tempo de carregamento das telas de gestão e apontar falhas de links.</p>
                      <span className="text-[10px] md:text-xs font-bold text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1.5 rounded-full inline-block">Duração: Persistente / Opcional</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">3. Gerenciamento Técnico pelo Usuário</h2>
                  <p>O usuário pode gerenciar, bloquear ou limpar os cookies armazenados acessando as configurações do navegador web. A recusa total de cookies essenciais impede a autenticação e o uso dos painéis de telemetria em nuvem.</p>
                </section>

                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">4. Contato</h2>
                  <p>Dúvidas sobre aplicações digitais podem ser endereçadas diretamente pelo e-mail:</p>
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
                  <p>Os presentes Termos regulam o direito de acesso e utilização dos sistemas de software, painéis corporativos em nuvem e aplicativos móveis de propriedade da ORION SAT LTDA. O ecossistema constitui um conjunto de ferramentas dedicadas exclusivamente à gestão inteligente de frotas, operações individuais, telemetria e roteirização comercial.</p>
                </section>

                <section className="bg-red-500/5 border border-red-500/20 p-5 md:p-6 rounded-2xl">
                  <h2 className="text-xl md:text-2xl font-bold text-red-400 mb-3">2. Delimitação Tecnológica Importante</h2>
                  <p className="text-zinc-300 font-medium mb-3 text-sm md:text-base">
                    <strong>Cláusula de Escopo Tecnológico Estrito:</strong>
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Por se tratar de um ambiente puramente de análise de dados, processamento de telemetria e gestão de software informacional (SaaS), as soluções da Orion Sat <strong>NÃO possuem escopo, vinculação ou aderência com o mercado de gerenciamento de riscos civis de ativos, atividades corporativas de pronta resposta, intervenções físicas de campo ou qualquer modalidade de salvaguarda material de bens</strong>. A Orion Sat exime-se inteiramente de qualquer natureza de cobertura financeira ou securitária sobre os veículos cadastrados.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">3. Responsabilidade Operacional e Uso</h2>
                  <p>As credenciais de acesso possuem caráter pessoal e intransferível. Compete exclusivamente ao cliente corporativo ou usuário autônomo a guarda segura de suas chaves. São proibidas condutas de engenharia reversa ou cópia de código-fonte.</p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">4. Conectividade e Infraestrutura Externa</h2>
                  <p>A exibição das informações operacionais em tempo real depende diretamente da estabilidade de redes de telecomunicações terceirizadas e captação técnica de sinais de satélite (GPS). Oscilações destas infraestruturas externas não configuram falha de software da Orion Sat.</p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">5. Propriedade Intelectual e Atualizações</h2>
                  <p>A outorga de acesso não transfere direitos industriais ou intelectuais. Algoritmos de roteirização, dashboards, marcas e APIs permanecem sob domínio exclusivo da Orion Sat LTDA. O sistema poderá sofrer atualizações tecnológicas sem gerar direito a indenizações.</p>
                </section>

                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">6. Suspensão de Acesso</h2>
                  <p>A Orion Sat reserva-se o direito de suspender o acesso em casos comprovados de inadimplência, tentativas de violação cibernética da infraestrutura de nuvem ou descumprimento de qualquer cláusula destes Termos.</p>
                </section>

                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">7. Foro de Eleição</h2>
                  <p>As partes elegem o foro da Comarca de <strong>Itaquaquecetuba/SP</strong> como o único competente para dirimir controvérsias técnicas decorrentes da aplicação destes Termos.</p>
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
      
      {/* INJEÇÃO DE CSS DE ANIMAÇÃO NATIVA (Sem bibliotecas externas) */}
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slow-pulse {
          animation: slow-pulse 8s ease-in-out infinite;
        }
      `}</style>

      {/* BACKGROUND EFFECTS DINÂMICOS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 md:left-1/3 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-cyan-400 blur-[150px] md:blur-[200px] -translate-x-1/2 md:-translate-x-0 animate-slow-pulse" />
        <div className="absolute bottom-0 right-0 md:right-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-700 blur-[150px] md:blur-[200px] animate-slow-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* HEADER NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-2xl bg-[#020817]/70 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={logo} alt="ORIONSAT" className="w-10 h-10 md:w-14 md:h-14 object-contain" translate="no" />
            <div translate="no">
              <h1 className="font-black text-xl md:text-3xl tracking-tight leading-none bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">ORIONSAT</h1>
              <p className="text-cyan-400 uppercase tracking-[0.2em] md:tracking-[0.35em] text-[8px] md:text-xs mt-1">Gestão Inteligente</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-zinc-300">
            <a href="#sobre" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Sobre</a>
            <a href="#plataforma" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Plataforma</a>
            <a href="#tecnologia" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Tecnologia</a>
            <a href="#clientes" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Clientes</a>
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
              <Radar size={16} className="animate-spin duration-3000" />
              Sistema avançado de telemetria e gestão de frotas
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[1.05] md:leading-[0.95] tracking-tight">
              Visibilidade
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block mt-2">operacional total.</span>
              Inteligência
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block mt-2">que gera economia.</span>
            </h2>

            <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-2xl mt-8 mx-auto lg:mx-0">
              Transforme dados em decisões. Monitoramento de ativos em tempo real, auditoria avançada de condução e controle absoluto da sua operação logística na mesma plataforma.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5 mt-10">
              <a
                href="https://wa.me/5511911021692"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-cyan-400 text-black px-8 py-4 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95 group"
              >
                Solicitar demonstração
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#plataforma"
                className="w-full sm:w-auto border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-white/10 px-8 py-4 md:py-5 rounded-2xl transition-all duration-300 font-medium text-center hover:-translate-y-1"
              >
                Explorar recursos
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-white/10 mt-12 max-w-lg mx-auto lg:mx-0">
              <div className="group cursor-default">
                <h3 className="text-3xl md:text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform origin-left">24/7</h3>
                <p className="text-zinc-500 text-xs md:text-sm mt-1 font-medium group-hover:text-zinc-300 transition-colors">Monitoramento ativo</p>
              </div>
              <div className="group cursor-default">
                <h3 className="text-3xl md:text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform origin-left">IoT</h3>
                <p className="text-zinc-500 text-xs md:text-sm mt-1 font-medium group-hover:text-zinc-300 transition-colors">Conectividade M2M</p>
              </div>
              <div className="group cursor-default">
                <h3 className="text-3xl md:text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform origin-left">API</h3>
                <p className="text-zinc-500 text-xs md:text-sm mt-1 font-medium group-hover:text-zinc-300 transition-colors">Integração nativa</p>
              </div>
            </div>
          </div>

          {/* DASHBOARD MOCKUP FLUTUANTE */}
          <div className="relative w-full mt-10 lg:mt-0 animate-float perspective-1000">
            <div className="absolute inset-0 bg-cyan-400/20 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
            <div className="relative bg-[#050B1A]/80 border border-white/10 rounded-3xl md:rounded-[36px] p-5 md:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-cyan-400/30">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-cyan-400 font-bold tracking-widest text-[10px] md:text-xs mb-1 uppercase">Central de Controle</p>
                  <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                    <Activity className="text-cyan-400 animate-pulse" size={24} />
                    ORIONSAT DASHBOARD
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20 text-xs md:text-sm font-bold">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400 animate-ping absolute opacity-75" />
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400 relative" />
                  SISTEMA ONLINE
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-5">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 md:p-5 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Car className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-xs md:text-sm font-medium">Frotas Ativas</span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">248<span className="text-sm md:text-lg text-zinc-500 font-medium tracking-normal ml-1">/250</span></h4>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 md:p-5 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <TrendingUp className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-xs md:text-sm font-medium">Eficiência (Km/L)</span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">4.2<span className="text-sm md:text-lg text-zinc-500 font-medium tracking-normal ml-1">avg</span></h4>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 md:p-5 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300 cursor-default group">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Gauge className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-xs md:text-sm font-medium">Score de Condução</span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">96<span className="text-sm md:text-lg text-zinc-500 font-medium tracking-normal ml-1">%</span></h4>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 md:p-5 hover:bg-red-500/20 hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 opacity-90 text-red-400">
                    <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 animate-[bounce_2s_infinite]" />
                    <span className="text-xs md:text-sm font-bold">Alertas Críticos</span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-black tracking-tight text-white">03</h4>
                </div>
              </div>

              <div className="bg-[#02050A] rounded-2xl border border-white/10 p-1 relative overflow-hidden h-40 md:h-48 group">
                <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:30px_30px] transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute top-3 left-4 text-[10px] md:text-xs font-bold text-zinc-400 tracking-wider flex items-center gap-2 z-10 bg-black/60 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
                  <MapPinned size={14} className="text-cyan-400" />
                  RASTREAMENTO AO VIVO
                </div>
                
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]" />
                  </div>
                  <span className="text-[8px] font-bold text-cyan-300 mt-1 bg-black/80 px-1.5 py-0.5 rounded border border-cyan-400/20">RTA-01</span>
                </div>

                <div className="absolute top-1/4 right-1/3 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center animate-[pulse_2.5s_ease-in-out_infinite]">
                    <Navigation2 size={14} className="text-cyan-400 fill-cyan-400 rotate-45 animate-pulse" />
                  </div>
                  <span className="text-[8px] font-bold text-cyan-300 mt-1 bg-black/80 px-1.5 py-0.5 rounded border border-cyan-400/20">TRK-99</span>
                </div>

                <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center animate-[pulse_1.5s_ease-in-out_infinite]">
                    <Navigation2 size={14} className="text-red-400 fill-red-400 -rotate-12" />
                  </div>
                  <span className="text-[8px] font-bold text-red-300 mt-1 bg-black/80 px-1.5 py-0.5 rounded border border-red-500/30 text-center">OVR-SPD<br/>110km/h</span>
                </div>
              </div>

              <div className="mt-4 md:mt-5 space-y-2">
                <div className="bg-white/5 rounded-lg p-2.5 md:p-3 flex items-center justify-between text-xs md:text-sm border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
                    <span className="text-zinc-300 font-medium">Excesso de Velocidade detectado</span>
                  </div>
                  <span className="text-red-400 text-[10px] md:text-xs font-bold">Agora</span>
                </div>
                <div className="bg-white/5 rounded-lg p-2.5 md:p-3 flex items-center justify-between text-xs md:text-sm border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="text-zinc-300 font-medium">Motor ocioso (RPM contínuo)</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] md:text-xs">Há 4 min</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SOBRE */}
      <section id="sobre" className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-5 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-400"></span> Governança Logística
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Hardware e software operando em perfeita sincronia.
            </h2>
          </div>
          <div className="space-y-4 md:space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
            <p className="hover:text-zinc-300 transition-colors">
              A ORIONSAT não fornece apenas posições de GPS no mapa. Entregamos um raio-X completo da sua operação. Atuamos com telemetria avançada, extraindo dados vitais direto do motor e da central eletrônica do veículo.
            </p>
            <p className="hover:text-zinc-300 transition-colors">
              Nossa missão é combater o desperdício, reduzir manutenções corretivas causadas por má condução e centralizar o despacho logístico em um painel simples, rápido e auditável.
            </p>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="plataforma" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Módulos da Plataforma</p>
          <h2 className="text-3xl md:text-5xl font-black">Inteligência aplicada à frota</h2>
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

      {/* SEGMENTOS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Cobertura de Atuação</p>
          <h2 className="text-3xl md:text-5xl font-black">Operações que conectamos</h2>
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

      {/* TECNOLOGIA E BENEFÍCIOS */}
      <section id="tecnologia" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          
          <div>
            <div className="mb-8 md:mb-12 text-center lg:text-left">
              <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Infraestrutura</p>
              <h2 className="text-3xl md:text-4xl font-black">Tecnologia escalável</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {[
                { icon: <Cpu size={28} />, title: "Processamento de alta velocidade" },
                { icon: <Database size={28} />, title: "Armazenamento em Nuvem Seguro" },
                { icon: <Server size={28} />, title: "Uptime de 99.9% garantido" },
                { icon: <Globe size={28} />, title: "Cobertura de chips multi-operadora" },
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
              <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Retorno Financeiro</p>
              <h2 className="text-3xl md:text-4xl font-black">Por que implantar?</h2>
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

      {/* CLIENTES */}
      <section id="clientes" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Ecosistema Logístico</p>
          <h2 className="text-3xl md:text-5xl font-black">Operações que confiam em nós</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          {empresas.map((empresa, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 md:px-8 md:py-6 text-center hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1 transition-all duration-300 flex-grow max-w-[200px] md:max-w-[240px] cursor-default"
            >
              <p className="font-bold text-zinc-200 text-sm md:text-base">{empresa}</p>
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
              Assuma o controle total da sua operação hoje.
            </h2>
            <p className="text-zinc-300 text-base md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Agende uma demonstração gratuita do nosso painel de telemetria e veja a performance da sua frota decolar.
            </p>
            <a
              href="https://linktr.ee/orionsatgestao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-cyan-400 text-black px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold mt-10 transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95 text-base md:text-lg"
            >
              Falar com um especialista
              <ArrowRight size={20} className="animate-pulse" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 md:py-16 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
              <img src={logo} alt="ORIONSAT" className="w-10 h-10 md:w-12 md:h-12 object-contain hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-black text-2xl md:text-3xl tracking-tight text-white">ORIONSAT</h3>
                <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-xs">Gestão Inteligente</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm">
              Plataforma de inteligência logística, telemetria avançada e visibilidade operacional para frotas que exigem alta performance.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg md:text-xl mb-4 md:mb-5">Plataforma</h4>
            <ul className="space-y-2 md:space-y-3 text-zinc-400 text-sm md:text-base">
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Telemetria Avançada</li>
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Roteirização Logística</li>
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Dashboard Analítico</li>
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Aplicativo Mobile</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg md:text-xl mb-4 md:mb-5">Corporativo</h4>
            <ul className="space-y-2 md:space-y-3 text-zinc-400 text-sm md:text-base">
              <li>CNPJ: 66.620.074/0001-39</li>
              <li>Itaquaquecetuba/SP</li>
              <li className="hover:text-cyan-400 transition-colors">(11) 91102-1692</li>
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
    </div>
  );
}
