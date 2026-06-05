// 👥 Group Handler
const pino = require("pino");
const logger = pino();

async function handleGroupUpdate(sock, updates, setting, logger) {
  for (const update of updates) {
    try {
      const { id, announce, restrict, desc, subject, icon } = update;
      
      if (announce === false) {
        await sock.sendMessage(id, {
          text: "📢 *GRUP DIUMUMKAN*\n\nGrup ini sekarang bisa diumumkan"
        });
      }
      
      if (restrict === false) {
        await sock.sendMessage(id, {
          text: "🔓 *GRUP DIBUKA*\n\nSemua member bisa mengedit info grup"
        });
      }
      
    } catch (err) {
      logger.error("Group update error:", err);
    }
  }
}

module.exports = { handleGroupUpdate };
