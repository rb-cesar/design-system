import type { Config } from 'jest'

export default async function (): Promise<Config> {
  return {
    clearMocks: true,
    coverageProvider: 'v8',
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/src/test/setup-tests.ts'],
    testEnvironment: 'jest-environment-jsdom',
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.(js|jsx)$': '@swc/jest',
      '^.+\\.(ts|tsx)?$': ['ts-jest', { isolatedModules: true }],
    },
  }
}
