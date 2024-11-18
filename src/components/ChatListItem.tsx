// src/components/ChatListItem.tsx
'use client';

import { MessageSquare } from 'lucide-react';
import clsx from 'clsx';

interface ChatListItemProps {
  id: number;
  name: string;
  lastMessage: string;
  isSelected: boolean;
  onClick: () => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ name, lastMessage, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex items-center p-4 cursor-pointer hover:bg-gray-100',
        isSelected && 'bg-gray-200'
      )}
    >
      <MessageSquare className="w-6 h-6 mr-4 text-primary" />
      <div>
        <h2 className="font-semibold text-base">{name}</h2>
        <p className="text-sm text-gray-600">{lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatListItem;
