const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = ` ── 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎: * ${pesan}`;
  let teks = `𝐁𝐮𝐞𝐧𝐨𝐬 𝐝𝐢𝐚𝐬 / 𝐭𝐚𝐫𝐝𝐞𝐬 / 𝐧𝐨𝐜𝐡𝐞𝐬 𝐜𝐨𝐧 𝐭𝐨𝐝𝐨𝐬 𝐥𝐨 𝐥𝐢𝐝𝐞𝐫𝐞𝐬 𝐛𝐞𝐥𝐥@𝐬... 𝐝𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 🌤 𝐲 𝐚𝐧𝐨𝐭𝐞𝐧𝐬𝐞 𝐞𝐧 𝐧𝐮𝐞𝐬𝐭𝐫𝐚𝐬 𝐚𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝𝐞𝐬....🥰🖤💕 *${oi}\n`;
  for (const mem of participants) {
    teks += `*👑🤍🎙 * @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└𝐈𝐆: @𝒏𝒊𝒌𝒌𝒊𝟑𝟎.𝒇𝒇 & @𝒏𝒊𝒌𝒌𝒊𝒕𝒂_𝒅𝒛𝒏*`;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};
handler.help = ['todos *<txt>*'];
handler.tags = ['gc'];
handler.command = /^(tagall|t|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;