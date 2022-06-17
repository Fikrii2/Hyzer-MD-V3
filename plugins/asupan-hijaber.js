let handler = async (m, { conn }) => {
 m.reply('Sedang Diproses...')
let api = 'https://api.zeeoneofc.xyz/api/asupan/geayubi?apikey=i53VliLP'
conn.sendFile(m.chat, api, null, 'Nih', m)
handler.help = ['hijaber']
handler.tags = ['asupan']
handler.command = /^(hijaber)$/i

module.exports = handler
