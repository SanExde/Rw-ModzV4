import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/husbu?apikey=8e66d0934cf741bfd2182c16'
	conn.sendButton(m.chat, 'Nih husbunya', wm, await(await fetch(url)).buffer(), [['NEXT',`.${command}`]],m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.limit = true
export default handler
