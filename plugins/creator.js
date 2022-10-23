let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let tag = `@${m.sender.split('@')[0]}`
 let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;「 San Exde 」;;;\n「 San Exde 」\nORG:「 San Exde 」\nTITLE:\nitem1.TEL;waid=6281265970249:+628 12-6597-0249\nitem1.X-ABLabel:「 San Exde 」\nX-WA-BIZ-DESCRIPTION:${htjava} 𝙼𝚎𝚗𝚎𝚛𝚒𝚖𝚊 𝚜𝚊𝚟𝚎 𝚔𝚘𝚗𝚝𝚊𝚔 𝚢𝚊 𝚊𝚍𝚒𝚌𝚔"🗿\nX-WA-BIZ-NAME:「 San Exde 」\nEND:VCARD`
//------- NOMOR
 const pp = fs.readFileSync('./media/own.jpg')
  let nowner1 = `${nomorown1.split`@`[0]}@s.whatsapp.net`
  let nowner2 = `${nomorown2.split`@`[0]}@s.whatsapp.net`
let teksnomor = (
`${htka} *Mʏ Oᴡɴᴇʀ* ${htki}

───⟮ *${nameown1}* ⟯───
⟬ @${nomorown1.split`@`[0]} ⟭
┆
───⟮ *${nameown2}* ⟯───
⟬ @${nomorown2.split`@`[0]} ⟭
┆`
)
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown1 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `┆✧  Nama : SanXd
┆✧  Nama RL : HAMBA ALLAH
┆✧  Gender : Pria
┆✧  Agama : Islam
┆✧  Tanggal lahir : 9 - 09 - 2007
┆✧  Umur : 15
┆✧  Kelas : IX
┆✧  Hobby : 𝙼𝚘𝚍𝚒𝚏𝚒𝚔𝚊𝚜𝚒 𝚙𝚎𝚛𝚊𝚗𝚐𝚔𝚊𝚝 𝚕𝚞𝚗𝚊𝚔
┆✧  Sifat : ASIK,BAIK,RAMAH
┆✧  Tinggal : Indonesia, Sumatera Utara
╰────────────•
`
let ppown2 = await conn.profilePictureUrl(nomorown2 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio2 = `┆✧  Nama : SanBotz
┆✧  Nama RL : HAMBA ALLAH
┆✧  Gender : prie
┆✧  Agama : Islam
┆✧  Tanggal lahir : 27 - 08 - 2006
┆✧  Umur : 16
┆✧  Kelas : IX
┆✧  Hobby : Banyak
┆✧  Sifat : ASIK,BAIK,RAMAH
┆✧  Tinggal : Indonesia, Bengkulu
└––––––––––––·•
`

  let tek = `${htka} *NOTE* ${htki}

𐚀 𝙾𝚠𝚗𝚎𝚛 𝚝𝚒𝚍𝚊𝚔 𝚛𝚎𝚜𝚙𝚘𝚗 𝚌𝚑𝚊𝚝 𝚊𝚗𝚎𝚑
𐚀 𝙾𝚠𝚗𝚎𝚛 𝚋𝚎𝚛𝚑𝚊𝚔 𝚋𝚕𝚘𝚔𝚒𝚛 𝚜𝚒𝚊𝚙𝚊 𝚜𝚊𝚓𝚊
𐚀 𝙺𝚊𝚕𝚘 𝚖𝚒𝚗𝚝𝚊 𝚜𝚌,𝚜𝚘𝚙𝚊𝚗
𐚀 𝙴𝚝𝚒𝚔𝚊𝚗𝚢𝚊 𝚍𝚒𝚙𝚊𝚔𝚎 𝚢𝚊𝚊
𐚀 𝙲𝚑𝚊𝚝 𝚊𝚗𝚎𝚑 𝚐𝚊𝚓𝚎𝚕𝚜 𝚋𝚊𝚗/𝚋𝚕𝚘𝚌𝚔
`
const sections = 
[{
title: `✧ Oᴛʜᴇʀ ✧`,
rows: [
{title: " Kontak", rowId: ".owner kontak"},
{title: " Nomor", rowId: ".owner nomor"},
{title: " Biodata Owner1", rowId: ".owner bio"},
{title: " Biodata Owner2", rowId: ".owner bio2"},
{title: " Script", rowId: ".sc"},
]}, {
title: `⬔ Sᴜᴘᴘᴏʀᴛ Mᴇ ⬔`,
rows: [
{title: " Donasi", rowId: ".owner nomor"},
{title: " Sewa", rowId: ".sewa"},
{title: " Buy Premium", rowId: ".premium"},
]},]
const listMessage = {
  text: tek,
  footer: wm,
  title: null,
  buttonText: "CLICK",
  sections
}
  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {


        case 'kontak': 
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
        break
          case 'nomor':
         /conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 / conn.sendButton(m.chat, teksnomor, null, pp, [
                ['SEWA BOT', `${usedPrefix}sewa`],
                ['MENU', `${usedPrefix}menu`]
            ], m, { contextInfo: { mentionedJid: [nomorown1] }})
 conn.send2ButtonImg(m.chat, fs.readFileSync('./media/own.jpg').buffer, teksnomor, `Halo ${tag}\nIᴛᴜ Oᴡɴᴇʀ Kᴜ\n` + botdate, `SEWA BOT`, `.sewa`, 'MENU', `.menu`, ftroli, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/san.xd12_',
    mediaType: 2, 
    description: sgc,
    title: "Join Sini Juga Cuy!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

   conn.sendButton(m.chat, '───❲ *𝙱𝚒𝚘𝚍𝚊𝚝𝚊 𝙾𝚠𝚗𝚎𝚛1* ❳───', teksbio, ppown, [
                ['SEWA BOT', `${usedPrefix}sewa`],
                ['MENU', `${usedPrefix}menu`]
            ], m)
            break
                        case 'bio2':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, '───❲ *𝙱𝚒𝚘𝙳𝚊𝚝𝚊 𝙾𝚠𝚗𝚎𝚛2* ❳───', teksbio2, ppown2, [
                ['SEWA BOT', `${usedPrefix}sewa`],
                ['MENU', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
           return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`MENU`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler