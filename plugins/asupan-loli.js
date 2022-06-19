let handler = async(m,{text, conn}) => {
let supa = 'https://caliphapi.com/api/asupan/loli?apikey=sNPZp39j'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['asupanloli']
handler.tags = ['asupan']
handler.command = /^(asupanloli)$/i

module.exports = handler
