import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'src/comic.ts',
        output: {
            file: 'dest/comic.js',
            format: 'esm'
        },
        plugins: [commonjs(), nodeResolve({ browser: true }), typescript(), terser()],
    },
    {
        input: 'src/script.ts',
        output: {
            file: 'dest/script.js',
            format: 'esm'
        },
        plugins: [commonjs(), nodeResolve({ browser: true }), typescript(), terser()],
    }
];
