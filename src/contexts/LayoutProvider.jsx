import { createContext, useContext, useState } from "react";

const LayoutProviderContext = createContext();

export function useLayoutProvider() {
  return useContext(LayoutProviderContext);
}

export default function LayoutProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const value = { sidebarOpen, setSidebarOpen };

  return (
    <LayoutProviderContext.Provider value={value}>
      {children}
    </LayoutProviderContext.Provider>
  );
}
