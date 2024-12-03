import { createRoutesFromChildren } from "react-router-dom";

export const samepleChats = [
  {
    avatar: ["/Image/nature.jpg"],
    name: "Ravi Raj",
    _id: "1",
    groupChat: false,
    members: ["1", "2", "3"],
  },
  {
    avatar: ["/Image/nature.jpg"],
    name: "Sonu",
    _id: "2",
    groupChat: false,
    members: ["1", "2", "3"],
  },
  {
    avatar: ["/Image/nature.jpg"],
    name: "Monu",
    _id: "3",
    groupChat: false,
    members: ["1", "2", "3"],
  },
  {
    avatar: [
      "/Image/nature.jpg",
      "/Image/nature.jpg",
      "/Image/nature.jpg",
      "/Image/nature.jpg",
    ],
    name: "Golu",
    _id: "4",
    groupChat: true,
    members: ["1", "2", "3"],
  },
];

export const sampleusers = [
  {
    avatar: ["/Image/nature.jpg"],
    name: "Ravi Raj",
    _id: "1",
  },
  {
    avatar: ["/Image/nature.jpg"],
    name: "Sonu",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Ravi Raj",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Sonu",
    },
    _id: "2",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Ravi Raj",
    },
    _id: "3",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Sonu",
    },
    _id: "4",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Ravi Raj",
    },
    _id: "5",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Sonu",
    },
    _id: "6",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Ravi Raj",
    },
    _id: "7",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Sonu",
    },
    _id: "8",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Ravi Raj",
    },
    _id: "9",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Sonu",
    },
    _id: "10",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Ravi Raj",
    },
    _id: "11",
  },
  {
    sender: {
      avatar: ["/Image/nature.jpg"],
      name: "Sonu",
    },
    _id: "12",
  },
];

export const samepleMessage = [
  {
    content: "Sonu ka Messages hai",
    _id: "sjfdfkjdsklfj",
    sender: {
      _id: "user._id",
      name: "Sonu",
    },
    chat: "ChatId",
    createdAt: "2024-10-28T01:25:08.682Z",
  },
  {
    attachments: [
      {
        public_id: "asdsad2",
        url: "/Image/nature.jpg",
      },
    ],

    content: "Ye mera Message Hai",
    _id: "sjfdfkjdsklfj2",
    sender: {
      _id: "skdfsdlf",
      name: "You",
    },
    chat: "ChatId2",
    createdAt: "2024-10-28T01:25:08.682Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Sonu",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "sonu",
      friends: 20,
      groups: 5,
    },
    {
      name: "Aditi",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      _id: "2",
      username: "aditi",
      friends: 15,
      groups: 3,
    },
    {
      name: "Raj",
      avatar: "/Image/nature.jpg",
      _id: "3",
      username: "raj",
      friends: 25,
      groups: 2,
    },
    {
      name: "Nisha",
      avatar: "/Image/nature.jpg",
      _id: "4",
      username: "nisha",
      friends: 30,
      groups: 4,
    },
    {
      name: "Vikram",
      avatar: "/Image/nature.jpg",
      _id: "5",
      username: "vikram",
      friends: 10,
      groups: 1,
    },
    {
      name: "Priya",
      avatar: "/Image/nature.jpg",
      _id: "6",
      username: "priya",
      friends: 18,
      groups: 2,
    },
    {
      name: "Aman",
      avatar: "/Image/nature.jpg",
      _id: "7",
      username: "aman",
      friends: 22,
      groups: 3,
    },
    {
      name: "Riya",
      avatar: "/Image/nature.jpg",
      _id: "8",
      username: "riya",
      friends: 12,
      groups: 5,
    },
    {
      name: "Karan",
      avatar: "/Image/nature.jpg",
      _id: "9",
      username: "karan",
      friends: 17,
      groups: 4,
    },
    {
      name: "Neha",
      avatar: "/Image/nature.jpg",
      _id: "10",
      username: "neha",
      friends: 29,
      groups: 6,
    },
  ],

  chats: [
    {
      name: "Sonu",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "/Image/nature.jpg" },
        { _id: "2", avatar: "/Image/nature.jpg" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Sonu",
        avatar: "/Image/nature.jpg",
      },
    },
    {
      name: "Ravi",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        { _id: "1", avatar: "/Image/nature.jpg" },
        { _id: "2", avatar: "/Image/nature.jpg" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Sonu",
        avatar: "/Image/nature.jpg",
      },
    },
    {
      name: "Himanshu",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "3",
      groupChat: false,
      members: [
        { _id: "1", avatar: "/Image/nature.jpg" },
        { _id: "2", avatar: "/Image/nature.jpg" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Sonu",
        avatar: "/Image/nature.jpg",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "sldfjlsdjflsd",
      _id: "kdfjlddljfk",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman",
      },
      chat: "chatId",
      groupChat: false,
      createAt: "2024-02-12T10:41:30.630Z",
    },
    {
      attachments: [
        {
          public_id: "lsjdfls",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "sldfjlsdjflsd",
      _id: "jgkdfjgldfkj",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman2",
      },
      chat: "chatId",
      groupChat: true,
      createAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
