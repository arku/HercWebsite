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
  }
}
