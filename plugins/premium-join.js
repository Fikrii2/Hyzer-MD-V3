let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    m.reply(`Berhasil join grup`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['owner']

handler.command = /^join$/i


module.exports = handler
