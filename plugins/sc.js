let fs = require('fs')
let handler = async (m) => {
let menu = fs.readFileSync('./mp3/PTT-20220624-WA0070.opus')
conn.sendFile(m.chat, menu, '', '', m, true)
}

handler.customPrefix = /^(.sc)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
