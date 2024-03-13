const express = require('express');
const app = express();
const moment = require('moment')
const Discord = require('discord.js')

//express
app.use('/ping', (req, res) => {
  res.send(new Date());
});
app.listen(3000, () => {
  console.log('Oussama Blue') 
});
const db = require("nqr.db")
//main v13 source
const { Client, Intents, MessageEmbed, User, MessageActionRow, MessageButton, Collection } = require('discord.js');
const client = new Client({
  intents : 98045,
  allowedMentions: { repliedUser: true },
});
const { REST } = require('@discordjs/rest');
const {  MessageSelectMenu } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
//vars
var prefix = "/" //prefix
var owners = ["876512666682794066"]
//bot info
client.on('ready', () => {
    console.log(`Name Bot : ${client.user.username}`);
  console.log(`prefix Bot : ${prefix}`);
	console.log(`Tag : ${client.user.tag}`);
	console.log(`${client.guilds.cache.size} Servers`); 
	console.log(`${client.users.cache.size} Users`); console.log(`${client.channels.cache.size} Channels`);
      console.log(`[ ${client.guilds.cache.map(g => g.name).join(', \n ')} ]`);
}).setMaxListeners(0);
//status bot
client.on('ready', async() => {
    client.user.setStatus(`dnd`)
    let status = [``,``,``];
  setInterval(()=>{
    client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})

//error fixer
 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
client.on("ready" , () => {
const commands = [{
  name : "add",
  description : "to add a member",
  options : [{
  name : "bld",
  description : "User Of the Member",
    type: 3,
    required: true,
  },{
    name : "hala",
    description : "id of the Member",
    type : 3,
    required : true,
  },{
    name : "user",
    description: "what he did?",
    type: 3,
    required: true,
  },{
    name : "age",
    description : "the photo link for Evidence",
    type : 3,
    required: true,
   },{
    name : "ncaract",
    description: "bldd",
    type: 3,
    required: true,
    },{
    name : "faction",
    description: "bldd",
    type: 3,
    required: true,
      },{
    name : "grad",
    description: "bldd",
    type: 3,
    required: true,
      },{
    name : "mdrsi",
    description: "bldd",
    type: 3,
    required: true,
      },{
    name : "tfarl",
    description: "bldd",
    type: 3,
    required: true,
      },{
    name : "rbrat",
    description: "bldd",
    type: 3,
    required: true,
      },{
    name : "photo",
    description: "bldd",
    type: 3,
    required: true, 
    },{
    name : "id",
    description : "id of the Member",
    type : 3,
    required : true
    
  }]
},{
  name : "remove",
  description : "to remove nasab",
  options : [{
    name : "id",
    description : "id of the nasab",
    type : 3,
    required : true,
  }]
},{
  name : "check",
  description : "to check the member if he is nasab or not",
  options : [{
    name : "id",
    description : "id of the member",
    type : 3,
    required : true,
  }]
},{
    name : "ping",
  description : "the ping of the bot",
},{
    name : "ids",
  description : "to view help menu",
}]
    const rest = new REST({ version: '9' }).setToken("MTIxNzA2MTc3OTg5MzM4NzMyNA.Gljv95.wc4gJCmSRz39e0qmufy69xdnj26_CeFGE64eAo");
    
    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: commands },
            );
            console.log("Done Run ApplicationCommands");
        } catch (error) {
            console.error(error);
        }
    })();
})

