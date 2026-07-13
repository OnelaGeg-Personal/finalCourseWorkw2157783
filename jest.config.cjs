/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  // Components/tests import plain .css files, which Jest can't parse directly.
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  testMatch: ["<rootDir>/src/tests/**/*.test.js"],
};
