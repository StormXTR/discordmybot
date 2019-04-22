const Discord = new require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let sayi = args.parseInt(args[0], 10);
    if(sayi < 1) return msg.reply("Bir sayı girmelisin!");
    if(sayi >= 100) return msg.reply("100\'den fazla sayı giremezsin!");

    msg.channel.bulkDelete(sayi).then(msg => msg.delete(3000));

    let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Sohbet Temizlik", "Silinen Mesaj, " + `**${sayi}**`);
    msg.channel.send(embed);
}
module.exports.help = {
    name: "sil"
}
