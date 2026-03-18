module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./App.jsx",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  safelist: [
    "bg-gradient-to-r",
    "from-[#c79a68]",
    "to-[#e5c7a1]",
    "text-[#f0dbc2]",
    "from-[#7b8f9d]",
    "to-[#b9c7d0]",
    "text-[#dbe4e8]",
    "from-[#788567]",
    "to-[#bcc79b]",
    "text-[#dfe7cf]"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#f7f4ef",
        accent: "#1f6feb"
      }
    }
  },
  plugins: []
};
