import { createContext, useContext, useState } from "react";

const LayoutProviderContext = createContext();

export function useLayoutProvider() {
  return useContext(LayoutProviderContext);
}

export default function LayoutProvider({ children }) {
  const [activeSidebar, setActiveSidebar] = useState(false);

  const value = { activeSidebar, setActiveSidebar };

  return (
    <LayoutProviderContext.Provider value={value}>
      {children}
    </LayoutProviderContext.Provider>
  );
}
