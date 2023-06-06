module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ['Poppins', 'sans-serif'],
        titleFont: ['Roboto', 'sans-serif'],
        signature: ['Style Script'],
      },
      colors: {
        bodyColor: '#393E46',
        lightText: '#fff',
        boxBg: 'linear-gradient(145deg, #1e2024, #23272b)',
        designColor: '#ff014f',
        textGreen: '#ff014f',
        borderButton: '#05BFDB',
        techbox: '#FFCB9A',
        techbox1: '#e4d4ae',
        techbox2: '#133a1b',
        techbox3: '#b7bf96',
        techbox4: '#011b10',
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1cle22, -10px -10px 19px #262a2e',
      },
    },
  
  },
  plugins: [],
}

