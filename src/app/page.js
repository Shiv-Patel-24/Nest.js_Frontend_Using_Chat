"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

const contacts = [
  {
    id: 1,
    name: "Emma Thompson",
    lastMessage: "I've sent you the latest project f...",
    online: true,
    avatar: "EM",
    time: "12:45 PM",
  },
  {
    id: 2,
    name: "Michael Johnson",
    lastMessage: "Are we still meeting for coffee to...",
    online: false,
    avatar: "MJ",
    time: "Yesterday",
  },
  {
    id: 3,
    name: "Sophia Lee",
    lastMessage: "The design team loved your pre...",
    online: true,
    avatar: "SL",
    time: "Yesterday",
  },
  {
    id: 4,
    name: "Robert Brown",
    lastMessage: "Can you review the budget prop...",
    online: false,
    avatar: "RB",
    time: "Tuesday",
  },
  {
    id: 5,
    name: "Amelia Wilson",
    lastMessage: "Thanks for your help with the cli...",
    online: true,
    avatar: "AW",
    time: "Monday",
  },
  {
    id: 6,
    name: "Daniel Martinez",
    lastMessage: "Let's schedule a call to discuss t...",
    online: false,
    avatar: "DM",
    time: "May 25",
  },
];

const initialMessages = {
  1: [
    {
      sender: "Emma Thompson",
      text: "Sounds great! I've heard good things about their pasta. Looking forward to it!",
      time: "12:00 PM",
      type: "received",
    },
    {
      sender: "Emma Thompson",
      text: "Oh, I almost forgot - do you have the latest version of the client presentation? I want to make sure we're all on the same page for tomorrow.",
      time: "12:05 PM",
      type: "received",
    },
    {
      sender: "me",
      text: "I've just sent it to your email. It includes all the updates we discussed in the last meeting. Let me know if you need anything else!",
      time: "12:15 PM",
      type: "sent",
    },
    {
      sender: "Emma Thompson",
      text: "Got it, thanks! I'll review it before our lunch. See you soon!",
      time: "12:20 PM",
      type: "received",
    },
    {
      sender: "me",
      text: "Looking forward to it! 👍",
      time: "12:25 PM",
      type: "sent",
    },
  ],
  2: [
    {
      sender: "Michael Johnson",
      text: "Are we still meeting for coffee tomorrow?",
      time: "Yesterday",
      type: "received",
    },
  ],
  3: [
    {
      sender: "Sophia Lee",
      text: "The design team loved your presentation!",
      time: "Yesterday",
      type: "received",
    },
  ],
  4: [
    {
      sender: "Robert Brown",
      text: "Can you review the budget proposal?",
      time: "Tuesday",
      type: "received",
    },
  ],
  5: [
    {
      sender: "Amelia Wilson",
      text: "Thanks for your help with the client!",
      time: "Monday",
      type: "received",
    },
  ],
  6: [
    {
      sender: "Daniel Martinez",
      text: "Let's schedule a call to discuss the project.",
      time: "May 25",
      type: "received",
    },
  ],
};

const dummyReplies = [
  "That's interesting!",
  "Can you tell me more?",
  "I'll get back to you on that.",
  "Thanks for the update!",
  "Sounds good to me!",
  "Let me check and get back to you.",
  "Perfect! Looking forward to it.",
  "I agree with your suggestion.",
];

export default function Home() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  function getRandomReply() {
    return dummyReplies[Math.floor(Math.random() * dummyReplies.length)];
  }

  function handleSendMessage(text) {
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => ({
      ...prev,
      [selectedContact.id]: [
        ...(prev[selectedContact.id] || []),
        { sender: "me", text, time: now, type: "sent" },
      ],
    }));

    // Simulate bot reply after 1-2 seconds
    setTimeout(() => {
      const replyTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages((prev) => ({
        ...prev,
        [selectedContact.id]: [
          ...(prev[selectedContact.id] || []),
          {
            sender: selectedContact.name,
            text: getRandomReply(),
            time: replyTime,
            type: "received",
          },
        ],
      }));
    }, 1000 + Math.random() * 1000);
  }

  function handleContactSelect(contact) {
    setSelectedContact(contact);
  }

  return (
    <div className="app-container">
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="main-content">
        <Sidebar
          contacts={contacts}
          selectedContact={selectedContact}
          onSelectContact={handleContactSelect}
          collapsed={sidebarCollapsed}
        />
        <div
          className={`chat-section ${
            sidebarCollapsed ? "sidebar-collapsed" : ""
          }`}
        >
          <ChatHeader contact={selectedContact} />
          <ChatWindow messages={messages[selectedContact.id] || []} />
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
