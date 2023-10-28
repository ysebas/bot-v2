import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['549116566417', 'DUEÑO DE BOT CTM', true],
  ['5491168352204', false]
] //Numeros de owner 

global.mods = [''] 
global.prems = ['.', '.']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'BOT' 
global.author = 'BOT' 

//--info FG
global.botName = 'BOT WPSA'
global.fgig = 'https://www.instagram.com/fg98_ff' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.fgcanal = 'https://whatsapp.com/channel/0029VaCd6mYPQiWqxXj1F'
global.bgp = 'https://chat.whatsapp.com/BESBo5xE4YVvth6Yzr'
global.bgp2 = 'https://chat.whatsapp.com/I7bvd8OUHjgkHteqFC7'
global.bgp3 = 'https://chat.whatsapp.com/F0JTTyoL7OlU8TEpuH' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
