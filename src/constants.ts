import { User, Chat, Message } from "./types";

export const USERS: User[] = [
  {
  name: "Alice",
  id: "1",
  chatIds: [
    "chat1",
    "chat3",
    "chat4",
    "chat5",
    "chat6",
    "chat7",
    "chat8",
    "chat9",
    "chat10",
    "chat11",
    "chat12",
    "chat13",
    "chat14",
    "chat15",
    "chat20",
  ],
  profileImage: "profile1.jpg",
  password:"hello123"
},
{
  name: "Bob",
  id: "2",
  chatIds: [
    "chat21",
    "chat22",
    "chat23",
  ],
  profileImage: "profile1.jpg",
  password:"hello123"
},
];

export const CHATS: Chat[] = [
  {
    id: "chat1",
    messageIds: [],
    name: "Alice",
    memberIds: ["1"],
  },
  {
    id: "chat3",
    messageIds: ["msg1","msg2"],
    name: "Bob",
    memberIds: ["1","2"],
  },
  {
    id: "chat4",
    messageIds: ["msg3","msg4"],
    name: "Charlie",
    memberIds: ["1","3"],
  },
  {
    id: "chat5",
    messageIds: ["msg5","msg6"],
    name: "David",
    memberIds: ["1","4"],
  },
  {
    id: "chat6",
    messageIds: ["msg7","msg8"],
    name: "Emily",
    memberIds: ["1","5"],
  },
  {
    id: "chat7",
    messageIds: ["msg9","msg10"],
    name: "Frank",
    memberIds: ["1","6"],
  },
  {
    id: "chat8",
    messageIds: ["msg11","msg12"],
    name: "Grace",
    memberIds: ["1","7"],
  },
  {
    id: "chat9",
    messageIds: ["msg13","msg14"],
    name: "Hannah",
    memberIds: ["1","8"],
  },
  {
    id: "chat10",
    messageIds: ["msg15","msg16"],
    name: "Isaac",
    memberIds: ["1","9"],
  },
  {
    id: "chat11",
    messageIds: ["msg17","msg18"],
    name: "Jack",
    memberIds: ["1","10"],
  },
  {
    id: "chat12",
    messageIds: [],
    name: "Kevin",
    memberIds: ["1","11"],
  },
  {
    id: "chat13",
    messageIds: [],
    name: "Lily",
    memberIds: ["1","12"],
  },
  {
    id: "chat14",
    messageIds: [],
    name: "Megan",
    memberIds: ["13"],
  },
  {
    id: "chat15",
    messageIds: [],
    name: "Nathan",
    memberIds: ["14"],
  },
  {
    id: "chat16",
    messageIds: [],
    name: "Olivia",
    memberIds: ["15"],
  },
  {
    id: "chat17",
    messageIds: [],
    name: "Peter",
    memberIds: ["16"],
  },
  {
    id: "chat18",
    messageIds: [],
    name: "Quinn",
    memberIds: ["17"],
  },
  {
    id: "chat19",
    messageIds: [],
    name: "Rachel",
    memberIds: ["18"],
  },
  {
    id: "chat20",
    messageIds: ["msg21","msg22","msg23","msg24","msg25"],
    name: "Onboard",
    memberIds: ["1","19","12","13","10"],
  },
  {
    id:"chat21",
    messageIds: ["msg26","msg27"],
    name:"Bob",
    memberIds:["2"]
  },
  {
    id:"chat22",
    messageIds: ["msg28","msg29"],
    name:"Charlie",
    memberIds:["2","3"]
  },
  {
    id:"chat23",
    messageIds: ["msg1","msg2"],
    name:"Alice",
    memberIds:["2","1"]
  }
];

