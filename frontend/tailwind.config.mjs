/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "2%": { transform: "translateX(-6px) rotate(-1deg)" },
          "4%": { transform: "translateX(5px) rotate(1deg)" },
          "6%": { transform: "translateX(-4px) rotate(-1deg)" },
          "8%": { transform: "translateX(3px) rotate(1deg)" },
          "10%": { transform: "translateX(-2px)" },
          "12%": { transform: "translateX(1px)" },
          "14%, 100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        shake: "shake 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
