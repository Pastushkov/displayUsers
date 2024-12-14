import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/displayUsers',
    server: {
        strictPort: true,
        port: 3000,
        host: "127.0.0.1",
    },
});