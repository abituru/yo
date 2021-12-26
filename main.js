const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/bot/functions')
const { color } = require('./lib/bot/color')
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const antilinkk = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { spawn, exec, execSync } = require("child_process")
const clc = require('chalk')
const axios = require("axios")

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))


const starts = async (client = new WAConnection()) => {
    client.logger.level = 'warn'
    client.version = [2, 2143, 3] 
    console.log(banner.string)
    client.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Now scan the qr'))
    })
	 fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
    client.on('connecting', () => {
        start('2', 'Connecting...')
    })
    client.on('open', () => {
    success('2', 'Connected')
	setTimeout(()=>{console.log(color('🛒 SUBSCRIBE YOUTUBE SIEGRIN','aqua'))},1000)})
	await client.connect({timeoutMs: 30*1000})
	fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\x09'));
		
	console.log(color(']','white'),color('----------------','blue'),color('CONNECTED','green'),color('----------------','blue'),color('[','white'));
	console.log('\x0A');
	console.log(color('[','white'),color('+','red'),color(']','white'),color('WA Version','yellow'),color(':','aqua'),color(client.user.phone.wa_version,'white'));
	console.log(color('[','white'),color('+','red'),color(']','white'),color('OS Version','yellow'),color(':','aqua'),color(client.user.phone.os_version,'white'));
	console.log(color('[','white'),color('+','red'),color(']','white'),color('Device','yellow'),color(':','aqua'),color(client.user.phone.device_manufacturer,'white'));
	console.log(color('[','white'),color('+','red'),color(']','white'),color('Model','yellow'),color(':','aqua'),color(client.user.phone.device_model,'white'));
	console.log(color('[','white'),color('+','red'),color(']','white'),color('MCC','yellow'),color(':','aqua'),color(client.user.phone.mcc,'white'));
	console.log(color('[','white'),color('+','red'),color(']','white'),color('MNC','yellow'),color(':','aqua'),color(client.user.phone.mnc,'white'));
	console.log(color('[','white'),color('+','red'),color(']','white'),color('OS Build Number','yellow'),color(':','aqua'),color(client.user.phone.os_build_number,'white'));
	console.log('\x0A');console.log(color(']','white'),color('----------------','blue'),color('SIEGRIN','green'),color('----------------','blue'),color('[','white'));console.log('\x0A');
	console.log(color('Subscribe','red'),color('&','white'),color('Support','red'),color('CHANNEL GUA','yellow'),color('SIEGRIN','white'));console.log(color('Thanks Buat Kalian Yang Sudah Subscribe T_T','cyan'));
	console.log('\x0A');
	console.log(color('©2021 LUCBOT. All Right Reversed.','white'));
	console.log('\x0A');
	console.log(color(']','white'),color('----------------','blue'),color('SIEGRIN','green'),color('----------------','blue'),color('[','white'));client.on('chat-update',async (_0x6340x1)=>{require('./index.js')(client,_0x6340x1)})
	
	client.on("CB:Call", (num) => {
    let nomer;
    calling = JSON.parse(JSON.stringify(num));
    nomer = calling[1].from;
    client.sendMessage(nomer, `Sorry ${client.user.name} UDAH GOBLOK, SANGE SAMA BOT LAGI STRESS, \ncall = block`, MessageType.text)
    .then(() => {
      return client.blockUser(nomer, 'add')
    })
  });
    client.on('CB:Blocklist', json => {                                                                  
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us','s.whatsapp.net'))
        }
    })
	client.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batteryLevel = parseInt(batteryLevelStr);
    battery.persen = `${batteryLevel}%`;
    battery.charger = json[2][0][1].live;
  })
    
	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			lucacaa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "☢LUC SYSTEM☢", 
"caption": `☢LUC SYSTEM☢`, 'jpegThumbnail': fs.readFileSync(`./strg/image/logolucbot.jpeg`)
}}}
         const mdata = await client.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			ini_user = client.contacts[num]
			welkam = `*Hai @${num.split('@')[0]}*\n*◪ Welcome in group:*\n*├─ ${mdata.subject}*\n*│*\n*├─ Intro dulu*\n*├─ ❏ Nama:* \n*├─ ❏ Umur:*\n*├─ ❏ Asal kota:*\n*└─ ❏ Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*Semoga Betah yaa~~*`
			const moment = require('moment-timezone')
            const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = client.contacts[num] != undefined ? client.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : client.contacts[num].notify || client.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			client.sendMessage(mdata.id, welkam, MessageType.text, {quoted: lucacaa, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
		ini_user = client.contacts[num]
		out =`◪ Goodbye @${num.split('@')[0]}\n◪ Leave from group:\n${mdata.subject}\n│\n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nGoodBye~~`
		const moment = require('moment-timezone')
        const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
         
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = client.contacts[num] != undefined ? client.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : client.contacts[num].notify || client.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')

				client.sendMessage(mdata.id, out, MessageType.text, {quoted : lucacaa, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
         } else if (anu.action == 'promote') {
			const mdata = await client.groupMetadata(anu.jid)
			num = anu.participants[0]
			teks = `*PROMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User  :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Selamat jabatan kamu naik_`
			client.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true , quoted : lucacaa})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await client.groupMetadata(anu.jid)
			teks = `*DEMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User  :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Kasian malah kena demote_`
			client.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: lucacaa})
		}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
client.on('group-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
		try {
lucacaa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "☢LUC SYSTEM☢", "caption": `☢LUC SYSTEM☢`, 'jpegThumbnail': fs.readFileSync(`./strg/image/logolucbot.jpeg`)}}}
  metdata = await client.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `「 *Group Opened* 」\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: lucacaa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  }
  else if(anu.announce == 'true'){
    teks = `「 *Group Closed* 」\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: lucacaa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `「 *Group Description Change* 」\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: lucacaa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'false'){
    teks = `「 *Group Setting Change* 」\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: lucacaa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'true'){
    teks = `「 *Group Setting Change* 」\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    client.sendMessage(metdata.id, teks, MessageType.text, {quoted: lucacaa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  } catch (e) {
         console.log('Error : %s', color(e, 'red'))
  }
})
}
///
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()