import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `𝑬𝒔𝒄𝒓𝒊𝒃𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒉𝒂𝒃𝒍𝒂 𝒄𝒐𝒏𝒎𝒊𝒈𝒐\n\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐: ${usedPrefix + command} Hola bot*`
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi'] 
export default handler