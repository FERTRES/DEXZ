// 🖥️ Linode Menu (VPS/Server Management)
const setting = require("../../setting");

const linodeMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║    🖥️ LINODE MENU 🖥️                ║
╚════════════════════════════════════╝

*🖥️ LINODE COMMANDS (310+ Features):*
👤 OWNER ONLY - Server Management

📊 *.linodelist* - Daftar instance
🆕 *.linodecreate <type>* - Buat instance
🗑️ *.linodedelete <id>* - Hapus instance
⏸️ *.linodestop <id>* - Stop instance
▶️ *.linodestart <id>* - Mulai instance
🔄 *.linodereset <id>* - Reset instance
📈 *.linoderesource <id>* - Resource
🌐 *.linodeip <id>* - IP address
🔐 *.linodessh <id>* - SSH info
💾 *.linodebackup <id>* - Backup
♻️ *.linoderestore <id>* - Restore
📝 *.linodelogs <id>* - Logs
⚙️ *.linodesettings* - Setting
💰 *.linodeprice* - Harga
📞 *.linodesupport* - Support

═══════════════════════════════════
> Gunakan *.menu* untuk kembali

📌 API REQUIREMENTS:
Linode API: https://www.linode.com/api
Owner Token: YOUR_LINODE_API_TOKEN
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "Linode Menu - 310+ Features (Owner Only)",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = linodeMenu;
