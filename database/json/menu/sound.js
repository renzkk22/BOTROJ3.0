const sound = (prefix, ownerBot, botName) => {
        return `
「 *${BOTROJ}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ROJ}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *SOUND*
  │
  └─ ❏ ${prefix}tts`
}
exports.sound = sound
