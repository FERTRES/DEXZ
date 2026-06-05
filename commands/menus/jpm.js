// 📸 JPM Menu
const setting = require("../../setting");

const jpmMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║       📸 JPM MENU 📸                ║
╚════════════════════════════════════╝

*🎨 JPM COMMANDS (220+ Features):*

👁️ *.jpmexplo <teks>* - Foto eksplorasi
🎬 *.jpmcinema <teks>* - Efek sinema
🎭 *.jpmtheater <teks>* - Efek teater
🎪 *.jpmcircus <teks>* - Efek sirkus
🎨 *.jpmartwork <teks>* - Efek karya seni
🖼️ *.jpmgallery <teks>* - Efek galeri
📷 *.jpmphoto <teks>* - Efek foto
✨ *.jpmmagic <teks>* - Efek magic
🌟 *.jpmglow <teks>* - Efek cahaya
💫 *.jpmstar <teks>* - Efek bintang
🔥 *.jpmfire <teks>* - Efek api
❄️ *.jpmice <teks>* - Efek es
💧 *.jpmwater <teks>* - Efek air
⚡ *.jpmlightning <teks>* - Efek petir
🌈 *.jpmrainbow <teks>* - Efek pelangi
🎆 *.jpmfireworks <teks>* - Efek kembang api
🎇 *.jpmsparkler <teks>* - Efek nyalaan
💥 *.jpmexplosion <teks>* - Efek ledakan
🌊 *.jpmwave <teks>* - Efek gelombang
🏔️ *.jpmmountain <teks>* - Efek gunung
🌳 *.jpmtree <teks>* - Efek pohon
🌸 *.jpmflower <teks>* - Efek bunga
🦋 *.jpmbutterfly <teks>* - Efek kupu-kupu
👑 *.jpmcrown <teks>* - Efek mahkota
💎 *.jpmdiamond <teks>* - Efek berlian

═══════════════════════════════════
> Gunakan *.menu* untuk kembali

📌 API REQUIREMENTS:
JPM API: https://rapidapi.com
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "JPM Menu - 220+ Features",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = jpmMenu;
