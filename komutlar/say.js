const Discord = new require("discord.js");

module.exports.run = async (bot, msg, args) => {
    if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("Bu yetkiyi kullanmak için gerekli izine sahip değilsin!");
    let mesaj = args.join(" ");
    msg.channel.send(msg.author.username + ": " + mesaj);
}
module.exports.help = {
    name: "say"
}