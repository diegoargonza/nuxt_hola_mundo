
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [],
  },
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/@tailwindcss/browser@4', // Versión 4 (la más reciente)
          defer: true
        }
      ]
    }
  },
});