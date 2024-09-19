

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000", // Server URL (Proxy)
        changeOrigin: true, // Changes the origin of the host header to the target URL
        secure: false, // Disables SSL certificate verification
      },
      "/search": {
        target: "",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
