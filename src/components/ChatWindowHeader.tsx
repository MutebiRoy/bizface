// src/components/ChatWindowHeader.tsx
'use client';

import { ArrowLeft, Phone, UserRound } from 'lucide-react';
import IconButton from './IconButton';
import Link from 'next/link';

interface ChatWindowHeaderProps {
  chatName: string;
  userId: number; // Added userId prop
  onBack: () => void;
  onCall: () => void;
}

const ChatWindowHeader: React.FC<ChatWindowHeaderProps> = ({
  chatName,
  userId,
  onBack,
  onCall,
}) => {
  return (
    <header className="flex items-center justify-between p-4 bg-primary text-white sticky top-0 z-10">
      {/* Left: Back Arrow and User Icon */}
      <div className="flex items-center space-x-2">
        <IconButton
          icon={<ArrowLeft className="w-5 h-5 text-white" />}
          ariaLabel="Go Back"
          onClick={onBack}
        />
        {/* Link to Profile Page */}
        <Link href={`/profile/${userId}`} className="flex items-center space-x-1">
          <UserRound className="w-6 h-6" />
          <h1 className="text-lg font-semibold">{chatName}</h1>
        </Link>
      </div>

      {/* Right: Call Button */}
      <IconButton
        icon={<Phone className="w-5 h-5 text-white" />}
        ariaLabel="Call"
        onClick={onCall}
      />
    </header>
  );
};

export default ChatWindowHeader;
