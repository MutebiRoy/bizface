// src/components/ChatList.tsx
'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { UserRound, Search } from 'lucide-react';
import ChatListHeader from './ChatListHeader';
import ChatListFooter from './ChatListFooter';

interface ChatItem {
  id: number;
  name: string;
  lastMessage: string;
}

interface ChatListProps {
  onSelectChat: (chat: ChatItem) => void;
  onCreateGroup: () => void;
  onViewOnlineUsers: () => void;
  onHome: () => void;
  onEditProfile: () => void;
}

const mockChats: ChatItem[] = [
  { id: 1, name: 'Alice', lastMessage: 'See you later!' },
  { id: 2, name: 'Bob', lastMessage: 'Got it, thanks!' },
  { id: 3, name: 'Charlie', lastMessage: 'Let’s catch up tomorrow.' },
  { id: 4, name: 'Alice', lastMessage: 'See you later!' },
  { id: 5, name: 'Bob', lastMessage: 'Got it, thanks!' },
  { id: 6, name: 'Charlie', lastMessage: 'Let’s catch up tomorrow.' },
  { id: 7, name: 'Alice', lastMessage: 'See you later!' },
  { id: 8, name: 'Bob', lastMessage: 'Got it, thanks!' },
  { id: 9, name: 'Charlie', lastMessage: 'Let’s catch up tomorrow.' },

  // Add more mock data as needed
];

const ChatList: React.FC<ChatListProps> = ({
  onSelectChat,
  onCreateGroup,
  onViewOnlineUsers,
  onHome,
  onEditProfile,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  const handleSelect = (chat: ChatItem) => {
    setSelectedChatId(chat.id);
    onSelectChat(chat);
  };

  // Filter chats based on search query
  const filteredChats = mockChats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <ChatListHeader
        onCreateGroup={onCreateGroup}
        onViewOnlineUsers={onViewOnlineUsers}
      />

      {/* Search Area */}
      <div className="p-4">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search chats"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-grow flex-shrink min-h-0 overflow-y-auto">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={clsx(
                'flex items-center p-4 cursor-pointer hover:bg-gray-100',
                selectedChatId === chat.id && 'bg-gray-200'
              )}
              onClick={() => handleSelect(chat)}
            >
              <UserRound className="w-6 h-6 mr-4 text-primary" />
              <div>
                <h2 className="font-semibold text-base">{chat.name}</h2>
                <p className="text-sm text-gray-600">{chat.lastMessage}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No chats found.</p>
        )}
        
      
      </div>
      {/* Footer */}
      <ChatListFooter onHome={onHome} onEditProfile={onEditProfile} />
    </div>
  );
};

export default ChatList;
