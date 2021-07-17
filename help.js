const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`Gif Help`)
.setDescription(`
**Info Commands**
\`avatar\` - \`about\` - \`ping\`
\`invite\` - \`server\` - \`support\`
**Gifs Commands**
\`boy\` - \`girl\` - \`baby\`
\`couple\` - \`sad\` - \`anime\`
\`animal\` - 

**Links**
**[Invite](https://discord.com/oauth2/authorize?client_id=806840212608909344&permissions=70346817&scope=bot) - [Server Support](https://discord.gg/jokerstaff)**
`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'rexuss',
  usage: 'h'
};
