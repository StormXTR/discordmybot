const Discord = require("discord.js");
const conf = require("./conf.json");
const bot = new Discord.Client();
const fs = require("fs");

bot.commands = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./komutlar/${f}`);
        console.log(`${i + 1}: Yüklenen KOD: ${f}`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("guildMemberAdd", member => {
    let kanal = member.guild.channels.find("name" ,"hoşgeldin");

    kanal.send(`${member} Giriş Yaptı!`);
    let giris = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(`${bot.user.username}`,`Hoşgeldin Umarım Discord Sunucumuzu beğenirsin.`)
        .setThumbnail(member.avatarURL);

    kanal.send(giris);

});

bot.on("guildMemberRemove", member => {
    let kanal = member.guild.channels.find("name","çıkış");

    let çıkış = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Çıkış",`${member} adlı kişi çıkış yaptı.`)
        .setThumbnail(member.avatarURL);

    kanal.send(çıkış);
});

bot.on("ready", () => {
    console.log("");
    console.log("--[Sunucular]-- CONSOLE SİSTEMİ V1.0");
    console.log("");
    bot.guilds.forEach((guild) => {
        console.log(`$- ` + guild.name);
        console.log("Üye Sayısı:" + guild.memberCount);
        console.log("ID: " + guild.id);
        console.log("");
    });
});

let prefix = conf.prefix;
bot.on("message", msg => {

    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0].toLocaleLowerCase();
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,msg,args);

    if(cmd === `${prefix}aç`){
        if(conf.filter.some(word => msg.content.toLocaleLowerCase().includes(word))){
            msg.reply("Böyle bir şey yazmaya hakkın yok!");
            msg.delete();
        }
    }
    if(cmd === `${prefix}kapat`){
        if(!conf.filter.some(word => msg.content.toLocaleLowerCase().includes(word))){

        }
    }


});

bot.login(process.env.BOT_TOKEN);
