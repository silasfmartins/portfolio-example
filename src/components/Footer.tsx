import { Linkedin } from 'lucide-react'
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { HeaderAndFooterIcons } from './HeaderAndFooterIcons'

export function Footer() {
  return (
    <footer className="mt-40 flex h-20 w-full items-center justify-center border-t-[1px] border-solid border-secondary bg-slate-200 dark:border-light dark:bg-[#11101b]">
      <div className="mx-auto my-0 flex w-full max-w-[85rem] items-center justify-between px-4 py-0 sm:px-8 sm:py-0 md:max-w-[50rem] lg:max-w-[70rem]">
        <span className="flex flex-col text-[1.2rem] font-light text-secondary transition-colors duration-500 sm:text-[0.9rem]">
          Silas Martins 2023
          <div>Todos os direitos reservados</div>
        </span>
        <section className="flex items-center gap-4 sm:gap-2">
          <HeaderAndFooterIcons
            icon={<AiOutlineGithub />}
            link="https://github.com/silasfmartins"
          />
          <a
            href="https://www.linkedin.com/in/silas-martins/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="ml-3 mt-3 h-8 w-8 cursor-pointer text-primaryLight transition-colors duration-500 hover:text-highlightLight dark:text-textLight dark:hover:text-primary sm:h-6 sm:w-6">
              <Linkedin />
            </div>
          </a>
          <HeaderAndFooterIcons
            icon={<AiOutlineMail />}
            link="mailto:silas.martins2041@gmail.com"
          />
        </section>
      </div>
    </footer>
  )
}
