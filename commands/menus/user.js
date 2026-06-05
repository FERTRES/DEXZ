// 👤 User Menu
const setting = require("../../setting");

const userMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║       👤 USER MENU 👤               ║
╚════════════════════════════════════╝

*👤 USER COMMANDS (180+ Features):*

👤 *.profile* - Lihat profil
📝 *.editprofile <data>* - Edit profil
🖼️ *.setprofilepic <gambar>* - Set foto profil
📝 *.setbio <bio>* - Set bio
👁️ *.viewprofile @user* - Lihat profil user
📊 *.userinfo @user* - Info user
⭐ *.getstatus @user* - Get status
💬 *.getmessage @user* - Get pesan
📱 *.getphone @user* - Get nomor
📧 *.getemail @user* - Get email
🔗 *.getsocial @user* - Get social media
🎂 *.birthday @user* - Birthday info
🏆 *.achievements @user* - Pencapaian
🎖️ *.badges @user* - Badge
💪 *.level @user* - Level
⚡ *.experience @user* - Experience
🎯 *.stats @user* - Statistik
📈 *.progress @user* - Progress
🏅 *.rank @user* - Peringkat
👥 *.followers* - Pengikut
🔗 *.following* - Diikuti
❤️ *.favorite @user* - Favorite
🌟 *.recommend @user* - Rekomendasi
💬 *.feedback @user* - Feedback
🎁 *.gift @user* - Beri hadiah
🏆 *.award @user* - Penghargaan
📸 *.photogallery* - Galeri foto
🎬 *.videogallery* - Galeri video
📝 *.posthistory* - Riwayat posting

═══════════════════════════════════
> Gunakan *.menu* untuk kembali
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "User Menu - 180+ Features",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = userMenu;
