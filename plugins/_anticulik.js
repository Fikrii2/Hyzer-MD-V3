let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `╭═══ *〘 PAKET SEWA 〙*
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

Jika berminat hubungi: @${global.owner[0]} untuk order:)
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler
