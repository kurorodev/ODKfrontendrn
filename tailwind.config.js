/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content:["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
            blue_dark: {
              DEFAULT: (6, 50, 95),
              80: (53, 90, 126),
              60: (105, 131, 158),
              40: (155, 172, 190),
              20: (206, 213, 221)
            },
            blue: {
              DEFAULT: (127, 154, 183),
              80: (152, 174, 197),
              60: (178, 194, 211),
              40: (203, 214, 225),
              20: (229, 234, 240)
            },
            antracit: {
              DEFAULT: (66, 66, 77),
              80: (104, 104, 112),
              60: (141, 141, 148),
              40: (179, 179, 184),
              20: (216, 217, 219)
            },
            gray: {
              DEFAULT: (128, 128, 128),
              80: (152, 152, 153),
              60: (177, 178, 179),
              40: (204, 204, 204),
              20: (229, 229, 229)
            },
            alum: {
              DEFAULT: (230, 230, 235),
              50: (242, 242, 245)
            },
          },
          fontFamily: {
            Montserrat: ["Montserrat", "sans-serif"]
          }
      },
    },
    plugins: [],
  }