import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
    let info = fs.readFileSync('./mp3/setuju.opus')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://instagram.com/san.xd12_",
    mediaType: 2,
    description: "https://instagram.com/san.xd12_", 
    title: 'sanxd-ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ',
    body: wm2,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command =  /^(setuju)$/i

export default handler