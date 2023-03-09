import { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * @description Holds state and API-functions to firestore db.
 * @return state and functions to context.js
 **/
const useFirestore = (collectionName) => {
  const [campaigns, setCampaigns] = useState({});
  const [cakes, setCakes] = useState({});
  const [asideCards, setAsideCards] = useState({});
  const collectionRef = collection(db, collectionName);

  const clear = () => {
    return setAsideCards({});
  };

  const updateCampaigns = (data) => {
    return setCampaigns(data);
  };

  async function getData() {
    const querySnapshot = await getDocs(collectionRef);
    const items = {};
    querySnapshot.forEach((doc) => {
      items[doc.id] = doc.data();
    });
    console.log("data::", items);
    setCampaigns(items.campaigns);
    setCakes(items.cakes);
    setAsideCards(items.asideCards);
  }

  useEffect(() => {
    getData();
  }, []);

  return { campaigns, updateCampaigns, cakes, asideCards, clear };
};

export default useFirestore;
