/*

GK KASI CREDIT YT SIEGRIN, GK USAH RE UPLOAD
SUSAH" NGE FIX, LU CUMA NUMPANG NAMA DOANG
YANG BELUM PAHAM CAR RUN DI HEROKU TONTON AJA VIDEO SEBELUMNYA
JASA RUN HEROKU BISA PC wa.me/6289530298948 BIAR BOT NYA GAK TERLALU DELAY
	
*/   
const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ChatModification,
WAMessageProto,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
relayWAMessage,
mentionedJid,
processTime,
Browsers } = require("@adiwajshing/baileys")
const simple = require('./lib/bot/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const crypto = require('crypto')
const fsx = require("fs-extra")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const hx = require('hxz-api')
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const got = require("got");
const imageToBase64 = require('image-to-base64')
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { ind } = require('./language')
const setting = JSON.parse(fs.readFileSync('./settings.json'))

const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/bot/functions')
const { color, bgcolor } = require('./lib/bot/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/bot/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/bot/ytdl')
const { webp2mp4File} = require('./lib/bot/webp2mp4')
const { msgFilter } = require('./lib/bot/antispam')
const { recognize } = require('./lib/bot/ocr')
const { cmdadd } = require('./lib/bot/totalcmd.js')
const { sleep, isAfk, cekafk, addafk } = require('./lib/bot/offline')
const { addCmd, getCommandPosition, getCmd ,checkSCommand } = require('./lib/bot/scommand.js')
const { addCommands, checkCommands, deleteCommands } = require('./lib/bot/commandsrespon.js')

const { getRegisteredRandomId, addRegisteredUser, createSerial , checkRegisteredUser } = require('./lib/user/registered.js')
const { addATM, addKoinUser, checkATMuser, confirmATM } = require('./lib/user/uang.js')		
const { addLimit, addLimitUser, checkLimituser, confirmLIMIT } = require('./lib/user/limit.js')
const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId } = require('./lib/user/level.js')

const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const fakereplynye = JSON.parse(fs.readFileSync('./strg/fakereply.json'))


const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const { virtex } = require('./src/virtex')
const zalgo = require('./src/zalgo')
const vapor = require('vapor-text')
const { antivirtexx } = require('./src/antivirtex.js')

const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const ntilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const eventtime = JSON.parse(fs.readFileSync('./database/group/event.json'))

const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const own = JSON.parse(fs.readFileSync('./database/user/owner.json'))
const adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))

const antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))

const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const commandsrespon = JSON.parse(fs.readFileSync('./database/bot/commands.json'))
const scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const _win = JSON.parse(fs.readFileSync('./database/bot/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./database/bot/tttlose.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/bot/tictactoe.json"))
const afk = JSON.parse(fs.readFileSync('./database/bot/off.json'))

//ANTILINK
linkcom = ".com" 
linkid = ".id" 
linkxyz = ".xyz" 
linkly = ".ly" 
linkhttp = "http" 
linkwa = "://chat.whatsapp.com"
deflt = "//chat.whatsapp.com" 
linknye = `${deflt}` 

owner = setting.owner
dev = setting.dev 
ow = setting.ow 
github = setting.github 
myyoutube = setting.myyoutube
mytiktok = setting.mytiktok
mytwitter = setting.mytwitter
// Info Apikey
LoLKey = setting.LoLKey


// DONASI
donasi = setting.donasi
rekening = setting.rekening
trakteer = setting.trakteer
saweria = setting.saweria
mybio = setting.mybio
// Info Setting
botver = setting.botver
targetpc = setting.ownerNumber
owner = targetpc
namo = setting.namo
ator = setting.ator
fake = setting.fake
prefix = setting.prefix 
multi = true 
banChats = false
menusimple = true
pref = '?' 

// Gak Usah Diubah
hit_today = []
blocked = []
offline = false
numbernye = '0'
waktu = '-'
alasan = '-'
ownername = 'Siegrin'
msgId="B826873620DD5947E683E3ABE663F263"
const vcard = 'BEGIN:VCARD\n'  
+ 'VERSION:3.0\n'  
+ 'FN:SIEGRIN\n'  
+ 'ORG: LUC BOT;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=6289530298948:+6289530298948\n'
+ 'END:VCARD' 

const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 // Win Tictactoe ( luc bot APIs )
loseawal = 1 // Lose Tictactoe ( luc bot APIs )
memberwin = 1 // Win ( luc bot APIs )
memberlose = 1 // Lose ( luc bot APIs )

const { setTtt, getWins, getWin, getLose, generateBoard } = require('./lib/bot/tictactoe.js')

battery = {
  persen: "" || "tidak terdeteksi",
  charger: "" || false
};
//=================================================//
module.exports = client = async (client, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3)
// m = simple.smsg(client, mek)
global.blocked
//m = simple.smsg(client, mek)
//let { mentionedd } = m
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { quotedMek, isQuotedMek, mentioned} = mek
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const type = Object.keys(mek.message)[0]
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
// var prefix = ''
var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+,;]/gi) : '#'  	
} else {
prefix = pref
}
body = (type === 'listResponseMessage' && mek.message.listResponseMessage.selectedRowId) ? mek.message.listResponseMessage.selectedRowId : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const arg = chats.slice(command.length + 2, chats.length)
const args = body.trim().split(/ +/).slice(1)
const txt = mek.message.conversation	
const isCmd = body.startsWith(prefix)
if (isCmd) cmdadd()
const totalhit = JSON.parse(fs.readFileSync('./database/bot/totalcmd.json'))[0].totalcmd
hit_today.push(command)
const q = args.join(' ')
const botNumber = client.user.jid
const botNumberss = client.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
const isRegistered = checkRegisteredUser(sender)
const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
const wib = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const totalchat = await client.chats.all()
const totalgroup = await client.chats.array.filter(v => v.jid.endsWith('g.us'))
const totalkontak = await client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
isStc = `${isStc}`
const isStcQ = isStc !== "" && content.includes("extendedTextMessage") 
isStc !== "" && content.includes("conversation") 
const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
const isStcVideo = isStcMedia && content.includes("videoMessage")
const isStcImage = isStcMedia && content.includes("imageMessage")
const isStcSticker = isStcMedia && content.includes("stickerMessage")
const isStcTeks = isStcMedia && content.includes("quotedMessage")
const isStcDocs = isStcMedia && content.includes("documentMessage")
const isStcContact = isStcMedia && content.includes("contactMessage")
const isStcAudio = isStcMedia && content.includes("audioMessage")
const isStcLoca = isStcMedia && content.includes("locationMessage")
const isStcTag = isStcMedia && content.includes("mentionedJid")
const isStcReply = isStcMedia && content.includes("Message")
const isStcProd = isStcMedia && content.includes("productMessage")
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isWelkom = isGroup ? welkom.includes(from) : false
const isOwner = own.includes(sender)
const isAdmin = adm.includes(sender)
const isBanned = blocked.includes(sender)
const isPremium = prem.includes(sender) || isOwner
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
const AntiLink = isGroup ? ntilink.includes(from) : false
const IsEvent = isGroup ? eventtime.includes(from) : false
const isBadWord = isGroup ? badword.includes(from) : false
const senderNumber = sender.split("@")[0]
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const player = `${sender.split("@")[0]}@s.whatsapp.net`
const numbernye = `0@s.whatsapp.net`
const isBtMsg = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
const lucBulan = ['Bulan','Tahun','Hari','Minggu','Jam','Detik','Menit','Abad']
const lucBulan1 = lucBulan[Math.floor(Math.random() * (lucBulan.length))]
const date1 = Math.ceil(Math.random() * 100)
const ratee = Math.ceil(Math.random() * 1000)
const point = Math.floor(Math.random() * 1) + 0
const luchit = hit_today.length
const fakereply = fakereplynye[Math.floor(Math.random() * fakereplynye.length)];
const thumbnail = imagenye[Math.floor(Math.random() * imagenye.length)];
const Mthumb = fs.readFileSync(`strg/image/${thumbnail}.jpeg`)
const WMthumb = fs.readFileSync(`strg/image/logolucbot.jpeg`)
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const hariRaya = new Date('Jan 12, 2022 07:00:00')
const sekarang = new Date().getTime();
const Selisih = hariRaya - sekarang;
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan1) {
case 0: bulan1 = "Januari"; break;
case 1: bulan1 = "Februari"; break;
case 2: bulan1 = "Maret"; break;
case 3: bulan1 = "April"; break;
case 4: bulan1 = "Mei"; break;
case 5: bulan1 = "Juni"; break;
case 6: bulan1 = "Juli"; break;
case 7: bulan1 = "Agustus"; break;
case 8: bulan1 = "September"; break;
case 9: bulan1 = "Oktober"; break;
case 10: bulan1 = "November"; break;
case 11: bulan1 = "Desember"; break;
}
var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   

myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
var tgl = new Date();
detik = tgl.getSeconds();
menit = tgl.getMinutes();
jam = tgl.getHours();
var ampm = jam >= 12 ? 'PM' : 'AM';
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`

var ase = new Date();
var waktoo = ase.getHours();
switch(waktoo){
case 0: waktoo = "Malam 🌚"; break;
case 1: waktoo = "Malam 🌚"; break;
case 2: waktoo = "Malam 🌚"; break;
case 3: waktoo = "Malam 🌚"; break;
case 4: waktoo = "Pagi 🌞"; break;
case 5: waktoo = "Pagi 🌞"; break;
case 6: waktoo = "Pagi 🌞"; break;
case 7: waktoo = "Pagi 🌞"; break;
case 8: waktoo = "Pagi 🌞"; break;
case 9: waktoo = "Pagi 🌞"; break;
case 10: waktoo = "Pagi 🌞"; break;
case 11: waktoo = "Waktu Dzuhur , jangan lupa shalat"; break;
case 12: waktoo = "Siang ☀️"; break;
case 13: waktoo = "Siang ☀️"; break;
case 14: waktoo = "Waktu Ashar , jangan lupa shalat"; break;
case 15: waktoo = "Sore 🌌"; break;
case 16: waktoo = "Sore 🌌"; break;
case 17: waktoo = "Sore 🌌"; break;
case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
case 20: waktoo = "Malam 🌃"; break;
case 21: waktoo = "Malam 🌃"; break;
case 22: waktoo = "Malam 🌃"; break;
case 23: waktoo = "Malam 🌃"; break;
}
var hahh = "" + waktoo; 

var ase = new Date();
var waktoonyabro = ase.getHours();
switch(waktoonyabro){
case 0: waktoonyabro  = "Malam 🌛 ${pushname}"; break;
case 1: waktoonyabro  = "Malam 🌛 ${pushname}"; break;
case 2: waktoonyabro  = "Malam 🌛 ${pushname}"; break;
case 3: waktoonyabro  = "Pagi ✨ ${pushname}"; break;
case 4: waktoonyabro  = "Pagi ✨ ${pushname}"; break;
case 5: waktoonyabro  = "Pagi ✨ ${pushname}"; break;
case 6: waktoonyabro  = "Pagi ✨ ${pushname}"; break;
case 7: waktoonyabro  = "Pagi ✨ ${pushname}"; break;
case 8: waktoonyabro  = "Pagi ✨ ${pushname}"; break;
case 9: waktoonyabro  = "Pagi ✨ ${pushname}"; break;
case 10: waktoonyabro  = "Pagi ✨ ${pushname}"; break;
case 11: waktoonyabro  = "Siang 🔥 ${pushname}"; break;
case 12: waktoonyabro  = "Siang 🔥 ${pushname}"; break;
case 13: waktoonyabro  = "Siang 🔥 ${pushname}"; break;
case 14: waktoonyabro  = "Siang 🔥 ${pushname}"; break;
case 15: waktoonyabro  = "Sore 🌹${pushname}"; break;
case 16: waktoonyabro  = "Sore 🌹${pushname}"; break;
case 17: waktoonyabro  = "Sore 🌹${pushname}"; break;
case 18: waktoonyabro  = "Malam 🌛 ${pushname}"; break;
case 19: waktoonyabro  = "Malam 🌛 ${pushname}"; break;
case 20: waktoonyabro  = "Malam 🌛 ${pushname}"; break;
case 21: waktoonyabro  = "Malam 🌛 ${pushname}"; break;
case 22: waktoonyabro  = "Malam 🌛 ${pushname}"; break;
case 23: waktoonyabro  = "Malam 🌛 ${pushname}"; break;
}
var ucapannya = "" + waktoonyabro; 
const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const replyex = (teks) => { client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{sendEphemeral: true}})}
const reply = (teks) => {
            client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{sendEphemeral: true, mentionedJid: [player], "externalAdReply":{"title": `${hahh} ${pushname}`,"body": `${fakereply}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})
        }
