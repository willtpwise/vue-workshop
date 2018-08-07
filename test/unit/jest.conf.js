const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  testURL: 'http://localhost',
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: [],
  setupFiles: ['<rootDir>/test/unit/setup.js'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}',
    '!src/main.js',
    '!**/node_modules/**'
  ]
}
