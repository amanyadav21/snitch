// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         // Main font definitions
//         sans: ['"Poppins"', "sans-serif"], // This will make Poppins the default font
//         heading: ['"Titillium Web"', "sans-serif"], // For headings
        
//         // Alternative names if you want more specific usage
//         poppins: ['"Poppins"', "sans-serif"],
//         titillium: ['"Titillium Web"', "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Default font
        sans: ['Poppins', 'sans-serif'],
        
        // Named fonts
        heading: ['"Titillium Web"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        titillium: ['"Titillium Web"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
