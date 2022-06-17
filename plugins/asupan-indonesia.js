let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zeeoneofc.xyz/api/asupan/chika?apikey=i53VliLP'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.indonesia', m)
}
handler.help = ['chika']
handler.tags = ['asupan']
handler.command = /^(chika)$/i

module.exports = handler
