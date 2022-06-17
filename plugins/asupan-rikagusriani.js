let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/rikagusriani?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.malaysia', m)
}
handler.help = ['rikagusriani']
handler.tags = ['asupan']
handler.command = /^(rikagusriani)$/i

module.exports = handler
