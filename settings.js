//I am Lenz Do you want buy My script No Enecrypt Can you contact me at Instagram @vlntncptr
//if you got eror at code Can yiu contact Me at instagram @vlntncptr
const fs = require('fs')
const chalk = require('chalk')
global.autoTyping = false//mati //true idup
global.autoRecord = false 
global.packname = "hi"//
global.author = "Jack WA\n\n\nMenerima Jasa pembuatan Sticker Gratis\n\n\n\n\n\n\n\nNih Nomor Bot : 6285262317166" //ur sticker watermark author
global.namamuu = "Jack"
global.aliasmu = "Jack"
global.wm = "Jack AI" 
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Nih Kak Hehehe ><',
    wait: '⋘ 𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑑𝑎𝑡𝑎... ⋙',
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
