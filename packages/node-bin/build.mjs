import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/main.ts"],
  platform: "node",
  outdir: "dist",
  format: "cjs",
  bundle: true,
})