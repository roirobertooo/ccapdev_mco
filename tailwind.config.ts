import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandMetal: '#31393C',
        brandBlue: '#2176FF',
        brandLightBlue: '#33A1FD',
        brandYellow: '#FDCA40',
        brandOrange: '#F79824',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
};
export default config;
