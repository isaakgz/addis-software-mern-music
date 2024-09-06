// Client/src/components/Toast/Toast.tsx
import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
};

export default Toast;
