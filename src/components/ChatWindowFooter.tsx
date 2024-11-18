// src/components/ChatWindowFooter.tsx
'use client';

import { Smile, Plus, Send } from 'lucide-react';
import IconButton from './IconButton';

interface ChatWindowFooterProps {
  onSendEmoji: () => void;
  onSendAttachment: () => void;
  onSendMessage: () => void;
  message: string;
  setMessage: (msg: string) => void;
}

const ChatWindowFooter: React.FC<ChatWindowFooterProps> = ({
  onSendEmoji,
  onSendAttachment,
  onSendMessage,
  message,
  setMessage,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSendMessage();
    }
  };

  return (
    <footer className="flex items-center p-4 bg-gray-100 sticky bottom-0 z-10">
      {/* Before Chat Input: Emoji and Plus Icons */}
      <div className="flex items-center space-x-2">
        <IconButton
          icon={<Smile className="w-5 h-5 text-gray-600" />}
          ariaLabel="Send Emoji"
          onClick={onSendEmoji}
        />
        <IconButton
          icon={<Plus className="w-5 h-5 text-gray-600" />}
          ariaLabel="Send Photo/Video"
          onClick={onSendAttachment}
        />
      </div>

      {/* Chat Input */}
      <div className="flex-1 mx-2">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
        />
      </div>

      {/* After Chat Input: Send Icon */}
      <IconButton
        icon={<Send className="w-5 h-5 text-primary" />}
        ariaLabel="Send Message"
        onClick={onSendMessage}
      />
    </footer>
  );
};

export default ChatWindowFooter;
