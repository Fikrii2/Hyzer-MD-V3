let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/bocil?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.bocil', m)
}
handler.help = ['bocil']
handler.tags = ['asupan']
handler.command = /^(bocil)$/i

module.exports = handler
