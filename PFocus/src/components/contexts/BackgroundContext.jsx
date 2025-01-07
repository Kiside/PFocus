import React, {createContext, useContext, useState} from "react";


const BackgroundContext = createContext();

export const BackgroundProvider = ({children} ) => {
    const [background, setBackground] = useState("");

    return (
      <BackgroundContext.Provider value = {{ background, setBackground}}>
          {children}
      </BackgroundContext.Provider>
    );
};

export const useBackground = () => {
    const context = useContext(BackgroundContext);
    if(!context) {
        throw new Error("useBackground must be used withing a BackgroundProvider");
    }
    return context;
};