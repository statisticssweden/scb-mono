import { createContext } from 'react';

type AppContextType = {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
}

export const AppContext = createContext<AppContextType>({
    theme: 'light',
    setTheme: () => { console.log('not implemented')}
});
