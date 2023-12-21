import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        mono: ['var(--font-syncopate)']
      },
      keyframes: {
        bounce: {
          "0%, 100% ": { transform: "translateY(-5%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": {transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'}
        }
      }
    },
    colors: {
      'blue':'#1D818B',
      'lightblue':'#46AEB9',
      'yellow':"#F1EB98",
      'black':'#313231',
      'white':'#F9F8F8',
    },
  },
  plugins: [require("daisyui")],
}
export default config
