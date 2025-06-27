module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        primaryAccent: '#818cf8',
        secondary: '#10b981',
        secondartAccent: '#34d39e',
      },
    },
  },
  plugins: [],
}