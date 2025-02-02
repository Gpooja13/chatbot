"use client";
import { createContext, useContext, useState } from "react";
import { getDummyData } from "@/data/dummyData";

const BotContext = createContext();

export function BotProvider({ children }) {
  const [organisation, setOrganisation] = useState(null);

  const setOrgDetails = (details) => {
    setOrganisation({
      ...details,
      webpages: getDummyData(details.websiteURL),
    });
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
