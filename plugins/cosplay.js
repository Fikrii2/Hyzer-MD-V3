let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'WIBU', '© 𝑴𝒊𝒌𝒖', 'Next', `${usedPrefix + command}`, m, false)
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^cosplay$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = true

handler.fail = null

module.exports = handler
