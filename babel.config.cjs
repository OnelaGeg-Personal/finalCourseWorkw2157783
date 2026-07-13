// Jest (unlike Vite) doesn't understand ES module import/export or JSX
// natively, so babel-jest transpiles each test/source file through these
// presets before Jest runs it.
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
