import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

export default function OAuth() {
    const handleGoogleClick = async () => {
        try {
            const auth = getAuth(); // Initialize Firebase Auth
            const provider = new GoogleAuthProvider(); // Create Google Auth Provider
            const result = await signInWithPopup(auth, provider); // Sign in with popup
            // Handle successful authentication
            const user = result.user;
            console.log("User Info:", user);
        } catch (error) {
            // Handle errors
            console.error("Error during Google sign-in:", error);
        }
    };

    return (
        <Button
            type="button"
            gradientDuoTone="pinkToOrange"
            outline
            onClick={handleGoogleClick}
        >
            <AiFillGoogleCircle className="w-6 h-6 mr-2" />
            Continue with Google
        </Button>
    );
}
