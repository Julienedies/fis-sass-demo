# fis-sass-demo

 临时测试用，  
 [https://github.com/fex-team/fis-parser-node-sass/issues/5#issuecomment-155977436](https://github.com/fex-team/fis-parser-node-sass/issues/5#issuecomment-155977436)
 
 没有透彻理解以下配置：
 ```javascript
  // file: fis-conf.js
fis.config.set('project.exclude', '**/_*.scss'); // [1]

//给插件fis-parser-sass配置信息
fis.config.set('settings.parser.sass', {
    'include_paths': [__dirname, path.join(__dirname, 'static', 'bootstrap', 'stylesheets')] //[2]
});
 ```
 解释：
[1]，_开头的这些文件，可以认为是定义的sass组件，会被sass最终编译内嵌到其他文件中
[2]，这句告诉sass这个插件，遇到@import时，去什么目录查找文件。
 
 参考：
 [http://www.orrafy.com/posts/fisbook/use-bootstrap-scss-in-fis/](http://www.orrafy.com/posts/fisbook/use-bootstrap-scss-in-fis/)
 
 
 

