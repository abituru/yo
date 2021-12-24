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
    client.sendMessage(nomer, `UDAH GOBLOK, SANGE SAMA BOT LAGI STRESS GUA BLOCK YAH`, MessageType.text)
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
  
  client.on("group-participants-update", async (anu) => {
	  if (!welkom.includes(anu.jid)) return
    try {
      groupMet = await client.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
				ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
			buff = await getBuffer(ppimg)
				exec(`magick './src/wel.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
      if (anu.action == "add" && mem.includes(client.user.jid)) {
        client.sendMessage(anu.jid, "Halo!", "conversation");
      }
      if (anu.action == "add" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        let v = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `Halo ${anu_user} Welcome, Jangan Lupa Baca Peraturan Grup kalo tydac gw kick lo`;
        buttons = [
          { buttonId: `faclientganteng`, buttonText: { displayText: "SelamatDatang" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Jangan Keluar Yah Kak✨",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `Beban Grup Out banh aowoakak ga usah balik ya \nSayonara ${anu_user} we will miss you`;
        buttons = [
          { buttonId: `faclientganteng`, buttonText: { displayText: "Goodbye dek" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: "Gausah Balik Lah Lu tod",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }
      } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
		
client.on("group-update", async(mem) => {
	if (!welkom.includes(anu.jid)) return
    metadata = await client.groupMetadata(mem.jid);
    if (mem.announce == "false") {
      client.sendMessage(metadata.id, `*[ Group Opened ]* \n\n${mns}group telah di buka oleh admin${mns}\n${mns}sekarang semua member bisa mengirim pesan${mns}`, MessageType.text);
      console.log(`[ GROUP OPENED ]\ngroup : ${metadata.subject}`);
    } else if (mem.announce == "true"){
      client.sendMessage(metadata.id, `*[ Group Closed ]* \n\n${mns}group telah di tutup oleh admin${mns}\n${mns}sekarang hanya admin yang bisa mengirim pesan${mns}`, MessageType.text);
      console.log(`[ GROUP CLOSED ]\ngroup : ${metadata.subject}`);
    } else if (!mem.desc == "") {
      tag = mem.descOwner.split("@")[0] + "@s.whatsapp.net";
      client.sendMessage(metadata.id, `*[ Group Description Change ]*\n\ndeskripsi group telah di ubah oleh owner ${mem.descOwner.split("@")[0]}\n\ndeskripsi baru: ${mem.desc}`, MessageType.text, {
        contextInfo:{mentionedJid:[tag]}
      });
      console.log(`[ DESCRIPTION CHANGE ]\ngroup : ${metadata.subject}`);
    } else if (mem.restrict == "false") {
      client.sendMessage(metadata.id, `*[ Group Setting Change ]*\n\nfitur edit group telah di buka\nsekarang semua member dapat mengedit info group`, MessageType.text);
      console.log(`[ GROUP SETTING CHANGE ]\ngroup : ${metadata.subject}`);
    } else if (mem.restrict == "true") {
      client.sendMessage(metadata.id, `*[ Group Setting Change ]*\n\nfitur edit group telah di tutup\nsekarang hanya admin yang dapat mengedit info group`, MessageType.text);
      console.log(`[ GROUP SETTING CHANGE ]\ngroup : ${metadata.subject}`);
    }
  });
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