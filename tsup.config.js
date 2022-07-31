import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/lava.ts',
    'src/lavacharts.ts'
  ],
  splitting: false,
  sourcemap: true,
  clean: true,
  esbuildOptions(options) {
    options.outdir = "lib"
  },
})
