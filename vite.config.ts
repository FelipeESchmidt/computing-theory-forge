import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

const alias = ["components", "assets", "hooks", "pages", "redux", "utils", "globalTypes"];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: alias.map((als) => ({
      find: `@${als}`,
      replacement: path.resolve(__dirname, `src/${als}`),
    })),
  },
});
