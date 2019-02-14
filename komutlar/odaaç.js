const Discord = new require("discord.js");

module.exports.run = async (bot, msg, args) =>{
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("Bu komutu kullanmak için gerekli izine sahip değilsin!");
    let kanalismi = args.join(" ");
    if (kanalismi.length < 1) return msg.reply("Bir kanal ismi girmelisin!");
    if (msg.guild.channels.find("name", kanalismi)) return msg.reply("Zaten böyle bir kanal mevcut!");
    msg.guild.createChannel(kanalismi);

}
module.exports.help = {
    name: "odaaç"
}