let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/riri?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.vietnam', m)
}
handler.help = ['riri']
handler.tags = ['asupan']
handler.command = /^(vietnam)$/i

module.exports = handler
