import { MoonLoader } from 'react-spinners'

export function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen fixed">
      <MoonLoader color={'#0EE7B7'} />
    </div>
  )
}
