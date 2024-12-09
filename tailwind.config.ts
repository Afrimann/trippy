import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
const plugin = require('tailwindcss/plugin');


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accents: 'rgba(46, 139, 87, 1)',
        primaryBlue: 'rgba(0, 163, 224, 1)',
        blurWhite: 'rgba(255, 255, 255, 0.5)',
        backgroundWheat: 'rgb(245,245,220)',
        secondaryOrange:'rgba(255, 111, 0, 1)',
        headingBlue: 'rgba(66, 66, 66, 1)',
        textSecondary: 'rgba(116, 116, 116, 1)',
        bgGreen: 'rgba(46, 139, 87, 1)',
        bgGrey: 'rgba(66, 66, 66, 1)',
        textGrey: 'rgba(189, 195, 199, 1)',
        scrollbar: {
          track: '#f3f4f6', // Light gray track
          thumb: '#ff6f00', // Orange thumb
        },
      },
      fontFamily: {
        roboto: 'Roboto',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }), // Enables scrollbar styles

  ],
} satisfies Config;
