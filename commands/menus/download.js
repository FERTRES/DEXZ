// 📥 Download Menu
const setting = require("../../setting");

const downloadMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║      📥 DOWNLOAD MENU 📥            ║
╚════════════════════════════════════╝

*⬇️ DOWNLOAD COMMANDS (90+ Features):*

🎵 *.ytmusic <url>* - Download musik YouTube
🎬 *.ytvideo <url>* - Download video YouTube
📱 *.tiktok <url>* - Download TikTok
📸 *.instagram <url>* - Download Instagram
🎵 *.spotify <url>* - Download Spotify
🎥 *.facebook <url>* - Download Facebook
📹 *.twitter <url>* - Download Twitter
🎬 *.twitch <url>* - Download Twitch
🎙️ *.soundcloud <url>* - Download SoundCloud
📻 *.radikal <url>* - Download Radikal
🎬 *.vimeo <url>* - Download Vimeo
📺 *.dailymotion <url>* - Download Dailymotion
🎬 *.mediafire <url>* - Download MediaFire
📥 *.google <url>* - Download Google Drive
☁️ *.onedrive <url>* - Download OneDrive
🎁 *.anonfiles <url>* - Download AnonFiles
📦 *.mega <url>* - Download MEGA
🌐 *.terabox <url>* - Download TeraBox
🔗 *.short <url>* - Pendek URL
📄 *.pdf <url>* - Download PDF
📚 *.epub <url>* - Download EPUB
📖 *.ebook <url>* - Download eBook
🎨 *.wallpaper <url>* - Download wallpaper
🖼️ *.image <url>* - Download gambar
📷 *.screenshot <url>* - Screenshot website
💿 *.torrent <url>* - Download torrent
🔗 *.magnet <url>* - Download magnet link

═══════════════════════════════════
> Gunakan *.menu* untuk kembali
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "Download Menu - 90+ Features",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = downloadMenu;
