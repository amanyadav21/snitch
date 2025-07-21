// /** @type {import('tailwindcss').Config} */
// export default {}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths based on your project
  ],
  theme: {
    extend: {
      colors: {
        blackbg: "#0a0a0a",
        whitebg: "#ffffff",
        primarycolor: "#333333",
        secondarycolor: "#f5f5f5",
        accentcolor: "#0ea5e9",
        // UI colors for shadcn components
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        // Primary fonts from your HTML
        poppins: ['"Poppins"', "sans-serif"],
        titillium: ['"Titillium Web"', "sans-serif"],
        
        // Aliases for easy usage
        heading: ['"Poppins"', "sans-serif"],
        body: ['"Titillium Web"', "sans-serif"],
        
        // Brand-specific names
        brand: ['"Poppins"', "sans-serif"],
        content: ['"Titillium Web"', "sans-serif"],
        
        // Keep existing ones for backward compatibility
        parafont: ['"Titillium Web"', "sans-serif"],
        headerfont: ['"Poppins"', "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
