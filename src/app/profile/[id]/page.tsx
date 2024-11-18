// src/app/profile/[id]/page.tsx
'use client';

import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, UserRound } from 'lucide-react';
import IconButton from '@/components/IconButton';
import { useEffect, useState } from 'react';

interface UserProfile {
  id: number;
  fullName: string;
  username: string;
  bio: string;
  // Add other user-related fields as needed
}

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params.id; // Correctly retrieving 'id' from dynamic route

  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Mock fetching user data
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      // Replace this with actual data fetching logic
      // For example, fetch from an API endpoint
      // const response = await fetch(`/api/users/${userId}`);
      // const data: UserProfile = await response.json();

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data based on userId
      const mockUser: UserProfile = {
        id: Number(userId),
        fullName: 'John Doe',
        username: '@johndoe',
        bio: 'Just another chat app user.',
      };

      setUser(mockUser);
      setLoading(false);
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">User not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-primary text-white sticky top-0 z-10">
        {/* Left: Back Arrow */}
        <IconButton
          icon={<ArrowLeft className="w-5 h-5 text-white" />}
          ariaLabel="Go Back"
          onClick={() => router.back()}
        />
        {/* Placeholder for potential future header content */}
        <div></div>
      </header>

      {/* Profile Body */}
      <div className="flex flex-col items-center p-6 space-y-4">
        {/* Profile Picture */}
        <UserRound className="w-24 h-24 text-gray-600" />
        {/* User Full Name */}
        <h1 className="text-2xl font-semibold">{user.fullName}</h1>
        {/* User @username */}
        <p className="text-gray-500">{user.username}</p>
        {/* User Bio */}
        <p className="text-center text-gray-700">{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
