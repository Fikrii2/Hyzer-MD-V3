let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 SEWA BOT 〕 ════
├⬡ 1 ᗰIᑎᘜᘜᑌ
├⬡ 1 ᗷᑌᒪᗩᑎ
├⬡ Permanent
└═══════════════
𝗦𝗶𝗹𝗮𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝑷𝑨𝒀𝑴𝑬𝑵𝑻 〕 ❉──────
║│➸ *Digi* : 081233738677
║│➸ *Umobile*: 081233738666
║│➸ *Owner*: wa.me/6281233738677
║╰─────────────────────
╰═══════════════════════`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 Minggu', description: "Rp 5.000\nSewa Bot 1 Minggu.", rowId:".masuk"},
        {title: '1 Bulan', description: "Rp 10.000\nSewa Bot 1 Bulan.", rowId:".masuk"},
        {title: 'Permanen', description: "Rp 20.000\nSewa Bot Permanen.", rowld:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Rules Bot 𝑴𝒊𝒌𝒖.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
