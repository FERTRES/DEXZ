// 🖥️ VPS Menu (Virtual Private Server Management)
const setting = require("../../setting");

const vpsMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║       🖥️ VPS MENU 🖥️                ║
╚════════════════════════════════════╝

*🖥️ VPS COMMANDS (360+ Features):*
👤 OWNER ONLY - Server Management

📊 *.vpslist* - Daftar VPS
🆕 *.vpscreate <type>* - Buat VPS
🗑️ *.vpsdelete <id>* - Hapus VPS
⏸️ *.vpsstop <id>* - Stop VPS
▶️ *.vpsstart <id>* - Mulai VPS
🔄 *.vpsrestart <id>* - Restart VPS
📈 *.vpsresource <id>* - Resource
🌐 *.vpsip <id>* - IP address
🔐 *.vpsssh <id>* - SSH info
💾 *.vpsbackup <id>* - Backup
♻️ *.vpsrestore <id>* - Restore
📝 *.vpslogs <id>* - Logs
⚙️ *.vpssettings* - Setting
💰 *.vpsprice* - Harga
📞 *.vpssupport* - Support
🔒 *.vpsfirewall <id>* - Firewall
🌐 *.vpsdns <id>* - DNS
📊 *.vpsmonitor <id>* - Monitor
🎛️ *.vpsconsole <id>* - Console
📱 *.vpsmobile* - Mobile access
💻 *.vpswebasset* - Web access
📧 *.vpsemail <id>* - Email
🔔 *.vpsalert <id>* - Alert
⚡ *.vpsupgrade <id>* - Upgrade
💾 *.vpsstorage <id>* - Storage

═══════════════════════════════════
> Gunakan *.menu* untuk kembali

📌 API REQUIREMENTS:
DigitalOcean: https://www.digitalocean.com/api
Vultr: https://www.vultr.com/api
Linode: https://www.linode.com/api
AWS: https://aws.amazon.com
Owner Token: YOUR_VPS_API_TOKEN
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "VPS Menu - 360+ Features (Owner Only)",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = vpsMenu;
