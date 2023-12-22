import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

let firebaseConfig = {};
export let app = initializeApp(firebaseConfig);

export let db = getFirestore(app);
