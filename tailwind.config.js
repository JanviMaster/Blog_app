/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html", // Include the HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/React files in src
    // ...flowbite.content(), // Add Flowbite's content paths
  ],
  theme: {
    extend: {}, // Extend Tailwind's theme if needed
  },
  plugins: [
    // flowbite.plugin(), // Add Flowbite plugin
  ],
};
