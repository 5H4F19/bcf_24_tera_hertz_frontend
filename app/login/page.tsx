// pages/signup.tsx
'use client'

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';

// Validation schema
const signupSchema = z.object({
    email: z.string().email('Invalid email address'),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
    const [formData, setFormData] = useState<SignupFormValues | null>(null);
    const router = useRouter()
    // React Hook Form setup
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
            const res = await axios.post(`http://localhost:8000/api/v1/auth/login`, {
                ...data
            });
            console.log("login", res)

            if (res?.data.status === 'success') {
                // Redirect with query parameters
                localStorage.setItem("@tempUser", JSON.stringify(data))
                router.push('/loginverify')

            }
        } catch (error: any) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center">Log in</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <Input
                            id="email"
                            placeholder="johndoe@example.com"
                            {...register('email')}
                            className="mt-1 border"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full h-10 rounded-xl border mt-4">
                        Sign Up
                    </Button>
                </form>

            </div>
        </div>
    );
}
