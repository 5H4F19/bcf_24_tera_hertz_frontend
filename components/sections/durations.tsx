import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from '@/context';
import { Building2, CarFront, CarTaxiFront, PlaneTakeoff } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';


const Durations: React.FC = () => {
    const { days, setDays } = useGlobalContext()
    return (
        <div className='container mt-5 mx-auto'>
            <h1 className='text-left text-black text-xl font-bold mb-3'>Durations</h1>
            <ul className='grid grid-cols-3 gap-3'>
                <Card className='space-x-3 p-6 spacep-y-3 flex items-center'>
                    <Button className='text-3xl h-12' onClick={() => setDays(days > 1 ? days - 1 : 1)}>-</Button>
                    <div>
                        <h2 className='text-2xl font-medium'>{days} Days</h2>
                    </div>
                    <Button className='text-3xl h-12' onClick={() => setDays(days + 1)}>+</Button>
                </Card>
            </ul>
        </div >
    );
};

export default Durations;
