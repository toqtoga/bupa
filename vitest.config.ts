/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    typecheck: { enabled: true },
    watch: false,
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "./temp/**",
      "**/*/*.spec.tsx",
    ],
    coverage: {
      provider: "v8",
    },
  },
});
