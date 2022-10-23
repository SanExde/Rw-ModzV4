import fetch from 'node-fetch'
let handler = async(m, {
	conn, text, usedPrefix, command, args
}) => {

	if (args[0].length > 20) throw 'Nomor Kepanjangan'
	if (args[0].length < 9) throw 'Nomor Kependekan'
	if (args[0].startsWith('0')) throw 'Gunakan format 62'
	if (!args[0]) throw 'Masukkan Teks'
	
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
	let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let tujuan = `👋 Saya *${conn.user.name}*, Pesan Untuk Kamu
👥 Dari : *PENGIRIM RAHASIA*
${htka} 💌 Pesan ${htki}
${htjava} ${txt}
`
	let cap = `${htka} *PESAN RAHASIA* ${htki}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${usedPrefix + command} ${nomorown} pesan untuknya
Contoh: ${usedPrefix + command} ${nomorown} hai`
	if (!m.quoted) {
		await conn.sendButton(mention, tujuan, cap, null, [['MENU', '/menu']], m)
	} else {
		await conn.sendButton(mention, tujuan, cap, null, [['MENU', '/menu']], m)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(mention, media, false).catch(_ => _)
	}
	let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
👥 Dari : @${m.sender.replace(/@.+/, '')}
👥 Untuk : @${mention.replace(/@.+/, '')}
${htka} 💌 Pesan ${htki}
${htjava} ${txt}
`
	await conn.sendButton(m.chat, suks, wm, null, [['MENU', '/menu']], m, { mentions: conn.parseMention(suks) })
}
handler.help = ['menfess <nomor pesan>']
handler.tags = ['menbalas']
handler.command = /^(menfess|confess|menfes|confes)$/i
export default handler
