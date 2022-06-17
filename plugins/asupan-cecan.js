let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/viona?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.cecan', m)
}
handler.help = ['viona']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i

module.exports = handler
