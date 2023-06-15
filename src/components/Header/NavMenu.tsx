'use client'

import { useState } from 'react'

import { AlignJustify, Linkedin } from 'lucide-react'
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'
import { LiLink } from './LiLink'
import { NavLink } from './NavLink'
import { HeaderAndFooterIcons } from '../HeaderAndFooterIcons'
import { ThemeSwitcher } from '../../app/ThemeSwitcher'

export function NavMenu() {
  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu(!menu)
  }
  return (
    <>
      <nav className="flex h-[4rem] w-full items-center justify-around border-b-[1px] border-solid border-secondary transition-colors dark:border-light md:hidden">
        <ThemeSwitcher />
        <ul className="flex items-center gap-[2rem]">
          <li className="transition-500 uppercase text-primaryLight transition-colors duration-500 dark:text-highlight">
            <NavLink title="Home" path="/" />
          </li>
          <li className="transition-500 uppercase text-primaryLight transition-colors duration-500 dark:text-highlight">
            <NavLink title="Projetos" path="/projetos" includes />
          </li>
        </ul>
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
      </nav>
      <nav className="hidden md:flex">
        <div className="mt-[1vh] flex w-[1000%] items-center justify-between border-b-[1px] border-solid border-primaryLight px-9 pb-5 dark:border-primary">
          <ThemeSwitcher />
          <button className="cursor-pointer" onClick={showMenu}>
            {menu !== true ? (
              <AlignJustify color="#34c9dd" size={34} />
            ) : (
              <span className="text-3xl text-primaryLight hover:text-primary dark:text-primary dark:hover:text-primaryLight">
                X
              </span>
            )}
          </button>
        </div>
        <ul
          className={
            menu !== true
              ? 'h-0 overflow-x-hidden'
              : 'absolute z-10 mt-16 flex h-full w-full flex-col overflow-x-hidden bg-slate-200 px-5 text-black dark:bg-[#11101b]'
          }
        >
          <LiLink title="Home" path="/" />
          <LiLink title="Projetos" path="/projetos" />
          <a
            href="https://github.com/silasfmartins"
            target="_blank"
            className="group flex items-center gap-4 border-b-[1px] border-solid border-highlightLight py-5"
            rel="noreferrer"
          >
            <AiOutlineGithub className="h-8 w-8 cursor-pointer text-primaryLight transition-colors duration-500 hover:text-highlightLight group-hover:text-primary dark:text-textLight dark:hover:text-primary sm:h-6 sm:w-6" />
            <span className="text-textLight hover:text-gray">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/silas-martins/"
            target="_blank"
            className="group flex items-center gap-4 border-b-[1px] border-solid border-highlightLight py-5"
            rel="noreferrer"
          >
            <Linkedin className="h-8 w-8 cursor-pointer text-primaryLight transition-colors duration-500 hover:text-highlightLight group-hover:text-primary dark:text-textLight dark:hover:text-primary sm:h-6 sm:w-6" />
            <span className="text-textLight hover:text-gray">Linkedin</span>
          </a>
          <a
            href="mailto:silas.martins2041@gmail.com"
            target="_blank"
            className="group flex items-center gap-4 border-b-[1px] border-solid border-highlightLight py-5"
            rel="noreferrer"
          >
            <AiOutlineMail className="h-8 w-8 cursor-pointer text-primaryLight transition-colors duration-500 hover:text-highlightLight group-hover:text-primary dark:text-textLight dark:hover:text-primary sm:h-6 sm:w-6" />
            <span className="text-textLight hover:text-gray">Email</span>
          </a>
        </ul>
      </nav>
    </>
  )
}
