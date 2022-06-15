let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
hyzer = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*Sama-Sama*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/20509b31b6e05ff999daa.jpg',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/9eef059717e2a3a97c5ce.png', hyzer, { packname: "sticker by", author: "hyzer" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq)$/i
handler.command = new RegExp

module.exports = handler
