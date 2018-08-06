
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
var Token = 'NDc1NDc0MjgyNDQ5OTkzNzU3.DklqoA.2eBTqw3bq_zPFXhxyEouF3dqgC8'
var ping = Math.round(client.ping)+"ms"


client.on('ready', () => {
  console.log('I am ready!');
  client.user.setGame(ping);
client.on("guildMemberAdd", (member) => {
  client.channel.get('474701496198627329').send('**AsylumPVP** | Welcome ${user} Forums: Comming Soon Store: Comming Soon Ip: Comming Soon');
});

});


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content === 'Hi') {
    message.channel.send('Hey there');
  }

  var args = message.content.substring(prefix.length).split(" ")


  switch (args[0].toLowerCase()){
    case "Broadcast":
    	client.channels.get('474701277633445899').send(`${message.content.split(" ").slice(2).join(" ")}`)
    	break;
    case "b": 
    	client.channels.get('474701277633445899').send(`${message.content.split(" ").slice(2).join(" ")}`)
    	break;
    case "embed":
        message.channel.sendMessage("Please tell me the title of the embed", )
        var embed = new Discord.RichEmbed()
        .addField("hey ", `${message.content.split(" ").slice(2).join(" ")}`)
        .setColor(0x03A9F4)
        message.channel.sendEmbed(embed)
        break;
     case "help":
          var embed = new Discord.RichEmbed()
          .setTitle("HELP")
          .setDescription("(ip)= in progress")
          .addField("Hi", "Bot replies: Hello there")
          .addField("ping","Bot replies: Pong! ")
          .addField("(ip)embed","Bot replies: hey i am jeff ")
          .addField("info","Bot replies: all of the info that Max has coded :)")
          .setColor(0X00FF00)
          message.author.send(embed)
          let embed2 = new Discord.RichEmbed()
          .addField("Help", "help has been sent!")
          .setColor(0X00FF00)
          message.channel.send(embed2)
          break;
      case 'info':
          var embed = new Discord.RichEmbed()
          .addField("Asylum Bot","All the info for Asylum " )
          .addField("Ping", Math.round(client.ping)+"ms")
          .addField("Users", client.users.size+" users")
          .addField("Servers", client.guilds.size+" servers")
          .addField("Creator", "Max made me he is the best bot dev <3")
          .setColor(0X0000FF)
          message.channel.send(embed)
          break;
      case "hi":
        message.channel.send('Hello there')
        break;
      /*case "purge":
          // get the delete count, as an actual number.
          const deleteCount = parseInt(args[0], 10);

          // Ooooh nice, combined conditions. <3
          if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

          // So we get our messages, and delete them. Simple enough, right?
          const fetched = await message.channel.fetchMessages({limit: deleteCount});
          message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
          break;
      case "ban":
          if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
          return message.reply("Sorry, you don't have permissions to use this!");

          let member = message.mentions.members.first();
          if(!member)
            return message.reply("Please mention a valid member of this server");
          if(!member.bannable)
           return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

          let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";

          await member.ban(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
          message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
          break;*/


  }



});


client.login(Token);
