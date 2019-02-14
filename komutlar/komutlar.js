const Discord = new require("discord.js");

module.exports.run = async (bot, msg, args) => {
    msg.channel.sendCode("diff",`- KOMUTLAR -
        
- Bot Prefix : !
- Kullanıcı Komutları:
!avatarım  =    Kendi fotoğrafınızı görmenize yarar.
- Yetkili Komutları:
!sil       =    Sohbeti silmene yarar.
!say       =    Bot üzerinden mesaj atmanı sağlar.
!uyar      =    Bir kişiyi uyarmanı sağlar.
!kur       =    Bot için gerekli olan kanalları otomatik kurar.
!odaaç     =    istediğin bir isimle oda açar.
!omodu     =    Botun oyunuyor kısı değişir.
- Komutlar bu kadar yeni komutlar eklenecektir!`);
}
module.exports.help = {
    name: "komutlar"
}