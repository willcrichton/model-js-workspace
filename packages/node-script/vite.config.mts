import { resolve } from "path";
import { defineConfig } from "vite";
import { builtinModules } from 'module';

export default defineConfig({
    build: {
        target: "node16",
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            fileName: "main",
            formats: ["cjs"],
        },
        rollupOptions: {
            external: builtinModules
        },
        minify: false,
    },
});
