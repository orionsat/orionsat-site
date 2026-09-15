import { useEffect, useState } from "react";
import {
  Activity,
  Apple,
  AppWindow,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  FileText,
  Fuel,
  Gauge,
  Link2,
  MapPinned,
  MessageCircle,
  Menu,
  Monitor,
  MonitorSmartphone,
  Navigation,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import logo from "./assets/logo.png";
import logoAdvance from "./assets/advance.jpg";
import logoFenix from "./assets/fenix.png";
import logoNanis from "./assets/nanis.jpg";
import logoNevinho from "./assets/nevinho.jpeg";
import logoZls from "./assets/zls.jpeg";
import "./site-home.css";

const WHATSAPP_MESSAGE = "Olá! Vim pelo site da Orion Sat e gostaria de conhecer melhor as soluções de gestão veicular.";
const WHATSAPP = `https://wa.me/5511911021692?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const PANEL = "https://painel.orionsatgestao.com.br";

const dashboardTabs = [
  { id: "overview", label: "Visão geral", icon: Activity },
  { id: "alerts", label: "Alertas", icon: Bell },
  { id: "maintenance", label: "Manutenção", icon: Wrench },
  { id: "costs", label: "Custos", icon: CircleDollarSign },
];

const solutions = [
  {
    icon: MonitorSmartphone,
    number: "01",
    title: "Gestão em um só lugar",
    text: "O próprio cliente acompanha sua operação, organiza veículos e consulta informações pelo painel web e aplicativo.",
    tags: ["Visão centralizada", "Grupos e veículos", "Acesso web e móvel"],
  },
  {
    icon: Bell,
    number: "02",
    title: "Alertas que fazem sentido",
    text: "Escolha os eventos importantes para cada veículo e consulte notificações com identificação, data e horário.",
    tags: ["Ignição", "Bateria", "Bloqueio e vibração"],
  },
  {
    icon: Route,
    number: "03",
    title: "Histórico para decidir melhor",
    text: "Revise trajetos, horários, paradas e acontecimentos anteriores com informações organizadas por período.",
    tags: ["Percursos", "Paradas", "Relatórios"],
  },
  {
    icon: Wrench,
    number: "04",
    title: "Manutenção sob controle",
    text: "Planeje rotinas por data, quilometragem ou horas de uso e acompanhe o andamento de cada plano.",
    tags: ["Preventiva", "Quilometragem", "Horas de uso"],
  },
  {
    icon: CircleDollarSign,
    number: "05",
    title: "Despesas por veículo",
    text: "Registre abastecimentos e outros custos para construir um histórico operacional mais completo.",
    tags: ["Abastecimentos", "Despesas", "Histórico de custos"],
  },
  {
    icon: CheckSquare,
    number: "06",
    title: "Motorista e checklist",
    text: "Conecte rotinas de campo à gestão com identificação do motorista, checklists e inspeções configuráveis.",
    tags: ["Motoristas", "Inspeções", "Rotinas digitais"],
  },
];

const appScreens = [
  {
    src: "/app-home-demo-v2.webp",
    eyebrow: "PÁGINA INICIAL",
    title: "Sua operação começa com uma visão clara.",
    text: "Visualize os veículos cadastrados, pesquise rapidamente e acesse as principais rotinas logo na entrada do aplicativo.",
  },
  {
    src: "/app-vehicle-demo-v2.webp",
    eyebrow: "DETALHES DO VEÍCULO",
    title: "Cada veículo com seu próprio contexto.",
    text: "Reúna identificação, imagem, posição demonstrativa e atalhos úteis em uma experiência direta para o gestor.",
  },
  {
    src: "/app-panel-demo-v2.webp",
    eyebrow: "PAINEL OPERACIONAL",
    title: "Indicadores importantes em poucos segundos.",
    text: "Consulte ignição, odômetro, voltagem, status e informações de consumo sem percorrer telas desnecessárias.",
  },
  {
    src: "/app-map-demo.webp",
    eyebrow: "HISTÓRICO E POSIÇÃO",
    title: "Informação essencial, sem complicação.",
    text: "Consulte a última comunicação e acesse o histórico em uma experiência pensada para o celular.",
  },
  {
    src: "/app-despesas-demo.webp",
    eyebrow: "DESPESAS",
    title: "Custos organizados por veículo.",
    text: "Registre abastecimentos e despesas e mantenha um histórico prático para conferência da sua gestão.",
  },
  {
    src: "/app-manutencao-demo.webp",
    eyebrow: "MANUTENÇÃO",
    title: "Planejamento que acompanha a operação.",
    text: "Crie planos por data, quilometragem ou horas de uso e visualize o que está aberto, alertado ou tratado.",
  },
];

function GooglePlayMark() {
  return (
    <svg className="store-mark google-play-mark" viewBox="0 0 48 52" aria-hidden="true">
      <path fill="#00d7ff" d="M4 4l24 23L4 50c-1.2-1-2-2.8-2-5V9c0-2.2.8-4 2-5z" />
      <path fill="#00ef7b" d="M4 4c1.1-.8 2.7-.9 4.3.1l29.2 16.8-9.5 6.1z" />
      <path fill="#ffcf3c" d="M28 27l9.5 6.1L8.3 49.9c-1.6 1-3.2.9-4.3.1z" />
      <path fill="#ff4b55" d="M37.5 20.9l6.2 3.6c3 1.7 3 4.1 0 5.8l-6.2 3.6L28 27z" />
    </svg>
  );
}

const clients = [
  { name: "Advance Facilities", image: logoAdvance },
  { name: "Fênix Telecom", image: logoFenix },
  { name: "Nanis Car Locações", image: logoNanis },
  { name: "Nevinho Car Locações", image: logoNevinho },
  { name: "ZLS Transportes", image: logoZls },
];

function BrandMark() {
  return (
    <a className="brand" href="#inicio" aria-label="Orion Sat — início">
      <img src={logo} alt="" />
      <span>
        <strong>ORION<span>SAT</span></strong>
        <small>GESTÃO INTELIGENTE</small>
      </span>
    </a>
  );
}

function TopViewCar({ path, color, duration, begin }) {
  return (
    <g className="map-vehicle">
      <g>
        <animateMotion
          path={path}
          dur={duration}
          begin={begin}
          rotate="auto"
          repeatCount="indefinite"
        />
        <ellipse className="map-vehicle-halo" cx="0" cy="0" rx="20" ry="14" />
        <rect className="map-vehicle-body" x="-14" y="-8" width="28" height="16" rx="5" style={{ fill: color }} />
        <path className="map-vehicle-nose" d="M8 -6 L14 -3.5 L14 3.5 L8 6 Z" />
        <rect className="map-vehicle-glass" x="-6" y="-5" width="8" height="10" rx="2" />
        <rect className="map-vehicle-glass" x="4" y="-5" width="5" height="10" rx="1.8" />
        <rect className="map-vehicle-wheel" x="-9" y="-10" width="6" height="3" rx="1.5" />
        <rect className="map-vehicle-wheel" x="5" y="-10" width="6" height="3" rx="1.5" />
        <rect className="map-vehicle-wheel" x="-9" y="7" width="6" height="3" rx="1.5" />
        <rect className="map-vehicle-wheel" x="5" y="7" width="6" height="3" rx="1.5" />
      </g>
    </g>
  );
}

function FictionalMap() {
  const avenueRoute = "M-25 268 C55 225 105 300 168 244 S272 120 390 150";
  const centralRoute = "M78 -20 C115 55 70 128 142 176 S252 238 270 355";
  const northRoute = "M-30 75 C75 105 135 28 225 62 S305 122 390 65";

  return (
    <div className="fictional-map" aria-label="Mapa ilustrativo com veículos em movimento">
      <div className="map-grid" />
      <svg className="map-roads" viewBox="0 0 360 330" preserveAspectRatio="none" aria-hidden="true">
        <path className="road road-wide" d={avenueRoute} />
        <path className="road road-wide" d={centralRoute} />
        <path className="road road-thin" d={northRoute} />
        <path className="road road-thin" d="M305 -20 C275 86 330 175 286 355" />
        <path className="route-line" d={avenueRoute} />
        <TopViewCar path={avenueRoute} color="#20d8ff" duration="12s" begin="-1s" />
        <TopViewCar path={centralRoute} color="#1678ff" duration="14s" begin="-6s" />
        <TopViewCar path={northRoute} color="#4de7a7" duration="16s" begin="-10s" />
      </svg>
      <div className="map-block b1" /><div className="map-block b2" /><div className="map-block b3" />
      <div className="map-block b4" /><div className="map-block b5" /><div className="map-block b6" />
      <div className="map-point point-a"><span /><small>BASE</small></div>
      <div className="map-point point-b"><span /><small>ÁREA 03</small></div>
      <div className="map-legend"><Sparkles size={12} /> CENÁRIO DEMONSTRATIVO</div>
    </div>
  );
}

function OverviewPanel() {
  return (
    <div className="dash-panel dash-overview">
      <div className="map-column"><FictionalMap /></div>
      <div className="graph-column">
        <div className="mini-title"><span>VEÍCULOS EM ATIVIDADE</span><strong>12</strong></div>
        <div className="spark-chart" aria-label="Gráfico ilustrativo de atividade">
          {[34, 52, 41, 68, 59, 79, 65, 88, 72, 92].map((height, i) => (
            <i key={i} style={{ height: `${height}%`, animationDelay: `${i * 90}ms` }} />
          ))}
        </div>
        <div className="dash-kpis">
          <div><small>Online</small><strong>10</strong></div>
          <div><small>Em movimento</small><strong>07</strong></div>
          <div><small>Em atenção</small><strong>02</strong></div>
        </div>
        <div className="latest-event"><span className="event-dot" /><div><small>ÚLTIMO EVENTO</small><strong>Ignição ligada · OS-21</strong></div><time>agora</time></div>
      </div>
    </div>
  );
}

function AlertsPanel() {
  const alerts = [
    ["Ignição ligada", "OS-21", "agora", "green"],
    ["Bateria em atenção", "OS-08", "há 4 min", "amber"],
    ["Vibração identificada", "OS-14", "há 12 min", "cyan"],
    ["Ignição desligada", "OS-05", "há 18 min", "blue"],
  ];
  return (
    <div className="dash-panel list-panel">
      <div className="panel-summary"><Bell /><div><small>CENTRAL DE NOTIFICAÇÕES</small><strong>Eventos organizados para agir com contexto</strong></div><span>4 novos</span></div>
      <div className="event-list">
        {alerts.map(([event, car, time, color]) => <div className="event-row" key={event + car}><i className={color} /><strong>{event}</strong><span>{car}</span><time>{time}</time></div>)}
      </div>
    </div>
  );
}

function MaintenancePanel() {
  return (
    <div className="dash-panel maintenance-panel">
      <div className="maintenance-head"><Wrench /><div><small>PLANOS DE MANUTENÇÃO</small><strong>Acompanhe prazos por veículo</strong></div></div>
      {[
        ["Revisão preventiva", "OS-08", "Por quilometragem", 78],
        ["Troca de óleo", "OS-14", "Por data", 56],
        ["Inspeção operacional", "OS-21", "Por horas", 32],
      ].map(([name, car, mode, progress]) => (
        <div className="maintenance-row" key={name}><div><strong>{name}</strong><small>{car} · {mode}</small></div><div className="progress"><i style={{ width: `${progress}%` }} /></div><span>{progress}%</span></div>
      ))}
      <div className="maintenance-counts"><span><b>05</b> abertos</span><span><b>02</b> alertados</span><span><b>18</b> tratados</span></div>
    </div>
  );
}

function CostsPanel() {
  return (
    <div className="dash-panel costs-panel">
      <div className="cost-total"><small>DESPESAS REGISTRADAS</small><strong>R$ 4.820,40</strong><span>Período demonstrativo</span></div>
      <div className="cost-chart">
        {[46, 70, 55, 86, 64, 92].map((h, i) => <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}><small>{["A", "B", "C", "D", "E", "F"][i]}</small></i>)}
      </div>
      <div className="cost-cards"><div><Fuel /><span><small>Abastecimentos</small><strong>14 registros</strong></span></div><div><FileText /><span><small>Veículos com histórico</small><strong>08 veículos</strong></span></div></div>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState("overview");
  useEffect(() => {
    const timer = window.setInterval(() => {
      setTab((current) => dashboardTabs[(dashboardTabs.findIndex((item) => item.id === current) + 1) % dashboardTabs.length].id);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div className="dashboard-shell">
      <div className="dash-glow" />
      <div className="dashboard-topbar">
        <div className="window-dots"><i /><i /><i /></div>
        <div className="dashboard-title"><span className="live-dot" /> ORION CONTROL</div>
        <span className="connected">CONECTADO</span>
      </div>
      <div className="dashboard-tabs">
        {dashboardTabs.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => setTab(id)} className={tab === id ? "active" : ""}><Icon size={15} />{label}</button>)}
      </div>
      <div className="dashboard-stage">
        {tab === "overview" && <OverviewPanel />}
        {tab === "alerts" && <AlertsPanel />}
        {tab === "maintenance" && <MaintenancePanel />}
        {tab === "costs" && <CostsPanel />}
      </div>
      <div className="dashboard-foot"><span>Ambiente ilustrativo</span><span>Atualização contínua <i /></span></div>
    </div>
  );
}

export default function SiteHome({ onOpenDocument, onLead }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appSlide, setAppSlide] = useState(0);
  const [cookiesAccepted, setCookiesAccepted] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem("orionsat_cookies_aceitos_v2") === "true";
  });
  useEffect(() => {
    const timer = window.setInterval(() => setAppSlide((current) => (current + 1) % appScreens.length), 5200);
    return () => window.clearInterval(timer);
  }, []);
  const lead = (location) => {
    onLead?.("generate_lead", { lead_source: "whatsapp", button_location: location });
  };
  const acceptCookies = () => {
    window.localStorage.setItem("orionsat_cookies_aceitos_v2", "true");
    setCookiesAccepted(true);
  };
  return (
    <div className="orion-site">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <div className="site-container header-inner">
          <BrandMark />
          <nav className={menuOpen ? "nav-open" : ""}>
            <a href="#solucoes" onClick={() => setMenuOpen(false)}>Soluções</a>
            <a href="#plataforma" onClick={() => setMenuOpen(false)}>Plataforma</a>
            <a href="#aplicativo" onClick={() => setMenuOpen(false)}>Aplicativos</a>
            <a href="#clientes" onClick={() => setMenuOpen(false)}>Clientes</a>
            <button className="nav-document" onClick={() => { setMenuOpen(false); onOpenDocument?.("privacidade"); }}>Documentos</button>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
          <div className="header-actions">
            <a className="panel-link" href={PANEL} target="_blank" rel="noreferrer">Acessar painel <ArrowRight size={15} /></a>
            <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-grid site-container">
            <div className="hero-copy">
              <div className="eyebrow"><span /><Sparkles size={14} /> INTELIGÊNCIA OPERACIONAL PARA VEÍCULOS E FROTAS</div>
              <h1>Gestão que transforma movimento em <em>decisão.</em></h1>
              <p className="hero-lead">A Orion Sat entrega as ferramentas. <strong>Você acompanha, organiza e conduz sua operação.</strong> Veículos, alertas, históricos, manutenções e despesas reunidos no painel web e aplicativo.</p>
              <div className="hero-actions">
                <a className="primary-button" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => lead("hero")}>Solicitar uma proposta <ArrowRight /></a>
                <a className="secondary-button" href="#plataforma">Conhecer a plataforma <ChevronRight /></a>
              </div>
              <div className="hero-proof">
                <div><span>01</span><p><strong>Mais clareza</strong><small>sobre cada veículo</small></p></div>
                <div><span>02</span><p><strong>Mais controle</strong><small>sobre cada rotina</small></p></div>
                <div><span>03</span><p><strong>Mais autonomia</strong><small>para a sua gestão</small></p></div>
              </div>
            </div>
            <div className="hero-dashboard"><div className="orbit-label label-one"><Bell /> alertas configuráveis</div><div className="orbit-label label-two"><Wrench /> manutenção por veículo</div><Dashboard /></div>
          </div>
          <div className="scroll-hint"><span /> EXPLORE A PLATAFORMA</div>
        </section>

        <section className="control-strip">
          <div className="site-container strip-grid">
            <div><Gauge /><span><small>VISIBILIDADE</small><strong>Status e movimentação</strong></span></div>
            <div><Bell /><span><small>CONTEXTO</small><strong>Alertas organizados</strong></span></div>
            <div><BarChart3 /><span><small>DECISÃO</small><strong>Históricos e relatórios</strong></span></div>
            <div><Smartphone /><span><small>AUTONOMIA</small><strong>Gestão na sua mão</strong></span></div>
          </div>
        </section>

        <section className="statement-section site-container" id="plataforma">
          <div className="section-kicker">CONTROLE SEM DISTÂNCIA</div>
          <div className="statement-grid">
            <h2>Você conhece a sua operação.<br /><span>Nós organizamos as informações.</span></h2>
            <div><p>A Orion Sat é especializada em gestão veicular, rastreamento e telemetria para empresas e clientes particulares.</p><p>Com painel web e aplicativo, o próprio cliente acompanha seus veículos, configura alertas, consulta históricos e mantém rotinas operacionais reunidas em um único ambiente.</p></div>
          </div>
          <div className="statement-rail"><span>PAINEL WEB</span><i /><span>APLICATIVO</span><i /><span>DADOS ORGANIZADOS</span><i /><span>DECISÕES MAIS RÁPIDAS</span></div>
        </section>

        <section className="solutions-section" id="solucoes">
          <div className="site-container">
            <div className="section-heading"><div><div className="section-kicker">SOLUÇÕES QUE ACOMPANHAM A ROTINA</div><h2>Da visão geral ao detalhe<br /><em>que muda uma decisão.</em></h2></div><p>Recursos para empresas, pequenos frotistas, operações técnicas, máquinas, equipamentos e veículos particulares.</p></div>
            <div className="solutions-grid">
              {solutions.map(({ icon: Icon, number, title, text, tags }) => <article className="solution-card" key={number}><div className="card-top"><span>{number}</span><Icon /></div><h3>{title}</h3><p>{text}</p><div className="tag-list">{tags.map((tag) => <span key={tag}><Check size={12} />{tag}</span>)}</div><div className="card-light" /></article>)}
            </div>
          </div>
        </section>

        <section className="app-section" id="aplicativo">
          <div className="site-container app-grid">
            <div className="app-visual">
              <div className="phone-aura" /><div className="phone-shell"><div className="phone-speaker" />{appScreens.map((screen, index) => <img key={screen.src} src={screen.src} alt={`Tela demonstrativa: ${screen.eyebrow}`} className={appSlide === index ? "active" : ""} />)}<div className="phone-glare" /></div>
              <div className="floating-chip chip-alert"><Bell /><span><small>ALERTA</small>Evento registrado</span></div>
              <div className="floating-chip chip-cost"><CircleDollarSign /><span><small>GESTÃO</small>Despesa organizada</span></div>
            </div>
            <div className="app-copy">
              <div className="section-kicker">APLICATIVOS PERSONALIZADOS</div>
              <span className="app-index">{String(appSlide + 1).padStart(2, "0")} / {String(appScreens.length).padStart(2, "0")}</span>
              <p className="app-eyebrow">{appScreens[appSlide].eyebrow}</p>
              <h2>{appScreens[appSlide].title}</h2>
              <p>{appScreens[appSlide].text}</p>
              <div className="app-selector">{appScreens.map((screen, index) => <button className={appSlide === index ? "active" : ""} key={screen.eyebrow} onClick={() => setAppSlide(index)}><span>0{index + 1}</span>{screen.eyebrow}</button>)}</div>
              <div className="app-note"><ShieldCheck /><span><strong>Telas baseadas no aplicativo Orion Sat.</strong><small>Dados, placas e mapas exibidos nesta prévia são demonstrativos.</small></span></div>
            </div>
          </div>
        </section>

        <section className="audience-section site-container">
          <div className="section-heading"><div><div className="section-kicker">UMA PLATAFORMA, DIFERENTES OPERAÇÕES</div><h2>Gestão adaptada ao<br /><em>seu jeito de trabalhar.</em></h2></div></div>
          <div className="audience-orbit"><div className="orbit-core" role="img" aria-label="Símbolo Orion Sat representando o centro da operação"><img src="/orion-emblem-sun.webp" alt="" /></div>{["TRANSPORTADORAS", "LOCADORAS", "FACILITIES", "OPERAÇÕES TÉCNICAS", "MÁQUINAS E EQUIPAMENTOS", "VEÍCULOS PARTICULARES"].map((item, index) => <div className={`audience-item audience-${index + 1}`} key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}</div>
        </section>

        <section className="clients-section" id="clientes">
          <div className="site-container"><div className="section-kicker centered">EMPRESAS QUE JÁ FAZEM PARTE DESSA ROTA</div><div className="clients-row">{clients.map((client) => <div className="client-card" key={client.name}><img src={client.image} alt={client.name} /></div>)}</div></div>
        </section>

        <section className="access-section" id="acessos">
          <div className="site-container access-grid">
            <div><div className="section-kicker">ACESSOS DIRETOS</div><h2>Tudo o que você precisa,<br /><em>sempre ao alcance.</em></h2><p>Entre no painel web ou instale o aplicativo Orion Sat no seu celular.</p></div>
            <div className="access-links">
              <a href={PANEL} target="_blank" rel="noreferrer"><Monitor className="access-brand-icon" /><span><small>ACESSO DO CLIENTE</small><strong>Painel web Orion Sat</strong></span><ArrowRight /></a>
              <a href="https://play.google.com/store/apps/details?id=br.com.rs.agseg&hl=pt_BR" target="_blank" rel="noreferrer"><GooglePlayMark /><span><small>ANDROID</small><strong>Baixar no Google Play</strong></span><ArrowRight /></a>
              <a href="https://apps.apple.com/br/app/agseg-monitoramento/id6477195037" target="_blank" rel="noreferrer"><span className="apple-store-mark"><Apple /></span><span><small>IPHONE E IPAD</small><strong>Baixar na App Store</strong></span><ArrowRight /></a>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contato">
          <div className="site-container cta-card"><div className="cta-orbit" /><div><div className="section-kicker">PRÓXIMO PASSO</div><h2>Mais controle começa com<br /><em>uma conversa clara.</em></h2><p>Conte como funciona a sua operação. A Orion Sat ajuda a identificar os recursos que fazem sentido para sua realidade.</p></div><a className="primary-button" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => lead("final_cta")}>Falar com a Orion Sat <ArrowRight /></a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-grid"><div><BrandMark /><p>Tecnologia para transformar dados em mais controle, produtividade e eficiência operacional.</p></div><div><strong>NAVEGAÇÃO</strong><a href="#solucoes">Soluções</a><a href="#plataforma">Plataforma</a><a href="#aplicativo">Aplicativos</a><a href="#clientes">Clientes</a></div><div><strong>DOCUMENTOS</strong><button onClick={() => onOpenDocument?.("privacidade")}>Política de Privacidade</button><button onClick={() => onOpenDocument?.("cookies")}>Política de Cookies</button><button onClick={() => onOpenDocument?.("termos")}>Termos de Uso</button></div><div><strong>CONTATO E LINKS</strong><a href="mailto:contato@orionsatgestao.com.br">contato@orionsatgestao.com.br</a><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp comercial</a><a href={PANEL} target="_blank" rel="noreferrer">Acessar painel web</a><a href="https://linktr.ee/orionsatgestao" target="_blank" rel="noreferrer">Linktree Orion Sat</a><a href="https://www.instagram.com/orion_sat/" target="_blank" rel="noreferrer">Instagram @orion_sat</a></div></div>
        <div className="site-container footer-bottom"><span>© 2026 Orion Sat LTDA. Todos os direitos reservados.</span><span>TECNOLOGIA · CONECTIVIDADE · INTELIGÊNCIA · RESULTADOS</span></div>
      </footer>

      <a className={`whatsapp-float ${cookiesAccepted ? "" : "with-cookie"}`} href={WHATSAPP} target="_blank" rel="noreferrer" onClick={() => lead("floating_button")} aria-label="Falar com a Orion Sat pelo WhatsApp">
        <MessageCircle /><span>Fale conosco</span>
      </a>

      {!cookiesAccepted && (
        <aside className="cookie-banner" aria-label="Aviso de cookies">
          <div className="cookie-icon"><ShieldCheck /></div>
          <div><strong>Sua privacidade importa.</strong><p>Usamos cookies essenciais para lembrar preferências e melhorar sua navegação.</p></div>
          <button className="cookie-details" onClick={() => onOpenDocument?.("cookies")}>Ver política</button>
          <button className="cookie-accept" onClick={acceptCookies}>Aceitar cookies</button>
        </aside>
      )}
    </div>
  );
}
