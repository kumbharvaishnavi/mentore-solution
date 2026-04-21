/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#5ea501',
        accent: '#ff1744',
        dark: '#0a0a0a',
        glass: 'rgba(255, 255, 255, 0.1)'
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-red': 'pulse-red 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #5ea50140' },
          '100%': { boxShadow: '0 0 40px #5ea50180, 0 0 60px #5ea50140' }
        },
        'pulse-red': {
          '0%, 100%': { boxShadow: '0 0 20px #ff174440' },
          '50%': { boxShadow: '0 0 40px #ff174480, 0 0 60px #ff174440' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: [],
}