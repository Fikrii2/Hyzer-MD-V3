let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Update Terakhir')).buffer(), `
Catatan Perubahan :
`.trim(), 'Senin, 16 Mei 2022 : V. 4.05\n\n◇ Penambahan Fitur : Catatan Perubahan\n\n◇ ANIME\n\n◇ NSFW\n\n◇ SOUND\n\n◇ Cosplay\n\n◇ VN IMUET\n\n◇ Update Tampilan\n\n◇ Perbaiki Berapa Bug Seperti Wm TEXT PRO, Untuk Marker Menu Sebagian Ada Yang Emrror \n\n◇ Total Fitur saat ini: 315\n\n© 𝑴𝒊𝒌𝒖', 'Ok Miku', 'huuu')
handler.help = ['note']
handler.tags = ['info']
handler.command = /^(catatanperubahan|perubahan|notes)$/i

module.exports = handler
