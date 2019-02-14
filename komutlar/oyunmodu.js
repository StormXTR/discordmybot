const Discord = new require("discord.js");

module.exports.run = async (bot, msg, args) => {
    if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Bu komutu kullanmak için gerekli izine sahip değilsin!");
    let omodu = args.join(" ");
    if (omodu.length < 1) {
        msg.reply("Bir oyun modu girmelisin!")
            .then(msg => {
                msg.delete(3000)
            });
        return;
    }
    let izliyor = "WATCHING";
    bot.user.setActivity(omodu, {type: `${izliyor}`});
    msg.delete();
    msg.channel.send(`Oyun Modu: ***${omodu}*** olarak değişti.`);
    console.log(`Oyun Modu ${omodu} olarak değiştirildi`);
}
module.exports.help = {
    name: "omodu"
}