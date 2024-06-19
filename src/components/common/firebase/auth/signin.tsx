import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, UserCredential } from "firebase/auth";

const auth = getAuth(firebase_app);

export interface SignInResponse {
    result: UserCredential;
    error: any;
}

export default async function signIn(email: string, password: string): Promise<SignInResponse> {
    let result: any = null;
    let error: any = null;
    
    try {
        result = await signInWithEmailAndPassword(auth, email, password);

    } catch (e) {
        error = e;
    }

    return { result, error };
}
