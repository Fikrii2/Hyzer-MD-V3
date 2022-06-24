/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lagi Nyari Sc Ya? 
╭═[ *SCRIPT* ]═────···
┴
│ *Script :* Hyzer
│ ╰ https://github.com/Hyzerr/Hyzer-MD-V3
│ *Recode :* Fikrii
│ ╰🔒 Private
┬
╰──────────═┅═──────────
[❗] Jangan diperjual belikan tanpa seizin owner`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'ok', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
