const Discord = new require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let sayi = args.join(" ");
    if(sayi.length < 1) return msg.reply("Bir sayı girmelisin!");
    if(sayi.length > 100) return msg.reply("deneme");

    msg.channel.bulkDelete(sayi).then(msg => msg.delete(sayi + 1));

    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Sohbet Temizlik", "Silinen Mesaj: " + `**${sayi}**`);
    msg.channel.send(embed);
}
module.exports.help = {
    name: "sil"
}