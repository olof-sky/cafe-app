import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState({});

  useEffect(() => {
    const collectionRef = collection(db, collectionName);
    const unsub = onSnapshot(collectionRef, (querySnapshot) => {
      const items = {};
      querySnapshot.forEach((doc) => {
        items[doc.id] = doc.data();
      });
      setDocs(items);
    });
    return () => {
      unsub();
    };
  }, []);

  return { docs };
};

export default useFirestore;
