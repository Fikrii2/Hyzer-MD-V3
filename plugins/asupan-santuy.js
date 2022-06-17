let handler = async(m,{text, conn}) => {
let supa = 'https://api.zeeoneofc.xyz/api/asupan/santuy?apikey=i53VliLP'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['santuy']
handler.tags = ['asupan']
handler.command = /^(santuy)$/i

module.exports = handler
