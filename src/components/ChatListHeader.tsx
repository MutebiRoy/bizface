// src/components/ChatListHeader.tsx
'use client';

import { CircleUser, Plus, Users } from 'lucide-react';
import IconButton from './IconButton'; // Reusable IconButton component
import ThemeToggle from './ThemeToggle'; // Theme toggle component

interface ChatListHeaderProps {
  onCreateGroup: () => void;
  onViewOnlineUsers: () => void;
}

const ChatListHeader: React.FC<ChatListHeaderProps> = ({
  onCreateGroup,
  onViewOnlineUsers,
}) => {
  return (
    <header className="flex items-center justify-between p-4 bg-primary text-white">
      {/* Left: Profile Picture */}
      <div className="flex items-center">
        <CircleUser className="w-8 h-8 mr-2" />
        {/* Replace with actual profile picture if available */}
      </div>

      {/* Right: Create Groups, Online Users, Theme Toggle */}
      <div className="flex items-center space-x-4">
        <IconButton
          icon={<Plus className="w-5 h-5" />}
          ariaLabel="Create Group"
          onClick={onCreateGroup}
        />
        <IconButton
          icon={<Users className="w-5 h-5" />}
          ariaLabel="View Online Users"
          onClick={onViewOnlineUsers}
        />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default ChatListHeader;
