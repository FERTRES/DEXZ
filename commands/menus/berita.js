// 📰 Berita Menu
const setting = require("../../setting");

const beritaMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║      📰 BERITA MENU 📰              ║
╚════════════════════════════════════╝

*📰 BERITA COMMANDS (280+ Features):*

📰 *.berita* - Berita terbaru
🇮🇩 *.beritan* - Berita nasional
🌍 *.beritai* - Berita internasional
💼 *.beritabisnis* - Berita bisnis
📊 *.beritakeuangan* - Berita keuangan
⚽ *.beritaolahraga* - Berita olahraga
🎬 *.beritahiburan* - Berita hiburan
🎮 *.beritagaming* - Berita gaming
💻 *.beritateknologi* - Berita teknologi
🏥 *.beritakesehatan* - Berita kesehatan
🌍 *.beritaalam* - Berita alam
⚡ *.beritapolitik* - Berita politik
🏘️ *.beritabencana* - Berita bencana
✈️ *.beritatravel* - Berita travel
🍔 *.beritakuliner* - Berita kuliner
🎨 *.beritaseni* - Berita seni
🎓 *.beritapendidikan* - Berita pendidikan
👔 *.beritakerja* - Berita kerja
💰 *.beritainvestasi* - Berita investasi
🏠 *.beritaproperty* - Berita properti
🚗 *.beritaotomotif* - Berita otomotif
✨ *.beritafashion* - Berita fashion
🎪 *.beritaacara* - Berita acara

═══════════════════════════════════
> Gunakan *.menu* untuk kembali

📌 API REQUIREMENTS:
News API: https://newsapi.org
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "Berita Menu - 280+ Features",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = beritaMenu;
