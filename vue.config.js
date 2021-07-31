//api 接口
const url = 'http://secondkill-zuul:8000/api'
module.exports = {
    // 配置转发代理
    devServer: {
      proxy: {
        '/': {
          target: url,
          ws: true,
          pathRewrite: {
            '^/': '/'
          }
        }
      }
    }
  }
  