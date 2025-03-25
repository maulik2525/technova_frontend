/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['group-hover'],
      boxShadow:{
        '4xl': '0px 0px 20px 0px #60a5fa',
      }
    },
  },
  plugins: [
    // require('flowbite/plugin')({
    //     charts: true,
    // }),
    
  ]
};
