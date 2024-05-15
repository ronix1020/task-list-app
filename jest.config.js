module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-native-elements|react-native-safe-area-context|@react-navigation|react-redux/*)',
  ],
  setupFilesAfterEnv: ['./jest-setup.ts'],
};