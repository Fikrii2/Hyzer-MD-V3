let fs = require('fs')
let handler = async (m) => {
let huaaa = fs.readFileSync('./mp3/PTT-20220627-WA0030.opus')
conn.sendFile(m.chat, gamao, '', '', m, true)
}

handler.customPrefix = /^(maugak|mau|gakmau|mauu|gakkmauu|gkmau|gkmw)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler
