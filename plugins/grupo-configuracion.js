let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
const { isBanned, autolevelup, temporal, restrict, stickers, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]

let text = 
`β­β[ πΎππππππππΌπΎπππ ]ββ¬£
β
β ππππΎπππ ${welcome ? 'β' : 'β'}
ββββββββββββββββββ
β ππππΎππππ ${stickers ? 'β' : 'β'}
ββββββββββββββββββ
β πΌππππππππππ ${global.db.data.users[m.sender].autolevelup ? 'β' : 'β'}
ββββββββββββββββββ
β ππππΎπππ π½ππ πππππππΌπ ${global.db.data.settings[conn.user.jid].temporal ? 'β' : 'β'}
ββββββββββββββββββ
β ππππΎπππ πΌππΌπΏππ π ππΌπΎπΌπ ${global.db.data.settings[conn.user.jid].restrict ? 'β' : 'β'}
ββββββββββββββββββ
β πΏππππΎπ ${detect ? 'β' : 'β'} 
ββββββββββββββββββ
β πΌπππππππ ${antiLink ? 'β' : 'β'} 
ββββββββββββββββββ
β πΌπππππππ *2* ${antiLink2 ? 'β' : 'β'} 
ββββββββββββββββββ
β πππΏπ πππππ ${modohorny ? 'β' : 'β'} 
ββββββββββββββββββ
β πΌπππππππΎπππ ${autosticker ? 'β' : 'β'} 
ββββββββββββββββββ
β πΌππΏπππ ${audios ? 'β' : 'β'} 
β°ββββββ° *π  ${vs}* β±βββββ¬£
`.trim()
//conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] }) 
conn.sendHydrated(m.chat, text, wm, pp, md, 'πππ©ππ½π€π©-ππΏ', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,)
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(configuraciΓ³n|settings|setting|confugurar|configuracion|vergrupo|gruporesumen)$/i
handler.group = true
export default handler
