module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
    },
    transformIgnorePatterns: [
        "node_modules/(?!variables/.*)"
    ],
    moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node', 'ts', 'tsx'],
    roots: [
        "<rootDir>/src"
    ],
    globals: {
        'ts-jest': {
            diagnostics: {
            warnOnly: true,
            },
        }
    }
}