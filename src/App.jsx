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

  // Função que muda a tela e atualiza a barra de endereço do navegador
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
              <p className="text-zinc-500 uppercase tracking-widest text-xs mb-2">GOVERNANÇA CORPORATIVA E TI</p>
              <h1 className="text-4xl font-black tracking-tight mb-2">Política de Privacidade</h1>
              <p className="text-zinc-500 mb-12">Atualização: Maio de 2026</p>

              <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">1. Introdução</h2>
                  <p>
                    A ORION SAT LTDA ("Orion Sat") é uma corporação de tecnologia dedicada exclusivamente ao desenvolvimento de inteligência operacional, conectividade avançada, telemetria analítica e soluções para a gestão inteligente de frotas, motoristas independentes, operações individuais e usuários autônomos. Nossos sistemas atuam sob as estritas diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e do Marco Civil da Internet (Lei nº 12.965/2014).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">2. Categorias de Dados Tratados</h2>
                  <ul className="list-disc list-inside space-y-3 text-zinc-300 pl-2">
                    <li><strong>Dados Cadastrais Corporativos e Individuais:</strong> Nome do gestor ou usuário, e-mail comercial ou pessoal, telefone, celular e dados cadastrais (CPF/CNPJ).</li>
                    <li><strong>Dados de Telemetria Avançada:</strong> Indicadores técnicos do veículo como velocidade de rodagem, rotação do motor (RPM), consumo estimado de combustível, frenagens abruptas e curvas acentuadas.</li>
                    <li><strong>Dados de Posicionamento Logístico:</strong> Coordenadas de geolocalização coletadas em primeiro e segundo plano para roteirização automatizada e alimentação dos painéis operacionais.</li>
                    <li><strong>Dados de Sessão Técnica:</strong> Registros obrigatórios de conexão (logs contendo data, horário e endereço IP), especificações de navegadores e identificadores de hardware.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">3. Finalidade e Justificativas Jurídicas</h2>
                  <p>O tratamento estrutura-se nas bases legais de: Execução de Contrato (operação estável do software de gestão), Cumprimento de Obrigação Legal (guarda obrigatória de logs por 6 meses nos termos do Art. 15 do Marco Civil da Internet) e Legítimo Interesse (segurança cibernética e prevenção contra inconsistências sistêmicas).</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">4. Diretrizes de Compartilhamento e Não Comercialização</h2>
                  <p>
                    A Orion Sat adota uma política corporativa inflexível de não comercialização de dados. As informações operacionais de rodagem nunca serão vendidas ou compartilhadas com terceiros para fins comerciais ou publicitários. O fluxo limita-se ao armazenamento criptografado em nuvem global e fornecimento direto para a empresa contratante ou usuário controlador legítimo do ativo.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">5. Operação de Geolocalização em Segundo Plano</h2>
                  <p>
                    Para assegurar a continuidade dos indicadores logísticos e o cálculo preciso das rotas comerciais programadas, o aplicativo móvel requer autorização para processar dados de localização de forma ininterrupta, inclusive em segundo plano (com o aplicativo minimizado ou com a tela bloqueada). A desativação manual interrompe o fornecimento de dados para análise de frotas.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">6. Direitos do Titular</h2>
                  <p>Asseguramos todos os direitos previstos no Art. 18 da LGPD, viabilizando o acesso facilitado, retificação de inconsistências, confirmation de tratamento e exclusão definitiva, observados os prazos fiscais e cíveis obrigatórios pela legislação brasileira.</p>
                </section>

                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">7. Governança e Contato</h2>
                  <p>Para dúvidas operacionais ou requisições técnicas de dados, entre em contato diretamente com o Setor de Governança de Privacidade:</p>
                  <p className="mt-3 text-zinc-300 font-medium bg-white/5 p-4 rounded-xl border border-white/10">
                    <strong>ORION SAT LTDA</strong><br />
                    CNPJ: 66.620.074/0001-39<br />
                    Sede: Itaquaquecetuba/SP<br />
                    E-mail Oficial: <span className="text-cyan-400">privacidade@orionsatgestao.com.br</span>
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* DOCUMENTO 2: POLÍTICA DE COOKIES */}
          {docAtivo === "cookies" && (
            <div>
              <p className="text-zinc-500 uppercase tracking-widest text-xs mb-2">TRANSPARÊNCIA E EXPERIÊNCIA DIGITAL</p>
              <h1 className="text-4xl font-black tracking-tight mb-2">Política de Cookies</h1>
              <p className="text-zinc-500 mb-12">Versão Premium Final | Atualização: Maio de 2026</p>

              <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">1. Escopo e Conceito</h2>
                  <p>Cookies são pequenos arquivos temporários inseridos no navegador do usuário para viabilizar logins estáveis, guardar preferências de exibição de relatórios e coletar métricas básicas de uso das páginas da Orion Sat.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">2. Tipos de Cookies Armazenados</h2>
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                      <h3 className="text-xl font-bold text-zinc-200 mb-1">Cookies de Sessão (Essenciais)</h3>
                      <p className="text-sm mb-2 text-zinc-400">Imprescindíveis para validar a autenticação do usuário gestor ou autônomo e manter sua área logada ativa com estabilidade técnica.</p>
                      <span className="text-xs font-bold text-red-400 uppercase bg-red-400/10 px-3 py-1 rounded-full">Duração: Sessão / Obrigatório</span>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                      <h3 className="text-xl font-bold text-zinc-200 mb-1">Cookies de Preferências (Funcionais)</h3>
                      <p className="text-sm mb-2 text-zinc-400">Guardam as configurações personalizadas aplicadas pelo usuário na ordenação de tabelas, filtragem de relatórios operacionais ou escolha de layouts de mapas.</p>
                      <span className="text-xs font-bold text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1 rounded-full">Duração: Persistente / Opcional</span>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                      <h3 className="text-xl font-bold text-zinc-200 mb-1">Cookies Analíticos</h3>
                      <p className="text-sm mb-2 text-zinc-400">Coletam estatísticas de uso totalmente consolidadas e anônimas para monitorar o tempo de carregamento das telas de gestão e apontar falhas de links.</p>
                      <span className="text-xs font-bold text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1 rounded-full">Duração: Persistente / Opcional</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">3. Gerenciamento Técnico pelo Usuário</h2>
                  <p>O usuário pode gerenciar, bloquear ou limpar os cookies armazenados a qualquer momento acessando as configurações de privacidade do seu respectivo navegador web. Importante ressaltar que a recusa total de cookies essenciais impede a autenticação e o uso pleno dos painéis de telemetria em nuvem.</p>
                </section>

                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">4. Contrato e Contato</h2>
                  <p>Dúvidas sobre o funcionamento técnico de nossas aplicações digitais podem ser endereçadas diretamente ao nosso Setor de Governança de Privacidade pelo e-mail:</p>
                  <p className="mt-3 text-cyan-400 font-bold text-xl bg-white/5 p-4 rounded-xl border border-white/10">
                    privacidade@orionsatgestao.com.br
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* DOCUMENTO 3: TERMOS DE USO */}
          {docAtivo === "termos" && (
            <div>
              <p className="text-zinc-500 uppercase tracking-widest text-xs mb-2">CONTRATOS E REGULAMENTOS DIGITAIS</p>
              <h1 className="text-4xl font-black tracking-tight mb-2">Termos de Uso da Plataforma</h1>
              <p className="text-zinc-500 mb-12">Versão Premium Final | Canal CPF e B2B Híbrido | Maio de 2026</p>

              <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">1. Escopo das Soluções de Software</h2>
                  <p>Os presentes Termos regulam o direito de acesso e utilização dos sistemas de software, painéis corporativos em nuvem e aplicativos móveis de propriedade da ORION SAT LTDA. O ecossistema constitui um conjunto de ferramentas digitais dedicadas exclusivamente à gestão inteligente de frotas, operações individuais, telemetria e roteirização comercial.</p>
                </section>

                <section className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold text-red-400 mb-3">2. Delimitação Tecnológica Importante</h2>
                  <p className="text-zinc-300 font-medium mb-3">
                    <strong>Cláusula de Escopo Tecnológico Estrito:</strong>
                  </p>
                  <p className="text-sm text-zinc-400">
                    Por se tratar de um ambiente puramente de análise de dados, processamento de telemetria e gestão de software informacional (SaaS), as soluções da Orion Sat <strong>NÃO possuem escopo, vinculação ou aderência com o mercado de gerenciamento de riscos civis de ativos, atividades corporativas de pronta resposta, intervenções físicas de campo ou qualquer modalidade de salvaguarda material de bens</strong>. A Orion Sat exime-se inteiramente de qualquer natureza de cobertura financeira ou securitária sobre os veículos cadastrados.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">3. Responsabilidade Operacional e Uso</h2>
                  <p>As credenciais de acesso (login e senha) possuem caráter estritamente pessoal, confidencial e intransferível. Compete exclusivamente ao cliente corporativo ou usuário autônomo a guarda segura de suas chaves, respondendo legalmente por ações executadas sob sua identificação. São proibidas condutas de engenharia reversa ou cópia de código-fonte.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">4. Conectividade e Infraestrutura Externa</h2>
                  <p>A exibição das informações operacionais em tempo real depende diretamente da estabilidade e disponibilidade de redes de telecomunicações terceirizadas, internet móvel e captação técnica de sinais de satélite (GPS). Oscilações decorrentes dessas redes externas de infraestrutura não configuram falha de software da Orion Sat.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">5. Propriedade Intelectual e Atualizações</h2>
                  <p>A outorga de acesso temporário não transfere direitos industriais ou intelectuais. Algoritmos de roteirização, dashboards, marcas e APIs permanecem sob domínio exclusivo da Orion Sat LTDA. O sistema poderá sofrer atualizações e alterações de layouts sem que isso configure quebra contratual ou gere direito a indenizações.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">6. Suspensão de Acesso</h2>
                  <p>A Orion Sat reserva-se o direito de suspender o acesso ao sistema em casos comprovados de inadimplência financeira corporativa ou individual, tentativas de violação cibernética da infraestrutura de nuvem ou descumprimento de qualquer cláusula destes Termos.</p>
                </section>

                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">7. Foro de Eleição</h2>
                  <p>As partes elegem o foro da Comarca de <strong>Itaquaquecetuba/SP</strong>, sede da Orion Sat LTDA, como o único competente para dirimir quaisquer dúvidas ou controvérsias técnicas decorrentes da aplicação destes Termos de Uso.</p>
                </section>
              </div>
            </div>
          )}

          <button
            onClick={() => alternarDocumento(null)}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-cyan-400/30 px-6 py-3 rounded-xl font-bold mt-16 transition cursor-pointer"
          >
            Fechar e voltar ao site
          </button>
        </div>
      </div>
    );
  }

  // RENDERIZAÇÃO PADRÃO DA LANDING PAGE PRINCIPAL
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
            <img src={logo} alt="ORIONSAT" className="w-14 h-14 object-contain" translate="no" />
            <div translate="no">
              <h1 className="font-black text-3xl tracking-tight">ORIONSAT</h1>
              <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs">Gestão Inteligente</p>
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
              Tecnologia
              <span className="text-cyan-400 block">que abre caminhos.</span>
              Inteligência
              <span className="text-cyan-400 block">que entrega resultados.</span>
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mt-10">
              Plataforma de gestão operacional, telemetria avançada, rastreamento inteligente e
              monitoramento em tempo real para empresas que exigem controle, performance e eficiência.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">
              <a
                href="https://linktr.ee/orionsatgestao"
                target="_blank"
                rel="noopener noreferrer"
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
                <h3 className="text-5xl font-black text-cyan-400">24h</h3>
                <p className="text-zinc-500 mt-2">Monitoramento contínuo</p>
              </div>
              <div>
                <h3 className="text-5xl font-black text-cyan-400">98%</h3>
                <p className="text-zinc-500 mt-2">Eficiência operacional</p>
              </div>
              <div>
                <h3 className="text-5xl font-black text-cyan-400">API</h3>
                <p className="text-zinc-500 mt-2">Integrações inteligentes</p>
              </div>
            </div>
          </div>

          {/* DASHBOARD GRAPHIC */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-[120px]" />
            <div className="relative bg-white/5 border border-white/10 rounded-[36px] p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-zinc-500 text-sm">Dashboard Operacional</p>
                  <h3 className="text-4xl font-black mt-2">ORIONSAT DASHBOARD</h3>
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
                  <p className="text-zinc-500 mt-3">Veículos Online</p>
                </div>
                <div className="bg-black/30 rounded-3xl p-6">
                  <Bell className="text-cyan-400 mb-5" />
                  <h4 className="text-5xl font-black">12</h4>
                  <p className="text-zinc-500 mt-3">Alertas em tempo real</p>
                </div>
                <div className="bg-black/30 rounded-3xl p-6">
                  <BarChart3 className="text-cyan-400 mb-5" />
                  <h4 className="text-5xl font-black">98%</h4>
                  <p className="text-zinc-500 mt-3">Performance operacional</p>
                </div>
                <div className="bg-black/30 rounded-3xl p-6">
                  <ShieldCheck className="text-cyan-400 mb-5" />
                  <h4 className="text-5xl font-black">24h</h4>
                  <p className="text-zinc-500 mt-3">Monitoramento contínuo</p>
                </div>
              </div>

              <div className="bg-black/30 rounded-3xl p-8 mt-5">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-black">Eficiência operacional</h4>
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-700/10" />
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <img src={logo} alt="logo" className="w-[700px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/20 blur-[180px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-10">ORIONSAT</p>
          <h2 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            Tecnologia
            <span className="block text-cyan-400">que abre caminhos.</span>
            Inteligência
            <span className="block text-cyan-400">que domina o mercado.</span>
          </h2>
          <p className="text-zinc-500 text-xl mt-10 max-w-3xl mx-auto leading-relaxed">
            Plataforma inteligente para monitoramento, telemetria, gestão operacional e controle
            avançado de ativos em tempo real.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-14">
            <a
              href="https://wa.me/5511911021692"
              target="_blank"
              rel="noopener noreferrer"
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
      <section id="sobre" className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">Sobre a ORIONSAT</p>
            <h2 className="text-5xl font-black leading-tight">
              Gestão operacional inteligente para operações modernas.
            </h2>
          </div>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              A ORIONSAT atua com soluções de gestão de frotas, telemetria, rastreamento operacional e
              monitoramento inteligente.
            </p>
            <p>
              Nossa plataforma foi desenvolvida para empresas que precisam controlar ativos, otimizar custos,
              aumentar produtividade e centralizar operações em tempo real.
            </p>
            <p>
              Com tecnologia escalável, dashboards avançados e inteligência operacional, entregamos mais
              controle, conectividade e eficiência.
            </p>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="plataforma" className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">Plataforma</p>
          <h2 className="text-5xl font-black">Soluções completas de gestão operacional</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {funcionalidades.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:border-cyan-400/30 transition duration-500 hover:-translate-y-2"
            >
              <div className="text-cyan-400 mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEGMENTOS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">Segmentos</p>
          <h2 className="text-5xl font-black">Operações que atendemos</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {segmentos.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition"
            >
              <Route className="text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TECNOLOGIA */}
      <section id="tecnologia" className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">Tecnologia</p>
          <h2 className="text-5xl font-black">Infraestrutura moderna e escalável</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Cpu />, title: "Processamento inteligente" },
            { icon: <Database />, title: "Dados em tempo real" },
            { icon: <Server />, title: "Infraestrutura escalável" },
            { icon: <Globe />, title: "Conectividade contínua" },
          ].map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
              <div className="flex justify-center text-cyan-400 mb-5">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">Benefícios</p>
          <h2 className="text-5xl font-black">Mais controle e eficiência operacional</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {beneficios.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center gap-5">
              <CheckCircle2 className="text-cyan-400" />
              <p className="text-xl text-zinc-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTES */}
      <section id="clientes" className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">Empresas atendidas</p>
          <h2 className="text-5xl font-black">Operações que confiam na ORIONSAT</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {empresas.map((empresa, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400/30 transition"
            >
              <Waves className="mx-auto text-cyan-400 mb-5" />
              <p className="font-semibold text-zinc-200">{empresa}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-5xl mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">FAQ</p>
          <h2 className="text-5xl font-black">Perguntas frequentes</h2>
        </div>

        <div className="space-y-6">
          {faq.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">{item.pergunta}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.resposta}</p>
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
            rel="noopener noreferrer"
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
              <img src={logo} alt="ORIONSAT" className="w-14 h-14 object-contain" />
              <div>
                <h3 className="font-black text-3xl">ORIONSAT</h3>
                <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">Gestão Inteligente</p>
              </div>
            </div>
            <p className="text-zinc-500 leading-relaxed">
              Tecnologia • Conectividade • Inteligência • Resultados
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5">Plataforma</h4>
            <ul className="space-y-3 text-zinc-500">
              <li>Gestão de Frotas</li>
              <li>Telemetria</li>
              <li>Monitoramento</li>
              <li>Dashboard Web</li>
              <li>Aplicativo Mobile</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-5">Contato</h4>
            <ul className="space-y-3 text-zinc-500">
              <li>ORION SAT LTDA</li>
              <li>CNPJ: 66.620.074/0001-39</li>
              <li>(11) 91102-1692</li>
              <li>comercial@orionsatgestao.com.br</li>
              <li>www.orionsatgestao.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-600 text-sm">
          <p>© 2026 ORIONSAT Gestão Inteligente. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-6 text-zinc-500 font-medium">
            <button
              onClick={() => alternarDocumento("privacidade")}
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => alternarDocumento("cookies")}
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Política de Cookies
            </button>
            <button
              onClick={() => alternarDocumento("termos")}
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