const sendMess = (hehe, teks) => {
            client.sendMessage(hehe, teks, text)
        }

const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
const fakethumb = (teks, yes) => {client.sendMessage(from, teks, image, {thumbnail:Mthumb,quoted:mek,caption:yes})
        }

const fakeitem = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289530298948-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":Mthumb,"itemCount":`${ratee}`,"status":"INQUIRY","surface":"CATALOG","message":fake,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289530298948-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": Mthumb //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": fake, 
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": `${date1}`
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}



const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail":  Mthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
		

const fakegroup = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289530298948-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": Mthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
		
		const fstatus = {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail":  Mthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
	}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
	
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289530298948-1604595598@g.us"  }, "message": {orderMessage: {itemCount: `${ratee}`,status: 200, thumbnail: Mthumb, surface: 200, message: fake, orderTitle: 'L', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key :  {participant : '0@s.whatsapp.net'},message: {documentMessage:{title: fake,jpegThumbnail: Mthumb}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":fake, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': fake, 'jpegThumbnail': Mthumb}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": fake, 'jpegThumbnail': Mthumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":fake, "h": `Hmm`,'seconds': '99999', 'caption': fake, 'jpegThumbnail': Mthumb}}}
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: fake,jpegThumbnail: Mthumb}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${ownername}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': Mthumb, thumbnail: Mthumb,sendEphemeral: true}}}
var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];

const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        client.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}, thumbnail: Buffer.alloc(0)})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return client.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return client.sendMessage(from, teks, text, {quoted: mek, wmthumbnail: fs.readFileSync(`image/${wmthumbnail}`)})
        }
		
		for (let i = 0; i < commandsrespon.length ; i++) {
            if (budy == commandsrespon[i].pesan) {
            client.sendMessage(from, commandsrespon[i].balasan, text, {quoted: mek})
            }
            }

