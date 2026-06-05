// 👥 Group Menu
const setting = require("../../setting");

const groupMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║      👥 GROUP MENU 👥               ║
╚════════════════════════════════════╝

*👥 GROUP COMMANDS (140+ Features):*
⚠️ NOTE: No kick feature in this menu

💬 *.hidemention* - Mention semua
🎉 *.groupinfo* - Info group
👤 *.members* - Daftar members
📊 *.membercount* - Jumlah members
📍 *.setgroupdes <deskripsi>* - Set deskripsi
🔖 *.setgroupname <nama>* - Set nama group
🖼️ *.setgrouppic <gambar>* - Set foto group
🔒 *.open* - Buka group
🔐 *.close* - Tutup group
📢 *.announcement <teks>* - Pengumuman
📝 *.poll <pertanyaan>* - Jajak pendapat
🎁 *.reward @user <reward>* - Berikan reward
🏆 *.leaderboard* - Papan peringkat
🎖️ *.badge @user <badge>* - Berikan badge
⭐ *.rate @user <rating>* - Nilai member
❤️ *.vote <topik>* - Pemungutan suara
🎮 *.gamematch* - Pertandingan game
🎯 *.challenge* - Tantangan
📣 *.shoutout @user* - Sorakan
🎊 *.celebrate* - Rayakan
🎉 *.party* - Pesta
🎪 *.event <nama>* - Acara group
📅 *.schedule <jadwal>* - Jadwal
⏰ *.reminder <pesan>* - Pengingat
📌 *.pin <pesan>* - Sematkan pesan
📍 *.unpin* - Lepas sematkan
💾 *.save <pesan>* - Simpan pesan
🔖 *.bookmark <pesan>* - Tandai pesan
🗑️ *.delete <id>* - Hapus pesan
🔄 *.edit <id> <teks>* - Edit pesan
⚠️ *.warn @user <alasan>* - Peringatan

═══════════════════════════════════
> Gunakan *.menu* untuk kembali
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "Group Menu - 140+ Features (No Kick)",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = groupMenu;
