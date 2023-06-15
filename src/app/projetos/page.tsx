import Head from 'next/head'

import { Projeto } from '../../components/Projeto'

export default function Projetos() {
  return (
    <>
      <Head>
        <meta name="author" content="Silas Martins" />
        <meta name="description" content="Página com os projetos que eu fiz." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="../../public/favicon.ico" type="image/x-icon" />
        <title>Portfólio | Projetos</title>
      </Head>
      <div className="flex h-screen w-full flex-col bg-slate-200 dark:bg-[#10101b]">
        <main className="mx-auto my-0 mb-20 mt-20 grid w-full max-w-[85rem] grid-cols-4 gap-6 px-4 py-0 sm:grid-cols-1 sm:px-8 sm:py-0 md:max-w-[50rem] md:grid-cols-2 lg:max-w-[70rem]">
          <div className="relative flex h-40 w-full cursor-pointer items-end justify-start overflow-hidden rounded-lg border border-solid border-textLight bg-[url('../assets/conversor-de-bases.png')] bg-cover bg-center bg-no-repeat p-6 duration-500 hover:border-primary dark:border-border">
            <Projeto
              title="Conversor de Bases"
              type="Website"
              slug="conversor-de-bases"
            />
          </div>
          <div className="relative flex h-40 w-full cursor-pointer items-end justify-start overflow-hidden rounded-lg border border-solid border-textLight bg-[url('../assets/twitter-ui.png')] bg-cover bg-center bg-no-repeat p-6 duration-500 hover:border-primary dark:border-border">
            <Projeto title="Twitter UI" type="Website" slug="twitter-ui" />
          </div>
          <div className="relative flex h-40 w-full cursor-pointer items-end justify-start overflow-hidden rounded-lg border border-solid border-textLight bg-[url('../assets/lista-presenca.png')] bg-cover bg-center bg-no-repeat p-6 duration-500 hover:border-primary dark:border-border">
            <Projeto
              title="Lista de Presença"
              type="Website"
              slug="lista-presenca"
            />
          </div>
          <div className="relative flex h-40 w-full cursor-pointer items-end justify-start overflow-hidden rounded-lg border border-solid border-textLight bg-[url('../assets/whiteboard.png')] bg-cover bg-center bg-no-repeat p-6 duration-500 hover:border-primary dark:border-border">
            <Projeto title="Whiteboard" type="Website" slug="whiteboard" />
          </div>
          <div className="relative flex h-40 w-full cursor-pointer items-end justify-start overflow-hidden rounded-lg border border-solid border-textLight bg-[url('../assets/previsao-do-tempo.png')] bg-cover bg-center bg-no-repeat p-6 duration-500 hover:border-primary dark:border-border">
            <Projeto
              title="Web App de Previsão do Tempo"
              type="Website"
              slug="previsao-do-tempo"
            />
          </div>
          <div className="relative flex h-40 w-full cursor-pointer items-end justify-start overflow-hidden rounded-lg border border-solid border-textLight bg-[url('../assets/ignite-lab-react.png')] bg-cover bg-center bg-no-repeat p-6 duration-500 hover:border-primary dark:border-border">
            <Projeto
              title="Plataforma de Eventos"
              type="Website"
              slug="plataforma-de-eventos"
            />
          </div>
          <div className="relative flex h-40 w-full cursor-pointer items-end justify-start overflow-hidden rounded-lg border border-solid border-textLight bg-[url('../assets/rocketnews.png')] bg-cover bg-center bg-no-repeat p-6 duration-500 hover:border-primary dark:border-border">
            <Projeto title="Rocketnews" type="Website" slug="rocketnews" />
          </div>
        </main>
      </div>
    </>
  )
}
