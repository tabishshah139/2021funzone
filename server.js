

const Discord = require ('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN
const usedCommandRecently4 = new Set();

const PREFIX = '?';



bot.on('ready', () =>{
console.log(`Titanium Gen is now online in ${bot.guilds.size} servers with ${bot.users.size} members!`);
bot.user.setStatus('dnd, online, idle, offline');
bot.user.setActivity(`${bot.guilds.size} servers ${bot.users.size} Users`); 
});

bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+invitemethods'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 1 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 5000)
     var string = `🎊🎊🎊 Accounts Reward 🎊🎊🎊   1️⃣ 3x Random Steam Games Accounts 2️⃣ 3x Hulu Premium Accounts 3️⃣ 3x NordVpn Premium Accounts 4️⃣ 3x Valorant Accounts5️⃣ 3x Call Of Duty Accounts6️⃣ 3x Origin Random Games Accounts7️⃣ 1x Minecraft Nfa Account 8️⃣ 3x Lol (leagues of legends) Accounts 🎉🎉🎉Methods Reward🎉🎉🎉1️⃣ Nfa To Fa Steam Method 2️⃣ Nfa To Fa Epic Games Method 3️⃣ Nfa To Fa Uplay Method 4️⃣ Nfa To Fa Origin Method 5️⃣ Discord Free Nitro Emojis And 1080p Stream Method6️⃣ Discord Invisible Name And Invisible Pfp Method7️⃣ Discord Crash Someone Dms And Server Method`;
      var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Fun Zone Server** https://discord.gg/WXFKC9vBhh  ");
     message.author.send({embed: {
        color: 3447003,
        description: `**Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Invite Methods sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});


/*

bot.on('message', message =>{
    if(message.content == "hi" || message.content == "hello" || message.content == "hey"){
        message.channel.send('hey there please type !d bump' + message.author);
   }
});
 */      
        

bot.on('message', message =>{
  if (message.content === '+update') {
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
[Bot made by Paul_Walker, click here to join!](https://discord.gg/WXFKC9vBhh)
              
       `)
   message.author.sendEmbed(embed)
   
   }
});



bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+gen'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 30 seconds before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 30000)
    var string = `<< VALORANT REWARD https://up-to-down.net/232002/valorant>> | | << STEAM REWARD https://up-to-down.net/232002/steam >> | |..........................<< ORIGIN REWARD https://up-to-down.net/232002/origin >> | |............................ << NORDVPN REWARD https://up-to-down.net/232002/nordvpn >> | |................<< WISH REWARD https://direct-link.net/232002/wish >> | |.................................. << HULU REWARD https://up-to-down.net/232002/hulu >> | |................................. << CALLOFDUTY REWARD https://up-to-down.net/232002/cod >>...............`;
   var words = string.split('\n');
      let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join FunZone Server** https://discord.gg/WXFKC9vBhh  **Tutorial HOW TO SKIP ADS** https://www.youtube.com/watch?v=agXGj-9RfHI");
     message.author.send({embed: {
        color: 3447003,
        description: `**Accounts** \n \n ${random}` 
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Reward sent on **DMs**! :white_check_mark: Type !d bump"
   }});
    };
    
};
});



bot.login(TOKEN);