// FUNTION CHAT \\
cekafk(afk)
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
if (!isOwner && !mek.key.fromMe && !isAdmin){
if (isAfk(mek.key.remoteJid)) return
addafk(mek.key.remoteJid)
heheh = ms(Date.now() - waktu) 
client.sendMessage(mek.key.remoteJid,
ind.donasi(prefix, player, ow, trakteer, saweria, donasi, rekening), MessageType.text,{contextInfo:{ mentionedJid: [player, ow, numbernye],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": fake, 'jpegThumbnail': Mthumb}}}})}} 
if (mek.key.remoteJid.endsWith('@g.us') && offline) {
if (!isOwner && !mek.key.fromMe && !isAdmin){
if (mek.message.extendedTextMessage != undefined){
if (mek.message.extendedTextMessage.contextInfo != undefined){
if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
if (ment === `${owner}@s.whatsapp.net`){
if (isAfk(mek.key.remoteJid)) return
addafk(mek.key.remoteJid)
heheh = ms(Date.now() - waktu)
client.sendMessage(mek.key.remoteJid,
ind.donasi(prefix, player, ow, trakteer, saweria, donasi, rekening), MessageType.text,{contextInfo:{ mentionedJid: [player, ow, numbernye],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": fake, 'jpegThumbnail': Mthumb}}}})}}}}}}}

const sendButtonNotRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
client.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `_Kamu Belum Verifikasi Data_`
const daftar2 = 'Klik Tombol Di Bawah Untuk Verifikasi'
const daftar3 = [{buttonId: `daftar`,buttonText: {displayText: `VERIFIKASI`,},type: 1,},]

let contentimage = fs.readFileSync(`./strg/image/${thumbnail}.jpeg`)
const mediaimgen = await client.prepareMessage(from, contentimage, MessageType.location, {thumbnail: contentimage})
let buttonloc2 = mediaimgen.message["ephemeralMessage"] ? mediaimgen.message.ephemeralMessage : mediaimgen
const buttonsmenu1 = `*Support Nekopoi.Care*\n*Offical Bot By @${numbernye.split("@")[0]}*\n*Powered By @${dev.split("@")[0]}*`
const buttonsmenu2 = [{buttonId: `menu`,buttonText: {displayText: `MENU`,},type: 1,},]
const buttonsmenu3 = [{buttonId: `owner`,buttonText: {displayText: `Owner`,},type: 1,},]

const sendButtonImage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6,
locationMessage: buttonloc2.message.locationMessage
};
client.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const getpc = async function(totalchat){
let pc = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}


const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await client.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  

let ii = []
let giid = []
for (mem of totalchat){
	ii.push(mem.jid)
}
for (id of ii){
if (id && id.includes('g.us')){
giid.push(id)
}
}
const  timestampi = speed();
const  latensii = speed() - timestampi
const latensiii = `${latensii.toFixed(4)} _Second_`
const ini_gcchat = `${giid.length}`
const uptime = process.uptime()
const tekss = `${kyun(uptime)}`
const ini_totalchat = `${totalchat.length - giid.lenght}`   

var prefi = pref
			
if (multi) {
    prefi = `Multi-Prefix`
}

 if (isRegistered ) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
addKoinUser(sender, point)
} catch (err) {
console.error(err)
}
}
//checkLimit
if (isRegistered ) {
const checkLimit = checkLimituser(sender)
try {
if (checkLimit === undefined) addLimit(sender)
addLimitUser(sender, point)
} catch (err) {
console.error(err)
}
}
var angka = '1'
if (isAdmin) {
angka = '1'
}
if (isPremium) {
angka = '0'
} 
if (isOwner) {
angka = '0'
}


//ANTI KASAR
if (bad.includes(messagesC)){
if (!isGroup) return
if (!isBadWord) return
if (isGroupAdmins) return reply('*Jaga Ucapannya Min😇*')
client.updatePresence(from, Presence.composing)
var kic = `@${sender.split("@")[0]}@s.whatsapp.net`
teks = `*「 KATA TOXIC TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
reply("「 𝗕𝗔𝗖𝗔𝗞𝗔𝗡 𝗔𝗟𝗙𝗔𝗧𝗜𝗛𝗔𝗛 」𝗞𝗶𝘁𝗮 𝗱𝗼𝗮𝗸𝗮𝗻 𝘀𝗲𝗺𝗼𝗴𝗮 𝗱𝗶𝗮 𝗗𝗶𝗯𝗲𝗿𝗶𝗸𝗮𝗻 𝗛𝗶𝗱𝗮𝘆𝗮𝗵 𝗦𝗮𝗺𝗮 𝗔𝗹𝗹𝗮𝗵, 𝗯𝗶𝗮𝗿 𝗴𝗮𝗸 𝗸𝗮𝘀𝗮𝗿 𝗟𝗮𝗴𝗶 𝗨𝗰𝗮𝗽𝗮𝗻𝗻𝘆𝗮.")
}, 0)
    }
 /*********** FUNCTION ANTILINK ***********/
if (budy.includes(linknye)){
if (!isGroup) return
if (!AntiLink) return
if (isGroupAdmins) return reply("admin bebas aowkwkww")
if (mek.key.fromMe) return
client.updatePresence(from, Presdence.composing)
if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
var kic = `@${sender.split("@")[0]}@s.whatsapp.net`
teks = `*「 LINK TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
reply("SELAMAT JALAN")
}, 0)
    }
 /*********** FUNCTION ANTIVIRTEX ***********/
if (txt.length > 500){
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply('*admin mah bebas*')
client.updatePresence(from, Presence.composing)
if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
var kic = `@${sender.split("@")[0]}@s.whatsapp.net`
teks = `*「 VIRTEX TERDETEKSI 」*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
reply("SELAMAT JALAN")
}, 0)
    }
 /*********** FUNCTION LEVEL ***********/
if (isGroup && isRegistered) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 1) + 0
const requiredXp = 10 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
addLimitUser(sender, 10)
 await replyex(ind.levelup(pushname, sender, player, getLevelingXp, getLevel, getLevelingLevel, role))
}
} catch (err) {
console.error(err)
}}
 /*********** FUNCTION ROLE ***********/
const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 0) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt.General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt.General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt.General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt.General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythic VII 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythic VIII 上帝'
        } else if (levelRole <= 8000) {
            role = 'Mythic IX 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythic X 上帝'
        } else if (levelRole <= 10000) {
            role = 'Awakened Mythic 特尔邦贡'
	    } else if (levelRole <= 99999999999) {
   	         role = 'End level 程度❗'
	    }

// function for get the winner
 if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
orangnye = sender
teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
delete tictactoe[senderNumber]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync("./temp/" + from + ".json");
})
}
   
if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
var { enemy, mode, board, step } = tictactoe[senderNumber]
if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
var data = tictactoe[senderNumber]
data["enemy"] = senderNumber
mode = mode == X ? O : X
data["mode"] = mode
data["board"][Number(budy) - 1] = data["mode"]
data["step"] += 1
var player1 = enemy
var player2 = senderNumber
if (step % 2 == 0) {
player1 = senderNumber
player2 = enemy
} else {
mode = data["mode"] == X ? O : X
}
tictactoe[enemy] = data
delete tictactoe[senderNumber]
var teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${player1.split("@")[0]} (${mode})`
mode = mode == X ? O : X
var text2 = `\n\n•> Player 2 : @${player2.split("@")[0]} (${mode})`
var test = `\n_ketik nyerah untuk menyerah_`
board = await generateBoard(data["board"])
var win = await getWin(data["board"])
if (win) {
teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
if (win == mode) {
teks += `•> Lose : @${player1} 👻\n\n`
teks += board
teks += `\n\n•> Win : @${player2} 🎉\n_fix tictactoe by mans 2021_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
delete tictactoe[enemy]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync('./temp/' + from + '.json')
getWins(`${player2}@s.whatsapp.net`, 1)
getLose(`${player1}@s.whatsapp.net`, 1)
})
} else {
teks += `•> Win : @${player1} 🎉\n\n`
teks += board
teks += `\n\n•> Lose : @${player2} 👻\n_fix tictactoe by mans 2021_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
delete tictactoe[enemy]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync('./temp/' + from + '.json')
getWins(`${player1}@s.whatsapp.net`, 1)
getLose(`${player2}@s.whatsapp.net`, 1)
})
}
}
if (data["step"] == 9) {
teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
teks += `•> Draw : @${player1} 🦁\n\n`
teks += board
teks += `\n\n•> Draw : @${player2} 🐯\n_fix tictactoe by mans 2021_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
delete tictactoe[enemy]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync('./temp/' + from + '.json')
})
}
player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
teks += "\n"
teks += board
teks += text2
teks += test
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
})
}
if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
tttSkuy.status = true
rand0m = [ tttSkuy.Z, tttSkuy.Y ]
winR = rand0m[Math.floor(Math.random() * rand0m.length)]
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
nantang = O
pelawan = X

var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
var penantang = `${tttSkuy.Z}@s.whatsapp.net`
var lawan = `${tttSkuy.Y}@s.whatsapp.net`
tesk = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
var count = 0
for (var x of board) {
if (count % 3 == 0) {
tesk += "\n   "
}
tesk += x
count += 1
}
tesk += `\n\n•> Player 2 : @${lawan.split("@")[0]} (${pelawan})\n_fix tictactoe_`
return client.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
var data = {}
data["enemy"] = lawan.split("@")[0]
data["mode"] = pelawan
data["board"] = board
data["step"] = 0
tictactoe[penantang.split("@")[0]] = data
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
})
fs.unlinkSync("./temp/" + from + ".json");
} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
client.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
fs.unlinkSync("./temp/" + from + ".json");
}}
////   
//========================================================================================================================//

//antispam
        if (isCmd && !isOwner && !mek.key.fromMe && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return
        }
        if (isCmd && !isOwner && !mek.key.fromMe && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return
        }
		//detector media
			
			colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = type === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && !isOwner && !isAdmin && !isPremium && banChats === true) return
		if (isCmd && !isOwner && !mek.key.fromMe) msgFilter.addFilter(from)
		
			
		function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./temp/${name}.exif`)) return `./temp/${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./temp/${name}.exif`, buffer, (err) => {	
		return `./temp/${name}.exif`	
	})	

}

const sendButDoc = (text, footer, but = [], options = {}) => {
        const buttonMessagek = {
          contentText: text,
          footerText: footer,
          buttons: but,
          headerType: 6
        };
        client.sendMessage(
          from,
          buttonMessagek,
          buttonsMessage,
          options
        )
      }


// Stick Cmd
switch (isStc) {
case "7tIEIBdiWVigLIQITT/tdHuOEuhLTdSiyF3HZtfZ6KM=": // JADI ADMIN
if (isRegistered) return  reply(ind.rediregis())
                const serialUser = createSerial(10)
                veri = sender
                if (!isGroup) {
                    addRegisteredUser(sender, pushname, time, serialUser)
                    await reply(ind.registered(pushname, serialUser, time, sender))
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, pushname, time, serialUser)
                    await reply(ind.registered(pushname, serialUser, time, sender))
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
			break
}
switch (isBtMsg) {
case 'lucjodoh':
                if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup,silahkan gunakan di private chat bot')
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                const anugaa = `${anug.split("@")[0]}@s.whatsapp.net`
				await reply('Looking for a partner...')
				await sleep(3000)
				let contentjodoh = fs.readFileSync(`./src/image/thumb.jpeg`)
const menuJODOHNYE1 = await client.prepareMessage(from, contentjodoh, MessageType.image, {thumbnail: Buffer.alloc(0)})
const buttonsjodoh1 = [
  {buttonId: 'next', buttonText: {displayText: 'NEXT'}, type: 1},
]

const buttonMessagejodoh1 = {
    contentText: `Partner found: 🙉\n@${anugaa.split("@")[0]}\n\nwa.me/${anug}?text=Hai+boleh+kenalan+gak+?`,
    footerText: 'Buttonnya gak muncul? ketik #next',
    buttons: buttonsjodoh1,
    headerType: 1, 
	imageMessage: menuJODOHNYE1.message.imageMessage
}

client.sendMessage(from, buttonMessagejodoh1, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [anugaa]}})
await confirmLIMIT(sender, [angka])
break
}
switch (isStMsg) {
case 'Owner Menu':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
const ownerrows1 = [
{title: 'Self', description: "Bot Hanya Digunakan Owner", rowId:"self"},
{title: 'Public', description: "Bot Bisa Digunakan Semua Orang", rowId:"public"},
{title: 'Shutdown', description: "Bot Dimatikan", rowId:"shutdown"},
{title: 'Clear All', description: "Semua Pesan Dihapus", rowId:"rowid4"},
{title: 'Read All', description: "Semua Pesan Dibaca", rowId:"rowid5"},
{title: 'UnRead dAll', description: "Semua Pesan Tiak Dibaca", rowId:"rowid6"},
{title: 'Mute', description: "Pesan Dibisukan", rowId:"rowid7"},
{title: 'UnMute', description: "Pesan Tidak Dibisukan", rowId:"rowid8"},
{title: 'Pin', description: "Pesan Disematkan", rowId:"rowid9"},
{title: 'UnPin', description: "Pesan Tidak Disematkan", rowId:"rowid10"},
{title: 'Archive', description: "Pesan Diarsipkan", rowId:"rowid11"},
{title: 'UnArchive', description: "Pesan Tidak Diarsipkan", rowId:"rowid12"},
{title: 'Delete Chat', description: "Pesan Dihapus", rowId:"rowid13"},
{title: 'Kick All', description: "Bot Keluarkan Semua Member Group", rowId:"rowid14"},
{title: 'Leave', description: "Bot Keluar Group", rowId:"rowid15"},
{title: 'Buggc', description: "Bot Mengirim Buggc", rowId:"rowid16"},
{title: 'Virtex', description: "Bot Mengirim Virtex", rowId:"rowid17"},
{title: 'List Group', description: "Bot Menampilkan List Group", rowId:"rowid18"},
{title: 'OnRespn', description: "Bot Respon On", rowId:"rowid19"},
{title: 'OffRespon', description: "Bot Respon Off", rowId:"rowid20"},
 ]
const sectionsowner1 = [
{title: "OWNER MENU", rows: ownerrows1}
]

const buttonowner = {
 buttonText: 'Click Me!',
 footerText: ind.menuowner(prefix, dev, numbernye),
 description: `*${hahh} @${player.split("@")[0]}*\n*Bot ini di lengkapi Anti-Spam jadi beri jeda 5 detik*`, 
 sections: sectionsowner1,
 listType: 1
}
client.sendMessage(from, buttonowner, MessageType.listMessage, {quoted: ftroli, contextInfo:{mentionedJid: [player, numbernye, ow, dev], "externalAdReply":{"title": `${hahh} Owner Tersayang`,"body": `${fakereply}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})
break
case 'Info Menu':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
const inforows1 = [
{title: 'test', description: "Bot Hanya Digunakan Owner", rowId:"self"}
 ]
const sectionsinfo1 = [
{title: "Info Menu", rows: inforows1}
]

const buttoninfo1 = {
 buttonText: 'Click Me!',
 footerText: ind.infomenu(prefix, dev, numbernye),
 description: `*${hahh} @${player.split("@")[0]}*\n*Bot ini di lengkapi Anti-Spam jadi beri jeda 5 detik*`, 
 sections: sectionsinfo1,
 listType: 1
}
client.sendMessage(from, buttoninfo1, MessageType.listMessage, {quoted: ftroli, contextInfo:{mentionedJid: [player, numbernye, ow, dev], "externalAdReply":{"title": `${hahh} Owner Tersayang`,"body": `${fakereply}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})
break
case 'Gabut Menu':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
const gabutrows1 = [
{title: 'test', description: "test", rowId:"self"}
 ]
const sectionsgabut1 = [
{title: "Gabut Menu", rows: gabutrows1}
]

const buttongabut1 = {
 buttonText: 'Click Me!',
 footerText: ind.menugabut(prefix, dev, numbernye),
 description: `*${hahh} @${player.split("@")[0]}*\n*Bot ini di lengkapi Anti-Spam jadi beri jeda 5 detik*`, 
 sections: sectionsgabut1,
 listType: 1
}
client.sendMessage(from, buttongabut1, MessageType.listMessage, {quoted: ftroli, contextInfo:{mentionedJid: [player, numbernye, ow, dev], "externalAdReply":{"title": `${hahh} Owner Tersayang`,"body": `${fakereply}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})
break
case 'Game Menu':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
const gamerows1 = [
{title: 'Owner', description: "test", rowId:"self"}
 ]
const sectionsgame1 = [
{title: "Info Menu", rows: gamerows1}
]

const buttongame1 = {
 buttonText: 'Click Me!',
 footerText: ind.gamemenu(prefix, dev, numbernye),
 description: `*${hahh} @${player.split("@")[0]}*\n*Bot ini di lengkapi Anti-Spam jadi beri jeda 5 detik*`, 
 sections: sectionsgame1,
 listType: 1
}
client.sendMessage(from, buttongame1, MessageType.listMessage, {quoted: ftroli, contextInfo:{mentionedJid: [player, numbernye, ow, dev], "externalAdReply":{"title": `${hahh} Owner Tersayang`,"body": `${fakereply}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})
break
case 'Luc Menu':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
const lucrows1 = [
{title: 'test', description: "test", rowId:"self"}
 ]
const sectionsluc1 = [
{title: "Luc Menu", rows: lucrows1}
]

const buttonluct1 = {
 buttonText: 'Click Me!',
 footerText: ind.lucmenu(prefix, dev, numbernye),
 description: `*${hahh} @${player.split("@")[0]}*\n*Bot ini di lengkapi Anti-Spam jadi beri jeda 5 detik*`, 
 sections: sectionsluc1,
 listType: 1
}
client.sendMessage(from, buttonluct1, MessageType.listMessage, {quoted: ftroli, contextInfo:{mentionedJid: [player, numbernye, ow, dev], "externalAdReply":{"title": `${hahh} Owner Tersayang`,"body": `${fakereply}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})
break
case 'Group Menu':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
const grouprows1 = [
{title: 'test', description: "Bot Hanya Digunakan Owner", rowId:"self"}
 ]
const sectionsgroup1 = [
{title: "Group Menu", rows: grouprows1}
]

const buttongroup1 = {
 buttonText: 'Click Me!',
 footerText: ind.grupseting(prefix, dev, numbernye),
 description: `*${hahh} @${player.split("@")[0]}*\n*Bot ini di lengkapi Anti-Spam jadi beri jeda 5 detik*`, 
 sections: sectionsgroup1,
 listType: 1
}
client.sendMessage(from, buttongroup1, MessageType.listMessage, {quoted: ftroli, contextInfo:{mentionedJid: [player, numbernye, ow, dev], "externalAdReply":{"title": `${hahh} Owner Tersayang`,"body": `${fakereply}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})
break
case 'Developer Bot':
case 'Owner Bot':
case 'Contributor':
case 'Owner':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: fdoc})
client.sendMessage(from, ind.supportme(player, numbernye, dev, hahh),MessageType.text, { quoted: fdoc, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'Source Code':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
sendButtonImage(from, `Source Script Bot : ${github}`, buttonsmenu1, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'Syarat Dan Peraturan':
case 'Rules':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
sendButtonImage(from, `*${hahh} @${player.split("@")[0]}*`, ind.rules(player, hahh, dev, numbernye), buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
case 'Group Official Luc Bot':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
sendButtonImage(from, `*${hahh} @${player.split("@")[0]}*`, ind.gcofficial(player, hahh, dev, numbernye), buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
case 'Join':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (args.length < 1) return reply('ketik #join link group')
break
case 'Sticker':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (args.length < 1) return reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar(durasi sticker video 1-9 detik)`)
break
case 'Menu':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
const rowsmenu1 = [
{title: 'Developer Bot', description: "Nomor Developer Luc Bot", rowId:"#OwnerMenu"},
{title: 'Syarat Dan Peraturan', description: "Budayakan Membaca Sebelum Menggunakan Bot", rowId:"#OwnerMenu"},
{title: 'Group Official Luc Bot', description: "Silahkan Bergabung Untuk Info Updatean Terbaru", rowId:"#OwnerMenu"}
]
const rowsmenu2 = [
{title: 'Luc Menu', description: "Menampilkan fitur dari Luc", rowId:"LucMenu"}
]
const rowsmenu3 = [
{title: 'Gabut Menu', description: "Untuk Hiburan Di Group", rowId:"GabutMenu"}
]
const rowsmenu9 = [
{title: 'Game Menu', description: "Untuk Hiburan Di Group", rowId:"Gamemenu"}
]
const rowsmenu7 = [
{title: 'Contributor', description: "Menampilkan Contributor Bot", rowId:"Contributor"}
]
const rowsmenu4 = [
{title: 'Group Menu', description: "Menampilkan fitur Untuk Group", rowId:"GroupMenu"}
]
const rowsmenu5 = [
{title: 'Info Menu', description: "Menampilkan Info Bot", rowId:"InfoMenu"}
]
const rowsmenu8 = [
{title: 'Owner Menu', description: "Menampilkan Info Bot", rowId:"ownermenu"}
]
const rowsmenu6 = [
{title: 'Source Code', description: "Menampilkan Source Code Bot", rowId:"SourceCode"}
]

const sectionsmenus = [
{title: "Tentang Bot", rows: rowsmenu1},
{title: "Luc Menu", rows: rowsmenu2},
{title: "Gabut Menu", rows: rowsmenu3},
{title: "Game Menu", rows: rowsmenu9},
{title: "Group Menu", rows: rowsmenu4},
{title: "Info Menu", rows: rowsmenu5},
{title: "Owner Menu", rows: rowsmenu8},
{title: "Source Code", rows: rowsmenu6},
{title: "Big Thanks To", rows: rowsmenu7}
]

const buttonsmenus = {
 buttonText: 'Click Me!',
 footerText: ind.simplemenu(prefix, dev, numbernye),
 description: `*${hahh} @${player.split("@")[0]}*`,
 sections: sectionsmenus,
 listType: 1
}
client.sendMessage(from, buttonsmenus, MessageType.listMessage, {
        caption: fake,
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [dev, ow, numbernye, player],
            },
			quoted: ftroli, sendEphemeral: true 
			})
break
case 'Sewa':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
const sewamenu1 = [
{title: 'Premium', description: `Rp.100.000\nDapatkan Fitur Premium`, rowId:"Premium"}
]
const sewamenu2 = [
{title: '1 Bulan', description: `Rp.50.000\nSewa Bot Selama 1 Bulan`, rowId:"GabutMenu"}
]
const sewamenu3 = [
{title: '1 Minggu', description: `Rp.15.000\nDapatkan Fitur Premium`, rowId:"Contributor"}
]
const sewamenu4 = [
{title: 'Trial', description: `Gratis\nBot Akan Keluar 3 Hari`, rowId:"GroupMenu"}
]
const sewamenu5 = [
{title: 'Owner', description: `Chat Owner Jika Kamu Perlu`, rowId:"InfoMenu"}
]
const sewamenu6 = [
{title: 'Rules', description: "Budayakan Membaca Sebelum Menggunakan Bot", rowId:"SourceCode"}
]

const sectionssewas = [
{title: "Premium", rows: sewamenu1},
{title: "Sewa 1 Bulan", rows: sewamenu2},
{title: "Sewa 1 Minggu", rows: sewamenu3},
{title: "Trial", rows: sewamenu4},
{title: "Owner", rows: sewamenu5},
{title: "Rules", rows: sewamenu6}
]

const buttonssewaas = {
 buttonText: 'List Harga Sewa',
 footerText: ind.premiumbot(prefix, dev, numbernye),
 description: `*${hahh} @${player.split("@")[0]}*\n*Bot ini di lengkapi Anti-Spam jadi beri jeda 5 detik*`, 
 sections: sectionssewas,
 listType: 1
}
client.sendMessage(from, buttonssewaas, MessageType.listMessage, {
        caption: fake,
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [dev, ow, numbernye, player],
            },
			quoted: ftroli, sendEphemeral: true 
			})
break
case 'BotStat':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())	
anu = process.uptime()
teks = `*◪* *MY STATS*
*${hahh}*  @${player.split("@")[0]}
*├❒ TANGGAL :*  ${timu}
*├❒ WIB :*  ${wib}
*├❒ WITA :*  ${wita}
*├❒ WIT :*  ${wit}
◪
*├❒ Server Name :*  ${client.browserDescription[0]}
*├❒ Server :*  ${client.browserDescription[1]}
*├❒ Prefix :*  ${prefix}
*├❒ Versi Bot :*  ${botver}
◪
*├❒ Battery :*  ${battery.persen}
*├❒ Charger :*  ${battery.charger == true ? "sedang di cas" : "sedang tidak di cas"}
*├❒ Merk HP :*  ${device_manufacturer}
*├❒ Versi OS :*  ${os_version}
*├❒ RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*├❒ Versi HP :*  ${device_model}
*├❒ MCC :*  ${mcc}
*├❒ MNC :*  ${mnc}
◪
*├❒ Dev :*  @${dev.split("@")[0]}
*├❒ Owner :*  @${ow.split("@")[0]}
*├❒ Whatsapp :*  ${wa_version}
*├❒ Blockir :*  ${blocked.length} Blocked
*├❒ Group Chat :*  ${totalgroup.length} Chat
*├❒ Personal Chat :*  ${totalkontak.length} Chat
*├❒ Total Chat :*  ${totalchat.length} Chat
*├❒ Total User :*  ${_registered.length}
*├❒ Hit Today :*  ${luchit} Hit
*├❒ Total Hit :*  ${totalhit} chat
*├❒ Speed :*  ${latensii.toFixed(4)} Second
*├❒ Runtime :*  ${kyun(anu)}
◪
*├❒ ${offline ? "AUTO RESPON ON" : "AUTO RESPON OFF"}*
*└❒ ${banChats ? "SELF" : "PUBLIC"}*`
sendButtonImage(from, teks, buttonsmenu1, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
case 'Premium':
case '1 Bulan':
case '1 Minggu':
case 'Trial':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
sendButtonImage(from, "Silahkan Hubungin Owner Luc Bot Untuk Informasi Lebih Lanjut", buttonsmenu1, buttonsmenu3, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
break
}
switch (command) { 
case 'rules':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
sendButtonImage(from, ind.rules(player, hahh, dev, numbernye), buttonsmenu1, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
case 'gcbot':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
sendButtonImage(from, `*${hahh} @${player.split("@")[0]}*`, ind.gcofficial(player, hahh, dev, numbernye), buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break

case 'simplemenu':
case 'bot':
case 'help':
case 'menu':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
const rowsmenus1 = [
{title: 'Menu', description: "Menampilkan List Menu/Command yang Terdapat di Luc Bot", rowId:"LucMenu"}
]
const rowsmenus2 = [
{title: 'Rules', description: "Budayakan Membaca Sebelum Menggunakan Bot", rowId:"rules"},
{title: 'Sewa', description: "Menampilkan List Harga Sewa Bot", rowId:"Sewa"},
{title: 'Join', description: "Bot Join Group", rowId:"Join"},
{title: 'BotStat', description: "Menampilkan Status Bot", rowId:"GroupMenu"},
{title: 'Owner Bot', description: "Chat Jika Penting,Minta Save Kemungkinan Tidak Akan Dibalas", rowId:"GroupMenu"},
{title: 'Source Code', description: "Menampilkan Source Code Bot", rowId:"SourceCode"}
]
const rowsmenus3 = [
{title: 'Sticker', description: "Untuk Membuat Stiker, type: #stiker reply [gambar]", rowId:"SourceCode"}
]
const rowsmenus4 = [
{title: 'Contributor', description: "Menampilkan Contributor Bot", rowId:"Contributor"}
]

const sectionsmenuss = [
{title: "Menu Luc Bot", rows: rowsmenus1},
{title: "Informasi Bot", rows: rowsmenus2},
{title: "Command yang Sering di Gunakan", rows: rowsmenus3},
{title: "Big Thanks To", rows: rowsmenus4}
]

const buttonsmenuss = {
 buttonText: 'Click Me!',
 footerText: `Saya adalah Luc Bot salah satu Bot Whatsapp yang diciptakan oleh manusia gabut : @${dev.split("@")[0]}\nSilahkan tekan Tombol "Click Me!" untuk melihat list command dari Luc Bot.\n\nDiharapkan untuk tidak menelpon ke nomor ini,tidak mintak save dan tidak spam dalam penggunaan bot.\nThanks Regard @${dev.split("@")[0]}`,
 description: `*${hahh} @${player.split("@")[0]}*`, 
 sections: sectionsmenuss,
 listType: 1
}
client.sendMessage(from, buttonsmenuss, MessageType.listMessage, {
        caption: fake,
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [dev, ow, numbernye, player],
            },
			quoted: ftroli, sendEphemeral: true 
			})
break
	 case 'next':
			case 'mutual':
				case 'mutualan':
                if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup,silahkan gunakan di private chat bot')
				if (isBanned) return reply(ind.baned())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
				await sleep(3000)
                await reply(`wa.me/${anug}`)
				await sleep(1000)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await confirmLIMIT(sender, [angka])
            break
	 case 'wa.me':
		           case 'wame':
                       if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				       if (isBanned) return reply(ind.baned())
  				   	   client.updatePresence(from, Presence.composing) 
  					   options = {
					   text: `*Link WhatsApp-Mu :* *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					   contextInfo: { mentionedJid: [sender] }
  					   }
  					   client.sendMessage(from, options, text, { quoted: mek } )
  				  break
  					   if (data.error) return reply(data.error)
  					   reply(data.result)
  				  break		
			
			
					 
 case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${wmthumbnail}`)
               client.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)
                 
		    break  
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.baned())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 15; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
case 'fitnah2':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (!isGroup) return reply(ind.groupo())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				var replace = gh.split("/")[0];
				var target = gh.split("/")[1];
				var bot = gh.split("/")[2];
				client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
				await confirmLIMIT(sender, [angka])
			break
			case 'fitnah':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                if (!isGroup) return reply(ind.groupo())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnah pesan|balasanbot]]\n\nEx : \n${prefix}${command} terkutuk lah|bacot`)
                var gh = body.slice(8)
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                var target = gh.split("|")[0];
                var bot = gh.split("|")[1];
                client.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } })
              await confirmLIMIT(sender, [angka])
			  break
			
				case 'level':
                if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `\`\`\` 「 LEVEL 」 \`\`\`\n➣ \`\`\` Nama\`\`\`  : ${pushname}\n➣ \`\`\` Nomor\`\`\`  : ${sender.split("@")[0]}\n➣ \`\`\` Role\`\`\`  : ${role}\n➣ \`\`\` User XP\`\`\`  :  ${userXp}/${requiredXp}\n➣ \`\`\` User Level\`\`\`  : ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
				break
case 'daftar':
case 'verify':
case 'registrasi':
if (isRegistered) return  reply(ind.rediregis())
const serialUser = createSerial(10)
const rediregis1 = ind.registered(pushname, serialUser, time, sender)
const rediregis2 = 'Klik Tombol Di Bawah Untuk Membuka Menu'
const rediregis3 = [{buttonId: `menu`,buttonText: {displayText: `MENU`,},type: 1,},]
veri = sender
if (!isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await sendButtonNotRegis(from, rediregis1, rediregis2, rediregis3, { quoted: mek})
console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
} else {
addRegisteredUser(sender, pushname, time, serialUser)
await sendButtonNotRegis(from, rediregis1, rediregis2, rediregis3, { quoted: mek})
console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))}
break
case 'delete':
case 'del':
case 'd':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isPremium && !isOwner) return reply(ind.premo())
client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break   
case 'self':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb())
if (banChats === true) return fakeitem(`\`\`\`ALREADY SELF\`\`\``)
banChats = true
fakeitem(`\`\`\`STATUS : SELF\`\`\``)
break
case 'public':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb())
if (banChats === false) return fakeitem(`\`\`\`ALREADY PUBLIC\`\`\``)
banChats = false
fakeitem(`\`\`\`STATUS : PUBLIC\`\`\``)
break
case 'shutdown':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb()) 
fakeitem(`\`\`\`BYE BEBAN...\nLUC OFF DULU\`\`\``)
await sleep(3000)
client.close()
break
case 'leave':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
setTimeout( () => {
client.groupLeave (from) 
}, 2000)
setTimeout( () => {
client.updatePresence(from, Presence.composing) 
fakeitem(`\`\`\`SAYONARA CUK🗣🗣\`\`\``)  // ur cods
}, 0)
break
case 'offrespon':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
if (offline === false) return fakeitem(`\`\`\`RESPON ALREADY OFF\`\`\``)
offline = false
fakeitem(`\`\`\`AUTO RESPON OFF\`\`\``)
break       
case 'onrespon':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb()) 
if (offline === true) return fakeitem(`\`\`\`RESPON ALREADY ON\`\`\``)
offline = true
fakeitem(`\`\`\`AUTO RESPON ON\`\`\``)
break
case 'bc': 
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
if (args.length < 0) return reply('.......')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {quoted: ftroli, thumbnail: Buffer.alloc(0), caption: `[ *${fake} BROADCAST* ]\n\n${body.slice(4)}`})
}
fakeitem('```SUKSESS BROADCAST```')
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftroli,caption: `[ *${fake} BROADCAST* ]\n\n${body.slice(4)}`})
}
fakeitem('```SUKSESS BROADCAST```')
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${fake} BROADCAST* ]\n\n${body.slice(4)}`})
}
fakeitem('```SUKSESS BROADCAST```')
} else if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftroli,caption: `[ *${fake} BROADCAST* ]\n\n${body.slice(4)}`})
}
fakeitem('```SUKSESS BROADCAST```')
} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
}
fakeitem('```SUKSESS BROADCAST```')
    } else {
for (let _ of anu) {
sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
}
fakeitem('```SUKSESS BROADCAST```')
}
break
case 'spam':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
argzi = arg.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
client.sendMessage(from, argzi[0], MessageType.text)
}
break 
case 'totag':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin)return reply(ind.ownerb())
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
}
break 
case 'setlink':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin)return reply(ind.ownerb())	
if (args[0] === "com") {
linknye = `${linkcom}`
fakeitem('Succes change antilink com')
} else if (args[0] === "id") {
linknye = `${linkid}`
fakeitem('Succes change antilink id')
} else if (args[0] === "xyz") {
linknye = `${linkxyz}`
fakeitem('Succes change antilink xyz')
} else if (args[0] === "http") {
linknye = `${linkhttp}`
fakeitem('Succes change antilink http')
} else if (args[0] === "ly") {
linknye = `${linkly}`
fakeitem('Succes change antilink ly')
} else if (args[0] === "wa") {
linknye = `${linkwa}`
fakeitem('Succes change antilink wa')
} else if (args[0] === "default") {
linknye = `${deflt}`
fakeitem('Succes change antilink default')
} else {
reply(`◪ *List Anti Link*
├default
├com
├id
├xyz
├ly
├wa`)
}
break
case 'setnamebot':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin)return reply(ind.ownerb())	
if (!q) return reply(`Example: ${prefix}${command} LUC BOT`)
fake = q
fakeitem(`Succes Mengganti Nama Bot Menjadi : ${q}`)
break
case 'setprefix':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
if (args.length < 1) return reply(`Example:\n•> ${prefix}setprefix multi\n•> ${prefix}setprefix <query>`)
if (args[0] === 'multi') {
if (multi === true) return
multi = true
fakeitem(`Succes change prefix = Multi Prefix`)
} else {
multi = false
pref = args[0]
fakeitem(`Succes change prefix = ${args[0]}`)
}
break	
case 'term':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin)return reply(ind.ownerb())	
if (!q) return reply(ind.wrongf())
exec(q, (err, stdout) => {
if (err) return reply(`LUC BOT:~ ${err}`)
if (stdout) {
fakeitem(stdout)
}
})
break 
case 'upswteks':
case 'upswtext':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
if (!q) return reply('Isi teksnya!')
client.sendMessage('status@broadcast', `${q}`, extendedText)
fakestatus(`Sukses Up story wea teks ${q}`)
break 
case 'upswimage':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
if (isQuotedImage) {
const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
cihcih = await client.downloadMediaMessage(swsw)
client.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
bur = `Sukses Upload Story Image dengan Caption: ${q}`
client.sendMessage(from, bur, text, { quoted: fstatus })
} else {
reply('Reply gambarnya!')
}
break 
case 'upswvideo':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
if (isQuotedVideo) {
const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
cihcih = await client.downloadMediaMessage(swsw)
client.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
bur = `Sukses Upload Story Video dengan Caption: ${q}`
client.sendMessage(from, bur, text, { quoted: fstatus })
} else {
reply('Reply videonya!')
}
break
case 'get':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin)return reply(ind.ownerb())	
if(!q) return reply('linknya?')
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
fakeitem(bu)
})   
break 
case 'listgroup':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})	
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
ingfoo = await getGroup(totalchat)
teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• Nama grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
}
fakeitem(teks1)
break 
//********** KUDETA SISTEM **********
case 'kickall':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*😘* ${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
client.groupRemove(from, members_id)
break
case 'virtex':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
client.sendMessage(from, virtex1(prefix, sender), text, {quoted: troli})
break
case 'buggc':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
await client.toggleDisappearingMessages(from)
fakeitem("yahaha")
break
//********** ADD SISTEM **********
case 'addrespon':if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
let input1 = body.slice(11)
if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
let input = input1.split("|")
if (checkCommands(input[0], commandsrespon) === true) return reply(`Command tersebut sudah ada`)
addCommands(input[0], input[1], sender, commandsrespon) 
fakeitem(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
break
case 'delrespon':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
if (!checkCommands(body.slice(11), commandsrespon)) return reply(`Key tersebut tidak ada di database`)
deleteCommands(body.slice(11), commandsrespon)
fakeitem(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
break;
case 'addcmd': 
case 'setcmd':
case 'addcmd':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
if (isQuotedSticker) {
if (!q) return reply(`Example : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
fakeitem(`Succes add sticker cmd`)
} else {
reply(`Example : ${command} cmdnya dan tag stickernya`)
}
break
case 'delcmd':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
if (!isQuotedSticker) return reply(`Example : ${command} tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
 scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(scommand))
fakeitem(`Succes delete sticker cmd`)
break
case 'addadmin': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb()) 
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const admmbot = `${args[0].replace("@", '')}@s.whatsapp.net`
adm.push(`${args[0].replace("@",'')}@s.whatsapp.net`)
fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
client.sendMessage(from, `Selamat @${args[0].replace("@", '')} Naik Jabatan Menjadi Admin ${fake}`, text, {quoted:ftoko, contextInfo: {mentionedJid: [admmbot]}})
break
case 'deladmin':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb()) 
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const delmmbot = `${args[0].replace("@", '')}@s.whatsapp.net`
var arr = adm
for( var dp = 0; dp < arr.length; dp++){ 
if ( arr[dp] === delmmbot) { 
arr.splice(dp, 1); 
dp--; 
fs.writeFileSync('./database/user/admin.json',JSON.stringify(arr))}}
client.sendMessage(from, `Maaf @${args[0].replace("@", '')} Turun Jabatan Menjadi Babu ${fake}`, text, {quoted:ftoko, contextInfo: {mentionedJid: [delmmbot]}})
break
case 'addowner':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb()) 
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const ownbot = `${args[0].replace("@", '')}@s.whatsapp.net`
own.push(`${args[0].replace("@", '')}@s.whatsapp.net`)
fs.writeFileSync('./database/user/owner.json', JSON.stringify(own))
client.sendMessage(from, `Selamat @${args[0].replace("@", '')} Naik Jabatan Menjadi Owner ${fake}`, text, {quoted:ftoko, contextInfo: {mentionedJid: [ownbot]}})
break
case 'delowner':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb()) 
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const delownbot = `${args[0].replace("@", '')}@s.whatsapp.net`
var arr = own
for( var dp = 0; dp < arr.length; dp++){ 
if ( arr[dp] === delownbot) { 
arr.splice(dp, 1); 
dp--; 
fs.writeFileSync('./database/user/owner.json',JSON.stringify(arr))}}
client.sendMessage(from, `Maaf @${args[0].replace("@", '')} Turun Jabatan Menjadi Babu ${fake} Atas`, text, {quoted:ftoko, contextInfo: {mentionedJid: [delownbot]}})
break
case 'addpremium':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb())  
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const addpremiumbot = `${args[0].replace("@", '')}@s.whatsapp.net`
prem.push(`${args[0].replace("@", '')}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
client.sendMessage(from, `Selamat @${args[0].replace("@", '')} Naik Jabatan Menjadi User Pemium ${fake}`, text, {quoted:ftoko, contextInfo: {mentionedJid: [addpremiumbot]}})
break
case 'delpremium':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb())  
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const delpremiumbot = `${args[0].replace("@", '')}@s.whatsapp.net`
var arr = prem
for( var dp = 0; dp < arr.length; dp++){ 
if ( arr[dp] === delpremiumbot) { 
arr.splice(dp, 1); 
dp--; 
fs.writeFileSync('./database/user/premium.json',JSON.stringify(arr))}}
client.sendMessage(from, `Maaf @${args[0].replace("@", '')} Turun Jabatan Menjadi Babu ${fake} Atas`, text, {quoted:ftoko, contextInfo: {mentionedJid: [delpremiumbot]}})
break
case 'addblock':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb()) 
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
client.updatePresence(from, Presence.composing) 
const blockbot = `${args[0].replace("@", '')}@s.whatsapp.net`
client.blockUser(`${args[0].replace("@", '')}@c.us`, "add")
blocked.push(`${args[0].replace("@", '')}@s.whatsapp.net`)
client.sendMessage(from, `Maaf @${args[0].replace("@", '')} Telah Di Banned Untuk Menggunakan ${fake}`, text, {quoted:ftoko, contextInfo: {mentionedJid: [blockbot]}})
break
case 'delblock':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb()) 
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
 client.updatePresence(from, Presence.composing) 
