let fs = require('fs')
let handler = async (m) => {
let menu = fs.readFileSync('./mp3/PTT-20220626-WA0491.opus')
conn.sendFile(m.chat, menu, '', '', m, true)
}

handler.customPrefix = /^(AYANG|ayang|AYANGG|ayangg)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
