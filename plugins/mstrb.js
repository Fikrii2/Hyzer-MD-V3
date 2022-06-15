let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api-reysekha.herokuapp.com/api/nsfw/masturbation?apikey=APIKEY`
    heum = await res.buffer()
  conn.sendButtonImg(m.chat, heum, 'wangy wangy wangy', watermark, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['mstrb'].map(v => v + ' ')
handler.tags = ['nsfw']

handler.command = /^(mstrb)$/i
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

