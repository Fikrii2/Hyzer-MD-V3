let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await fetch(API('3ujO3gPF', '/nsfwgangbang', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    conn.sendButtonImg(m.chat, json.url, 'Tobat banh', wm, 'lagi', `${usedPrefix + command}`, m)
}
handler.help = ['gangbang']
handler.tags = ['nsfw']
handler.command = /^(gangbang)$/i
handler.premium = true

module.exports = handler
