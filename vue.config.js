//配置webpack
//接口代理

module.exports = { 
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',
                //发送请求头中的host会设置成target
                changeOrigin:true,
                //转发地址
                pathRewrite:{
                    //在url中删除字符串 ‘/api’
                    '/api':''
                }
            }
        }
    },
    productionSourceMap:false,
    chainWebpack:(config)=>{
        config.plugins.delete('prefetch');
    }
}