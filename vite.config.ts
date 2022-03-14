import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), imagetools()],
});
