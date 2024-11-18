// src/components/ChatListFooter.tsx
'use client';

import { House, UserPen } from 'lucide-react';
import IconButton from './IconButton';

interface ChatListFooterProps {
  onHome: () => void;
  onEditProfile: () => void;
}

const ChatListFooter: React.FC<ChatListFooterProps> = ({ onHome, onEditProfile }) => {
  return (
    <footer className="p-4 bg-gray-100 flex space-x-4">
      {/* Home Button */}
      <IconButton
        icon={<House className="w-5 h-5 text-primary" />}
        ariaLabel="Home"
        onClick={onHome}
      />
      {/* Edit Profile Button */}
      <IconButton
        icon={<UserPen className="w-5 h-5 text-primary" />}
        ariaLabel="Edit Profile"
        onClick={onEditProfile}
      />
    </footer>
  );
};

export default ChatListFooter;
