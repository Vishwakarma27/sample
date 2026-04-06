export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition ${className}`}
    >
      {children}
    </button>
  );
}