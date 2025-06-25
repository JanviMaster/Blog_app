import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { app } from "../redux/firebase";

export default function OAuth() {
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            console.log(resultsFromGoogle);
        } catch (error) {
            console.log("Error during Google sign-in:", error);
        }
    };

    return (
        <Button
            type="button"
            onClick={handleGoogleClick}
            className="w-full px-1 mt-5 bg border-2 border-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-purple-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:via-purple-500 hover:to-purple-500 transition"
        >
            <AiFillGoogleCircle className='w-6 h-6 mr-2' />
            Continue with Google
        </Button>
    );
}
