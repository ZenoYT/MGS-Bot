const Discord = require("discord.js");
const math = require('mathjs');

client.on("messageCreate", message => {

if(message.content.startsWith('!calculate')) {
  const args = message.content.slice(';calculate'.length).trim().split(/ + /g);
  const response = args.join(''); 
    
  try {
    let embed = new Discord.MessageEmbed()
    .setTitle("Math")
    .setDescription(`Equation: ${response}, Solution: ${String(math.evaluate(response))`)
    } catch (err) {
     message.reply("there was an error!")
    }
    message.reply({embeds: [embed]})
  } 
  })
