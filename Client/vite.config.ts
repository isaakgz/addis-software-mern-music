import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://addis-software-mern-music.onrender.com", // Server URL (Proxy)
        changeOrigin: true, // Changes the origin of the host header to the target URL
        secure: false, // Disables SSL certificate verification
      },
      "/search": {
        target: "https://api.deezer.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
