import { storage } from "../config/firebase";
import { ref, getDownloadURL, uploadBytes } from "@firebase/storage";

export async function getImageUrl(location) {
  const imageURL = await getDownloadURL(ref(storage, location));
  return imageURL;
}

export async function setImage(file, path) {
  const imageUrl = ref(storage, path);
  uploadBytes(imageUrl, file).then((snapshot) => {
    console.log("Uploaded a blob or file!", snapshot);
  });
}
