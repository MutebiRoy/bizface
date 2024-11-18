// store/chatStore.ts
import create from 'zustand';

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

interface ChatStore {
  selectedChat: ChatItem | null;
  messages: Message[];
  selectChat: (chat: ChatItem) => void;
  sendMessage: (content: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  selectedChat: null,
  messages: [],
  selectChat: (chat) => set({ selectedChat: chat, messages: fetchMessages(chat.id) }),
  sendMessage: (content) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: state.messages.length + 1,
          sender: 'You',
          content,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ],
    })),
}));

// Mock fetchMessages function
const fetchMessages = (chatId: number): Message[] => {
  return [
    { id: 1, sender: 'Alice', content: 'Hi!', timestamp: '10:00 AM' },
    { id: 2, sender: 'You', content: 'Hello!', timestamp: '10:01 AM' },
  ];
};
