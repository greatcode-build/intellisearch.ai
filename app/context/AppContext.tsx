"use client";

import { useUser } from "@clerk/nextjs";
import { UserResource } from "@clerk/nextjs/types";
import { createContext, useContext } from "react";

type AppContextType = {
  user: UserResource | null | undefined;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useUser();
  const value = {
    user,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
