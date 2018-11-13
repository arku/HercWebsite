module.exports = {
  pluginOptions: {
    s3Deploy: {
      assetPath: 'dist',
      bucket: 'www.herc.one',
      region: 'us-east-2',
      pwa: false,
      enableCloudfront: true,
      cloudfrontId: 'EXLWYOT38MF3W',
      cloudfrontMatchers: '/*',
      uploadConcurrency: 5,
      deployPath: '/'
    }
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/variables.scss";`
      }
    }
  }
}
