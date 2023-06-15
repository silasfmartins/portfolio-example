import { NavLink } from "./NavLink";

interface LiLinkProps {
  title: string;
  path: string;
}

export function LiLink({ title, path }: LiLinkProps) {
  return (
    <li className="border-b-[1px] border-solid border-highlightLight py-5 text-zinc-400 hover:text-zinc-600">
      <NavLink title={title} path={path} />
    </li>
  )
}