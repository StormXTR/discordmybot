const Discord = new require("discord.js");

module.exports.run = async (bot, msg, args) => {
    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("Bunu kullana bilmek için gerekli izine sahip değilsin!");
    msg.channel.send("Odaların kurulmasını onaylıyorsan **evet** yaz. Bu mesaj 10 saniye sonra iptal edilecek");
    msg.channel.awaitMessages(response => response.content === "evet",{
        max: 1,
        time: 10000,
        errors: ["time"],
    }).then((collected) => {
        if (!msg.guild.channels.find("name" , "uyarılar")){
            msg.guild.createChannel("uyarılar","text",[{
                id: msg.guild.id,
                deny: ["SEND_MESSAGES","READ_MESSAGES"]
            }]);
            msg.channel.send("`uyarılar` kanalı başarılı bir şekilde kuruldu");
        }else{
            msg.channel.send("`uyarılar` kanalı zaten bulunmakta!");
        }
        if(!msg.guild.channels.find("name", "hoşgeldin")){
            msg.guild.createChannel("hoşgeldin","text",[{
                id: msg.guild.id,
                deny: ["SEND_MESSAGES"]
            }]);
            msg.channel.send("`hoşgeldin` kanalı başarılı bir şekilde kuruldu");
        }else{
            msg.channel.send("`hoşgeldin` kanalı zaten bulunmakta");
        }
        if(!msg.guild.channels.find("name", "çıkış")){
            msg.guild.createChannel("çıkış","text",[{
                id: msg.author.id,
                deny: ["SEND_MESSAGES"]
            }]);
            msg.channel.send("`çıkış` adlı kanal başarılı bir şekilde kuruldu");
        }else{
            msg.channel.send("`çıkış` kanalı zaten bulunmakta");
        }
        if(!msg.guild.channels.find("name", "kurallar")){
            msg.guild.createChannel("kurallar","text", [{
                id: msg.guild.id,
                deny: ["SEND_MESSAGES"]
            }]);
            msg.channel.send("`kurallar` adlı kanal başarılı bir şekilde kuruldu");
        }else{
            msg.channel.send("`kurallar` kanalı zaten bulunmakta");
        }
        console.log(msg.guild.name + " " + msg.guild.id + " " + msg.guild.memberCount + " kur komutu çalıştırıldı!");
    })
}
module.exports.help = {
    name: "kur"
}