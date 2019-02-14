const Discord = new require("discord.js");

module.exports.run = async (bot, msg, args) => {
    msg.delete();
    let tavsiye = args.join(" ");
    if (tavsiye.length < 1) return msg.reply("Bir mesaj girmelisin!");
    msg.reply("Tavsiyen başarılı bir şekilde gönderildi!").then(mesaj =>{mesaj.delete(4000)});
    let tavsiyeembed = new Discord.RichEmbed()
        .setTitle("Bir Tavsiye Geldi!")
        .setColor("RANDOM")
        .addField("Kişi",`${msg.author.username} adlı kişiden bir tavsiye`)
        .addField("Gönderilen Sunucu",`${msg.guild.name} adlı sunucudan`)
        .addField("Tavsiye Mesajı",`${tavsiye}`);

    bot.channels.get("544336950786654208").send(tavsiyeembed);
}
module.exports.help = {
    name: "tavsiye"
}