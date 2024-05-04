import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

type LinkProps = {
  href: string;
  classes?: string;
  children: ReactNode;
};

const Link = ({ href, classes, children, ...rest }: LinkProps) => {
  return (
    <a
      href={href}
      className={twMerge(
        "px-6 py-2 max-w-fit bg-slate-950 text-slate-50 flex items-center gap-1.5 hover:bg-slate-800 transition-all focus:outline-none focus-visible:ring-4 ring-offset-2 ring-slate-950 ring-offset-slate-50 font-bold uppercase tracking-widest text-lg",
        classes
      )}
      {...rest}
    >
      {children}
    </a>
  );
};
export default Link;
