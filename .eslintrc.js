module.exports = {
    root: true,
    extends: '@react-native',
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-tabs': 'off', // Disable ESLint's no-tabs rule to allow tabs
    },
};