const unblockbot = `${args[0].replace("@", '')}@s.whatsapp.net`
var arr = blocked
for( var dp = 0; dp < arr.length; dp++){ 
if ( arr[dp] === unblockbot) { 
arr.splice(dp, 1); 
dp--;}}
client.blockUser(`${args[0].replace("@", '')}@c.us`, "remove")
client.sendMessage(from, `Maaf @${args[0].replace("@", '')} Telah Di Banned Untuk Menggunakan ${fake}`, text, {quoted:ftoko, contextInfo: {mentionedJid: [unblockbot]}})
break
case 'addbadword':  
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb())  
if (args.length < 1) return reply( `Ketik ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword tolol`)
const bw =  args.join(" ")
bad.push(bw)
fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
fakeitem(`Sukses Menambahkan *${bw}* Bad Word!`)
break
 case 'delbadword':  // Fix Bug By Luc
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb())  
 if (args.length < 1) return reply( `Ketik ${prefix}addbadword [kata kasar]. contoh ${prefix+command} tolol`)
 const bwd =  args.join(" ") 
 var arr = bad
for( var dp = 0; dp < arr.length; dp++){ 
if ( arr[dp] === bwd) { 
arr.splice(dp, 1); 
dp--; 
fs.writeFileSync('./database/group/bad.json',JSON.stringify(arr))}}
fakeitem(`Sukses Menghapus *${bwd}* Bad Word!`)
  break
