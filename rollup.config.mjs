// rollup.config.mjs
export default {
    input: "src/UkatonKit.js",
    output: {
        file: "build/UkatonKit.min.js",
        format: "umd",
        name: "UkatonKit",
    },
};
