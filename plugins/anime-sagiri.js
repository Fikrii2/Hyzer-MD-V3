let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/anime/sagiri?apikey=i53VliLP', '', '', m)
}
handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^(sagiri)$/i

module.exports = handler
