// 🔊 TTS Menu (Text to Speech)
const setting = require("../../setting");

const ttsMenu = {
  execute: async (sock, message, setting, logger) => {
    const sender = message.key.remoteJid;
    
    const menuText = `
╔════════════════════════════════════╗
║       🔊 TTS MENU 🔊                ║
╚════════════════════════════════════╝

*🔊 TTS COMMANDS (350+ Features):*

🎙️ *.tts id <teks>* - TTS Indonesian
🎙️ *.tts en <teks>* - TTS English
🎙️ *.tts es <teks>* - TTS Spanish
🎙️ *.tts fr <teks>* - TTS French
🎙️ *.tts de <teks>* - TTS German
🎙️ *.tts it <teks>* - TTS Italian
🎙️ *.tts pt <teks>* - TTS Portuguese
🎙️ *.tts ru <teks>* - TTS Russian
🎙️ *.tts ja <teks>* - TTS Japanese
🎙️ *.tts ko <teks>* - TTS Korean
🎙️ *.tts zh <teks>* - TTS Chinese
🎙️ *.tts ar <teks>* - TTS Arabic
🎙️ *.tts hi <teks>* - TTS Hindi
🎙️ *.tts th <teks>* - TTS Thai
🎙️ *.tts vi <teks>* - TTS Vietnamese
🎙️ *.tts tr <teks>* - TTS Turkish
🎙️ *.tts pl <teks>* - TTS Polish
🎙️ *.tts nl <teks>* - TTS Dutch
🎙️ *.tts sv <teks>* - TTS Swedish
🎙️ *.tts da <teks>* - TTS Danish
🎙️ *.tts no <teks>* - TTS Norwegian
🎙️ *.tts fi <teks>* - TTS Finnish
🎙️ *.tts cs <teks>* - TTS Czech
🎙️ *.tts hu <teks>* - TTS Hungarian
🎙️ *.tts ro <teks>* - TTS Romanian
🎙️ *.tts el <teks>* - TTS Greek
🎙️ *.tts he <teks>* - TTS Hebrew

═══════════════════════════════════
> Gunakan *.menu* untuk kembali

📌 API REQUIREMENTS:
Google Cloud TTS: https://cloud.google.com/text-to-speech
    `;

    return await sock.sendMessage(sender, {
      text: menuText,
      contextInfo: {
        externalAdReply: {
          title: "DEXZ LORD BOT",
          body: "TTS Menu - 350+ Features",
          mediaType: 1,
          mediaUrl: setting.media.thumbnail
        }
      }
    });
  }
};

module.exports = ttsMenu;
