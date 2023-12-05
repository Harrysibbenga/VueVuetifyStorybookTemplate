module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['js', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    // If you have a setup file, specify it here
    // setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  };