module.exports = {
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1290px",
		},
		fontFamily: {
			heading: ["CL", "sans-serif"],
			body: ["Raleway", "sans-serif"],
			hand: ["League", "sans-serif"],
		},
		extend: {
			colors: {
				black: "#0D0D0C",
				white: "#FFFFFF",
				darkwhite: "#F6F5F1",
				lightgrey: "#E9E8E3",
				fakewhite: "#f5f5f5",
				pink: "#e6d1d8",
				lightblack: "#5C4B51",
				important: "#4A9690",
			},
			spacing: {
				"75vh": "75vh",
				"50vh": "50vh",
				"25vh": "25vh",
				"20vh": "20vh",

				"25vw": "25vw",
				"35vw": "35vw",

				"50px": "50px",
				"100px": "100px",
				"400px": "400px",
			},
		},
	},
	variants: {
		borderWidth: ["responsive", "odd"],
		opacity: ["responsive", "hover", "focus", "active", "group-hover"],
	},
	plugins: [],
};
