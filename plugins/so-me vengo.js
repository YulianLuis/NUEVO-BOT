import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 20
global.db.data.users[m.sender].exp += 30
  
let vn = './media/vengo.mp3'
conn.sendFile(m.chat, vn, 'vengo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /ho me vengo|oh me vengo|o me vengo|Ho me vengo|Oh me vengo|O me vengo/ 
handler.command = new RegExp
export default handler
