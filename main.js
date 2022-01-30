const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./database/lib/functions')
const { color } = require('./database/lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))

session = setting.session


require('./Dhani.js')
nocache('./Dhani.js', module => console.log(`${module} telah di update!`))

const starts = async (Dhani = new WAConnection()) => {
    Dhani.logger.level = 'warn'
    Dhani.version = [2, 2142, 12]
    Dhani.browserDescription = [ 'DhaniGans', 'Chrome', '3.0' ]
    Dhani.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code in only 20 seconds !!'))
    })

    fs.existsSync(`./${session}.json`) && Dhani.loadAuthInfo(`./${session}.json`)
    Dhani.on('connecting', () => {
        start('2', 'Loading ...')
    })
    Dhani.on('open', () => {
        success('2', 'Connected ✓')
    })
    await Dhani.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${session}.json`, JSON.stringify(Dhani.base64EncodedAuthInfo(), null, '\t'))

    Dhani.on('chat-update', async (message) => {
        require('./Dhani.js')(Dhani, message, _welkom)
    })
Dhani.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await Dhani.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await Dhani.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_group = await Dhani.getProfilePicture(anu.jid)
      } catch (e) {
        pp_group =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      buffer = await getBuffer(pp_user)
      if (!isWelkom) return
      if (anu.action == 'add' && !mem.includes(Dhani.user.jid)) {
      const mdata = await Dhani.groupMetadata(anu.jid)
      const memeg = mdata.participants.length
      const thu = await Dhani.getStatus(anu.participants[0], MessageType.text)
      const num = anu.participants[0]
      const bosco1 = await Dhani.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
      let v = Dhani.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = v.vname || v.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      teks = `𝙃𝙚𝙡𝙡𝙤 𝙗𝙧𝙤 *@${num.split('@')[0]}*
𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙜𝙧𝙤𝙪𝙥 *${mdata.subject}*

𝙃𝙤𝙥𝙚 𝙮𝙤𝙪 𝙡𝙞𝙠𝙚 𝙞𝙩
𝙉𝙚𝙫𝙚𝙧 𝙢𝙖𝙠𝙚 𝙖 𝙛𝙪𝙨𝙨
𝘼𝙣𝙙 𝙙𝙤𝙣'𝙩 𝙛𝙤𝙧𝙜𝙚𝙩 𝙩𝙤 𝙧𝙚𝙖𝙙 𝙩𝙝𝙚 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣`
      welcomeBut = [{buttonId:`#menu`,buttonText:{displayText:'menu'},type:1}, {buttonId:`#infogroup`,buttonText:{displayText:'infogroup'},type:1}]
      welcomeButt = { contentText: `${teks}`, footerText: `𝙅𝙤𝙞𝙣 𝙈𝙚𝙨𝙨𝙖𝙜𝙚`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
      Dhani.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
      if (anu.action == 'remove' && !mem.includes(Dhani.user.jid)) {
      const mdata = await Dhani.groupMetadata(anu.jid)
      const num = anu.participants[0]
      const bosco3 = await Dhani.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
      let w = Dhani.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = w.vname || w.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      memeg = mdata.participants.length
      out = `𝙂𝙤𝙤𝙙𝙗𝙮𝙚 @${num.split('@')[0]}\n𝙈𝙚𝙣𝙩𝙖𝙡𝙡𝙮 𝙨𝙖𝙛𝙚 ?`
      goodbyeBut = [{buttonId:`#menu`,buttonText:{displayText:'menu'},type:1}, {buttonId:`#infogroup`,buttonText:{displayText:'infogroup'}, type:1}]
      goodbyeButt = { contentText: `${out}`, footerText: `𝙇𝙚𝙖𝙫𝙚 𝙈𝙚𝙨𝙨𝙖𝙜𝙚`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
      Dhani.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Now being watched for changes')
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
