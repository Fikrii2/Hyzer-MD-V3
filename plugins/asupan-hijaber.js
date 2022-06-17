let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/mama_gina?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.hijaber', m)
}
handler.help = ['mamagina']
handler.tags = ['asupan']
handler.command = /^(mamagina)$/i

module.exports = handler
