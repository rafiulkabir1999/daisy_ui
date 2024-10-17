import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,  // To center the container
        // padding: '1rem',  // Default padding for all screens
        screens: {
          sm: '100%',  // Full width on small screens
          md: '100%',  // Full width on medium screens
          lg: '1140px',  // Set the width to 1140px for large screens
          xl: '1140px',  // Keep 1140px for extra-large screens
        },
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "pastel"],
  },
};
export default config;
