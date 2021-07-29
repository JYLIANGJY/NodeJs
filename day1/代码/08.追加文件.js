// 1. 导入 fs 文件操作模块
const fs = require('fs')

// 2. 调用 fs.appendFile 追加文件内容
// 参数1： 表示要向哪个文件中追加内容，指定一个文件的路径
// 参数2： 表示要追加的具体的内容，可以传递字符串内容
// 参数3： 可选参数；表示 追加文本内容时候的编码格式，如果省略此参数，默认以 utf8 的格式追加内容
// 参数4： 表示 追加完成之后的回调
//         有形参 err ,追加失败之后的错误结果
fs.appendFile('./files/3.txt', '\n333', (err) => {
  if (err) return console.log('追加文件失败！' + err.message)
  console.log('追加文件成功！')
})

// 如果要追加的文件路径不存在，则会先尝试创建这个文件，然后再向创建的文件中，追加具体的内容；