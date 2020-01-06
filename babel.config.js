const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "12",
                firefox: "52",
                chrome: "48",
                safari: "8",
            },
            useBuiltIns: false,
        },
    ],
];

module.exports = {
    presets
};