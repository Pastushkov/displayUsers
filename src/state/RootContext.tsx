import { ReactNode, useState } from "react";
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";
import { RootContext } from "../hooks/useRootContext";

interface Props {
  children: ReactNode;
}

export const RootProvider = ({ children }: Props) => {
  const [error, setError] = useState("");

  const setErrorMessage = (message: string) => {
    setError(message);
  };

  return (
    <RootContext.Provider
      value={{
        setErrorMessage,
      }}
    >
      {error && (
        <ErrorBoundary close={() => setErrorMessage("")} message={error} />
      )}
      {children}
    </RootContext.Provider>
  );
};
