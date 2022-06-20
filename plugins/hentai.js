let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
   heum = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=Fiktod`)
   if (!heum) throw json
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '🥵🥵🥵', '©𝑴𝒊𝒌𝒖', 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']

handler.command = /^(hentai)$/i
handler.limit = true

module.exports = handler
