import { getBaseRollupPlugins } from '@common-web/rollup';
 
const plugins = getBaseRollupPlugins({
    eslint: {
        disabled: true
    }
}).concat([
    // Include your own plugins to support other features 
]);
 
export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.es.js',
            format: 'esm'
        },
    ],
    plugins
}
 
