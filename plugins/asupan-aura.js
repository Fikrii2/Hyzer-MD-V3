let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/aura?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.aura', m)
}
handler.help = ['aura']
handler.tags = ['asupan']
handler.command = /^(aura)$/i

module.exports = handler
