module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/electron-update-test/' : '/',
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
          publish: {
              provider: "github",
              owner: "syouta-sasaki-test",
              repo: "electron-update-test",
              token: "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",
              releaseType: "draft"
          }
      }
    }
  }
}