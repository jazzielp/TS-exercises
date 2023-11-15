module.exports = {
  // Indica a Jest que use el sistema de módulos ES6
  moduleFileExtensions: ["js"],
  // Indica a Jest que transforme el código usando Babel
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
