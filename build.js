import esbuild from 'esbuild';

esbuild.build({
    bundle: true,
    entryPoints: ['src/main.ts'],
    outdir: 'dist',
    platform: 'node',
    format: 'esm',
    banner: {
        js: 'import { createRequire } from \'module\';const require = createRequire(import.meta.url);'
    }
});