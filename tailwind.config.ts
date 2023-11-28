import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#009fc1",
        
"secondary": "#008000",
        
"accent": "#008200",
        
"neutral": "#111826",
        
"base-100": "#fffafa",
        
"info": "#00b7ff",
        
"success": "#00e292",
        
"warning": "#c6a200",
        
"error": "#c01243",
        },
      },
    ],
  },
}
export default config
