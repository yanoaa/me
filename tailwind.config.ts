import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          background: '#FDF8E1',
          surface: `#FCEFB4`,
          container: {
            a: 'rgba(247, 249, 137, 0.50)',
            b: 'rgba(241, 248, 170, 0.50)',
            c: 'rgba(221, 249, 170, 0.50)'
          }
        },
        paper: {
          background: '#F5F5F5',
          surface: '#FFF',
          foreground: '#252525'
        }
      },
    },
  },
  plugins: [],
};
export default config;
