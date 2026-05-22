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

  // ESTADO PARA O DASHBOARD DO TOPO
  const [dashTab, setDashTab] = useState("visaoGeral");
  
  // ESTADO PARA A NOVA SEÇÃO DE EXPLICAÇÃO DETALHADA DOS MÓDULOS
  const [moduloAtivo, setModuloAtivo] = useState("video");

  // EFEITO PARA TROCAR AS ABAS DO DASHBOARD AUTOMATICAMENTE
  useEffect(() => {
    if (docAtivo) return; 

    const abas = ["visaoGeral", "videoIA", "logistica", "telemetria"];
    
    const intervalo = setInterval(() => {
      setDashTab((abaAtual) => {
        const indexAtual = abas.indexOf(abaAtual);
        const proximoIndex = (indexAtual + 1) % abas.length;
        return abas[proximoIndex];
      });
    }, 13000); 

    return () => clearInterval(intervalo);
  }, [docAtivo, dashTab]); 

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

  const segmentos = [
    "Logística e Transportadoras",
    "Frotas Corporativas e Executivas",
    "Operações de Máquinas e Equipamentos",
    "Locadoras e Terceirização de Frotas",
    "Facilities e Operações de Campo",
    "Pequenos Frotistas e Autônomos",
  ];

  // DADOS DETALHADOS PARA A SEÇÃO EXPLICATIVA E CARDS DE SOLUÇÕES
  const detalhesModulos = [
    {
      id: "video",
      icon: <Video size={24} />,
      title: "Videomonitoramento com IA",
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

  const beneficios = [
    "Ecossistema unificado: elimine a necessidade de contratar múltiplos softwares",
    "Mitigação drástica do passivo de multas (Velocidade na Via) e riscos trabalhistas (Jornada)",
    "Redução comprovada de custos com combustível e manutenções corretivas",
    "Controle total e auditoria visual da operação via Videomonitoramento IA",
    "Tomada de decisão baseada em dados reais (Big Data e Telemetria Avançada)",
    "Arquitetura escalável: atende com excelência desde 1 até 5.000 veículos",
  ];

  const faq = [
    {
      pergunta: "A Orion Sat atua como um sistema integrado (ERP Logístico)?",
      resposta:
        "Sim. Nosso maior diferencial é entregar um ecossistema completo. Você não precisa de um sistema para câmeras, outro para roteirização de entregas e outro para a Lei do Motorista. A plataforma Orion Sat centraliza Videotelemetria, Logistics, Jornada, Manutenção e Telemetria em um único painel de controle.",
    },
    {
      pergunta: "A plataforma é acessível para frotas de menor porte e veículos particulares?",
      resposta:
        "Sim. Nossa tecnologia Enterprise foi desenhada para ser totalmente escalável. Pequenos frotistas, locadoras menores e até profissionais autônomos têm acesso à mesma inteligência operacional utilizada por grandes transportadoras, pagando apenas pelas licenças ativas na sua rotina.",
    },
    {
      pergunta: "Qual o prazo de implantação da plataforma?",
      resposta:
        "A implantação inicial do painel é rápida, ocorrendo logo após a ativação dos equipamentos ou aplicativos. O tempo total varia conforme o tamanho da frota e os módulos escolhidos, mas nossa equipe acompanha você em todo o processo para garantir uma transição sem dores de cabeça.",
    }
  ];

  // ==========================================
  // RENDERIZAÇÃO DOS DOCUMENTOS LEGAIS
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
          {/* POLÍTICA DE PRIVACIDADE COMPLETA (BASEADA NO PDF) */}
          {docAtivo === "privacidade" && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <p className="text-zinc-500 uppercase tracking-widest text-[10px] md:text-xs mb-2">GOVERNANÇA CORPORATIVA E GOVERNANÇA DE TI</p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Política de Privacidade</h1>
              <p className="text-zinc-500 mb-8 md:mb-12 text-sm">Versão Premium Final | Atualização: Maio de 2026</p>

              <div className="space-y-8 text-zinc-400 text-sm md:text-base leading-relaxed">
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">1. INTRODUÇÃO</h2>
                  <p className="mb-2">A ORION SAT LTDA ("Orion Sat") é uma corporação de tecnologia dedicada exclusivamente ao desenvolvimento de inteligência operacional, conectividade avançada, telemetria analítica e soluções para a gestão inteligente de frotas, motoristas independentes, operações individuais e usuários autônomos. Nossos sistemas fornecem visibilidade operacional de veículos e ativos conectados, análise estatística de parâmetros de condução e otimização de rotas logísticas em tempo real.</p>
                  <p>A Orion Sat atua sob as estritas diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD Lei nº 13.709/2018) e do Marco Civil da Internet (Lei nº 12.965/2014), estruturando este documento para conferir absoluta transparência sobre como as informações e métricas operacionais são processadas pelas nossas ferramentas digitais, sejam elas acessadas por pessoas jurídicas ou físicas.</p>
                </section>
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">2. CATEGORIAS DE DADOS TRATADOS</h2>
                  <p className="mb-3">As nossas plataformas processam apenas as camadas de informações necessárias para alimentar os relatórios de eficiência, desempenho e produtividade de nossos clientes e contratantes, compreendendo:</p>
                  <ul className="list-disc list-inside space-y-3 text-zinc-300 pl-2">
                    <li><strong>Dados Cadastrais Corporativos e Individuais:</strong> Informações fornecidas para a abertura de contas de acesso (nome do gestor de frotas, motorista autônomo ou usuário individual, endereço de e-mail comercial ou pessoal, número de telefone corporativo ou celular, e dados cadastrais de pessoa jurídica ou física).</li>
                    <li><strong>Dados de Telemetria Avançada:</strong> Indicadores técnicos de uso do veículo (velocidade de rodagem, rotação do motor, consumo estimado de combustível, frenagens abruptas e curvas acentuadas) para fins de auditoria de condução e economia de insumos.</li>
                    <li><strong>Dados de Posicionamento Logístico:</strong> Coordenadas de geolocalização coletadas em primeiro e segundo plano, utilizadas unicamente para a roteirização automatizada, cálculo de tempos de deslocamento e alimentação dos dashboards de gestão de frotas e operações individuais.</li>
                    <li><strong>Dados de Sessão Técnica:</strong> Registros obrigatórios de conexão (logs contendo data, horário e endereço IP), especificações do navegador e identificadores de hardware.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">3. FINALIDADE E JUSTIFICATIVAS JURÍDICAS</h2>
                  <p className="mb-3">O tratamento de informações operacionais e de cadastro pela Orion Sat é pautado pela utilidade analítica e pela transparência, estruturando-se nas seguintes bases legais:</p>
                  <ul className="list-disc list-inside space-y-3 text-zinc-300 pl-2">
                    <li><strong>Execução de Contrato:</strong> Viabilizar a operação dos softwares e aplicativos de gestão inteligente de frotas e operações individuais, fornecimento de suporte logístico aos clientes e usuários autônomos, e consolidação de gráficos informacionais de performance.</li>
                    <li><strong>Cumprimento de Obrigação Legal:</strong> Guarda técnica e automatizada dos registros de conexão (logs) pelo prazo de 6 (seis) meses, atendendo ao Art. 15 do Marco Civil da Internet.</li>
                    <li><strong>Legítimo Interesse:</strong> Prevenção contra inconsistências sistêmicas, melhoria na arquitetura automatizada de rotas e segurança cibernética dos servidores de banco de dados.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">4. DIRETRIZES DE COMPARTILHAMENTO E NÃO COMERCIALIZAÇÃO</h2>
                  <p>A Orion Sat adota uma política corporativa inflexível de não comercialização de dados. As informações operacionais de rodagem nunca serão vendidas ou compartilhadas com terceiros para fins comerciais, publicitários ou de marketing de terceiros. O fluxo de dados limita-se à transmissão para provedores globais de computação em nuvem (armazenamento criptografado) e ao fornecimento direto das métricas geradas para a empresa contratante ou usuário autônomo que atua como controlador e gestor legítimo do veículo ou ativo conectado.</p>
                </section>
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">5. OPERAÇÃO DE GEOLOCALIZAÇÃO EM SEGUNDO PLANO</h2>
                  <p>Para assegurar a continuidade dos indicadores logísticos e o cálculo preciso das rotas comerciais programadas, o aplicativo móvel requer autorização para processar dados de localização de forma ininterrupta, inclusive em segundo plano (com o aplicativo minimizado ou com o dispositivo com tela bloqueada). A desativação manual dessas permissões interrompe o fornecimento de dados para a análise operacional de frotas ou acompanhamento individual executado pelo contratante ou usuário.</p>
                </section>
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">6. DIREITOS DO TITULAR</h2>
                  <p>A Orion Sat assegura aos titulares todos os direitos previstos no Art. 18 da LGPD, viabilizando o acesso facilitado, a retificação de dados inconsistentes, a confirmação de tratamento e a exclusão definitiva de registros, observados os prazos legais de guarda documental exigidos pela legislação tributária e civil brasileira.</p>
                </section>
                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">7. GOVERNANÇA E CONTATO</h2>
                  <p>Para o esclarecimento de dúvidas operacionais sobre privacidade ou requisições técnicas de dados, a Orion Sat disponibiliza o canal eletrônico oficial de seu Setor de Governança de Privacidade pelo e-mail: <strong className="text-white">privacidade@orionsatgestao.com.br</strong></p>
                  <p className="mt-4 text-xs text-zinc-500 uppercase tracking-widest">Orion Sat LTDA CNPJ: 66.620.074/0001-39 Itaquaquecetuba/SP<br/>Tecnologia que abre caminhos. Inteligência que entrega resultados.</p>
                </section>
              </div>
            </div>
          )}

          {/* POLÍTICA DE COOKIES COMPLETA (BASEADA NO PDF) */}
          {docAtivo === "cookies" && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <p className="text-zinc-500 uppercase tracking-widest text-[10px] md:text-xs mb-2">TRANSPARÊNCIA E EXPERIÊNCIA DIGITAL</p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Política de Cookies</h1>
              <p className="text-zinc-500 mb-8 md:mb-12 text-sm">Versão Premium Final | Atualização: Maio de 2026</p>

              <div className="space-y-8 text-zinc-400 text-sm md:text-base leading-relaxed">
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">1. ESCOPO E CONCEITO</h2>
                  <p>Esta Política descreve como a Orion Sat utiliza cookies e identificadores digitais em seus portais e sistemas eletrônicos. Cookies são pequenos arquivos temporários inseridos no navegador do usuário para viabilizar logins estáveis, guardar preferências de exibição de relatórios e coletar métricas básicas de uso das páginas.</p>
                </section>
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">2. TIPOS DE COOKIES ARMAZENADOS</h2>
                  <p className="mb-4">Nossos sistemas web operam estritamente com as seguintes classes de identificadores:</p>
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                      <h3 className="text-lg font-bold text-zinc-200 mb-1">Cookies de Sessão (Essenciais)</h3>
                      <p className="text-sm mb-3 text-zinc-400">Imprescindíveis para validar a autenticação do usuário gestor ou autônomo e manter sua área logada ativa com estabilidade técnica de tráfego.</p>
                      <span className="text-[10px] md:text-xs font-bold text-red-400 uppercase bg-red-400/10 px-3 py-1.5 rounded-full inline-block">Duração: Sessão / Obrigatório (Não pode ser desligado)</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                      <h3 className="text-lg font-bold text-zinc-200 mb-1">Cookies de Preferências (Funcionais)</h3>
                      <p className="text-sm mb-3 text-zinc-400">Guardam as configurações personalizadas aplicadas pelo usuário na ordenação de tabelas, filtragem de relatórios operacionais ou escolha de layouts de mapas.</p>
                      <span className="text-[10px] md:text-xs font-bold text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1.5 rounded-full inline-block">Duração: Persistente / Opcional</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                      <h3 className="text-lg font-bold text-zinc-200 mb-1">Cookies Analíticos</h3>
                      <p className="text-sm mb-3 text-zinc-400">Coletam estatísticas de uso totalmente consolidadas e anônimas para monitorar o tempo de carregamento das telas de gestão e apontar falhas de links.</p>
                      <span className="text-[10px] md:text-xs font-bold text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1.5 rounded-full inline-block">Duração: Persistente / Opcional</span>
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">3. GERENCIAMENTO TÉCNICO PELO USUÁRIO</h2>
                  <p>O usuário pode gerenciar, bloquear ou limpar os cookies armazenados a qualquer momento acessando a aba de privacidade e configurações de seu respectivo navegador web. A recusa total de cookies essenciais impede a autenticação e o uso dos painéis de telemetria e gestão em nuvem.</p>
                </section>
                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">4. CONTRATO E CONTATO</h2>
                  <p>Dúvidas sobre o funcionamento técnico de nossas aplicações digitais podem ser endereçadas diretamente ao nosso Setor de Governança de Privacidade pelo e-mail: <strong className="text-white">privacidade@orionsatgestao.com.br</strong></p>
                </section>
              </div>
            </div>
          )}

          {/* TERMOS DE USO COMPLETOS (BASEADOS NO PDF) */}
          {docAtivo === "termos" && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <p className="text-zinc-500 uppercase tracking-widest text-[10px] md:text-xs mb-2">CONTRATOS E REGULAMENTOS DIGITAIS</p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Termos de Uso da Plataforma</h1>
              <p className="text-zinc-500 mb-8 md:mb-12 text-sm">Versão Premium Final | Canal CPF e B2B Híbrido | Maio de 2026</p>

              <div className="space-y-8 text-zinc-400 text-sm md:text-base leading-relaxed">
                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">1. ESCOPO DAS SOLUÇÕES DE SOFTWARE</h2>
                  <p>Os presentes Termos regulam o direito de acesso e utilização dos sistemas de software, painéis corporativos em nuvem e aplicativos móveis de propriedade da ORION SAT LTDA. O ecossistema Orion Sat constitui um conjunto de ferramentas digitais dedicadas exclusivamente à gestão inteligente de frotas, operações individuais, processamento de telemetria logística, roteirização comercial e análise operacional de veículos e ativos conectados.</p>
                </section>
                
                <section className="bg-red-500/10 border border-red-500/20 p-5 md:p-6 rounded-2xl">
                  <h2 className="text-xl font-bold text-red-400 mb-3">2. DELIMITAÇÃO TECNOLÓGICA E NATUREZA INFORMACIONAL</h2>
                  <p className="mb-3">A Orion Sat opera como uma plataforma de provimento de inteligência de dados e software como serviço (SaaS). Nossos sistemas são projetados para coletar, estruturar, analisar e exibir parâmetros operacionais de condução e deslocamento, com a finalidade única de conferir visibilidade operacional de veículos e ativos conectados e apoiar os gestores, motoristas independentes e usuários autônomos em suas tomadas de decisão logísticas e de produtividade.</p>
                  <p className="text-zinc-300">
                    <strong>Cláusula de Escopo Tecnológico Estrito:</strong> Por se tratar de um ambiente puramente de análise de dados, processamento de telemetria e gestão de software informacional, as soluções da Orion Sat <strong>NÃO possuem escopo, vinculação ou aderência com o mercado de gerenciamento de riscos civis de ativos, atividades corporativas de pronta resposta, intervenções físicas de campo ou qualquer modalidade de salvaguarda material de bens</strong>. A Orion Sat exime-se de qualquer natureza de cobertura financeira ou securitária sobre os veículos cadastrados.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">3. CREDENCIAIS E RESPONSABILIDADE OPERACIONAL</h2>
                  <p>As chaves de acesso (login e senha) concedidas aos usuários possuem caráter pessoal, confidencial e intransferível. Compete aos clientes corporativos, pequenos negócios e usuários autônomos a guarda segura de suas credenciais, respondendo integralmente pelas ações analíticas executadas sob suas identificações. São vedadas condutas de engenharia reversa, replicação de código-fonte, cópia de layouts ou exploração comercial não autorizada do sistema.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">4. CONECTIVIDADE E INFRAESTRUTURA EXTERNA</h2>
                  <p>Por operar sob a arquitetura de computação em nuvem, a precisão e a transmissão em tempo real dos relatórios de rodagem apresentados dependem diretamente da estabilidade e disponibilidade de redes de telecomunicações terceirizadas, conectividade de internet móvel e captação técnica de sinais de posicionamento global via satélite (GPS). Eventuais oscilações ou falhas decorrentes dessas redes externas de infraestrutura não configuram falha de software da Orion Sat.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">5. REQUISITO TÉCNICO DE POSICIONAMENTO LOGÍSTICO</h2>
                  <p>Para viabilizar a análise operacional de frotas, o acompanhamento de usuários autônomos e a integridade dos relatórios de quilometragem e consumo, as aplicações exigem permissão ativa para o processamento de geolocalização de forma contínua, inclusive em segundo plano (com o dispositivo móvel em modo de espera ou com a aplicação minimizada). A restrição manual desse parâmetro técnico pelo usuário interrompe o fluxo informacional de gerenciamento logístico.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">6. PROPRIEDADE INTELECTUAL</h2>
                  <p>A outorga de acesso temporário às plataformas não transfere qualquer direito de propriedade industrial ou intelectual. Algoritmos de roteirização, dashboards analíticos, identidades visuais de software, APIs e bancos de dados permanecem sob domínio e titularidade exclusivos da Orion Sat LTDA.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">7. ATUALIZAÇÕES E EVOLUÇÃO TECNOLÓGICA</h2>
                  <p>A Orion Sat poderá, a seu exclusivo critério e a qualquer tempo, alterar, atualizar, modificar, expandir ou descontinuar funcionalidades, layouts de interfaces, módulos ou recursos da plataforma. Tais modificações visam a evolução tecnológica contínua, a otimização da experiência do usuário e o incremento da segurança cibernética do ecossistema de software, não configurando quebra contratual nem gerando direito a qualquer modalidade de indenização ou penalidade comercial.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">8. SUSPENSÃO E INTERRUPÇÃO DO SERVIÇO</h2>
                  <p>A Orion Sat reserva-se o direito de suspender ou interromper o acesso às credenciais de uso em casos comprovados de inadimplência financeira corporativa ou individual, de tentativas de violação cibernética da infraestrutura de nuvem, de uso inadequado dos módulos ou de descumprimento de qualquer cláusula destes Termos.</p>
                </section>

                <section className="border-t border-white/10 pt-8">
                  <h2 className="text-xl font-bold text-cyan-400 mb-3">9. FORO DE ELEIÇÃO</h2>
                  <p>As partes elegem o foro da Comarca de <strong>Itaquaquecetuba/SP</strong>, sede da Orion Sat LTDA, como o único competente para dirimir quaisquer dúvidas ou controvérsias técnicas decorrentes da aplicação destes Termos de Uso.</p>
                </section>
              </div>
            </div>
          )}

          <button
            onClick={() => alternarDocumento(null)}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 px-6 py-4 md:py-3 rounded-xl font-bold mt-12 mb-8 transition-all duration-300 cursor-pointer"
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
      
      {/* INJEÇÃO DE CSS DE ANIMAÇÕES */}
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
        @keyframes slideRight {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slow-pulse { animation: slow-pulse 8s ease-in-out infinite; }
        .blend-logo { mix-blend-mode: screen; }
        .animate-bar { animation: slideRight 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
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

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-medium text-zinc-300">
            <a href="#sobre" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Visão Geral</a>
            <a href="#modulos-detalhados" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Módulos</a>
            <a href="#tecnologia" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Infraestrutura</a>
            <a href="#clientes" className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-300">Clientes</a>
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
              <Layers size={16} className="animate-pulse" />
              Ecossistema Definitivo de Gestão Operacional
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-tight tracking-tight mb-4">
              Inteligência exata na
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block">sua operação.</span>
              Corte definitivo nos
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block">seus custos.</span>
            </h2>

            <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-2xl mt-8 mx-auto lg:mx-0">
              Integração total em uma única plataforma Enterprise. Videotelemetria com IA, roteirização logística, controle de jornada trabalhista e telemetria avançada. Escale sua frota com eficiência e segurança comprovada.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5 mt-10">
              <a
                href="https://wa.me/5511911021692"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-cyan-400 text-black px-8 py-4 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95 group"
              >
                Solicitar Demonstração
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#modulos-detalhados"
                className="w-full sm:w-auto border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-white/10 px-8 py-4 md:py-5 rounded-2xl transition-all duration-300 font-medium text-center hover:-translate-y-1"
              >
                Conhecer Módulos
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-white/10 mt-12 max-w-lg mx-auto lg:mx-0">
              <div className="group cursor-default">
                <h3 className="text-3xl md:text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform origin-left">IA</h3>
                <p className="text-zinc-500 text-xs md:text-sm mt-1 font-medium group-hover:text-zinc-300 transition-colors">Videotelemetria</p>
              </div>
              <div className="group cursor-default">
                <h3 className="text-3xl md:text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform origin-left">LOG</h3>
                <p className="text-zinc-500 text-xs md:text-sm mt-1 font-medium group-hover:text-zinc-300 transition-colors">Roteirização e Entregas</p>
              </div>
              <div className="group cursor-default">
                <h3 className="text-3xl md:text-4xl font-black text-cyan-400 group-hover:scale-110 transition-transform origin-left">CLT</h3>
                <p className="text-zinc-500 text-xs md:text-sm mt-1 font-medium group-hover:text-zinc-300 transition-colors">Controle de Jornada</p>
              </div>
            </div>
          </div>

          {/* DASHBOARD MOCKUP INTERATIVO */}
          <div className="relative w-full mt-10 lg:mt-0 animate-float perspective-1000 hidden md:block">
            <div className="absolute inset-0 bg-cyan-400/20 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
            
            <div className="relative bg-[#050B1A]/90 border border-white/10 rounded-3xl md:rounded-[36px] p-5 md:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-cyan-400/40">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-cyan-400 font-bold tracking-widest text-[10px] md:text-xs mb-1 uppercase">Centro de Controle Operacional</p>
                  <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                    <Activity className="text-cyan-400 animate-pulse" size={24} />
                    ORIONSAT DASHBOARD
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20 text-xs md:text-sm font-bold">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400 animate-ping absolute opacity-75" />
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-400 relative" />
                  CONECTADO
                </div>
              </div>

              {/* TABS INTERATIVAS */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar border-b border-white/10">
                <button 
                  onClick={() => setDashTab("visaoGeral")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${dashTab === 'visaoGeral' ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'}`}
                >
                  <Activity size={14} /> Visão Geral
                </button>
                <button 
                  onClick={() => setDashTab("videoIA")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${dashTab === 'videoIA' ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'}`}
                >
                  <Video size={14} /> Câmera IA
                </button>
                <button 
                  onClick={() => setDashTab("logistica")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${dashTab === 'logistica' ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'}`}
                >
                  <Map size={14} /> Logística
                </button>
                <button 
                  onClick={() => setDashTab("telemetria")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${dashTab === 'telemetria' ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'}`}
                >
                  <Gauge size={14} /> Telemetria
                </button>
              </div>

              {/* ABA: VISÃO GERAL */}
              {dashTab === "visaoGeral" && (
                <div className="animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-5">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4 md:p-5 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all cursor-default group">
                      <div className="flex items-center gap-2 mb-2 opacity-70 group-hover:opacity-100 transition-opacity"><CheckSquare className="text-cyan-400 w-5 h-5" /><span className="text-xs md:text-sm font-medium">Ordens de Serviço</span></div>
                      <h4 className="text-2xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">1.248<span className="text-sm md:text-lg text-zinc-500 font-medium ml-1">entregas</span></h4>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4 md:p-5 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all cursor-default group">
                      <div className="flex items-center gap-2 mb-2 opacity-70 group-hover:opacity-100 transition-opacity"><Clock className="text-cyan-400 w-5 h-5" /><span className="text-xs md:text-sm font-medium">Jornadas Ativas</span></div>
                      <h4 className="text-2xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">142<span className="text-sm md:text-lg text-zinc-500 font-medium ml-1">motoristas</span></h4>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4 md:p-5 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all cursor-default group">
                      <div className="flex items-center gap-2 mb-2 opacity-70 group-hover:opacity-100 transition-opacity"><Gauge className="text-cyan-400 w-5 h-5" /><span className="text-xs md:text-sm font-medium">Score da Frota</span></div>
                      <h4 className="text-2xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">94<span className="text-sm md:text-lg text-zinc-500 font-medium ml-1">pts</span></h4>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4 md:p-5 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all cursor-default group">
                      <div className="flex items-center gap-2 mb-2 opacity-70 group-hover:opacity-100 transition-opacity"><Wrench className="text-cyan-400 w-5 h-5" /><span className="text-xs md:text-sm font-medium">Previsão Manutenção</span></div>
                      <h4 className="text-2xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">08<span className="text-sm md:text-lg text-zinc-500 font-medium ml-1">veículos</span></h4>
                    </div>
                  </div>
                  
                  {/* Log de Alertas Enterprise */}
                  <div className="space-y-2">
                    <div className="bg-red-500/10 rounded-lg p-2.5 md:p-3 flex items-center justify-between text-xs md:text-sm border border-red-500/20">
                      <div className="flex items-center gap-2"><Video className="text-red-400 w-4 h-4" /><span className="text-zinc-200 font-medium">Câmera IA: Sinal de fadiga detectado (TRK-44)</span></div>
                      <span className="text-red-400 text-[10px] md:text-xs font-bold flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"/>VÍDEO GRAVADO</span>
                    </div>
                    <div className="bg-yellow-500/10 rounded-lg p-2.5 md:p-3 flex items-center justify-between text-xs md:text-sm border border-yellow-500/20">
                      <div className="flex items-center gap-2"><MapPinned className="text-yellow-400 w-4 h-4" /><span className="text-zinc-300 font-medium">Velocidade na Via: 58km/h em trecho de 40km/h (RTA-12)</span></div>
                      <span className="text-zinc-500 text-[10px] md:text-xs">Há 2 min</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ABA: VÍDEO IA COM VÍDEO REAL */}
              {dashTab === "videoIA" && (
                <div className="animate-in fade-in duration-300">
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
                      <Camera className="text-cyan-400 w-6 h-6 mx-auto mb-2" />
                      <h4 className="text-2xl font-black text-white">42</h4>
                      <span className="text-xs text-zinc-500">Câmeras Online</span>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
                      <Eye className="text-yellow-400 w-6 h-6 mx-auto mb-2" />
                      <h4 className="text-2xl font-black text-white">04</h4>
                      <span className="text-xs text-zinc-500">Eventos Distração</span>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                      <Bell className="text-red-400 w-6 h-6 mx-auto mb-2" />
                      <h4 className="text-2xl font-black text-white">01</h4>
                      <span className="text-xs text-red-400 font-bold">Fadiga Severa</span>
                    </div>
                  </div>
                  {/* VIDEO REAL EMBUTIDO */}
                  <div className="bg-black rounded-2xl border border-white/10 relative h-40 md:h-48 flex flex-col items-center justify-center overflow-hidden shadow-inner">
                     <video 
                       src="/video-ia.mp4" 
                       autoPlay 
                       loop 
                       muted 
                       playsInline 
                       className="absolute inset-0 w-full h-full object-cover opacity-70"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent pointer-events-none" />
                     <div className="absolute top-3 left-3 text-red-400 text-[10px] md:text-xs font-bold flex items-center gap-2 bg-black/60 px-2 py-1 rounded backdrop-blur-sm border border-white/10 z-10">
                       <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"/> LIVE FEED: CAM CABINE IA
                     </div>
                     <span className="relative z-10 mt-auto mb-4 text-white text-[10px] md:text-xs font-bold bg-black/70 px-3 py-1.5 rounded-full border border-cyan-400/30 backdrop-blur-md">
                       RECONHECIMENTO FACIAL ATIVO
                     </span>
                  </div>
                </div>
              )}

              {/* ABA: LOGÍSTICA E MAPA */}
              {dashTab === "logistica" && (
                <div className="animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-3 md:p-4">
                      <div className="flex items-center gap-2 mb-1 opacity-70"><CheckCircle2 className="text-green-400 w-4 h-4" /><span className="text-xs font-medium">Entregas no Prazo</span></div>
                      <h4 className="text-2xl font-black text-white">96<span className="text-xs text-zinc-500 font-medium ml-1">%</span></h4>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-3 md:p-4">
                      <div className="flex items-center gap-2 mb-1 opacity-70"><Truck className="text-cyan-400 w-4 h-4" /><span className="text-xs font-medium">Veículos em Rota</span></div>
                      <h4 className="text-2xl font-black text-white">18</h4>
                    </div>
                  </div>
                  {/* Mapa Logístico Realista Dark Mode */}
                  <div className="bg-[#0b101e] rounded-2xl border border-white/10 relative h-40 md:h-48 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg(#1e293b_1px,transparent_1px))] bg-[size:40px_40px]" />
                    <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(#334155_1px,transparent_1px),linear-gradient(90deg(#334155_1px,transparent_1px))] bg-[size:120px_120px]" />
                    
                    <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full opacity-80" preserveAspectRatio="none">
                      <path d="M -50 150 Q 150 180 250 80 T 450 50" fill="none" stroke="#1e293b" strokeWidth="8" />
                      <path d="M 150 -50 L 250 80 L 220 250" fill="none" stroke="#1e293b" strokeWidth="6" />
                      <path d="M -50 150 Q 150 180 250 80 T 450 50" fill="none" stroke="#22d3ee" strokeWidth="3" strokeDasharray="6,6" className="animate-[pulse_2s_infinite]" />
                    </svg>

                    <div className="absolute top-3 left-3 text-cyan-400 text-[10px] font-bold flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
                      <Map size={12} /> ROTEIRIZAÇÃO AO VIVO
                    </div>

                    <div className="absolute top-[75%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                       <MapPinned className="text-white w-4 h-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                       <span className="text-[7px] font-bold text-white mt-1 bg-black/80 px-1 rounded">CD CENTRAL</span>
                    </div>

                    <div className="absolute top-[25%] left-[85%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                       <div className="w-3 h-3 bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse">
                         <div className="w-1.5 h-1.5 bg-black rounded-full" />
                       </div>
                       <span className="text-[7px] font-bold text-cyan-300 mt-1 bg-black/80 px-1 rounded">CLIENTE #44</span>
                    </div>

                    <div className="absolute top-[40%] left-[62%] -translate-x-1/2 -translate-y-1/2 animate-[bounce_1s_infinite]">
                       <Truck className="text-green-400 w-5 h-5 drop-shadow-[0_0_10px_rgba(74,222,128,1)]" />
                    </div>
                  </div>
                </div>
              )}

              {/* ABA: TELEMETRIA AVANÇADA (ANIMAÇÃO E INFRAÇÕES) */}
              {dashTab === "telemetria" && (
                <div className="animate-in fade-in duration-500">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center hover:bg-white/10 transition-colors">
                      <TrendingUp className="text-green-400 w-5 h-5 mx-auto mb-1" />
                      <h4 className="text-xl font-black text-white">4.8 <span className="text-[10px] text-zinc-500 font-normal">Km/L</span></h4>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center hover:bg-white/10 transition-colors">
                      <Gauge className="text-cyan-400 w-5 h-5 mx-auto mb-1" />
                      <h4 className="text-xl font-black text-white">96 <span className="text-[10px] text-zinc-500 font-normal">Pts</span></h4>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center hover:bg-red-500/20 transition-colors">
                      <AlertTriangle className="text-red-400 w-5 h-5 mx-auto mb-1 animate-pulse" />
                      <h4 className="text-xl font-black text-red-400">12 <span className="text-[10px] font-normal">Riscos</span></h4>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 rounded-2xl border border-white/5 p-3.5 flex flex-col justify-center shadow-inner">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold text-zinc-400 tracking-wider flex items-center gap-1.5">
                        <Activity size={12} className="text-cyan-400"/> ANÁLISE DE CONDUÇÃO (INFRAÇÕES)
                      </span>
                    </div>
                    
                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-[9px] mb-1 uppercase font-medium">
                          <span className="text-zinc-300">Excesso de Velocidade</span>
                          <span className="text-red-400">12 Ocorrências</span>
                        </div>
                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-red-400 h-full rounded-full animate-bar" style={{ width: '85%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[9px] mb-1 uppercase font-medium">
                          <span className="text-zinc-300">Freada Brusca</span>
                          <span className="text-yellow-400">04 Ocorrências</span>
                        </div>
                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-yellow-400 h-full rounded-full animate-bar" style={{ width: '30%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[9px] mb-1 uppercase font-medium">
                          <span className="text-zinc-300">Curva Acidentada</span>
                          <span className="text-orange-400">02 Ocorrências</span>
                        </div>
                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-orange-400 h-full rounded-full animate-bar" style={{ width: '15%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE VISÃO GERAL */}
      <section id="sobre" className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-5 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-400"></span> Visão Geral Corporativa
            </p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              O fim dos softwares fragmentados na sua operação.
            </h2>
          </div>
          <div className="space-y-4 md:space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
            <p className="hover:text-zinc-300 transition-colors">
              O mercado logístico e de transportes sofre com a falta de centralização. Uma ferramenta para câmeras, outra para rastreamento, planilhas para manutenção e papéis para a jornada do motorista. <strong className="text-white">A ORIONSAT unifica todos os pilares da sua gestão.</strong>
            </p>
            <p className="hover:text-zinc-300 transition-colors">
              Apoiados em uma infraestrutura global, entregamos módulos interconectados. Cruzamos a telemetria avançada com a inteligência visual (câmeras IA) e a gestão de rotas e equipes. Um ecossistema de alto valor agregado, escalável para a sua realidade.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE MÓDULOS DETALHADOS INTERATIVOS */}
      <section id="modulos-detalhados" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Funcionalidades na Prática</p>
          <h2 className="text-3xl md:text-5xl font-black">Entenda a fundo nossas soluções</h2>
          <p className="text-zinc-400 text-base mt-4 max-w-2xl mx-auto">
            Clique nos botões abaixo para descobrir como cada um dos nossos módulos atua silenciosamente para gerar lucro e segurança para você.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-10">
          
          {/* MENU LATERAL DE MÓDULOS */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {detalhesModulos.map((modulo) => (
              <button
                key={modulo.id}
                onClick={() => setModuloAtivo(modulo.id)}
                className={`flex items-center gap-4 text-left p-4 rounded-2xl transition-all duration-300 ${
                  moduloAtivo === modulo.id 
                  ? "bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.3)] scale-105" 
                  : "bg-black/30 text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <div className={`${moduloAtivo === modulo.id ? "text-black" : "text-cyan-400"}`}>
                  {modulo.icon}
                </div>
                <span className="flex-1">{modulo.title}</span>
                {moduloAtivo === modulo.id && <ChevronRight size={20} />}
              </button>
            ))}
          </div>

          {/* PAINEL DE EXPLICAÇÃO DO MÓDULO */}
          <div className="lg:col-span-8 bg-[#02050A] rounded-2xl p-6 md:p-10 border border-white/5 flex flex-col justify-center min-h-[300px]">
            {detalhesModulos.map((modulo) => (
              moduloAtivo === modulo.id && (
                <div key={modulo.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="inline-flex items-center gap-3 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full mb-6 font-bold text-sm">
                    {modulo.icon} {modulo.title}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                    {modulo.subtitle}
                  </h3>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                    {modulo.description}
                  </p>
                  
                  <div className="space-y-3 border-t border-white/10 pt-6">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-4">Vantagens Práticas:</span>
                    {modulo.topics.map((topico, i) => (
                      <div key={i} className="flex items-center gap-3 text-zinc-300">
                        <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
                        <span>{topico}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>

        </div>
      </section>

      {/* TECNOLOGIA E BENEFÍCIOS */}
      <section id="tecnologia" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <div className="mb-8 md:mb-12 text-center lg:text-left">
              <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Arquitetura de Software</p>
              <h2 className="text-3xl md:text-4xl font-black">Tecnologia escalável</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {[
                { icon: <Video size={28} />, title: "Homologação de Câmeras de Ponta" },
                { icon: <Database size={28} />, title: "Big Data e Nuvem Criptografada" },
                { icon: <Server size={28} />, title: "Disponibilidade de Servidor 99.9%" },
                { icon: <Globe size={28} />, title: "Integrações ERP via API Rest" },
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
              <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Impacto Financeiro Real</p>
              <h2 className="text-3xl md:text-4xl font-black">Resultados que transformam dados em redução de custos.</h2>
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

      {/* CLIENTES - COM AS LOGOS DE IMAGEM */}
      <section id="clientes" className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4">Autoridade e Presença</p>
          <h2 className="text-3xl md:text-5xl font-black">Empresas que confiam em nós</h2>
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

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32 relative z-10">
        <div className="relative overflow-hidden bg-[#050B1A] border border-cyan-400/30 rounded-3xl md:rounded-[40px] p-8 md:p-16 text-center group hover:border-cyan-400/50 transition-colors duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-to-br from-cyan-400/10 to-blue-700/10 blur-[80px] group-hover:rotate-12 transition-transform duration-1000 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black max-w-4xl mx-auto leading-[1.1] tracking-tight text-white">
              Gestão de ponta acessível para a sua realidade.
            </h2>
            <p className="text-zinc-300 text-base md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Não espere os custos e os passivos saírem do controle para agir. Agende uma consultoria estratégica e entenda como otimizar a sua operação hoje.
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
              Plataforma de inteligência logística, gestão operacional holística e videotelemetria para frotas que exigem controle total.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg md:text-xl mb-4 md:mb-5">Ecossistema</h4>
            <ul className="space-y-2 md:space-y-3 text-zinc-400 text-sm md:text-base">
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Videotelemetria IA</li>
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Logística e Entregas</li>
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Jornada de Trabalho</li>
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Manutenção e Abastecimento</li>
              <li className="hover:text-cyan-400 hover:translate-x-1 cursor-pointer transition-all">Telemetria Avançada</li>
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

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
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
