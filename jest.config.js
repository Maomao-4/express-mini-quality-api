/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',

  // No usamos Babel/TS, puro JS común
  transform: {},

  collectCoverageFrom: ['src/**/*.js'],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 70,
      lines: 80,
      statements: 80,
    },
  },
};
