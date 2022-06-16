let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/a39e85e24bae915e93bb5.png', m, { packname: "sticker by", author: "Elyas" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
