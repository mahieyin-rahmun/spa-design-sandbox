module.exports = {
  reactStrictMode: false, // causes issues with createMuiTheme
  webpack: function (config, options) {
    config.experiments = { topLevelAwait: true };
    return config;
  },
};
