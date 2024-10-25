// pages/signup.tsx
'use client'

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Validation schema
const signupSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    email: z.string().email('Invalid email address'),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
    const [formData, setFormData] = useState<SignupFormValues | null>(null);
    // React Hook Form setup]
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
    });

    // Form submission handler
    const onSubmit = async (data: SignupFormValues) => {
        setFormData(data);
        console.log('Submitted data:', data);
        try {
            const res = await axios.post(`http://localhost:8000/api/v1/auth/register`, {
                ...data
            });
            console.log(res)
            if (res?.data.status === 'success') {
                // Redirect with query parameters
                localStorage.setItem("@tempUser", JSON.stringify(data))
                router.push('/signinverify')
            }
        } catch (error: any) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center">Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Full Name Field */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium">
                            Full Name
                        </label>
                        <Input
                            id="fullName"
                            placeholder="John Doe"
                            {...register('fullName')}
                            className="mt-1"
                        />
                        {errors.fullName && (
                            <span className="text-red-500 text-sm">
                                {errors.fullName.message}
                            </span>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium">
                            Phone
                        </label>
                        <Input
                            id="phone"
                            placeholder="1234567890"
                            {...register('phone')}
                            className="mt-1"
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <Input
                            id="email"
                            placeholder="johndoe@example.com"
                            {...register('email')}
                            className="mt-1"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full mt-4">
                        Sign Up
                    </Button>
                </form>

            </div>
        </div>
    );
}
