import type { Config } from 'jest'

export default async function (): Promise<Config> {
  return {
    clearMocks: true,
    coverageProvider: 'v8',
    setupFilesAfterEnv: ['<rootDir>/src/test/setup-tests.ts'],
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/file-mock.ts',
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.(js|jsx)$': '@swc/jest',
      '^.+\\.(ts|tsx)?$': ['ts-jest', { isolatedModules: true }],
    },
    verbose: true,
  }
}
