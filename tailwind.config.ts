import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'portada': 'url("/portada.png")',
        'fondo2': 'url("/bg-2.png")',
        'fondo3': 'url("/bg-3.png")',
        'portadadesk': 'url("/background-portada.png")',
      },
    },
  },
  plugins: [],
};

export default config;
