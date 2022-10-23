//
let { MessageType } = (await import('@adiwajshing/baileys')).default
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Reply stiker nya!'
      stiker = await sticker(img, false, '', ' • 𝐖𝐚𝐧𝐧𝐁𝐨𝐭𝐳-𝐌𝐃 :\nBY 𝐖𝐚𝐧𝐧𝐳𝐱-𝐌𝐝')
    } else if (args[0]) stiker = await sticker(false, args[0], '', ' • 𝗙𝗢𝗟𝗟𝗢𝗪 :\n https://instagram.com/wannnzx_133')
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw '*Reply sticker yang mau dicolong!*'
  }
}
handler.help = ['colong']
handler.tags = ['sticker']
handler.command = /^colong$/i
handler.owner = true

export default handler
