/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // gray-200
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // Deep engineering blue
        background: "var(--color-background)", // Technical white
        foreground: "var(--color-foreground)", // Professional charcoal
        primary: {
          DEFAULT: "var(--color-primary)", // Deep engineering blue
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // Precision light blue
          foreground: "var(--color-secondary-foreground)", // Deep engineering blue
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // Industrial red
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // Subtle elevation
          foreground: "var(--color-muted-foreground)", // Technical gray
        },
        accent: {
          DEFAULT: "var(--color-accent)", // Engineering orange
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // Professional charcoal
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // Professional charcoal
        },
        success: {
          DEFAULT: "var(--color-success)", // Success green
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // Strategic amber
          foreground: "var(--color-warning-foreground)", // gray-800
        },
        error: {
          DEFAULT: "var(--color-error)", // Industrial red
          foreground: "var(--color-error-foreground)", // white
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'brand-headline': ['Inter', 'sans-serif'],
        'value-proposition': ['Source Sans Pro', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'cta': ['Inter', 'sans-serif'],
        'technical': ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem', // 352px
        '128': '32rem', // 512px
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "slide-up": "slide-up 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "scale-in": "scale-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        'precision': '0 2px 8px rgba(27, 54, 93, 0.08)',
        'precision-lg': '0 4px 16px rgba(27, 54, 93, 0.12)',
        'precision-xl': '0 8px 32px rgba(27, 54, 93, 0.16)',
      },
      backdropBlur: {
        'precision': '8px',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}