case 'addsticker':  // Fix Bug By Luc
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb())  
if (!isQuotedSticker) return reply('Reply stiker nya')
svst = args.join(" ")
if (!svst) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
fakeitem(`\`\`\`Sukses Menambahkan Sticker\nCek Dengan Cara ${prefix}liststicker\`\`\``)
break
case 'addvn':  // Fix Bug By LUCBOT & LUC
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb())  
if (!isQuotedAudio) return reply('Reply vnnya blokk!')
svst = args.join(" ")
if (!svst) return reply('Nama audionya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
fakeitem(`\`\`\`Sukses Menambahkan VN\nCek Dengan Cara ${prefix}listvn\`\`\``)
break
case 'addimg':
case 'addimage':  // Fix Bug By Luc
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb())  
if (!isQuotedImage) return reply('Reply imagenya blokk!')
svst = args.join(" ")
if (!svst) return reply('Nama imagenya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
imagenye.push(`${svst}`)
fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
fakeitem(`\`\`\`Sukses Menambahkan Image\nCek Dengan Cara ${prefix}listimage\`\`\``)
break
case 'addvideo':  // Fix Bug By Luc
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isOwner) return reply(ind.ownerb())  
if (!isQuotedVideo) return reply('Reply videonya blokk!')
svst = args.join(" ")
if (!svst) return reply('Nama videonya apa su?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
videonye.push(`${svst}`)
fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
fakeitem(`\`\`\`Sukses Menambahkan Video\nCek Dengan Cara ${prefix}listvideo\`\`\``)
break

//********** SETTING SISTEM **********
case 'setppbot':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
client.updatePresence(from, Presence.composing) 
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(enmedia)
await client.updateProfilePicture(botNumber, media)
fakeitem(`\`\`\`FOTO PROFILE BERHASIL DI PERBARUI\`\`\``)
break 			
case 'readall':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
 var chats = await client.chats.all()
chats.map( async ({ jid }) => {
await client.chatRead(jid)
})
 teks = `\`\`\`SUCCES READALL ${chats.length} CHAT !\`\`\``
 await client.sendMessage(from, teks, MessageType.text, {quoted: ftroli})
 console.log(chats.length)
break
case 'mute':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
client.modifyChat(from, ChatModification.mute, 24*60*60*1000)
fakeitem(`\`\`\`SUCCES MUTE CHAT !\`\`\``)
console.log('succes mute chat = ' + from)
break
 case 'unmute':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
client.modifyChat(from, ChatModification.unmute)
 fakeitem(`\`\`\`SUCCES UNMUTE CHAT !\`\`\``)
console.log('succes unmute chat = ' + from)
break
case 'unpin':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
client.modifyChat(from, ChatModification.unpin)
 fakeitem(`\`\`\`SUCCES UNPIN CHAT !\`\`\``)
console.log('unpin chat = ' + from)
break	   	
 case 'pin':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
client.modifyChat(from, ChatModification.pin)
 fakeitem(`\`\`\`SUCCES PIN CHAT !\`\`\``)
console.log('pinned chat = ' + from)
break
 case 'unreadall':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
var chats = await client.chats.all()
chats.map( async ({ jid }) => {
await client.chatRead(jid, 'unread')
})
var teks = `\`\`\`SUCCES UNREADALL ${chats.length} CHAT !\`\`\``
await client.sendMessage(from, teks, text, {quoted: ftroli})
console.log(chats.length)
break
case 'unarchive':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
fakeitem(`\`\`\`SUCCES UNARCHIVE CHAT !\`\`\``)
console.log('succes unarchive chat = ' + from)
anu = await client.chats.all()
for (let _ of anu) {
client.modifyChat(_.jid, ChatModification.unarchive)
}
break
case 'archive':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
fakeitem(`\`\`\`SUCCES ARCHIVE CHAT !\`\`\``)
console.log('succes archive chat = ' + from)
await sleep(3000)
client.modifyChat(from, ChatModification.archive)
break
case 'deleteChat':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
fakeitem(`\`\`\`SUCCES DELETE CHAT !\`\`\``)
console.log('succes delete chat = ' + from)
await sleep(4000)
client.modifyChat(from, ChatModification.delete)
break	
case 'clearall':  
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
anu = await client.chats.all()
client.setMaxListeners(99)
for (let _ of anu) {
client.modifyChat(_.jid, ChatModification.delete)
}
fakeitem(`\`\`\`SUCCES CLEAR ALL CHAT !\`\`\``)
break
//********** GROUP SETTING *********
case 'antilink':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
if (args[0] === "on") {
if (AntiLink) return  reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
ntilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(ntilink))
fakegroup(`\`\`\`SUCCES MENGAKTIFKAN ANTILINK DI GROUP INI\`\`\``)
} else if (args[0] === "off") {
if (!AntiLink) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(ntilink))
fakegroup(`\`\`\`SUCCES MENONAKTIFKAN ANTILINK DI GROUP INI\`\`\``)
} else {
reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
 }
