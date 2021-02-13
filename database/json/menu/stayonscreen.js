const stayonscreen = (prefix, ownerBot, botName) => {
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
◪ *MENU*
  │
  └─ ❏ ${prefix}afk`
}
exports.stayonscreen = stayonscreen
