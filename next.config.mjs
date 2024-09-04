import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "imaccount-sdk": path.resolve(__dirname, "node_modules/imaccount-sdk"),
      "~packages": path.resolve(
        __dirname,
        "node_modules/imaccount-sdk/packages"
      ),
      "~typing": path.resolve(__dirname, "node_modules/imaccount-sdk/typing"),
    };
    config.module.rules.push({
      test: /\.(ts)x?$/,
      use: [
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            onlyCompileBundledFiles: true,
            configFile: "tsconfig.json",
          },
        },
      ],
    });

    // Treat node-fetch as CommonJS
    config.module.rules.push({
      test: /node_modules\/node-fetch\/.*\.js/,
      type: "javascript/auto",
    });

    // Force node-fetch to use CommonJS version
    config.resolve.alias["node-fetch"] = "node-fetch/lib/index.js";

    return config;
  },
};

export default nextConfig;