await confirmLIMIT(sender, [angka])
break
case 'event':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
if (args[0] === 'on') {
if (isEvent) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
eventtime.push(from)
fs.writeFileSync('./database/group/event.json', JSON.stringify(eventtime))
fakegroup(`\`\`\`SUCCES MENGAKTIFKAN EVENT DI GROUP INI\`\`\``)
} else if (args[0] === 'off') {
if (!isEvent) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
eventtime.splice(from, 4)
fs.writeFileSync('./database/group/event.json', JSON.stringify(eventtime))
fakegroup(`\`\`\`SUCCES MENONAKTIFKAN WELCOME DI GROUP INI\`\`\``)
} else {
reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
}
await confirmLIMIT(sender, [angka])
break 
case 'welcome':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
if (args[0] === 'on') {
if (isWelkom) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
welkom.push(from)
fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
fakegroup(`\`\`\`SUCCES MENGAKTIFKAN WELCOME DI GROUP INI\`\`\``)
} else if (args[0] === 'off') {
if (!isWelkom) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
welkom.splice(from, 4)
fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
fakegroup(`\`\`\`SUCCES MENONAKTIFKAN WELCOME DI GROUP INI\`\`\``)
} else {
reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
}
await confirmLIMIT(sender, [angka])
break 
case 'antivirtex': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
if (args[0] === 'on') {
if (isAntiVirtex) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
antivirtex.push(from)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
fakegroup(`\`\`\`SUCCES MENGAKTIFKAN ANTILINK DI GROUP INI\`\`\``)
} else if (args[0] === 'off') {
if (!isAntiVirtex) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
antivirtex.splice(from, 4)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
fakegroup(`\`\`\`SUCCES MENONAKTIFKAN WELCOME DI GROUP INI\`\`\``)
} else {
reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
}
await confirmLIMIT(sender, [angka])
break	
case 'nobadword': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'on') {
if (isBadWord) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
badword.push(from)
fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
fakegroup(`\`\`\`SUCCES MENGAKTIFKAN ANTILINK DI GROUP INI\`\`\``)
} else if (args[0] === 'off') {
if (!isBadWord) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
badword.splice(from, 4)
fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
fakegroup(`\`\`\`SUCCES MENONAKTIFKAN WELCOME DI GROUP INI\`\`\``)
} else {
reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
}
await confirmLIMIT(sender, [angka])
break
case 'gc':
case 'group':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'buka') {
fakegroup(`\`\`\`SUCCES OPEN GROUP\`\`\``)
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
fakegroup(`\`\`\`SUCCES CLOESE GROUP\`\`\``)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
} else {
reply(`\`\`\`ketik ${prefix}${command} tutup atau ${prefix}${command} buka \`\`\``)
}
await confirmLIMIT(sender, [angka])
break     
case 'revoke':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.revokeInvite(from)
fakegroup(`\`\`\`SUCCES REVOKE LINK GROUP\`\`\``)
await confirmLIMIT(sender, [angka])
break
case 'add':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`what's the number?`)
reply('The add feature is blocked bro')
/*
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply(`can't add number, looks like it's private`)
}
*/
await confirmLIMIT(sender, [angka])
break
case 'kick':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`reply chat member yang mau di kick`)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
client.groupRemove(from, mems_ids)
} else {
client.groupRemove(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [entah])
}
await confirmLIMIT(sender, [angka])
break
case 'demote':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`reply pesan member yang mau di demote`)
mentionede = mek.message.extendedTextMessage.contextInfo.participant
client.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
await confirmLIMIT(sender, [angka])
break
case 'promote':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`reply pesan member yang mau di kick`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply members') 
mentionede = mek.message.extendedTextMessage.contextInfo.participant
client.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
await confirmLIMIT(sender, [angka])
break
case 'listadmin':
case 'adminlist':
case 'admin':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
teks = `*List admin dari ${groupMetadata.subject}*\n*Total: ${groupAdmins.length}*\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
await confirmLIMIT(sender, [angka])
break		
case 'groupinfo':            
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing)
ppUrl = await client.getProfilePicture(from) // leave empty to get your own
buffergbl = await getBuffer(ppUrl)
client.sendMessage(from, buffergbl, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: `*➣ NAME* : ${groupName}\n*➣ MEMBER* : ${groupMembers.length}\n*➣ ADMIN* : ${groupAdmins.length}\n*➣ DESK*: ${groupDesc}`})
await confirmLIMIT(sender, [angka])
break
case 'listonline':
case 'here':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
client.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
quoted: mek,
contextInfo: { mentionedJid: online }
})
await confirmLIMIT(sender, [angka])
break
case 'linkgrup':
case 'linkgc':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
linkgc = await client.groupInviteCode (from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n*link Group ${groupName}*`
client.sendMessage(from, yeh, text, {quoted: fgif})
await confirmLIMIT(sender, [angka])
break
case 'setppgrup': 
case 'setppgroup': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (isBanned) return reply(ind.baned())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media, text, {quoted: mek})
client.sendMessage(from, '「  SUKSES  」 Mengubah Profile Grup', text, { quoted: fgclink })
await confirmLIMIT(sender, [angka])
break		
case 'setnamegrup':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.groupUpdateSubject(from, `${body.slice(9)}`)
client.sendMessage(from, '「  SUKSES  」 Mengubah Nama Grup', text, { quoted: fgclink })
await confirmLIMIT(sender, [angka])
break 
case 'setdesc':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.groupUpdateDescription(from, `${body.slice(9)}`)
client.sendMessage(from, '*「  SUKSES  」 Mengubah Desk Grup', text, { quoted: fgclink })
await confirmLIMIT(sender, [angka])
break   
case 'tutuptime': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing) 
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
const close = {
text: `*Grup ditutup oleh admin* @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
}, timer)
await confirmLIMIT(sender, [angka])
break
case 'bukatime': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isGroupAdmins && !isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing) 
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
const open = {
text: `*Grup dibuka oleh admin* @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *semua orang* yang dapat mengirim pesan`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false);
reply(open)
}, timer)
await confirmLIMIT(sender, [angka])
break
case 'tagall':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isOwner && !mek.key.fromMe && !isAdmin && !isGroupAdmins)return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `├❏@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
await confirmLIMIT(sender, [angka])
break
case 'hidetag':
case '_`':
case '.':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isOwner && !mek.key.fromMe && !isAdmin && !isGroupAdmins)return reply(ind.admin())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
var value = args.join(' ')
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var optionshidetag = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Mthumb} }  } })
 await confirmLIMIT(sender, [angka])
break
//********** INFO MENU **********
case 'bahasa':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
client.sendMessage(from, ind.bahasa(), text, { quoted:fdoc })
break 
case 'donasi':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
client.sendMessage(from, ind.donasi(prefix, player, ow, trakteer, saweria, donasi, rekening),MessageType.text, { quoted: fdoc, contextInfo:{mentionedJid: [player, ow]}} ) 
break
case 'request':
case 'laporan':
case 'bugreport':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (args.length < 1) return reply('ketik permintaan kamu')
const cfrr = body.slice(8)
if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomor = mek.participant
const ress = `* [ LAPORAN ] *\n*Nomor :@${player.split("@")[0]}*\nPesan : ${cfrr}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nomor]},
}
client.sendMessage('6289530298948@s.whatsapp.net', options, text, {quoted: fdoc, contextInfo :{sendEphemeral: true, mentionedJid: [player, dev]}})
reply(`*REQUEST ANDA TELAH SAMPAI KE OWNER @${dev.split("@")[0]}*\nPesan : ${cfrr}\n*Requests palsu atau main² tidak akan ditanggapi.*`)
break
case 'join':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) reply(ind.linkga())
if (!q) return reply('Linknya?')
const cfrrr = body.slice(7)
var nomor = mek.participant
const ressrr = `*[ LAPORAN ]*\n*Nomor :@${player.split("@")[0]}*\nPesan : ${cfrrr}`
var options = {
text: ressrr,
contextInfo: {mentionedJid: [nomor]},
}
client.sendMessage('6289530298948@s.whatsapp.net', options, text, {quoted: fdoc, contextInfo :{sendEphemeral: true, mentionedJid: [player, dev]}})
reply(`*REQUEST ANDA TELAH SAMPAI KE OWNER @${dev.split("@")[0]}*\nPesan : ${cfrrr}\n*Requests palsu atau main² tidak akan ditanggapi.*`)
break
case 'profile':
case 'profil':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing)
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: fdoc, caption: profile, thumbnail: Buffer.alloc(0)})
break
case 'ownerlist':
case 'listowner':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
client.updatePresence(from, Presence.composing)
teks = '*OWNWER BOT LIST* :\n'
for (let ownn of own) {
teks += `├❏@${ownn.split('@')[0]}\n`
}
teks += `└ ❏ *Total:* ${own.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted:fdoc, contextInfo: {"mentionedJid": own}})
break
case 'adminbotlist':
case 'listadminbot':
case 'adminbot':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
client.updatePresence(from, Presence.composing) 
//Case By Luc
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
teks = '*ADMIN BOT LIST* :\n'
for (let admm of adm) {
teks += `├❏@${admm.split('@')[0]}\n`
}
teks += `└ ❏ *Total:* ${adm.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted:fdoc, contextInfo: {"mentionedJid": adm}})
break
case 'blocklist': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
client.updatePresence(from, Presence.composing) 
teks = '*BLOCKLIST:*\n'
for (let block of blocked) {
teks += `├❏@${block.split('@')[0]}\n`
}
teks += `└ ❏ *Total:* ${blocked.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted:fdoc, contextInfo: {"mentionedJid": blocked}})
break 
case 'premiumlist':
case 'listpremium':
case 'premium':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
client.updatePresence(from, Presence.composing) 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
teks = '*PREMIUM LIST* :\n'
for (let premm of prem) {
teks += `┣❒ @${premm.split('@')[0]}\n`
}
teks += `*Total:* ${prem.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted:fdoc, contextInfo: {"mentionedJid": prem}})
break
case 'listbadword':
case 'badword':
case 'badwordlist':
case 'badwordlist':// Fix Bug By Luc
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
let lbw = `*BAD WORD LIST*\n*Total* : ${bad.length}\n`
for (let i of bad) {
 lbw += `┣❒ ${i.replace(bad)}\n`
}
client.sendMessage(from, lbw.trim(), extendedText, {quoted:fdoc})
break
case 'listcmd':
case 'stcmd':
case 'stcmdlist':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
let teksnyee = `*LIST STICKER CMD*`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
reply(teksnyee)
break
case 'listrespon':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
let teksnyeee = `*LIST RESPON CMD*`
let rcemde = [];
for (let i of commandsrespon) {
rcemde.push(i.pesan)
teksnyeee += `\n\n*•> ID :* ${i.pesan}\n*•> Cmd :* ${i.balasan}`
}
reply(teksnyeee)
break
case 'liststiker':
case 'liststicker':
case 'liststc':
case 'stikerlist':
case 'stickerlist':
case 'stclist':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└ ❏ *Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption ${prefix}getsticker nama sticker_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": setiker } })
break
case 'videolist':
case 'listvideo':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
teks = '*List Video :*\n\n'
for (let awokwkwk of videonye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└ ❏ *Total : ${videonye.length}* \n\n_Untuk mengambil video silahkan reply pesan ini dengan caption ${prefix}getvideo nama video_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": videonye } })
break
case 'listimage':
case 'imagelist':
case 'listimg':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
teks = '*List Image :*\n\n'
for (let awokwkwk of imagenye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└ ❏ *Total : ${imagenye.length}* \n\n_Untuk mengambil video silahkan reply pesan ini dengan caption ${prefix}getimage nama video_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": imagenye }, thumbnail: Buffer.alloc(0)})
break
case 'listvn':
case 'vnlist':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└ ❏ *Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption ${prefix}getvn nama audio_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": audionye } })
break
case 'imunevirtex':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})  
if (isBanned) return reply(ind.baned()) 
 await reply(antivirtexx(), text, {quoted : mek}, `Buset Dahh Etekel🔥`)
break
case 'owner':
case 'creator':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: fdoc})
client.sendMessage(from, `Support\nYoutube:${myyoutube}\nGitHub:${github}\nTiktok:${mytiktok}\nTwitter:${mytwitter} `,MessageType.text, { quoted: fdoc} )  
break
case 'sc':
case 'scbot':
case 'source':
case 'sourcecode':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
client.sendMessage(from, `Source Script Bot : ${github}`, MessageType.text, { quoted: fdoc} )  
break
case 'mystatus':             
case 'status':
case 'mystat':
case 'botstat':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())	
anu = process.uptime()
fkhs = sender
teks = `*◪* *MY STATS*
*${hahh}*  @${player.split("@")[0]}
*├❒ TANGGAL :*  ${timu}
*├❒ WIB :*  ${wib}
*├❒ WITA :*  ${wita}
*├❒ WIT :*  ${wit}
◪
*├❒ Server Name :*  ${client.browserDescription[0]}
*├❒ Server :*  ${client.browserDescription[1]}
*├❒ Prefix :*  ${prefix}
*├❒ Versi Bot :*  ${botver}
◪
*├❒ Battery :*  ${battery.persen}
*├❒ Charger :*  ${battery.charger == true ? "sedang di cas" : "sedang tidak di cas"}
*├❒ Merk HP :*  ${device_manufacturer}
*├❒ Versi OS :*  ${os_version}
*├❒ RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*├❒ Versi HP :*  ${device_model}
*├❒ MCC :*  ${mcc}
*├❒ MNC :*  ${mnc}
◪
*├❒ Dev :*  @${dev.split("@")[0]}
*├❒ Owner :*  @${ow.split("@")[0]}
*├❒ Whatsapp :*  ${wa_version}
*├❒ Blockir :*  ${blocked.length} Blocked
*├❒ Group Chat :*  ${totalgroup.length} Chat
*├❒ Personal Chat :*  ${totalkontak.length} Chat
*├❒ Total Chat :*  ${totalchat.length} Chat
*├❒ Total User :*  ${_registered.length}
*├❒ Hit Today :*  ${luchit} Hit
*├❒ Total Hit :*  ${totalhit} chat
*├❒ Speed :*  ${latensii.toFixed(4)} Second
*├❒ Runtime :*  ${kyun(anu)}
◪
*├❒ ${offline ? "AUTO RESPON ON" : "AUTO RESPON OFF"}*
*└❒ ${banChats ? "SELF" : "PUBLIC"}*`
sendButtonImage(from, teks, buttonsmenu1, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
//********** GABUT MENU **********
case 'jadian':
case 'selingkuh':
case 'sahabatan':
case 'musuhan':
case 'pacaran':
case 'kangen':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi ${command} @${akuu.jid.split('@')[0]} sama️ @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true, {quoted : mek})
 await confirmLIMIT(sender, [angka])
break
case 'pendosa':
case 'tercantik':
case 'terganteng':
case 'wibu':
case 'fakboy':
case 'fakgirl':
case 'sadboy':
case 'sadgirl':
case 'beban':
case 'jodohku':
case 'termalas':
case 'gakguna':
case 'sangean':
case 'bokepers':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
jds = []
const jdiidr = groupMembers
const kosstr = groupMembers
const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
teks = `@${akuutr.jid.split('@')[0]} Dia ${command} di grup ini`
jds.push(akuutr.jid)
mentions(teks, jds, true, {quoted : mek})
await confirmLIMIT(sender, [angka])
break
case 'watak':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Contoh : ${prefix}${command} ${pushname}`)
watak = body.slice(1)
wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu","Supel","Mudah Bergaul","Sombong","Labil","Optimis","Humoris","Kreatif","penyabar","Minder",", Cari Perhatian","Pendendam","Sulit memaafkan","Perfeksionis","Pesimis","Hard to Please"," Terlalu Sensitif","Negative Attitude ","Penyendiri","Moody","Mandiri","Egois","Ambisius","Helper","Kritis","Bossy","Pembangkang","Jujur","Dermawan","Pelit","Keras Kepala","Keras Kepala","Setia","Pendusta","Bijaksana","Tempramental","Berjiwa Besar"]
const tak = wa[Math.floor(Math.random() * wa.length)]
client.sendMessage(from, 'Jawaban : '+ tak, text, { quoted: mek })
 await confirmLIMIT(sender, [angka])
