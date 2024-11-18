// src/app/page.tsx
'use client';

import { useState } from 'react';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';

interface ChatItem {
  id: number;
  name: string;
  lastMessage: string;
}

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

const Home: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<ChatItem | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSelectChat = (chat: ChatItem) => {
    setSelectedChat(chat);
    // Fetch or set messages for the selected chat here
    // Example:
    const mockMessages: Message[] = [
      { id: 1, sender: chat.name, content: 'Hello!', timestamp: '10:00 AM' },
      { id: 2, sender: 'You', content: 'Hi there!', timestamp: '10:01 AM' },
    ];
    setMessages(mockMessages);
  };

  const handleBackToChatList = () => {
    setSelectedChat(null);
    setMessages([]);
  };

  const handleCall = () => {
    // Implement call functionality
    console.log('Calling...');
  };

  const handleCreateGroup = () => {
    // Implement group creation functionality
    console.log('Creating group...');
  };

  const handleViewOnlineUsers = () => {
    // Implement viewing online users functionality
    console.log('Viewing online users...');
  };

  const handleHome = () => {
    // Implement Home navigation
    console.log('Navigating to Home...');
  };

  const handleEditProfile = () => {
    // Implement Edit Profile functionality
    console.log('Editing profile...');
  };

  return (
    <div className="flex flex-col h-screen">
      {!selectedChat ? (
        <ChatList
          onSelectChat={handleSelectChat}
          onCreateGroup={handleCreateGroup}
          onViewOnlineUsers={handleViewOnlineUsers}
          onHome={handleHome}
          onEditProfile={handleEditProfile}
        />
      ) : (
        <ChatWindow
          chatName={selectedChat.name}
          userId={selectedChat.id} // Assuming chat.id corresponds to user.id
          messages={messages}
          onBack={handleBackToChatList}
          onCall={handleCall}
        />
      )}
    </div>
  );
};

export default Home;
