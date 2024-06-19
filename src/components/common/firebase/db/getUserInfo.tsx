import firebaseApp from "../config";
import { Firestore, getFirestore, DocumentSnapshot, query, collection, where, getDocs,limit } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export interface UserInfoResponse {
    docUser: DocumentSnapshot | null;
    err: any;
}

export default async function getUserInfo(email: string): Promise<UserInfoResponse> {
    let docUser: DocumentSnapshot | null = null;
    let err: any = null;

    try {
        const userQuery = query(collection(db, "users"), where("email", "==", email),limit(1));
        const userDocs = await getDocs(userQuery);
        
        if (!userDocs.empty) {
            docUser = userDocs.docs[0];
        } else {
            throw new Error("No user found with the provided email.");
        }

    } catch (e) {
        err = e;
    }

    return { docUser, err };
}
