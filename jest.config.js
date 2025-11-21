export default {
  testEnvironment: "node",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.js", "!src/__tests__/**", "!src/index.js"],
  transform: {},
  testMatch: ["**/__tests__/**/*.test.js"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
