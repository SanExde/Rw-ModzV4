import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `${htki} 𝐏𝐔𝐋𝐒𝐀 𝐓𝐄𝐋𝐊𝐎𝐌𝐒𝐄𝐋 ${htka}

Hayo, ingin melanjutkan pembayaran?

 *Pembayaran*
 Via: Telkomsel
 Nomor: 082114680993
 A/n: San Xd
 Mitra: San Official
 Metode pembayaran: Online ( ~Cod~ )


 _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan pulsa/saldo.
Pastikan pulsa/saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
let wibu = `https://telegra.ph/file/e4f89df7ef683f1c45955.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'SUDAH BAYAR','.sudahbayar', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/san.xd12_",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/reel/CfKCfcrAeA2/?igshid=YmMyMTA2M2Y=", 
    title: 'San Xd MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['telkomsel']
handler.tags = ['info']
handler.command = /^telkomsel$/i

export default handler
