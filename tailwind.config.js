/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
    fontFamily: {
      poppins: ['Poppins_400Regular'],
      poppinsBold: ['Poppins_600SemiBold'],
    },
		colors: {
			primary: {
				0: '#F1F9EC',
				10: '#D5ECC7',
				20: '#B9DFA2',
				30: '#9CD27C',
				40: '#80C557',
				50: '#E23E3E',
				60: '#67AC3D',
				70: '#5B9936',
				80: '#508630',
				90: '#447329',
				100: '#396022',
			},
			secondary: {
				0: '#FFF5E6',
				10: '#FFE1B3',
				20: '#FFCE80',
				30: '#FFBA4D',
				40: '#FFA61A',
				50: '#FF9C00',
				60: '#E68C00',
				70: '#CC7D00',
				80: '#B36D00',
				90: '#995E00',
				100: '#804E00',
			},
			neutral: {
				10: '#F1F1F1',
				20: '#D9D9D9',
				30: '#C1C1C1',
				40: '#A9A9A9',
				50: '#919191',
				60: '#797979',
				70: '#606060',
				80: '#484848',
				90: '#303030',
				100: '#181818',
			},
			rating: {
				100: '#FFB661',
			},
			error: {
				10: '#995E00',
				100: '#804E00',
			},
			success: {
				10: '#EAF7EE',
				100: '#31B057',
			},
			white: '#ffffff'
		},
		extend: {
      
    },
	},
	plugins: [],
}
