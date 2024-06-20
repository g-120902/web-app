import firebaseApp from "../config";
import { Firestore, getFirestore, DocumentSnapshot, setDoc,doc, collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export interface addUserInfoResponse {
    docUser: any;
    err: any;
}

export default async function addUserinfo(firstname : string, lastname: string, email: string, userid: string): Promise<addUserInfoResponse> {
    let docUser: any | null = null;
    let err: any = null;
    
    docUser = {firstname,lastname,email,userid};

    try {
        await setDoc(doc(db, "users",userid), {
            firstname:firstname,
            lastname:lastname,
            email:email,
            uid: userid,
            

          },{ merge: true });
          const achievements = ["constant", "variable", "array", "linkedlist", "dictionary", "binaryTree", "queue", "stack"];
        
          // Add documents to the achievement collection for the user
          const achievementsCollectionRef = collection(db, "achievement", userid);
          for (const achievement of achievements) {
              await setDoc(doc(achievementsCollectionRef, achievement), {
                  status: false
              },{ merge: true });
          }
    } catch (e) {
        err = e;
    }

    return { docUser, err };
}
