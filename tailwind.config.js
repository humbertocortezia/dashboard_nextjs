/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        person: {
          "primary": "#1f2937",
          "secondary": "#4b5563",
          "accent": "#6b7280",
          "neutral": "#4b5563",
          "base-100": "#111827",
          "info": "#f3f4f6",
          "success": "#15803d",
          "warning": "#d97706",
          "error": "#991b1b",
        },
      },
      {
        new_york: {
          "primary": "#3498db", // Azul mais escuro (similar ao Shadcn)
          "secondary": "#455a64", // Cinza mais escuro (similar ao Slate)
          "accent": "#66d9ef", // Verde mais claro (similar ao Shadcn)
          "neutral": "#333", // Preto mais escuro (similar ao Slate)
          "base-100": "#2f3640", // Fundo mais escuro (similar ao Slate)
          "info": "#fff", // Branco puro (similar ao Shadcn)
          "success": "#34c759", // Verde mais claro (similar ao Shadcn)
          "warning": "#ffc107", // Amarelo mais claro (similar ao Shadcn)
          "error": "#e74c3c", // Vermelho mais escuro (similar ao Shadcn)
        },
      },
    ],
  },
};
