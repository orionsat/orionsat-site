export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Política de Privacidade
          </h1>

          <p className="text-zinc-400 text-lg">
            Transparência, proteção de dados e governança digital da Orion Sat.
          </p>

          <p className="text-zinc-500 text-sm mt-4">
            Última atualização: Maio de 2026
          </p>
        </div>

        <div className="space-y-14">

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              1. Introdução
            </h2>

            <p className="text-zinc-300 leading-8">
              A ORION SAT LTDA ("Orion Sat") é uma empresa de tecnologia
              especializada em inteligência operacional, telemetria,
              conectividade e gestão inteligente de frotas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
              2. Dados Tratados
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Dados Cadastrais
                </h3>

                <p className="text-zinc-400">
                  Nome, telefone, e-mail e informações corporativas.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Geolocalização
                </h3>

                <p className="text-zinc-400">
                  Posicionamento em tempo real e análise logística.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Telemetria
                </h3>

                <p className="text-zinc-400">
                  Velocidade, frenagens, consumo e métricas operacionais.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Dados Técnicos
                </h3>

                <p className="text-zinc-400">
                  Logs, IP, navegador e identificadores técnicos.
                </p>
              </div>

            </div>
          </section>

          <section className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
              Compartilhamento de Dados
            </h2>

            <p className="text-white text-lg font-medium mb-4">
              A Orion Sat NÃO comercializa dados pessoais ou operacionais.
            </p>

            <p className="text-zinc-300">
              As informações podem ser processadas apenas por provedores
              tecnológicos necessários para o funcionamento da plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              5. Geolocalização em Segundo Plano
            </h2>

            <p className="text-zinc-300 leading-8">
              Os aplicativos da Orion Sat podem utilizar acesso contínuo à
              localização para monitoramento operacional, atualização logística,
              roteirização inteligente e funcionamento adequado da telemetria.
            </p>

            <p className="text-zinc-400 mt-4">
              A desativação das permissões pode comprometer funcionalidades da
              plataforma.
            </p>
          </section>

          <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
              Contato e Governança
            </h2>

            <div className="space-y-2 text-zinc-300">
              <p>Orion Sat LTDA</p>
              <p>CNPJ: 66.620.074/0001-39</p>
              <p>Itaquaquecetuba/SP</p>
              <p>privacidade@orionsatgestao.com.br</p>
              <p>juridico@orionsatgestao.com.br</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  )
}
