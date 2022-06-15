import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	let url = cosplay[Math.floor(Math.random() * cosplay.length)]
	conn.sendButton(m.chat, 'Uwwu>\\<', wm, url, [['Next','.cosplay']],m)
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^(cosplay)$/i
module.exports = handler

global.cosplay = [
  "https://telegra.ph/file/15c418d41bc6cf2134dce.jpg",
  "https://telegra.ph/file/1e4c30083d825f955272a.jpg",
  "https://telegra.ph/file/48829ed54dd8d92495552.jpg",
  "https://telegra.ph/file/4a69324d01ae97990682c.jpg"
  ]
