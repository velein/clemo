module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '~components/(.*)': '<rootDir>/src/components/$1',
        '~styled/(.*)': '<rootDir>/src/styled/$1',
        '~layouts/(.*)': '<rootDir>/src/layouts/$1',
    },
}
