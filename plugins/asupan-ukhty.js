let handler = async(m,{text, conn}) => {
let supa = 'https://api.zeeoneofc.xyz/api/asupan/ukhty?apikey=i53VliLP'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['ukhty']
handler.tags = ['asupan']
handler.command = /^(ukhty)$/i

module.exports = handler
