let fs = require('fs')
let handler = async (m, { conn }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
	let stc = fs.readFileSync('./src/sukses.webp')
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m)
}
handler.help = ['bkp']
handler.tags = ['premium']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = false
handler.limit = true
module.exports = handler
