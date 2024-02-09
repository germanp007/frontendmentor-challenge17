import { FC, ReactNode, createContext, useState } from "react";

interface MyContextProviderProps {
  children: ReactNode;
}

export const myContext = createContext();

export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
  const [price, setPrice] = useState(6);

  const handlePriceChange = (newPrice: number) => {
    setPrice(newPrice);
  };
  return (
    <myContext.Provider value={{ price, setPrice, handlePriceChange }}>
      {children}
    </myContext.Provider>
  );
};
