// import webpack from "webpack";
// import { buildWebpackConfig } from "./config/buildWebpackConfig";
// import { BuildPaths } from "./config/types/config";
// import path from "path";

// const config: webpack.Configuration = {
//     mode: 'production',
//     entry: path.resolve(__dirname, 'src', 'index.tsx'),
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: '[name].[contenthash].js',
//         clean: true
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, 'public', 'index.html')
//         }),
//         new webpack.ProgressPlugin()
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js']
//     },
//     devtool: 'inline-source-map',
//     devServer: {
//         port: 3000
//     }
// }
// export default config;
import webpack from "webpack";
import { buildWebpackConfig } from "./config/buildWebpackConfig";
import { BuildPaths } from "./config/types/config";
import path from "path";
const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};
const mode = "development";
const isDev = mode === "development";
const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});
export default config;