let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/aura?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.china', m)
}
handler.help = ['aura']
handler.tags = ['asupan']
handler.command = /^(china)$/i

module.exports = handler
