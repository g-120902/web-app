import type { Config } from 'tailwindcss'

// MAIN COLORS
const mainColors = {
  "default": "#AA4D47",
  "base-gray": "#101112",
  "neon": "#0f9992",
  "bubblegum": "#d60b63"
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      ...mainColors
    }),
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'primary-normal': ['Roboto-Regular', 'sans-serif'],
        'primary-bold': ['Roboto-Bold', 'sans-serif'],
        'primary-light': ['Roboto-Light', 'sans-serif'],
      },
      height: {
        '0.5': '0.1rem',
      },
      borderWidth: {
        '0.5': '0.1rem',
      }
    },
  },
  plugins: [],
}
export default config
