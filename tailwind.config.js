module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed-variant": "#554500",
        "primary-fixed-dim": "#00dbe7",
        "on-secondary-fixed": "#2c0051",
        "inverse-on-surface": "#313030",
        "surface-tint": "#00dbe7",
        "inverse-surface": "#e5e2e1",
        "inverse-primary": "#00696f",
        "surface-container-low": "#1c1b1b",
        "tertiary-fixed-dim": "#e8c423",
        "tertiary-fixed": "#ffe173",
        "surface-container-highest": "#353534",
        "background": "#0B0010",
        "on-tertiary-container": "#725e00",
        "on-secondary-container": "#d6a9ff",
        "tertiary": "#fff6e4",
        "on-surface-variant": "#b9cacb",
        "primary": "#e1fdff",
        "surface-container-lowest": "#0e0e0e",
        "outline": "#849495",
        "on-primary-container": "#006a71",
        "surface": "#0B0010",
        "on-background": "#e5e2e1",
        "secondary": "#A25BFF",
        "secondary-container": "#6f00be",
        "on-secondary": "#490080",
        "primary-container": "#00f2ff",
        "surface-container": "#201f1f",
        "primary-fixed": "#74f5ff",
        "on-tertiary-fixed": "#221b00",
        "on-tertiary": "#3b2f00",
        "on-primary-fixed": "#002022",
        "on-primary-fixed-variant": "#004f54",
        "error-container": "#93000a",
        "surface-variant": "#353534",
        "on-error": "#690005",
        "secondary-fixed-dim": "#ddb7ff",
        "outline-variant": "#3a494b",
        "on-error-container": "#ffdad6",
        "surface-dim": "#0B0010",
        "on-surface": "#EBEAED",
        "tertiary-container": "#fed83a",
        "surface-container-high": "#2a2a2a",
        "surface-bright": "#3a3939",
        "on-primary": "#00363a",
        "secondary-fixed": "#f0dbff",
        "error": "#ffb4ab",
        "on-secondary-fixed-variant": "#6900b3",
        "disueno-purple": "#A25BFF",
        "disueno-cyan": "#00F0FF"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        unit: "8px",
        gutter: "32px",
        marginDesktop: "80px",
        marginMobile: "24px",
        containerMax: "1440px"
      },
      fontFamily: {
        headline: ["Hanken Grotesk", "sans-serif"],
        body: ["Geist", "sans-serif"],
        accent: ["Space Grotesk", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "display-lg": ["80px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "label-sm": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  }
}