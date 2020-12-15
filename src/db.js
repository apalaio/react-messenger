export const users = [
  { username: "user", password: "pass", id: 1 },
  { username: "user1", password: "pass", id: 2 },
  { username: "user2", password: "pass", id: 3 },
  { username: "user3", password: "pass", id: 4 },
];

export const conversations = [
  {
    participants: [
      { userId: 1, username: "user" },
      { userId: 2, username: "user1" },
    ],
    messages: [
      { id: 1, userId: 1, content: "Hello" },
      { id: 2, userId: 1, content: "Hey there" },
      { id: 3, userId: 1, content: "how are you?" },
    ],
    conversationId: 1,
  },
];
//pws diavazei h pws setarei ton active user

//state.activeUser = undefined (Login.js)

//the state used in Login.js doesnt reflect the updates happening
// on the reducer

//move effects on login component. Post only state on the reducer

// conversations.forEach(chat => {
//   if (chat.participants.includes(username)) {
//     userConversations = [...userConversations, chat];
//   }
// });