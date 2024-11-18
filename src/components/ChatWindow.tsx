// src/components/ChatWindow.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Smile, Plus, Send } from 'lucide-react';
import ChatWindowHeader from './ChatWindowHeader';
import ChatWindowFooter from './ChatWindowFooter';
import IconButton from './IconButton';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

interface ChatWindowProps {
  chatName: string;
  userId: number; // Ensure this is the correct user ID
  messages: Message[];
  onBack: () => void;
  onCall: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  chatName,
  userId,
  messages,
  onBack,
  onCall,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');

  // Scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    // Implement sending message logic here
    console.log('Sending message:', message);
    setMessage('');
  };

  const handleSendEmoji = () => {
    // Implement emoji picker logic here
    console.log('Open Emoji Picker');
  };

  const handleSendAttachment = () => {
    // Implement photo/video upload logic here
    console.log('Open Attachment Options');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <ChatWindowHeader
        chatName={chatName}
        userId={userId}
        onBack={onBack}
        onCall={onCall}
      />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={clsx(
                'max-w-xs p-2 rounded-md',
                msg.sender === 'You'
                  ? 'bg-primary text-white self-end'
                  : 'bg-gray-200 text-black self-start'
              )}
            >
              <p>{msg.content}</p>
              <span className="text-xs text-gray-500">{msg.timestamp}</span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No messages yet.</p>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Footer */}
      <ChatWindowFooter
        onSendEmoji={handleSendEmoji}
        onSendAttachment={handleSendAttachment}
        onSendMessage={handleSendMessage}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

export default ChatWindow;
