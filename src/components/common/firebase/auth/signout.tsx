import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signout(email: string, password: string) {

 await signOut(auth);

}
