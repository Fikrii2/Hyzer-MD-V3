let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/geayubi?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.jepang', m)
}
handler.help = ['geayubi']
handler.tags = ['asupan']
handler.command = /^(geayubi)$/i

module.exports = handler

