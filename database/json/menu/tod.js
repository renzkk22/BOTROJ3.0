const tod = (prefix, ownerBot, botName) => {
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
◪ *TOD*
  │
  ├─ ❏ ${prefix}trust
  └─ ❏ ${prefix}dare`
}
exports.tod = tod
