import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Transportation, useGlobalContext } from '@/context';
import { Building2, CarFront, CarTaxiFront, PlaneTakeoff } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { cn, selected } from '@/lib/utils';


const Transports: React.FC = () => {
    const { transportation, setTransportation } = useGlobalContext()

    return (
        <div className='container mt-5 mx-auto'>
            <h1 className='text-left text-black text-xl font-bold mb-3'>Preferred transportation {transportation}</h1>
            <ul className='grid grid-cols-3 gap-3'>
                <Card onClick={() => setTransportation(Transportation.air)} className={cn(transportation === Transportation.air && "border-[#83ACC0]", 'cursor-pointer space-x-3 p-6 spacep-y-3 flex items-center')}>
                    <PlaneTakeoff size={60} className='text-gray-300' />
                    <div>
                        <h2 className='text-2xl font-medium'>Air</h2>
                    </div>
                </Card>
                <Card onClick={() => setTransportation(Transportation['road(cheap)'])} className={cn(transportation === Transportation['road(cheap)'] && "border-[#83ACC0]", 'cursor-pointer space-x-3 p-6 spacep-y-3 flex items-center')}>
                    <CarTaxiFront size={60} className='text-gray-300' />
                    <div>
                        <h2 className='text-2xl font-medium'>Road</h2>
                    </div>
                </Card>
                <Card onClick={() => setTransportation(Transportation.road)} className={cn(transportation === Transportation.road && "border-[#83ACC0]", 'cursor-pointer space-x-3 p-6 spacep-y-3 flex items-center')}>
                    <CarFront size={60} className='text-gray-300' />
                    <div>
                        <h2 className='text-2xl font-medium'>Road (Luxury)</h2>
                    </div>
                </Card>


            </ul>
        </div>
    );
};

export default Transports;
