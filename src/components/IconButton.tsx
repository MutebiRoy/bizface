// src/components/IconButton.tsx
'use client';

import { FC, ReactElement } from 'react';

interface IconButtonProps {
  icon: ReactElement;
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  onClick,
  className = '',
}) => {
  return (
    <button
      className={`p-2 rounded-full hover:bg-gray-200 focus:outline-none ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
