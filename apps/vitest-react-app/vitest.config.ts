import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      instances: [
        {
          browser: "chromium",
        },
      ],
    },
    setupFiles: ["./vitest-setup.js"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["**/src/**/*.{ts,tsx}"],
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
