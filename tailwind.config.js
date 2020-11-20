module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.html']
  },
  theme: {
    extend: {
      colors: {
        aqua: {
          normal: '#77D5AF',
          dark: '#6BC29F'
        },
        cornflower: {
          normal: '#5DA9E9'
        },
        dark: {
          light: '#43474D',
          normal: '#2C2F33',
          dark: '#23272A'
        }
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: [],
}
