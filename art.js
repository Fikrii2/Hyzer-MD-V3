let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/art?apikey=Fiktod`)).buffer(), 'Nih kak', watermark, 'NEXT', `.${command}`, m)

}

handler.help = ['art']
handler.tags = ['anime']
handler.command = /^(art)$/i

module.exports = handler
