import { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for the context
interface ContextProps {
    dest: [number, number] | null;
    setDest: (dest: [number, number] | null) => void;
}

// Create the context
const Context = createContext<ContextProps | undefined>(undefined);

// Context provider component
export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [dest, setDest] = useState<[number, number] | null>(null);

    return (
        <Context.Provider value={{ dest, setDest }}>
            {children}
        </Context.Provider>
    );
};

// Hook to use the context
export const useGlobalContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useMapContext must be used within a MapProvider');
    }
    return context;
};
