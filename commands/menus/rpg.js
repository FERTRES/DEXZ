// ⚔️ RPG Menu
const setting = require("../../setting");

const rpgMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║      ⚔️ RPG MENU ⚔️                  ║
╚════════════════════════════════════╝

*🎮 RPG COMMANDS (300+ Features):*

👤 *.character* - Karakter
📊 *.stats* - Statistik
💪 *.level* - Level
⚡ *.experience* - Pengalaman
💰 *.gold* - Gold
🎁 *.inventory* - Tas
🗡️ *.weapon* - Senjata
🛡️ *.armor* - Armor
💍 *.ring* - Cincin
📿 *.amulet* - Amulet
🎒 *.backpack* - Tas punggung
🏆 *.quest* - Quest
⚔️ *.battle* - Pertempuran
🤝 *.duel* - Duel
👥 *.party* - Kelompok
🏰 *.dungeon* - Dungeon
🗺️ *.map* - Peta
🌍 *.explore* - Jelajahi
💰 *.shop* - Toko
🏠 *.house* - Rumah
🎊 *.event* - Event
🏆 *.raid* - Raid
🐉 *.boss* - Boss
🎖️ *.achievement* - Pencapaian
🌟 *.skill* - Skill
📚 *.ability* - Kemampuan
💊 *.potion* - Potion
🔥 *.spell* - Mantra
⚔️ *.attack* - Serangan
🛡️ *.defend* - Pertahanan

═══════════════════════════════════
> Gunakan *.menu* untuk kembali
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "RPG Menu - 300+ Features",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = rpgMenu;
