// pages/otp.tsx
'use client'

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

// Validation schema for OTP
const otpSchema = z.object({
    otp: z.string().min(4, 'OTP must be at least 4 digits').max(6, 'OTP must not exceed 6 digits'),
});

type OtpFormValues = z.infer<typeof otpSchema>;

export default function OtpPage() {
    const router = useRouter()

    // React Hook Form setup
    const { register, handleSubmit, formState: { errors } } = useForm<OtpFormValues>({
        resolver: zodResolver(otpSchema),
    });

    // Form submission handler for OTP verification
    const onSubmit = async (data: OtpFormValues) => {
        const body = JSON.parse(localStorage.getItem("@tempUser")!)
        console.log("prepared to send", body)

        try {
            // Making the request to verify the OTP, passing the email along
            const res = await axios.post('http://localhost:8000/api/v1/auth/loginverify', {
                otp: data.otp,
                ...body

            });

            if (res?.data.status === 'success') {
                // Handle success (e.g., redirect to dashboard or homepage)
                localStorage.setItem('@token', res.data.token)
                router.push('/dashboard')
            } else {
                console.error('OTP verification failed');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center">Enter OTP</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* OTP Field */}
                    <div>
                        <label htmlFor="otp" className="block text-sm font-medium">OTP</label>
                        <Input id="otp" placeholder="Enter your OTP" {...register('otp')} className="mt-1 border" />
                        {errors.otp && <span className="text-red-500 text-sm">{errors.otp.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full mt-4 border h-10 rounded-xl">Verify OTP</Button>
                </form>
            </div>
        </div>
    );
}
