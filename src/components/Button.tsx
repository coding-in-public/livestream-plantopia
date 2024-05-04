import type { ReactNode } from "react";

type ButtonProps = {
  handleSubmit: () => void;
  children: ReactNode;
};

const Button = ({ handleSubmit, children }: ButtonProps) => {
  return (
    <button
      onClick={handleSubmit}
      className="px-6 py-2 max-w-fit bg-slate-950 text-slate-50 flex items-center gap-1.5 hover:bg-slate-800 transition-all focus:outline-none focus-visible:ring-4 ring-offset-2 ring-slate-950 ring-offset-slate-50 font-bold uppercase tracking-widest text-lg"
    >
      {children}
    </button>
  );
};
export default Button;
