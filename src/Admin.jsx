import { useState } from 'react'

export default function Admin() {
  const [title, setTitle] = useState('Tecnologia que conecta.')
  const [subtitle, setSubtitle] = useState('Inteligência que entrega resultados.')

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        Painel ORIONSAT
      </h1>

      <div className="space-y-6 max-w-2xl">
        <div>
          <label className="block mb-2">Título</label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10"
          />
        </div>

        <div>
          <label className="block mb-2">Subtítulo</label>

          <input
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10"
          />
        </div>

        <button className="px-8 py