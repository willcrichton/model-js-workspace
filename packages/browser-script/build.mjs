import esbuild from "esbuild";

esbuild.build({
    entryPoints: ["src/lib.ts"],
    outdir: "dist",
    platform: "browser",
    format: "iife",
    bundle: true,
});
