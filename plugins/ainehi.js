let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let hallo = fs.readFileSync('./mp3/AUD-20220630-WA0317.') 
conn.sendFile(m.chat, hallo, '', '', m, true)
//conn.sendMessage(m.chat, helloaine, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
// await conn.sendMessage(m.chat, { audio: { url: helloaine }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(hy|Hi|hi|hii|hiii|hi bot|tes|tes|hy|halo|hallo|helo|hello|hy aine|halo aine|hallo aine|helo aine|hello aine)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
