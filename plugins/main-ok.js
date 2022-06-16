let handler = async (m, { conn, text, usedPrefix, command }) => {
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

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/a39e85e24bae915e93bb5.png', m, { packname: "sticker by", author: "Elyas" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
