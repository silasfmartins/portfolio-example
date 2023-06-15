'use client'

import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface LinkProps {
  title: string
  path: string
}

export function NavLink({ title, path }: LinkProps) {
  const pathname = usePathname()

  const isActive = pathname === path

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
