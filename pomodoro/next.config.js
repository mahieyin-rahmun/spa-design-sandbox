module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.wav$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            context: '',
            outputPath: 'static',
            publicPath: '_next/static',
            name: '[path][name].[hash].[ext]',
          },
        }
      ]
    })

    return config
  },
}