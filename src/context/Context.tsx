import {
  ChangeEvent,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface MyContextProviderProps {
  children: ReactNode;
}

interface MyContextType {
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  handlePriceChange: (newPrice: number) => void;
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;

  handleViews: (
    price: number
  ) => "10K" | "50K" | "100K" | "500K" | "1M" | undefined;
}

// eslint-disable-next-line react-refresh/only-export-components
export const myContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
  const [price, setPrice] = useState(8);
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleViews = (price: number) => {
    if (price <= 8) {
      return `10K`;
    } else if (price <= 12) {
      return `50K`;
    } else if (price <= 16) {
      return `100K`;
    } else if (price <= 24) {
      return `500K`;
    } else if (price <= 36) {
      return `1M`;
    }
  };
  const handlePriceChange = (newPrice: number) => {
    setPrice(newPrice);
  };
  return (
    <myContext.Provider
      value={{
        price,
        setPrice,
        handlePriceChange,
        handleViews,
        checked,
        handleChange,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
