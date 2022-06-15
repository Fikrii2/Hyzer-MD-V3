let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/ccc3652207ba212c1bbe2.png', m, { packname: "sticker by", author: "Elyas" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
