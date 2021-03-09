const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      library: { type: "var", name: "container" },
      filename: "remoteEntry.js",
      remotes: {
        profile: "profile",
      },
      shared: {
        ...dependencies,
        "react-dom": {
          eager: true,
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
        react: {
          eager: true,
          requiredVersion: dependencies["react"],
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
