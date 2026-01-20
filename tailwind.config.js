export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx,css}",
    ],
    theme: {
      extend: {
        colors: {
          ink: "#0B0B0B",
          slate: "#6B7280",
          fog: "#F3F4F6",
          steel: "#111827",
          line: "#E5E7EB",
        },
        fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  