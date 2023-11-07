import { useState } from "react"
import { AppContext } from "./AppContext"

type AppContextProviderProps = {
    children: React.ReactNode
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {

    const [ theme, setTheme ] = useState<"dark" |"light">('dark')

    return <AppContext.Provider value={{ theme, setTheme }}>
        {children}
    </AppContext.Provider>
}