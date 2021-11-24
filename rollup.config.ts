import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
const scss = require('rollup-plugin-scss');
const dartSass = require('sass');
import { terser } from "rollup-plugin-terser"

export default {
    input: 'src/lib/index.ts',
    output: [{
        globals: {
            vue: 'Vue'
        },
        name: 'Gulu',
        file: 'dist/lib/gulu.js',
        format: 'umd',
        plugins: [terser()]
    }, {
        name: 'Gulu',
        file: 'dist/lib/gulu.esm.js',
        format: 'es',
        plugins: [terser()]
    }],
    plugins: [
        scss({ include: /\.scss$/, sass: dartSass }),
        esbuild({
            include: /\.[jt]s$/,
            minify: process.env.NODE_ENV === 'production',
            target: 'es2015'
        }),
        vue({
            include: /\.vue$/,
        })
    ],
}