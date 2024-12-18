import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Ensure the React plugin is imported

export default defineConfig({
  plugins: [react()], // Add the React plugin here
  server: {
    watch: {
      ignored: ["**/DumpStack.log.tmp"], // Exclude the problematic file
    },
  },
});
