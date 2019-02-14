const Discord = new require("discord.js");

module.exports.run = async (bot, msg, args) => {
    msg.delete();
    if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("Bu komutu kullanmak için gerekli izine sahip değilsin!");
    let kisi = msg.mentions.users.first();
    let sebep = args.join(" ");
    if(sebep.length < 1) return msg.reply("Bir sebep belirtmedin!")
        .then(msg => {
            msg.delete(3000)
        });
    if (kisi < 1) return msg.reply("Kullanıcı bulunamadı!")
        .then(msg => {
            msg.delete(3000)
        });
    msg.reply(`${kisi.username} adlı kişi uyarıldı!`);
    let uyarikanal = msg.guild.channels.find("name", "uyarılar");
    if(!uyarikanal) return msg.reply("Uyarı kanalı bulunamadı! !kur komutunu kullandığınızdan emin olun.");
    let uyari = new Discord.RichEmbed()

        .setTitle("[Uyarı Sistemi]")
        .setColor("RANDOM")
        .addField("Uyaran", msg.author.username)
        .addField( "Uyarılan", kisi.username)
        .addField("Sebep", sebep)
        .setFooter("Uyarı Sistemi v1.1", bot.user.avatarURL);
    uyarikanal.send(uyari);

}
module.exports.help = {
    name: "uyar"
}