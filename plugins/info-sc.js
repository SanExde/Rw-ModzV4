import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let cap = `${htka} *sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ* ${htki}

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/ImYanXiao/Elaina-MultiDevice

Pengen yang udah di recode oleh owner?
Script bot ini gratis. jika kalian ingin,bisa chat nomor
dibawah ini!!

https://wa.me/message/6TYVKZNILFJYLZ
`
conn.sendButtonDoc(m.chat, cap, botdate,'BACK','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/san.xd12_',
    mediaType: 2, 
    description: sgc,
    title: '≪ CLICK HERE ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/e4f89df7ef683f1c45955.jpg")).buffer(),
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
