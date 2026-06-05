// 👥 Clan Menu
const setting = require("../../setting");

const clanMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║      👥 CLAN MENU 👥                ║
╚════════════════════════════════════╝

*👥 CLAN COMMANDS (250+ Features):*

🏰 *.createclan <nama>* - Buat clan
🔓 *.joinclan <id>* - Masuk clan
🚪 *.leaveclan* - Keluar clan
👑 *.claninfo* - Info clan
📊 *.clanstats* - Statistik clan
👥 *.clanmembers* - Anggota clan
🏆 *.clanrank* - Peringkat clan
💪 *.clanlevel* - Level clan
📈 *.clanexp* - Pengalaman clan
💰 *.clangold* - Gold clan
🎁 *.clantreaure* - Harta clan
🎖️ *.clanachievement* - Pencapaian clan
⭐ *.clanbadge* - Badge clan
🎯 *.clanquest* - Quest clan
🏆 *.clanbattle* - Pertempuran clan
⚔️ *.clanduel* - Duel clan
🤝 *.clanadd @user* - Tambah anggota
🚫 *.clanremove @user* - Hapus anggota
📜 *.clanrule* - Aturan clan
📝 *.clandesc <deskripsi>* - Set deskripsi
🔐 *.clanprivate* - Mode pribadi
🔓 *.clanpublic* - Mode publik
💬 *.clanchat* - Chat clan
📣 *.clanannounce <teks>* - Pengumuman
🎊 *.clanwar* - Perang clan
🏅 *.clanseason* - Season clan

═══════════════════════════════════
> Gunakan *.menu* untuk kembali
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "Clan Menu - 250+ Features",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = clanMenu;
