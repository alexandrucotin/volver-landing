import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/projects/**/*",
          dest: "assets/projects",
        },
        {
          src: "src/assets/data/*",
          dest: "assets/data",
        },
      ],
    }),
  ],
});
