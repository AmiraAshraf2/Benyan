import { createContext, useState } from "react";

export const NotifyContext = createContext();

export default function NotifyProvider({ children }) {
    const [Notify, setNotify] = useState({
        users: false,
        projects: false,
        developers: false,
    });

    return (
        <NotifyContext.Provider
            value={{ Notify, setNotify }}
        >
            {children}
        </NotifyContext.Provider>
    );
}