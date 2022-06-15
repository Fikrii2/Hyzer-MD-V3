let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  res = await fetch(`https://api-reysekha.herokuapp.com/api/nsfw/ass?apikey=APIKEY`)
  heum = await res.buffer()
  conn.sendButtonImg(m.chat, heum, 'wangy wangy wangy', watermark, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['ass']
handler.tags = ['nsfw']

handler.command = /^(ass)$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

