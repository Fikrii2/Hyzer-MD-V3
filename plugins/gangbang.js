let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.zeeoneofc.xyz/api/nsfw/gangbang?apikey=i53VliLP`
  conn.sendFile(m.chat, res, 'gangbang.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['gangbang'].map(v => v + ' ')
handler.tags = ['nsfw']

handler.command = /^(gangbang)$/i
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


