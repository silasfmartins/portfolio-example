'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LinkProps {
  title: string
  path: string
  includes?: boolean
}

export function NavLink({ title, path, includes = false }: LinkProps) {
  const pathname = usePathname()

  function verifyIfIsActive() {
    if (includes) {
      return pathname.includes(path)
    }
    return path === pathname
  }

  const isActive = verifyIfIsActive()

  return (
    <div>
      <Link
        className={classNames({
          'border-b-2 border-solid border-primaryLight text-primaryLight dark:border-primary dark:text-primary':
            isActive,
          'text-textLight': !isActive,
          'border-b-2 border-solid border-primaryLight text-primaryLight dark:border-primary dark:hover:text-primary':
            isActive,
          'hover:text-gray': !isActive,
        })}
        href={path}
      >
        {title}
      </Link>
    </div>
  )
}
