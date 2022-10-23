import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Sudah membayar? 」
│
│ • *Jika sudah bayar ikuti langkah berikut.*
│
│1. Kirim bukti pembayaran dan klik tombol *Bukti* di bawah
│2. Tunggu confirm dari owner
│3. Bukti palsu tidak akan di respon & terkena banned!
❏────
`
let wibu = `https://telegra.ph/file/e4f89df7ef683f1c45955.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'SUDAH BAYAR','.sudahbayar', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/wannzx_133",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/reel/CfKCfcrAeA2/?igshid=YmMyMTA2M2Y=", 
    title: 'San Xd MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['dana','gopay','telkomsel']
handler.tags = ['info']
handler.command = /^sudahbayar$/i

export default handler
