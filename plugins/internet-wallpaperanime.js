let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/anime?apikey=apirey`)).buffer(), 'Dasar Wibu', watermark, 'NEXT', `.${command}`, m)

}

handler.help = ['wallnime']
handler.tags = ['anime']
handler.command = /^(wallnime)$/i
handler.register = false

handler.limit = true

module.exports = handler
