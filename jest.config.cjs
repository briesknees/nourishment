/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports= {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$':
      '<rootDir>/src/client/__mocks__/fileMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/src/client/__mocks__/setupTest.ts'],
  "verbose": true
};