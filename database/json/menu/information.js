const information = (prefix, ownerBot, botName) => {
        return `
「 *${ROJBOT}* 」

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
◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}kbbi
  ├─ ❏ ${prefix}fakta
  ├─ ❏ ${prefix}infocuaca
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}jadwaltvnow
  └─ ❏ ${prefix}covidcountry`
}
exports.information = information
