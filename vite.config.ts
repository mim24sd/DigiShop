import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        proxy: {
            "/api/digikala": {
                target: "https://api.digikala.com",
                changeOrigin: true,
                rewrite: () =>
                    "/v3/",
            },

            "/api/digiikala/trending": {
                target: "https://api.digikala.com",
                changeOrigin: true,
                rewrite: () =>
                    "/v1/recommendation/trending/?endpoint=%2Frecommendation%2Ftrending%2F",
            },

            "/api/digi/banner": {
                target: "https://api.digikala.com",
                changeOrigin: true,
                rewrite: () =>
                    "/v2/",
            },
        },
    },
});