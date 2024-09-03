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
      // "~": path.resolve(__dirname, "node_modules/imaccount-sdk"),
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
    return config;
  },
};

export default nextConfig;
