import { React, createContext } from "react";
import useFirestore from "../hooks/useFirestore";

export const Context = createContext();

/**
 * @description Provides useFirestore-state and API-functions to client.
 **/
function Provider(props) {
  const { campaigns, updateCampaigns, cakes, asideCards, clear } =
    useFirestore("data");
  return (
    <Context.Provider
      value={{
        campaigns: campaigns,
        cakes: cakes,
        asideCards: asideCards,
        updateCampaigns: updateCampaigns,
        clear: clear,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
