const other = (prefix, ownerBot, botName) => {
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
◪ *OTHER*
  │
  ├─ ❏ ${prefix}send
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}virtex
  ├─ ❏ ${prefix}qrcode
  ├─ ❏ ${prefix}timer
  ├─ ❏ ${prefix}fml
  └─ ❏ ${prefix}fml2`
}
exports.other = other
