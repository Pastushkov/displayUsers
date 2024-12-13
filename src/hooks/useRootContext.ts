import { createContext, useContext } from "react";

interface RootCtx {
  setErrorMessage: (message: string) => void;
}

export const RootContext = createContext<RootCtx | null>(null);

export const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useRootContext must be used within a RootProvider");
  }
  return context;
};
