这是于2016年 11月 01日 星期二 16:17:21 CST 生成的文件。
下午闲来无事就做了这个，遗憾的是这个项目用到的key是有次数限制的，还剩60次。
不过可以用来练练手。
使用npm link 即可实现在任意目录下都能使用joke命令。
要先在`package.json`文件中加上，然后npm link即可。

    "bin": {
      "joke": "./index.js"
    },

如果需要清除`npm link`的结果，

    sudo npm rm --global jokeapp即可
    sudo npm ls --global jokeapp可搜索


每次获取20条数据，有需要的话可以去他的官网去看一下`https://www.juhe.cn/`

使用了`commander、request、repl`模块。
