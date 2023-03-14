module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: [
    "<rootDir>/__tests__"
  ],
  testEnvironment: "node",
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  preset: 'ts-jest',
  moduleNameMapper: {
    "@exmpl/(.*)": "<rootDir>/src/$1"
  },
  // testPathIgnorePatterns: ['node_modules', 'src/**'],
};