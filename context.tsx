import { createContext, useContext, useState, ReactNode } from 'react';

export enum Transportation {
    'air' = 'air',
    'road' = 'road',
    'road(cheap)' = 'road(cheap)'
}

// Define the types for the context
interface ContextProps {
    dest: [number, number] | null;
    setDest: (dest: [number, number] | null) => void;
    days: number;
    setDays: (days: number) => void;
    restaurant: string | undefined;
    setRestaurant: (restaurant: string | undefined) => void;
    hotel: string | undefined;
    setHotel: (hotel: string | undefined) => void;
    date: string;
    setDate: (date: string) => void;
    transportation: string | null;
    setTransportation: (transportation: Transportation) => void;
    optimalDistance: number | null
    setOptimalDistance: (s: number | null) => void
}

// Create the context
const Context = createContext<ContextProps | undefined>(undefined);

// Context provider component
export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [dest, setDest] = useState<[number, number] | null>(null);
    const [days, setDays] = useState<number>(1);
    const [restaurant, setRestaurant] = useState<string | undefined>(undefined);
    const [hotel, setHotel] = useState<string | undefined>(undefined);
    const [date, setDate] = useState<string | undefined>(undefined);
    const [optimalDistance, setOptimalDistance] = useState<number | null>(null);
    const [transportation, setTransportation] = useState<Transportation>(Transportation.air); // New transportation state

    return (
        <Context.Provider value={{ dest, optimalDistance, setOptimalDistance, setDest, days, setDays, restaurant, setRestaurant, hotel, setHotel, date, setDate, transportation, setTransportation }}>
            {children}
        </Context.Provider>
    );
};

// Hook to use the context
export const useGlobalContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a ContextProvider');
    }
    return context;
};
