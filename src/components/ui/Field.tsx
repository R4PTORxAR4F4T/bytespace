import { forwardRef } from "react";

type Props = { label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>;

const Field = forwardRef<HTMLInputElement, Props>(({ label, error, id, ...rest }, ref) => {
  const fid = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={fid} className="text-sm font-medium leading-tight text-ink">{label}</label>
      <input ref={ref} id={fid} aria-invalid={!!error} aria-describedby={error ? `${fid}-err` : undefined}
        className={`h-[52px] w-full rounded-xl border bg-white px-6 text-lg text-ink outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 ${error ? "border-red-500" : "border-gray-100"}`}
        {...rest} />
      {error && <p id={`${fid}-err`} role="alert" className="text-sm text-red-600">{error}</p>}
    </div>
  );
});
Field.displayName = "Field";
export default Field;
