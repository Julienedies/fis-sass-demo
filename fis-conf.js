
var path = require('path');

fis.config.set('modules.parser.scss', 'sass'); //启用fis-parser-sass插件当处理文件后缀是`.scss`。
fis.config.set('roadmap.ext.scss', 'css'); //`.scss`的文件最后编译产出成`.css`文件。

//给插件fis-parser-sass配置信息
fis.config.set('settings.parser.sass', {
    'include_paths': [__dirname, path.join(__dirname, 'static', 'bootstrap', 'stylesheets')]
});

//部署配置
fis.config.set('roadmap.path', [

    //以_开头的文件，不发布
    {
        reg: /.*\/_\w+\.(?:scss)/i,
        release:false
    }
]);