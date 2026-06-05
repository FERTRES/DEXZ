// 😍 Cecan Menu (Beautiful Girls)
const setting = require("../../setting");

const cecanMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║     😍 CECAN MENU 😍                ║
╚════════════════════════════════════╝

*😍 CECAN COMMANDS (330+ Features):*

😍 *.cecan* - Cecan random
🇮🇩 *.cecanindo* - Cecan Indonesia
🇯🇵 *.cecanjapan* - Cecan Jepang
🇰🇷 *.cecankorea* - Cecan Korea
🇹🇭 *.cecanthai* - Cecan Thailand
🇵🇭 *.cecanphilipine* - Cecan Filipina
🇲🇾 *.cecanmalaysia* - Cecan Malaysia
🇸🇬 *.cecansinga* - Cecan Singapura
🇵🇰 *.cecanpakistan* - Cecan Pakistan
🇮🇳 *.cecanindia* - Cecan India
😍 *.cecanindo1* - Cecan Indo 1
😍 *.cecanindo2* - Cecan Indo 2
😍 *.cecanindo3* - Cecan Indo 3
💃 *.dancer* - Penari
🎬 *.actress* - Aktris
📸 *.model* - Model
🎤 *.singer* - Penyanyi
⚽ *.athlete* - Atlet
🎮 *.gamer* - Gamer girl
💅 *.makeup* - Makeup artist
👗 *.fashion* - Fashion model
🎨 *.artist* - Artist
📱 *.influencer* - Influencer

═══════════════════════════════════
> Gunakan *.menu* untuk kembali
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "Cecan Menu - 330+ Features",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = cecanMenu;
