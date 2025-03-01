import toast from "react-hot-toast";

export const Alerter = {
  success: (message) => {
    toast.success(message, {
      style: {
        background: "var(--accent)",
        color: "#fff",
        direction: "rtl",
      },
      iconTheme: {
        primary: "#4CAF50",
        secondary: "#fff",
      },
    });
  },

  error: (message) => {
    toast.error(message, {
      style: {
        background: "#333",
        color: "#fff",
        direction: "rtl",
      },
      iconTheme: {
        primary: "#F44336",
        secondary: "#fff",
      },
    });
  },

  info: (message) => {
    toast(message, {
      style: {
        background: "#333",
        color: "#fff",
        direction: "rtl",
      },
      iconTheme: {
        primary: "#2196F3",
        secondary: "#fff",
      },
    });
  },
};
