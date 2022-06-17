let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/ziva?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.korea', m)
}
handler.help = ['ziva']
handler.tags = ['asupan']
handler.command = /^(ziva)$/i

module.exports = handler

