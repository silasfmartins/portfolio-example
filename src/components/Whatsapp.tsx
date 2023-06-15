import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export function Whatsapp() {
  return (
    <Link
      className="fixed bottom-3 right-3 z-50 mb-16 mr-3 rounded-2xl bg-primary p-4 text-black hover:border-2 hover:border-primary focus:outline-none focus:ring-2
    focus:ring-black focus:ring-offset-2 dark:focus:ring-white dark:focus:ring-offset-primary"
      href="https://wa.me/5511946802256"
      target="_blank"
    >
      <FaWhatsapp size={32} />
    </Link>
  )
}
