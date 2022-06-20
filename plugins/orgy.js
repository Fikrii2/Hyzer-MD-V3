let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api-reysekha.herokuapp.com/api/nsfw/orgy?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'orgy.jpg', `wangy wangy wangy`, watermark, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['orgy'].map(v => v + ' ')
handler.tags = ['nsfw']

handler.command = /^(orgy)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

