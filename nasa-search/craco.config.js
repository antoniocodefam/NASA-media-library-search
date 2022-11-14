const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@c": path.resolve(__dirname, "src/components"),
      "@cfg": path.resolve(__dirname, "src/config"),
      "@i": path.resolve(__dirname, "src/interfaces"),
      "@p": path.resolve(__dirname, "src/pages"),
      "@a": path.resolve(__dirname, "src/api"),
      "@a/i": path.resolve(__dirname, "src/api/interfaces"),
    },
  },
};
