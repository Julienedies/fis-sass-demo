
var path = require('path');

fis.config.set('modules.parser.scss', 'sass');
fis.config.set('roadmap.ext.scss', 'css');

//给插件fis-parser-sass配置信息
fis.config.set('settings.parser.sass', {
    'include_paths': [__dirname, path.join(__dirname, 'static', 'extend', 'ionic')]
});

//部署配置
fis.config.set('roadmap.path', [
    //以_开头的文件，不发布
    {
        reg: /.*\/_\w+\.(?:scss)/i,
        release:false
    }
]);