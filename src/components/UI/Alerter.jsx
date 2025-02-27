import toast from "react-hot-toast";

export const Alerter = ({ children, position, className }) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          className
            ? className
            : "bg-primary text-white px-6 py-4 shadow-md rounded-full"
        } ${t.visible ? "animate-enter" : "animate-leave"}`}
      >
        {children}
      </div>
    ),
    {
      position,
    }
  );
};
