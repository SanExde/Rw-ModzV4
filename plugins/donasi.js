let handler = async (m, { conn }) => {
let info = `
*${htki} 𝐃𝐎𝐍𝐀𝐒𝐈 ${htka}*

2022 *San Xd Official*
`
const sections = [
   {
	title: `𝐌𝐄𝐓𝐎𝐃𝐄`,
	rows: [
	    {title: "Dana", rowId: '.dana', description: 'Bayar melalui Dana' },
	    {title: "Gopay", rowId: '.gopay', description: 'Bayar melalui Gopay' },
	{title: "Pulsa Telkomsel", rowId: '.telkomsel', description: 'Bayar melalui Pulsa Telkomtod' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "DONASI",
  sections 
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['donasi', 'donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.private = true

export default handler