client.on('interactionCreate', async(interaction) => {
await interaction.deferReply()
  if(interaction.commandName == "add") {
    if(!owners.includes(interaction.user.id)) return interaction.editReply({content:"**بس يبابا **"})
  const nasabid = interaction.options.getString('id')
  const bld = interaction.options.getString('bld')
  const hala = interaction.options.getString('hala')
  const user = interaction.options.getString('user')
  const age = interaction.options.getString('age')
  const ncaract = interaction.options.getString('ncaract')
  const faction = interaction.options.getString('faction')
  const grad = interaction.options.getString('grad')
  const mdrsi = interaction.options.getString('mdrsi')
  const tfarl = interaction.options.getString('tfarl')
  const rbrat = interaction.options.getString('rbrat')
  const photo = interaction.options.getString('photo')
  const nasabtag = interaction.options.getString('name-tag')
        db.set(`nasab_${nasabid}`, "true")
        db.set(`nasabt_${nasabid}`, nasabtag)
        db.set(`bldt_${nasabid}`, bld)
        db.set(`halat_${nasabid}`, hala)
        db.set(`usert_${nasabid}`, user)
        db.set(`aget_${nasabid}`, age)
        db.set(`ncaractt_${nasabid}`, ncaract)
        db.set(`factiont_${nasabid}`, faction)
        db.set(`gradt_${nasabid}`, grad)
        db.set(`mdrsit_${nasabid}`, mdrsi)
        db.set(`tfarlt_${nasabid}`, tfarl)
        db.set(`rbratt_${nasabid}`, rbrat)
        db.set(`photot_${nasabid}`, photo)
          const donembed = new MessageEmbed()
            .setTitle('تم اضافه النصاب')
            .setColor("GREEN")
            .setDescription(`
تم تسجيل المقابلة و معلومات التقرير بنجاح

الحالة : ${hala}
اليوزر : ${user}
العمر : ${age}
اسم الشخصية : ${ncaract}
الفاكشن : ${faction}
الرتبة / الحالة : ${grad}
البلد : ${bld}
المستوى الدراسي : ${mdrsi}
اوقات التفاعل المؤكدة : ${tfarl}
الخبرات : ${rbrat}

 ⬇⬇⬇ صورة للشخصية ⬇⬇⬇
`)
.setImage(photo)
  
  interaction.editReply({embeds: [donembed]})
  }
    else if(interaction.commandName == "remove") {
    if(!owners.includes(interaction.user.id)) return interaction.editReply({content:"**بس يبابا **"})
        const nasabid = interaction.options.getString('id')
      
 const nasab = db.fetch(`nasab_${nasabid}`, "true")
  if(!nasab) return interaction.editReply(`He Is Not In Tha Database`)
      
        db.delete(`nasab_${nasabid}`)
        db.delete(`nasabt_${nasabid}`)
          const donembed = new MessageEmbed()
            .setTitle('تم ازاله النصاب')
            .setColor("GREEN")
            .setDescription(`
تمت ازاله 
${nasabid}
بنجاح
`)
  
  interaction.editReply({embeds: [donembed]})
  }

    if(interaction.commandName == "check") {
    if(!owners.includes(interaction.user.id)) return interaction.editReply({content:"**بس يبابا **"})
      
        let nasabid = interaction.options.getString('id')
       const nasab = db.fetch(`nasab_${nasabid}`, "true")
  if(!nasab) return interaction.editReply(`لم يتم عمل مقابلة مع الشخص بعد`)


  let nasabtag = db.get(`nasabt_${nasabid}`)
  let bld = db.get(`bldt_${nasabid}`)
  let hala = db.get(`halat_${nasabid}`)
  let user = db.get(`usert_${nasabid}`)
  let age = db.get(`aget_${nasabid}`)
  let ncaract = db.get(`ncaractt_${nasabid}`)
  let faction = db.get(`factiont_${nasabid}`)
  let grad = db.get(`gradt_${nasabid}`)
  let mdrsi = db.get(`mdrsit_${nasabid}`)
  let tfarl = db.get(`tfarlt_${nasabid}`)
  let rbrat = db.get(`rbratt_${nasabid}`)
  let photo = db.get(`photot_${nasabid}`)
          const donembed = new MessageEmbed()
            .setTitle('نص التقرير الخاص بالمواطن')
            .setColor("GREEN")
            .setDescription(`
**
 • الايدي : ${nasabid} <a:689462277296095299:1217428212871594026>
• الحالة : ${hala}  <a:staff_emoji:1217429391487795280>
• اليوزر : ${user}  <a:wumpusStar:1217429584006615110>
• العمر : ${age}  <a:amongus2_AGK:1217429722011799665>
• اسم الشخصية : ${ncaract}  <a:CH_IconAnnouncement:1217429958947766332>
• الفاكشن : ${faction}  <a:CH_JotaroDance:1217430009527009290>
• الرتبة / الحالة : ${grad}  <a:bluecrown:1217430282316152893>
• البلد : ${bld}  <a:Witch_Wumpus:1217430619387203634>
• المستوى الدراسي : ${mdrsi}  <a:Shai:1217430736068677702>
• اوقات التفاعل المؤكدة : ${tfarl}  <a:spongedance:1217430947486765098>
• الخبرات : ${rbrat}  <a:9950_WumpusKeyboardSlam:1217431036951007323>
**
 ** ⬇⬇⬇ صورة للشخصية ⬇⬇⬇**
`)
.setImage(photo)
  
  interaction.editReply({embeds: [donembed]})
  }
      if(interaction.commandName == "ping") {
  interaction.editReply({ content: `
\`\`\`js
Latency is ${interaction.createdTimestamp - interaction.createdTimestamp}ms. 
API Latency is ${Math.round(client.ws.ping)}ms.
\`\`\`
`})
  }
        if(interaction.commandName == "ids") {
        const helpmainembed = new MessageEmbed()
        .setDescription(`
<@876512666682794066> <a:ohh:1206640313121247302>
`)

               
 interaction.editReply({embeds: [helpmainembed]})
  }
})

client.login("MTIxNzA2MTc3OTg5MzM4NzMyNA.Gljv95.wc4gJCmSRz39e0qmufy69xdnj26_CeFGE64eAo")