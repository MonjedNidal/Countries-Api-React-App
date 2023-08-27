import React, { createContext, useState } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};


