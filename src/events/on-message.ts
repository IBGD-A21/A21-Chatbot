// events = {
//     onMessage: () => {},
//     onReady: () => {}
// }


// const onMessage = () => {
//   try {
//     if (data.from !== CONTACT_RECEIVER) return;

//     const [tagCommand, message] = getCommand(data.body);

//     if (!isTagCommand(tagCommand)) return;

//     return;

//     const allChats = await getAllChats();
//     const a21Group = allChats.filter((chat) => chat.isGroup && chat.name === GROUP_NAME)[0] as GroupChat;
//     const allGroupMembers = a21Group.participants;

//     const filteredMembers = allGroupMembers.filter((member) => filter1.includes(member.id.user));

//     const contacts = await Promise.all<Contact>(filteredMembers.map(async (contact) => await client.getContactById(contact.id._serialized)));

//     if (contacts) {
//       const messageSent = await a21Group.sendMessage(tagMessage(contacts, message), { mentions: contacts });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
