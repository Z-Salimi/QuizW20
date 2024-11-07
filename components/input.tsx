interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}

export const Input: React.FC<IInputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col justify-center gap-2">
      <p className="text-slate-700 capitalize">{label}</p>
      <input
        className={className || "border border-slate-300 rounded-lg max-w-[50vw] w-full px-3 py-1.5 text-sm shadow-md"}
        {...props}
      />
      {error && <p className="text-red-700 text-sm font-medium">{error}</p>}
    </div>
  );
};