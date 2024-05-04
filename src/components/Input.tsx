const Input = ({ label, ...rest }: { label: string }) => {
  return (
    <div className="grid gap-0.5">
      <label
        htmlFor={label.replaceAll(" ", "_")}
        className="uppercase text-xs font-bold tracking-wide"
      >
        {label}
      </label>
      <input
        type="text"
        className="bg-slate-50 py-1 px-2 border-2 border-slate-950 focus:outline-none focus-visible:ring-2 ring-slate-950"
        id={label.replaceAll(" ", "_")}
        name={label.replaceAll(" ", "_")}
        {...rest}
      />
    </div>
  );
};
export default Input;
