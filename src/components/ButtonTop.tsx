import { ArrowUp } from 'lucide-react'

export function ButtonTop() {
  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className="fixed bottom-3 right-3 z-50 mr-3 rounded-2xl bg-primary p-4 text-black hover:border-2 hover:border-primary focus:outline-none focus:ring-2 focus:ring-black
      focus:ring-offset-2 dark:focus:ring-white dark:focus:ring-offset-primary"
      onClick={() => handleScrollTop()}
    >
      <ArrowUp />
    </button>
  )
}
