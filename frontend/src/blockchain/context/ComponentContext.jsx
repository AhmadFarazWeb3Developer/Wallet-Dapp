import { createContext, useContext, useState } from "react";

export const ComponentContext = createContext();

export const useComponentContext = () => {
  return useContext(ComponentContext);
};

export const ComponentProvider = ({ children }) => {
  const [state, setState] = useState({
    address: "",
    connected: false,
    balance: "",
  });
  return (
    <>
      <ComponentContext.Provider value={{ state, setState }}>
        {children}
      </ComponentContext.Provider>
    </>
  );
};
