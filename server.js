

const Discord = require ('discord.js');
const bot = new Discord.Client();









const TOKEN = process.env.TOKEN
const usedCommandRecently4 = new Set();

const PREFIX = '?';


client.on('ready', () => {
//...
client.user.setActivity('othertext' + client.guilds.cache.size, {type : 'PLAYING'})
}

client.on('guildCreate', guild => {
client.user.setActivity('othertext' + client.guilds.cache.size, {type : 'PLAYING'})
})

client.on('guildDelete', guild => {
client.user.setActivity('othertext' + client.guilds.cache.size, {type : 'PLAYING'})
})








/*
bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+gen'){

    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1000)

    var string = `<<PRESENTING Titanium GEN>> || [ WWW.TABISH4EVER.BLOGSPOT.COM ]|| DOWNLOAD ALL FRESH ACCOUNTS SPOTIFY FORTNITE STEAM HULU MINECRAFT ORIGIN UPLAY NETFLIX DISNEY PORNHUB CRUNCHYROLL EBAY MAILACCESS PAYPAL INSTAGRAM FACEBOOK PUBG MORE JUST VISIT ON WEBSITE AND DOWNLOAD REGULAR FRESH ACCOUNTS GURRANTED.  THIS BOT IS HOSTING ADVERTISMENT. | | SO WE MADE ALOT EASIER FOR YOU TO GET BUNDLES OF ACCOUNTS AT A TIME. | | NOW WE ARE UPLOADING THOSE ACCOUNTS ON OFFICIAL SPECIFIC WEBSITE ON DAILY BASIS OF GURRANTED. | | OUR DISCORD COMMUNITY IS BEST WAY TO GET MORE ACCOUNTS AND REWARDS MAKE SURE TO JOIN IT AND OUR WEBSITE IS || WWW.TABISH4EVER.BLOGSPOT.COM.||. TYPE HERE +invite TO INVITE OUR ADVERTISEMENT B-T BOT ON YOUR SERVER AND RECEIVE REWARD AT US THANK YOU.`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Gen Official CM** https://discord.gg/N9gGwn4bDw .Tutorial About Generating Accounts https://youtu.be/jBILyOwZDtY. You Can Invite Gen At Your Server type +invite.");
     message.author.send({embed: {
        color: 3447003,
        description: `**ACCOUNTS INFORMATION** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "ACCOUNTS INFORMATION SENDED IN **DMs**! :white_check_mark: SYSTEM UPDATED"
   }});
    };
    
};
});




bot.on('message', message =>{
  if (message.content === '+drop') {
   message.channel.send(`Daily Drops has sent to your **DMs** :white_check_mark:`)
message.author.send(":one: Random Drop You Can See Detail About Account by visiting this link 30th january 2020 ( https://link-to.net/41622/dailydrop ). Official Server ( https://discord.gg/N9gGwn4bDw ).");
   }
}); 

*/


bot.on('message', message =>{
    if(message.content == "hi" || message.content == "hello" || message.content == "hey"){
        message.channel.send('hey there' + message.author);
   }
});
       
        

bot.on('message', message =>{
  if (message.content === '+statsupdate') {
   bot.user.setActivity(`${bot.guilds.size} servers ${bot.users.size} Users`);
   
    message.channel.send("**The stats have been updated!**")
      
   }
});


bot.on('message', message =>{
if (message.content == "!hulu" || message.content == "-hulu" || message.content == "!crunchyroll" || message.content == "-crunchyroll" || message.content == "!nordvpn" || message.content == "-nordvpn" || message.content == "!pornhub" || message.content == "-pornhub" || message.content == "!minecraft" || message.content == "-minecraft" || message.content == "!wwe" || message.content == "-wwe" || message.content == "!mailaccess" || message.content == "-mailaccess" || message.content == "!origin" || message.content == "-origin" || message.content == "!hbo" || message.content == "-hbo" || message.content == "!pubg" || message.content == "-pubg" || message.content == "!minty" || message.content == "-minty" || message.content == "!ebay" || message.content == "-ebay" || message.content == "!nitro" || message.content == "-nitro" || message.content == "+stocks" || message.content == "-stock" || message.content == "!stock" || message.content == ">stock" || message.content == "-stocks" || message.content == "!stocks" || message.content == ">stocks" || message.content == "!invite" || message.content == "-invite" || message.content == "!invite" || message.content == "!help" || message.content == "-help" || message.content == "-gen" || message.content == "!gen" || message.content == "!gen fortnite" || message.content == "!fortnite" || message.content == "-fortnite" || message.content == "!steam" || message.content == "!spotify" || message.content == "-spotify" || message.content == "-steam" || message.content == "!uplay" || message.content == "-uplay" || message.content == "!netflix" || message.content == "-netflix" || message.content == "+spotify" || message.content == ">gen" || message.content == "+drop" || message.content == "+minty" || message.content == "+ebay" || message.content == ">spotify" || message.content == ">uplay" || message.content == ">fortnite" || message.content == ">pornhub" || message.content == ">nordvpn" || message.content == ">minecraft" || message.content == ">hulu" || message.content == ">crunchyroll" || message.content == ">steam" || message.content == ">mailaccess" || message.content == ">netflix" || message.content == "+stock" || message.content == "+nordvpn" || message.content == "+origin" || message.content == "+mailaccess"      || message.content == "+cod" || message.content == "+valorant" || message.content == "+pubg") { 
    message.channel.send("```Sorry There is Just One Command (+gen) to generate all account which is available at stocks```")
    message.author.send("```Sorry There is Just One Command (+gen) to generate all account which is available at stocks```");
}
});

/*
bot.on('message', message =>{
    if (!message.guild) return
    if (message.content === '+stock'){
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: bot.user.username,
              icon_url: bot.user.avatarURL
            },
            fields: [{
                name: "**Minecraft**",
                value: "Stock:0   || +minecraft"
              },
              {
                name: "**Spotify**",
                value: "Stock:0  ||  +spotify"
              },
              {
                name: "**MailAccess**",
                value: "Stock:63 ||  +mailaccess"
              },
              {
                name: "**Crunchyroll**",
                value: "Stock:0 ||  +crunchyroll"
              },
              {
                name: "**Origin**",
                value: "Stock:200 ||  +origin"
              },
              {
                name: "**Valorant**",
                value: "Stock:111 ||  +valorant"
              },
              {
                name: "**CALLOFDUTYWARZONE**",
                value: "Stock:149 ||  +cod"
              },
              {

               name: "**Nordvpn**",
                value: "Stock:46 || +nordvpn"
              },
              {  
                  name: "**Join Titanium Gen Official CM**",
                value: "https://discord.gg/N9gGwn4bDw"
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: bot.user.avatarURL,
              text: "Bot made by Paul_Walker"
            }
          }
        });
    };
});
*/

bot.on("message", message => {
    if (message.content === ("+help")) {
message.channel.send("**Help has been sent on DMs!**")
     const embed = new Discord.RichEmbed()
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
     +stock
[Bot made by Paul_Walker, click here to join!](https://discord.gg/N9gGwn4bDw)
              
       `)
 
   message.author.sendEmbed(embed)
   
   }
});

/*

bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+mailaccess'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `hartwig.esch@freenet.de:beelzebub
wolleawatt@freenet.de:rumba1965`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99");
     message.author.send({embed: {
        color: 3447003,
        description: `**MailAccess** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "MailAccess Account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});

*/

bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+gen'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `CLICK ON YOUR FAVOURITE ACCOUNTS LINK TO DOWNLOAD THEM.,,, NORDVPN 15th May ACCOUNTS >> https://direct-link.net/232002/nordvpn  PUBGMOBILE ACCOUNTS >> https://direct-link.net/232002/pubg  VALORANT 15th May ACCOUNTS >>  https://direct-link.net/232002/valorant ,,,`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99  **Tutorial HOW TO DOWNLOAD ACCOUNT** https://www.youtube.com/watch?v=agXGj-9RfHI");
     message.author.send({embed: {
        color: 3447003,
        description: `**Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "All Accounts sent on **DMs**! :white_check_mark: And Link Pass: **titanium**"
   }});
    };
    
};
});


bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+origin'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `biancastuppel@gmail.com:Bsunr123
daerian.guevara@gmail.com:Batimovil92`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99");
     message.author.send({embed: {
        color: 3447003,
        description: `**ORIGIN** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Origin Account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});



bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+cod'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `ariel_l@comcast.net:P4thf1nd3r
makalbry08@aim.com:Psalm103`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99");
     message.author.send({embed: {
        color: 3447003,
        description: `**CALLOFDUTY** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "COD Account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});


bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+valorant'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `Account Info: celobjk55:deathrice5555
Account Info: denoqo21:rapperbela1`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Titanium Server** https://discord.gg/22CXbzku99");
     message.author.send({embed: {
        color: 3447003,
        description: `**VALORANT** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Valorant Account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});







bot.on('message', message =>{
  if (message.content === '+invite') {
   message.channel.send(`Invite link of Titanium Gen BOT has sent to your **DMs** :white_check_mark:`)
message.author.send("https://discord.com/api/oauth2/authorize?client_id=840616130947317780&permissions=8&scope=bot");
   }
}); 









bot.login(TOKEN);
