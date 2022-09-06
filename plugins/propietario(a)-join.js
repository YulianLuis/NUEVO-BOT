let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `${mg}🙌  𝘿𝙚𝙗𝙚 𝙙𝙚 𝙨𝙚𝙧 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚\n🔰 𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒆𝒏𝒍𝒂𝒄𝒆 𝒅𝒆 𝒖𝒏 𝒈𝒓𝒖𝒑𝒐.\n\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐\n*#unete ${nn}*\n\n*#join ${nnn}*`

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
m.reply(`𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫 𝑺𝒆 𝒉𝒂 𝒖𝒏𝒊𝒅𝒐 𝒂𝒍 𝒈𝒓𝒖𝒑𝒐!!✅*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}╭══•───────────────•══╮\n┃ 📧 𝑺𝒐𝒍𝒊𝒄𝒊𝒕𝒖𝒅 𝒑𝒂𝒓𝒂 𝒖𝒏 𝒈𝒓𝒖𝒑𝒐\n╰══•───────────────•══╯\n\n*👤 𝑺𝒐𝒍𝒊𝒄𝒊𝒕𝒂𝒏𝒕𝒆\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 𝑬𝒏𝒍𝒂𝒄𝒆 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐\n ' + link, jid)

m.reply(`${ag}*✅ 𝑺𝒖 𝒆𝒏𝒍𝒂𝒄𝒆 𝒔𝒆 𝒆𝒏𝒗𝒊𝒐 𝒂 𝑴𝒊 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐(𝒂).\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *𝑺𝒖 𝑮𝒓𝒖𝒑𝒐 𝒔𝒆𝒓𝒂 𝑬𝒗𝒂𝒍𝒖𝒂𝒅𝒐 𝒚 𝑸𝒖𝒆𝒅𝒂𝒓𝒂 𝒂 𝒅𝒆𝒄𝒊𝒔𝒊𝒐𝒏 𝒅𝒆 𝑴𝒊 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐(𝒂).\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ 𝑬𝒔 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒒𝒖𝒆 𝒔𝒖 𝑺𝒐𝒍𝒊𝒄𝒊𝒕𝒖𝒅 𝒔𝒆𝒂 𝑹𝒆𝒄𝒉𝒂𝒛𝒂𝒅𝒂 𝒑𝒐𝒓 𝒍𝒂𝒔 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆𝒔 𝑪𝒂𝒖𝒔𝒂𝒔:\n1️⃣ 𝑬𝒍 𝑩𝒐𝒕 𝒆𝒔𝒕𝒂 𝑺𝒂𝒕𝒖𝒓𝒂𝒅𝒐.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ 𝑬𝒍 𝑩𝒐𝒕 𝒇𝒖𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐 𝒅𝒆𝒍 𝑮𝒓𝒖𝒑𝒐.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *𝑬𝒍 𝑮𝒓𝒖𝒑𝒐 𝒏𝒐 𝒄𝒖𝒎𝒑𝒍𝒆 𝒄𝒐𝒏 𝒍𝒂𝒔 𝑵𝒐𝒓𝒎𝒂𝒕𝒊𝒗𝒂𝒔 𝒅𝒆 ${gt}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *𝑬𝒍 𝒆𝒏𝒍𝒂𝒄𝒆 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒔𝒆 𝒓𝒆𝒔𝒕𝒂𝒃𝒍𝒆𝒄𝒊𝒐.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ 𝑵𝒐 𝒔𝒆 𝒂𝒈𝒓𝒆𝒈𝒂 𝒂 𝑮𝒓𝒖𝒑𝒐𝒔 𝒔𝒆𝒈𝒖𝒏 𝑴𝒊 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐(𝒂).\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 𝑳𝒂 𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒖𝒅 𝒑𝒖𝒆𝒅𝒆 𝒕𝒂𝒓𝒅𝒂𝒓 𝑯𝒐𝒓𝒂𝒔 𝒆𝒏 𝒔𝒆𝒓 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒊𝒅𝒂. 𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝑻𝒆𝒏𝒆𝒓 𝑷𝒂𝒄𝒊𝒆𝒏𝒄𝒊𝒂. 𝑮𝒓𝒂𝒄𝒊𝒂𝒔`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.exp = 50
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
export default handler
