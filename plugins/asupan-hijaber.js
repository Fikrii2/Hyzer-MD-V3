let handler = async (m, { conn }) => {
 m.reply('Sedang Diproses...')
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/geayubi?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.hijaber', m)
}
handler.help = ['hijaber']
handler.tags = ['asupan']
handler.command = /^(hijaber)$/i

module.exports = handler
