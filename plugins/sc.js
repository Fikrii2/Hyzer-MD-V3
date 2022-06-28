let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./mp3/PTT-20220624-WA0070.opus')
conn.sendFile(m.chat, sc, '', '', m, true)
}
handler.customPrefix = /sc|sourcecode|.sc|.sourcecode|script|.script/i
handler.command = new RegExp

module.exports = handler

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
