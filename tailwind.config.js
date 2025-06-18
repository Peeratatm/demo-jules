/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nordic-bg-light': '#ECEFF4', // Light background
        'nordic-bg-dark': '#E5E9F0',  // Slightly darker background or accent bg
        'nordic-surface': '#FFFFFF', // For cards, modals etc.
        'nordic-text-primary': '#2E3440', // Main text color
        'nordic-text-secondary': '#4C566A', // Subtler text
        'nordic-primary': '#5E81AC', // Primary action color (blue)
        'nordic-secondary': '#81A1C1', // Secondary action or accent (lighter blue)
        'nordic-accent-frost': '#88C0D0', // Teal/Frost accent
        'nordic-accent-aurora-red': '#BF616A', // Muted red accent
        'nordic-border': '#D8DEE9',   // Border color
      }
    },
  },
  plugins: [],
};
