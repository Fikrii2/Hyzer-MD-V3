let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Update Terakhir')).buffer(), `
Catatan Perubahan :
`.trim(), 'Kamis, 17 Juni 2022 : V. 2.05\n\n◇ Penambahan Fitur : Catatan Perubahan\n\n◇ Anime \n\n◇ Sound\n\n◇ Nsfw\n\n◇ Update Tampilan\n\n◇ Perbaiki Berapa Bug Seperti Download Anime, Untuk Gif Masih Emrror \n\n◇ Total Fitur saat ini: ${totalf}:\n\n© .Fikriixyz', 'Ok Miku', 'Ok')
handler.help = ['note']
handler.tags = ['info']
handler.command = /^(catatanperubahan|perubahan|notes)$/i

module.exports = handler
