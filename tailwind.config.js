/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#12231B',
          light: '#1B3529',
          dark: '#0A1510',
        },
        offwhite: {
          DEFAULT: '#F7F5EF',
          card: '#FDFBF7',
          border: '#E8E5DD',
        },
        sage: {
          DEFAULT: '#B8C9B5',
          light: '#D7E2D5',
          dark: '#8EAA8A',
        },
        leaf: {
          DEFAULT: '#5C8D63',
          hover: '#4C7853',
          light: '#E2EFE4',
        },
        terracotta: {
          DEFAULT: '#D9785B',
          hover: '#C46549',
          light: '#FAECE7',
        },
        gold: {
          DEFAULT: '#D8B56A',
          hover: '#C29F55',
          light: '#F8F2E2',
        },
        neutralText: {
          DEFAULT: '#202522',
          muted: '#6B746E',
          light: '#9BA39D',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Fraunces', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '18px',
        '2xl': '22px',
        '3xl': '26px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(18, 35, 27, 0.05), 0 2px 6px -1px rgba(18, 35, 27, 0.03)',
        'soft-hover': '0 12px 30px -4px rgba(18, 35, 27, 0.08), 0 4px 12px -2px rgba(18, 35, 27, 0.04)',
        'modal': '0 24px 48px -12px rgba(18, 35, 27, 0.18)',
      }
    },
  },
  plugins: [],
}
