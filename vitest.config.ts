import { defineConfig } from "vitest/config";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [qwikVite(), tsconfigPaths()],
    test: {
      globals: true,
      environment: "jsdom",
      include: ["src/**/*.{spec,test}.{ts,tsx}"],
    },
  };
});
