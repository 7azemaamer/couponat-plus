export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-accent rounded-full px-6 py-2 text-sm text-white"
    >
      {children}
    </button>
  );
};
