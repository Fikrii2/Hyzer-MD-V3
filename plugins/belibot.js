let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ *〘 PAKET SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _5k/grup (1 minggu)_
║┊ ⌲ Sewa = _15k/grup (1 bulan)_
║┊ ⌲ Sewa = _20k/grup (2 bulan)_
║┊ ⌲ Sewa = _35k/grup (Permanent)_ 
╰═ ┅ ═══════
╭═══ *〘 PAKET PREMIUM 〙*
║ ┅ ๑————————————๑
║┊ ⌲ _5k (Premium 1 Minggu)_
║┊ ⌲ _10k (Premium 1 Bulan)_
║┊ ⌲  _25k (Permanent Premium)_
╰═ ┅ ═══════

╭═══ *〘 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 〙*
║ ┅ ๑————————————๑
║┊ ⌲ *DANA* : 081233738677 (diutamakan)
║┊ ⌲ *GOPAY* : 081233738677
╰═ ┅ ═══════

*[❗]  Jangan Spam Bot*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/KpS9eHNALBs3mXXJGtzuZE_

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '#owner', 'Menu', '#menu', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler
