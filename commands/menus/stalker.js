// 🕵️ Stalker Menu (Profile Investigation)
const setting = require("../../setting");

const stalkerMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║    🕵️ STALKER MENU 🕵️               ║
╚════════════════════════════════════╝

*🕵️ STALKER COMMANDS (340+ Features):*

👤 *.cekwaprofil <no>* - Cek WA profil
📱 *.cekwastatus <no>* - Cek WA status
💬 *.ceknama <nama>* - Cek nama
🆔 *.cekid <id>* - Cek ID
🌐 *.cekip <ip>* - Cek IP address
🔐 *.cekpass* - Cek password strength
💻 *.cekhp <no>* - Cek tipe HP
📱 *.cekos* - Cek OS
🔧 *.cekdevice* - Cek device
📡 *.cekinternet* - Cek internet
🌍 *.ceknegara <no>* - Cek negara
🏙️ *.cekkota <no>* - Cek kota
🗺️ *.ceklokasi* - Cek lokasi
👤 *.getprofile <no>* - Ambil profil
📊 *.getstats <no>* - Ambil stats
💬 *.getmessage <no>* - Ambil pesan
📱 *.getphone <no>* - Ambil nomor
📧 *.getemail* - Ambil email
🔗 *.getsocial* - Ambil social media
🎂 *.getbirthday* - Ambil tanggal lahir
🏢 *.getcompany* - Ambil perusahaan
👨‍💼 *.getjob* - Ambil pekerjaan
📍 *.getaddress* - Ambil alamat

═══════════════════════════════════
> Gunakan *.menu* untuk kembali

⚠️ WARNING: FOR INFORMATIONAL PURPOSES ONLY
Gunakan dengan bijak dan hormat privasi
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "Stalker Menu - 340+ Features",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = stalkerMenu;
