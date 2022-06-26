let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/sagiri?apikey=APIKEYKU', '', '', m)
}
handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^(sagiri)$/i

module.exports = handler
