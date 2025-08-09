import type { NextConfig } from "next";

// Also set env var so any Sass runner (including Turbopack) silences these deprecations
process.env.SASS_SILENCE_DEPRECATIONS = "import,global-builtin,legacy-js-api";

const nextConfig: NextConfig = {
  // Improve file watching on Windows / network drives so SCSS changes are picked up
  // webpackDevMiddleware: (config: any) => {
  //   config.watchOptions = {
  //     // re-check for changes more frequently
  //     poll: 1000,
  //     // aggregate changes to avoid rebuild storms
  //     aggregateTimeout: 300,
  //     // necessary on some FS setups
  //     ignored: /node_modules/,
  //   } as unknown;
  //   return config;
  // },
  sassOptions: {
    // Silence @import and global built-in deprecations to remove console noise
    silenceDeprecations: ["import", "global-builtin", "legacy-js-api"],
    // Don’t surface deprecations from dependencies
    quietDeps: true,
  },
};

export default nextConfig;
