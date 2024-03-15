import { User, Chat, Message } from "./types";

export const user: User = {
  name: "Alice",
  id: "1",
  chatIds: [
    "chat1",
    "chat2",
    "chat3",
    "chat4",
    "chat5",
    "chat6",
    "chat7",
    "chat8",
    "chat9",
    "chat10",
  ],
  profileImage: "profile1.jpg",
};

export const chats: Chat[] = [
  {
    id: "chat1",
    messageIds: [],
    name: "Alice",
    memberIds: ["1", "2"],
  },
  {
    id: "chat2",
    messageIds: [],
    name: "Onboard",
    memberIds: ["1"],
  },
  {
    id: "chat3",
    messageIds: [],
    name: "Bob",
    memberIds: ["2"],
  },
  {
    id: "chat4",
    messageIds: [],
    name: "Charlie",
    memberIds: ["3"],
  },
  {
    id: "chat5",
    messageIds: [],
    name: "David",
    memberIds: ["4"],
  },
  {
    id: "chat6",
    messageIds: [],
    name: "Emily",
    memberIds: ["5"],
  },
  {
    id: "chat7",
    messageIds: [],
    name: "Frank",
    memberIds: ["6"],
  },
  {
    id: "chat8",
    messageIds: [],
    name: "Grace",
    memberIds: ["7"],
  },
  {
    id: "chat9",
    messageIds: [],
    name: "Hannah",
    memberIds: ["8"],
  },
  {
    id: "chat10",
    messageIds: [],
    name: "Isaac",
    memberIds: ["9"],
  },
  // Add more chat objects as needed
];

export const messages: Message[] = [
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "2", name: "Bob" },
    id: "msg1",
    timeStamp: "2022-03-10T10:00:00Z",
    content: "Hello Alice!",
  },
  {
    receiver: { id: "2", name: "Bob" },
    sender: { id: "1", name: "Alice" },
    id: "msg2",
    timeStamp: "2022-03-10T10:01:00Z",
    content: "Hi Bob!",
  },
];
