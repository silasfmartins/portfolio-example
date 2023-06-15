'use client'

import { useState } from 'react'

import toast from 'react-hot-toast'
import axios from 'axios'

export function SendEmailForm() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const [loading, setLoading] = useState(false)

  async function sendContactMail(
    name: string,
    senderMail: string,
    content: string,
  ) {
    const data = {
      name,
      senderMail,
      content,
    }

    try {
      return await axios.post('/api/contact', data)
    } catch (error) {
      return error
    }
  }

  async function handleSubmit(event: any) {
    event.preventDefault()
    if (!nome || !email || !mensagem) {
      toast('Preencha os campos para enviar sua mensagem', {
        style: {
          background: '#d45d5d',
          color: '#fff',
        },
      })
      return
    }
    try {
      setLoading(true)
      await sendContactMail(nome, email, mensagem)
      setNome('')
      setEmail('')
      setMensagem('')
      toast('E-mail enviado com sucesso!', {
        style: {
          background: '#7AC7E3',
          color: '#fff',
        },
      })
    } catch {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: '#d45d5d',
          color: '#fff',
        },
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-aos="fade-up"
      className="mt-32 grid w-full grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-1"
    >
      <input
        className="h-12 w-full rounded-lg border border-solid border-slate-200 bg-slate-100 px-6 py-[1.7rem] text-[1.2rem] text-base text-primaryLight outline-none transition-colors duration-500 placeholder:text-primaryLight focus:border-primaryLight dark:border-border dark:bg-input dark:text-primary dark:placeholder:text-primary dark:focus:border-primary sm:p-[1.4rem]"
        placeholder="Nome"
        onChange={({ target }) => setNome(target.value)}
        value={nome}
      />
      <input
        className="h-12 w-full rounded-lg border border-solid border-slate-200 bg-slate-100 px-6 py-[1.7rem] text-[1.2rem] text-base text-primaryLight outline-none transition-colors duration-500 placeholder:text-primaryLight focus:border-primaryLight dark:border-border dark:bg-input dark:text-primary dark:placeholder:text-primary dark:focus:border-primary sm:p-[1.4rem]"
        placeholder="E-mail"
        type="email"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
      />
      <textarea
        className="col-span-2 h-40 w-full resize-none rounded-lg border border-solid border-slate-200 bg-slate-100 px-6 py-[1.7rem] text-[1.2rem] text-base text-primaryLight outline-none transition-colors duration-500 placeholder:text-primaryLight focus:border-primaryLight dark:border-border dark:bg-input dark:text-primary dark:placeholder:text-primary dark:focus:border-primary sm:col-span-1 sm:p-[1.4rem]"
        placeholder="Mensagem"
        onChange={({ target }) => setMensagem(target.value)}
        value={mensagem}
      />
      <button
        disabled={loading}
        className="w-fit rounded-lg border-none bg-primaryLight px-10 py-4 text-[1.2rem] font-light text-white transition-colors duration-500 hover:bg-primaryLight/50 disabled:opacity-50 dark:bg-primary dark:hover:bg-primary/50 sm:w-full sm:px-6 sm:py-[0.8rem] sm:text-base"
        type="submit"
      >
        ENVIAR
      </button>
    </form>
  )
}
