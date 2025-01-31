// context/OrgContext.js
import { createContext, useContext, useState } from "react";

const BotContext = createContext();

export function BotProvider({ children }) {
  const [organisation, setOrganisation] = useState({
    companyName: "",
    websiteURL: "",
    companyDescription: "",
    metaDescription: "",
    webpages: dummyData,
  });

  const setOrgDetails = (details) => {
    setOrganisation((prev) => ({
      ...prev,
      ...details,
    }));
  };

  return (
    <BotContext.Provider value={{ organisation, setOrgDetails }}>
      {children}
    </BotContext.Provider>
  );
}

export function useOrg() {
  return useContext(BotContext);
}
