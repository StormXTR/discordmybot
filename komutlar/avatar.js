const Discord = new require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let avatarembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(msg.author.avatarURL)
        .setFooter("", bot.user.avatarURL);
    msg.channel.send(avatarembed);
}
module.exports.help = {
    name: "avatarım"
}