// app/users/[id]/page.tsx
'use client'

import Gallery from '@/components/sections/gallery';
import { FC } from 'react';

interface UserProfileProps {
    params: {
        id: string; // Type the dynamic parameter
    };
}

const UserProfile: FC<UserProfileProps> = ({ params }) => {
    const { id } = params; // Access the dynamic segment

    return (
        <div className='container mx-auto mt-10'>
            <Gallery tourId={id} />
        </div>
    );
};

export default UserProfile;
