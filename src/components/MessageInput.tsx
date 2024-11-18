// src/components/MessageInput.tsx
'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

interface Props {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<Props> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() === '') return;
    onSend(message);
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex items-center border-t border-gray-300 p-2">
      <input
        type="text"
        className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className="ml-2 p-2 bg-primary text-white rounded-full hover:bg-primary-dark"
        onClick={handleSend}
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MessageInput;
