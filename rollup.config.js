const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify-es');
const minify = require('uglify-es').minify;
const jsx = require('rollup-plugin-jsx');

export default {
    entry: 'src/index.js',
    format: 'umd',
    external: [
        // add external packages here
        // e.g. 'rxjs/Observable'
        'ramda',
    ],
    dest: 'dist/index.js',
    sourceMap: true,
    moduleId: 'lensify',
    moduleName: 'lensify',
    globals: {
        // add external packages as globals here
        // e.g. 'rxjs/Observable': 'rxjs_Observable'
        'ramda': 'ramda',
    },
    plugins: [
        babel({
            babelrc: false,
            presets: ['es2015-rollup'],
            plugins: ['transform-object-rest-spread', 'external-helpers'],
            exclude: 'node_modules/**'
        }),
        uglify({}, minify)
    ]
};
