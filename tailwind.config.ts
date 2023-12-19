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
