// src/components/SettingsModal.tsx
'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Settings, X } from 'lucide-react';
import { cn } from '../lib/utils'; // Utility for clsx (create if not exists)
import { FC } from 'react';

const SettingsModal: FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button aria-label="Open settings">
          <Settings className="w-6 h-6 cursor-pointer" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Content className="fixed bg-white rounded p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-md">
          <Dialog.Title className="text-lg font-semibold mb-4">Settings</Dialog.Title>
          <Dialog.Description className="mb-4 text-gray-600">
            Configure your chat settings here.
          </Dialog.Description>
          {/* Add settings form or options here */}
          <Dialog.Close asChild>
            <button className="absolute top-2 right-2">
              <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SettingsModal;
