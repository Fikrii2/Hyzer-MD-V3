let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/husbu?apikey=APIKEYKU`)).buffer(), 'Nih kak', watermark, 'NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
handler.register = false

handler.limit = true

module.exports = handler
