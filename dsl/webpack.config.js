const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const DashboardPlugin = require("@module-federation/dashboard-plugin");

const deps = require("./package.json").dependencies;
[
  "express"
].forEach((i)=>{delete deps.i})


module.exports = {
  output: {
    publicPath: "http://localhost:8081/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "dsl",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Button": "./src/components/Button",
        "./ButtonFallback": "./src/components/ButtonFallback"
      },
      shared: [ // libs shared
        "styled-components",
        {   
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      ]
    }),
    new DashboardPlugin ({
      publishVersion: require("./package.json").version,
      dashboardURL:"https://federation-dashboard-alpha.vercel.app/api/update?token=0c0f0c59-64db-40d7-a664-87fadc7a71ae",
      name: "dsl-app",
      metadata: {
        remote: "http://localhost:3001/remoteEntry.js"
      }
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    
  ],
};