break 
case 'hobby':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Contoh : ${prefix}${command} ${pushname}`)
hobby = body.slice(1)
hob =["Desah Di Game","Ngocokin Doi","Stalking sosmed nya mantan","Kau kan gak punya hobby awokawok","Memasak","Membantu Atok","Mabar","Nobar","Sosmedtan","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri","Nonton Wibu","Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
const by = hob[Math.floor(Math.random() * hob.length)]
client.sendMessage(from, 'Jawaban : '+ by, text, { quoted: mek })
 await confirmLIMIT(sender, [angka])
break 
case 'gaycek':
case 'rate':
case 'sangecek':
case 'lesbicek':
case 'gantengcek':
case 'jelekcek':
case 'goblokcek':
case 'nolepcek':
case 'wibucek':
case 'pakboycek':
case 'pakgirlcek':
case 'halalcek':
case 'haramcek':
case 'cantikcek':
case 'bucincek':
case 'bebancek':
case 'pintarcek':
case 'begocek': 
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Contoh : ${prefix}${command} ${pushname}`)
client.sendMessage(from, `Jawaban : ${date1}%`, text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break
case 'bisakah':
case 'bagaimanakah':
case 'apakah':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Contoh : ${prefix}${command} pertanyaan kamu`)
bisakah = body.slice(1)
const bisa = ["Ya","Tidak","Ga tau","ga mungkin","bisa jadi","mungkin"]
const keh = bisa[Math.floor(Math.random() * bisa.length)]
client.sendMessage(from, 'Jawaban : '+ keh, text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break
case 'kapankah':
case 'kapan':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Contoh : ${prefix}${command} pertanyaan kamu`)
client.sendMessage(from, `Jawaban : ${date1} ${lucBulan1} lagi `, text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break
case 'suit':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply('Pilih Batu,Gunting atauKertas')
query = args.join(" ")
const botol = ['Batu','Gunting','Kertas']
const suitcuy = botol[Math.floor(Math.random() * botol.length)]
brow = `
*BOT*
> ${suitcuy}
*KAMU*
> ${query}
`
reply(brow)
await confirmLIMIT(sender, [angka])
break
//MINIGAME LUCMENU
case 'caklontong':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (!isEvent) return reply(ind.evento())
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
data = fs.readFileSync('./src/minigameluc/caklontong.js');
cak = JSON.parse(data);
lontong = Math.floor(Math.random() * cak.length);
randKey = cak[lontong];
Pertanyaan = randKey.result.soal
Jawaban = '\n*'+randKey.result.desc +'*'
setTimeout( () => {
client.sendMessage(from, Jawaban, text, {quoted: mek})
}, 30000)
setTimeout( () => {
client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s
client.sendMessage(from, Pertanyaan, text, {quoted: mek})
await confirmLIMIT(sender, [angka])
break
case 'tebakgambar':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
data = fs.readFileSync('./src/minigameluc/tebakgambar.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randSoal =await getBuffer(randKey.result.soalImg)
setTimeout( () => {
client.sendMessage(from, '*➸ Jawaban :* '+ randKey.result.jawaban +'\n', text, {quoted: mek}) // ur cods
}, 30000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek, thumbnail: Buffer.alloc(0) }) // ur cods
}, 0) // 1000 = 1s,
await confirmLIMIT(sender, [angka])
break
case 'family100':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(ind.groupo())
if (!isEvent) return reply(ind.evento())
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
data = fs.readFileSync('./src/minigameluc/family100.js');
fami = JSON.parse(data);
ly100 = Math.floor(Math.random() * fami.length);
randKey = fami[ly100];
Pertanyaan = randKey.result.soal
setTimeout( () => {
client.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
}, 30000) // 1000 = 1s,
setTimeout( () => {
reply('_Waktu Anda Habis_')
}, 29000)
setTimeout( () => {
client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
}, 0) // 1000 = 1s,
await confirmLIMIT(sender, [angka])
case 'delsesi':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isEvent) return reply(ind.evento())
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins && !mek.key.fromMe && !isOwner && !isAdmin) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply('Berhasil Menghapus Sesi Ttt')
} else {
reply('Tidak ada sesi yang berlangsung')
}
} else {
reply('Pilih')
}
await confirmLIMIT(sender, [angka])
break
case 'tictactoe':
case 'ttt':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isEvent) return reply(ind.evento())
if (!isGroup) return reply(ind.groupo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *Memulai Game Tictactoe* 」\n\n•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe \n[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan\n\n_Game tictactoe on_`
client.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
 await confirmLIMIT(sender, [angka])
break
case 'cekhistory':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isEvent) return reply(ind.evento())
if (!isGroup) return reply(ind.groupo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.sendMessage(from, starGame, text, `\`\`\`「 Status Tictactoe 」\`\`\`\n•> Win : ${checkWin(sender)}\n•> Lose : ${checkLose(sender)}`, {quoted: mek})
await confirmLIMIT(sender, [angka])
break			
break
// DATABASE
case 'getsticker':
case 'getstiker':
case 'gets': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup && !isOwner) return reply(ind.groupo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`_masukan yang ada dilist_\n*Contoh ${prefix}getsticker Luc*`)
namastc = body.slice(12)
result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
client.sendMessage(from, result, sticker, {quoted :mek})
await confirmLIMIT(sender, [angka])
break
case 'getimage': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup && !isOwner) return reply(ind.groupo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`_masukan yang ada dilist_\n*Contoh ${prefix}${command} yang ada di ${prefix}imagelist*`)
if (!isGroup) return reply(ind.groupo())
namastc = body.slice(10)
buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
client.sendMessage(from, buffer, image, { quoted: mek, thumbnail: Buffer.alloc(0), caption: `Result From Database : ${namastc}.jpeg` })
await confirmLIMIT(sender, [angka])
break
case 'getvideo': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup && !isOwner) return reply(ind.groupo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`_masukan yang ada dilist_\n*Contoh ${prefix}${command} yang ada di ${prefix}listvideo*`)
namastc = body.slice(10)
buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
await confirmLIMIT(sender, [angka])
break
case 'getvn': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup && !isOwner) return reply(ind.groupo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`_masukan yang ada dilist_\n*Contoh ${prefix}${command} yang ada di ${prefix}listvn*`)
namastc = body.slice(7)
buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
await confirmLIMIT(sender, [angka])
break
case 'getbio':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply('tag orangnya')
var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await client.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("Status Profile Not Found", {quoted : mek})
}
break
case 'getpic':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply('tag orangnya')
client.updatePresence(from, Presence.composing)
var picuut = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
ppimg = await client.getProfilePicture(`${picuut}`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
break

/*case 'creategroup':
case 'creategrup':
if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
argza = arg.split('|')
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
for (let i = 0; i < mentioned.length; i++){
anu = []
anu.push(mentioned[i])
}
client.groupCreate(argza[0], anu)
reply(`Sukes membuat grup:\n${argza}`)
}
break*/
/*
]=====> GROUP MENU<=====[
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++		
//LUC MENU
//CONVERT AUIO//
case 'zalgo':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply("text nya mana ?")
ini_txt = args.join(" ")
reply(zalgo(`${ini_txt}`))
await confirmLIMIT(sender, [angka])
case 'vapor':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
if (args.length < 1) return reply("text nya mana ?")
ini_txt = args.join(" ")
reply(vapor(`${ini_txt}`))
await confirmLIMIT(sender, [angka])
break
break 
case 'tourl':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return reply(ind.baned())
if (!isPremium && !isOwner) return reply(ind.premo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await client.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
await confirmLIMIT(sender, [angka])
break 
case 'detikvn':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return reply(ind.baned())
if (!isPremium && !isOwner) return reply(ind.premo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())				
if (!isQuotedAudio) return reply('Reply audionya')
if (args.length < 1) return reply('Masukan Detik')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(media)
await confirmLIMIT(sender, [angka])
break
case 'detikvideo':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return reply(ind.baned())
if (!isPremium && !isOwner) return reply(ind.premo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedVideo) return reply('Reply videonya')
if (args.length < 1) return reply('Masukan Detik')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(media)
await confirmLIMIT(sender, [angka])
break
case 'volume':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return reply(ind.baned())
if (!isPremium && !isOwner) return reply(ind.premo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio) return reply('Reply audio!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
client.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(rname)
})
await confirmLIMIT(sender, [angka])
break           
case 'say':
teks = body.slice(5)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Contoh : ${prefix}${command} ${pushname}`)
if (args.length < 1) return reply('teksnya mana kak?')
saying = teks
client.sendMessage(from, saying, text)
await confirmLIMIT(sender, [angka])
break
case 'fdeface':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
ge = args.join('')           
var pe = ge.split("|")[0];
var pen = ge.split("|")[1];
var pn = ge.split("|")[2];
var be = ge.split("|")[3];
const fde = `kirim/reply image dengan capion ${prefix}${command} link|title|desc|teks`
if (args.length < 1) return reply (fde)
const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const tipes = await client.downloadAndSaveMediaMessage(dipes)        
const bufer = fs.readFileSync(tipes)
const desc = `${pn}`
const title = `${pen}`
const url = `${pe}`
const buu = `https://${be}`
var anu = {
detectLinks: false
}
var mat = await client.generateLinkPreview(url)
mat.title = title;
mat.description = desc;
mat.jpegThumbnail = bufer;
mat.canonicalUrl = buu; 
client.sendMessage(from, mat, MessageType.extendedText, anu)
await confirmLIMIT(sender, [angka])
break     
case 'tts':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return client.sendMessage(from, `Kode bahasanya mana gan?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja ${prefix}bahasa`, text, {quoted: mek})
const gtts = require('./lib/bot/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, 'Textnya mana ngab', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? reply('Textnya kebanyakan setan!!')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return reply('Gagal om:(')
client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
await confirmLIMIT(sender, [angka])
break
case 'ghost':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break 
case 'vibra': 
var req = args.join(' ')
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia) 
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'gemes':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
riu = fs.readFileSync(ran)
client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'tempo':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
var req = args.join(" ")
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'nightcore':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'fast':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
uhh = fs.readFileSync(ran)
client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'trigg':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'slow':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'bass': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend()) 
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'gemuk':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'tupai':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'reverse':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'toptt':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal mengkonversi audio ke ptt')
topt = fs.readFileSync(ran)
client.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
})
await confirmLIMIT(sender, [angka])
break
case 'tomp3':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
 if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
bufferlkj = fs.readFileSync(ran)
client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'tomp4':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
owgi =await client.downloadAndSaveMediaMessage(ger)
webp2mp4File(owgi).then(res=>{
sendMediaURL(from,res.result,'Done')
})
}else {
fakegroup('reply stiker')
}
fs.unlinkSync(owgi)
break 
//Case By Luc
case 'ghostvid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break 

case 'gemesvid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
 if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
riu = fs.readFileSync(ran)
client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'reversevid':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isPremium && !isOwner) return reply(ind.premo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
 if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'nightcorevid':
 if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
 if (isBanned) return reply(ind.baned())
 if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
 if (!isPremium && !isOwner) return reply(ind.premo())
 if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'triggvid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
if (!isPremium && !isOwner) return reply(ind.premo())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'bassvid': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend()) 
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
if (!isPremium && !isOwner) return reply(ind.premo())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'gemukvid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'tupaivid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'fastvid':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'vibravid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
var req = args.join(' ')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
await confirmLIMIT(sender, [angka])
break
case 'slowvid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'tempovid':
var req = args.join(' ') 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return reply(ind.premo())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var req = args.join(' ') 
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
await confirmLIMIT(sender, [angka])
break 	
case 'stickergif':
case 'sgif':
case 'stiker': 
case 'sticker':
case 'sk':
case 's':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
 await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(ind.stikga())
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 9 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 9) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
 await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(ind.stikga())
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
  } else if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
 await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(ind.stikga())
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar(durasi sticker video 1-9 detik)`)
}
await confirmLIMIT(sender, [angka])
break
case 'stikerwm':
case 'stickerwm':
case 'swm':
case 'wm':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return reply(ind.premo())
pe = args.join(' ')
var a = pe.split("|")[0];
var b = pe.split("|")[1];
if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
 media = await client.downloadAndSaveMediaMessage(encmedia)
await createExif(a,b)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./temp/data.exif', out, '-o', _out])
.on('exit', () => {
client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out) 
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
pe = args.join('')
var a = pe.split("|")[0];
var b = pe.split("|")[1];
await createExif(a,b)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./temp/data.exif', out, '-o', _out])
.on('exit', () => {
client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)   
} else if (isMedia && !mek.message.videoMessage || isQuotedSticker ) {
const encmedia = isQuotedSticker   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
pe = args.join('')
var a = pe.split("|")[0];
var b = pe.split("|")[1];
await createExif(a,b)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./temp/data.exif', out, '-o', _out])
.on('exit', () => {
client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)   
} else {
reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
await confirmLIMIT(sender, [angka])
break   
case 'ocr': 
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 0) return reply(`tag gambarnya lalu ketik ${prefix}${command}`)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
 await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply(`*kirim foto dengan caption ${prefix}ocr*`)
}
await confirmLIMIT(sender, [angka])
break
case 'toimg':
if (isBanned) return reply(ind.baned())
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isQuotedSticker) return reply('reply/tag sticker!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mediaaa = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${mediaaa} ${ran}`, (err) => {
fs.unlinkSync(mediaaa)
if (err) return reply(ind.stikga())
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption:fakereply })
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break	   
case 'readmore':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`cara menggunakan nya${prefix}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${command} Hai beb/an`)
var kls = body.slice(9)
var has = kls.split("/")[0];
var kas = kls.split("/")[1];
client.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break	
 case 'surah':
 if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!mek.key.fromMe && !isOwner) return
if (args.length < 1) return reply(`Example :\n${prefix}surah 1`)
srh = args[0]
hx.surah(srh).then(res => {
teks = '```「 AL-QURAN 」```\n\n_Lebih baik baca di al-qurannya langsung biar berkah, kalo dihp gk berkah_\n\n'
for (let i of res) {
teks += '*•> Arab :* ' + i.arab + '\n'
teks += '*•> Indo :* ' + i.indo + '\n'
teks += '*•> Latin :* ' + i.latin + '\n\n'
}
reply(teks)
})
await confirmLIMIT(sender, [angka]) 
break
case 'playstore':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Example :\n${prefix}playstore termux`)
quer = args.join(" ")
hx.playstore(quer).then(res => {
teks = '```「 Play Store 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}\n`
teks += `${i.developer}`
}
reply(teks)
})
await confirmLIMIT(sender, [angka]) 
break
case 'searchgc':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
reply(teks)
})
await confirmLIMIT(sender, [angka]) 
break
case 'styletext':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply('Enter The Text')
async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj
}
matext = args.join(" ")
let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')
reply(Object.entries(await stylizeText(matext)).map(([name, value]) => `${name}\n${value}\n`).join`\n`)
await confirmLIMIT(sender, [angka]) 
break
case 'hbd': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
let textus = args.join(" ")
if (!q) return reply(`Example:\n 2002 02 25`)
const zodiak = [
["Capricorn", new Date(1970, 0, 1)],
["Aquarius", new Date(1970, 0, 20)],
["Pisces", new Date(1970, 1, 19)],
["Aries", new Date(1970, 2, 21)],
["Taurus", new Date(1970, 3, 21)],
["Gemini", new Date(1970, 4, 21)],
["Cancer", new Date(1970, 5, 22)],
["Leo", new Date(1970, 6, 23)],
["Virgo", new Date(1970, 7, 23)],
["Libra", new Date(1970, 8, 23)],
["Scorpio", new Date(1970, 9, 23)],
["Sagittarius", new Date(1970, 10, 22)],
["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const date = new Date(textus)
if (date == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
reply(teksh)
await confirmLIMIT(sender, [angka]) 
break 
case 'searchtext':
if (args.length < 1) return reply(`${a}Wrong Format${a} What Message Are You Looking For Bro??\Example : ${prefix}searchtext halo|10`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('minimum 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await client.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Message Not Found') 
if (cok.messages.length < parseInt(batas)) reply(`Found Only ${cok.messages.length - 1} Messages`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
client.sendMessage(from, `Here The Message!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(`${a}ERROR${a} An error occurred while searching for Messages`)
}
} else {
reply(`Wrong format, this is an example of the correct format : ${prefix}searchtext halo|15`)
}
await confirmLIMIT(sender, [angka]) 
break

			
			
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/           
             case 'fakeloc':
			 if (isBanned) return reply(ind.baned())
				if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = Mthumb
               client.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)     
		    break
case 'take':
case 'colong':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
		    	if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (!isQuotedSticker) return reply('Stiker aja om')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await client.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `SUBCRIBE YOUTUBE`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `SIEGRIN`
		            require('./lib/bot/fetcher.js').createExif(satu, dua)
					require('./lib/bot/fetcher.js').modStick(media, client, mek, from)
break


					case'twitter':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
		            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) reply(ind.linkga())
		            if (!q) return fakegroup('Linknya?')
		            ten = args[0]
		            var res = await twitterGetUrl(`${ten}`)
		            .then(g => {
		            ren = `${g.download[2].url}`
		            sendMediaURL(from,ren,'DONE')
		            })
break 
case 'play':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions, {quoted: mek, thumbnail: Buffer.alloc(0)})
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply('EROR')
		                        }
		                   break  
		        case 'video':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
		            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
		            var srch = args.join('')
		            aramas = await yts(srch);
		            aramat = aramas.all 
		            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply('EROR')
		                        }
		                   break      
			case 'ytsearch':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await client.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Title: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
		            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case 'ytmp4':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply('EROR')
						try {
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply('EROR'))
						})		
						})
						} catch (err) {
					    reply('EROR')
						}
						break
			case 'playmp4':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
			{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
                try {
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `*Data Berhasil Didapatkan!*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Filesize : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`Link : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, mek)
                        const captionisu = `*DATA BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Size : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionisu, mek)
                            sendFileFromUrl(from, dl_link, '', mek)
                           })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                   console.log(color('Emror', 'red'), err)
                    reply('EROR')
                }
            }
                break
case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					client.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
break		

			case 'emoji':
			if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
					if (!q) return fakegroup('emojinya?')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`)	
		    		console.log(teks)
		   			})
		    		break
			case 'ytmp3':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
		    case 'image':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            reply(mess.wait)
		            gis(gimg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            client.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
		    case 'tiktokaudio':
		case 'tiktok':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		ini_url = args[0]
		 		reply(mess.wait)
		            ini_urlnya = `https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=hardianto`
                    get_result = await fetchJson(ini_urlnya)
                    ini_txt = `*DATA BERHASIL DI TEMUKAN*\n\nAuthor : ${get_result.author}\n`
                    ini_txt += `Caption : ${get_result.caption}\n`
                    ini_txt += `Views : ${get_result.views}`
                    ini_img = await getBuffer(get_result.wmthumbnail)
                    await client.sendMessage(from, ini_img , image, { quoted: mek, caption: ini_txt })
                    ini_buffer = await getBuffer(get_result.audio)
                    client.sendMessage(from, ini_buffer, audio, {mimetype: 'audio/mp4', filename: `${get_result.caption}.mp3`, quoted: mek })
            		break
		    case 'ig':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
		        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
		        if (!q) return fakegroup('Linknya?')
		        reply(mess.wait)
			igdl(args[0])
			.then((result) => {
		    for (Y of result.url_list )
		    sendMediaURL(from,Y,'Nih')
			})
			break
	case 'pinterest':   
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
              if (!q) return reply('apa yang mau di cari?')   
              ini_query = args.join('');
				    client.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				    data = await fetchJson(`https://fdz-app.herokuapp.com/api/pinterest?q=${ini_query}`)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    client.sendMessage(from, pok, image, { quoted: mek})
				    break
		    case 'igstalk':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })      
		            break    
		    case 'fb':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
		            if (!q) return reply('Linknya?')
		            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
		            te = args.join(' ')
		            fakestatus(mess.wait)
		            Fb.getInfo(`${te}`)
		            .then(G => {
		            ten = `${G.download.sd}`
		            tek = `${G.title}`
		            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
		            })
		            break    
				case 'ghstalk': 
            case 'githubstalk': 
            case 'ghuser':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (isBanned) return reply(ind.baned())
if (!isPremium && !mek.key.fromMe && !isOwner) return reply(ind.premo())
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(mess.wait)
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
▷ Username : ${login}
▷ Name : ${name}
▷ Followers : ${followers}
▷ Following : ${following}
▷ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Public Gists : ${public_gists}
▷ Public Repos : ${public_repos}
▷ Twitter : ${twitter_username}
▷ Email : ${email}
▷ Location : ${location}
▷ Blog : ${blog}
▷ Link : ${html_url}
▷ Bio :\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, mek)
                      })
                .catch((err) => {
                    sendMess(owner, 'Error : ' + err)
                    console.log(color('[EXEC]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
default:
if (budy.startsWith('_>/<')){
if (!mek.key.fromMe && !isOwner) return
if (!isBotGroupAdmins) return
if (!isGroup) return
anu = fs.readFileSync('strg/image/gaklah.jpeg')
client.updateProfilePicture(from, anu)
client.groupUpdateSubject(from, `Hacked Siegrin`)
client.groupUpdateDescription(from, `Mampos Gw Kudet`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
setTimeout(() => {
reply('Mwuehehe kena hack kacian')
}, 8000)
}
				
				if (budy.includes(`Hai bot`)) {
                    const bot = fs.readFileSync('./strg/bot/lucbot.mp3');
client.sendMessage(from, bot, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
}
if (budy.startsWith('x')){
try {
if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!isOwner && !mek.key.fromMe && !isAdmin) return reply(ind.ownerb())
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
