import {doc,setDoc,arrayUnion} from 'firebase/firestore'
import { db } from './firebase';

export async function uploadDataToFirestore(obj) {
    const documentReference = doc(db, "todo_collection", "todo_document");
    await setDoc(
      documentReference,
      {
        todos: arrayUnion(obj),
      },
      { merge: true }
    );
  }