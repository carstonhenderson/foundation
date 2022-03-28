const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
            screens: {
                'mobile': { 'max': defaultTheme.screens.md }
            }
        }
	}
}
