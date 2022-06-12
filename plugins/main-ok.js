let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/6adc255ce2cf6d36ace72.png', m, { packname: "sticker by", author: "Elyas" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
