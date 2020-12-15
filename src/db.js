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
