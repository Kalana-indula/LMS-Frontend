'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthRedirectPage = () => {
    const { user, isLoaded, isSignedIn } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return;

        // Not signed in → go back to sign-in
        if (!isSignedIn) {
            router.replace('/signin'); // adjust to your sign-in route
            return;
        }

        const userType = user?.publicMetadata?.userType as string | undefined;
        console.log('userType in auth-redirect:', userType, user?.publicMetadata);

        if (userType === 'teacher') {
            router.replace('/teacher/courses');
        } else {
            router.replace('/');
        }
    }, [isLoaded, isSignedIn, user, router]);

    return (
        <div className="flex h-screen items-center justify-center text-white-50">
            Redirecting...
        </div>
    );
};

export default AuthRedirectPage;
