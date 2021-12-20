module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(js|jsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist'],
  collectCoverage: true,
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|less|scss|otf)$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
};
