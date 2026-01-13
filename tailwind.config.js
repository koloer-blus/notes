/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PingFang SC"', '"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        apple: {
          blue: '#0071E3',
          'blue-hover': '#147CE5',
          gray: '#86868B',
          'gray-dark': '#1D1D1F',
          'gray-light': '#F5F5F7',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.2" },
          "50%": { transform: "translateY(-30px)", opacity: "0.6" },
        },
        "pulse-ring": {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "0.3" },
          "50%": { transform: "translate(-50%, -50%) scale(1.05)", opacity: "0.5" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "spin-slow": "spin-slow 30s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 25s linear infinite",
        "spin-slower": "spin-slow 20s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-ring": "pulse-ring 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