export const MESSAGES: Message[] = [
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "2", name: "Bob" },
    id: "msg1",
    timeStamp: "9:00 AM",
    content: "Hello Alice!",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "2", name: "Bob" },
    id: "msg2",
    timeStamp: "9:01 AM",
    content: "How are you doing?",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "3", name: "Charlie" },
    id: "msg3",
    timeStamp: "9:02 AM",
    content: "Hey Alice!",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "3", name: "Charlie" },
    id: "msg4",
    timeStamp: "9:04 AM",
    content: "Are you busy?",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "4", name: "David" },
    id: "msg5",
    timeStamp: "9:06 AM",
    content: "Good morning!",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "4", name: "David" },
    id: "msg6",
    timeStamp: "9:08 AM",
    content: "Did you see the news today?",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "5", name: "Emily" },
    id: "msg7",
    timeStamp: "9:10 AM",
    content: "Hi Alice, how's it going?",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "5", name: "Emily" },
    id: "msg8",
    timeStamp: "9:10 AM",
    content: "I heard about the project deadline extension.",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "6", name: "Frank" },
    id: "msg9",
    timeStamp: "9:10 AM",
    content: "Hey Alice, do you have a moment?",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "6", name: "Frank" },
    id: "msg10",
    timeStamp: "9:10 AM",
    content: "I wanted to discuss the new feature implementation.",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "7", name: "Grace" },
    id: "msg11",
    timeStamp: "9:10 AM",
    content: "Hi Alice, how was your weekend?",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "7", name: "Grace" },
    id: "msg12",
    timeStamp: "9:10 AM",
    content: "I went hiking in the mountains.",
  },

  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "8", name: "Hannah" },
    id: "msg13",
    timeStamp: "9:10 AM",
    content: "Hi Alice, have you seen the latest update?",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "8", name: "Hannah" },
    id: "msg14",
    timeStamp: "9:10 AM",
    content: "I think we need to review it before the meeting.",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "9", name: "Isaac" },
    id: "msg15",
    timeStamp: "9:10 AM",
    content: "Hello Alice, how are you doing today?",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "9", name: "Isaac" },
    id: "msg16",
    timeStamp: "9:10 AM",
    content: "I wanted to discuss the upcoming project.",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "10", name: "Jack" },
    id: "msg17",
    timeStamp: "9:10 AM",
    content: "Hi Alice, do you have a moment to chat?",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "10", name: "Jack" },
    id: "msg18",
    timeStamp: "9:10 AM",
    content: "I wanted to get your opinion on something.",
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "12", name: "Lily" },
    id: "msg21",
    timeStamp: "9:10 AM",
    content: "Welcome to the team, Alice!"
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "20", name: "Nathan" },
    id: "msg22",
    timeStamp: "9:11 AM",
    content: "We're excited to have you on board!"
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "14", name: "Megan" },
    id: "msg23",
    timeStamp: "9:12 AM",
    content: "Let me know if you have any questions."
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "15", name: "Nathan" },
    id: "msg24",
    timeStamp: "9:13 AM",
    content: "I'll be your mentor during the onboarding process."
  },
  {
    receiver: { id: "1", name: "Alice" },
    sender: { id: "18", name: "Rachel" },
    id: "msg25",
    timeStamp: "9:14 AM",
    content: "Feel free to reach out anytime!"
  },
  {
    receiver: { id: "2", name: "Bob" },
    sender: { id: "2", name: "Bob" },
    id: "msg26",
    timeStamp: "9:13 AM",
    content: "I'll be your mentor during the onboarding process."
  },
  {
    receiver: { id: "2", name: "Bob" },
    sender: { id: "2", name: "Bob" },
    id: "msg27",
    timeStamp: "9:14 AM",
    content: "Feel free to reach out anytime!"
  },
  {
    receiver: { id: "2", name: "Bob" },
    sender: { id: "3", name: "Charlie" },
    id: "msg28",
    timeStamp: "9:13 AM",
    content: "I'll be your mentor during the onboarding process."
  },
  {
    receiver: { id: "2", name: "Bob" },
    sender: { id: "3", name: "Charlie" },
    id: "msg29",
    timeStamp: "9:14 AM",
    content: "Feel free to reach out anytime!"
  },

];
