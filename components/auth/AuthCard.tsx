//Components
import { SignInButtonWithProvider } from "./SignInButtonWithProvider";
import Image from "next/image";

export const AuthCard = () => {
  return (
    
      <div className="flex flex-col border-2 border-black gap-12 bg-slate-50 w-[90%] md:w-[50%] lg:w-[30%] h-[50%] items-center rounded-lg shadow-black justify-center">
        <Image 
          src="vercel.svg"
          width="150"
          height="150"
          alt="Logo"
        />
      <div className="flex flex-col gap-2 lg:w-[80%]">
        <p className="text-center text-gray-600">Sign-in</p>
        <SignInButtonWithProvider provider="google" />
        <SignInButtonWithProvider provider="github" />
        <SignInButtonWithProvider provider="facebook" />
      </div>
    </div>
  );
};
