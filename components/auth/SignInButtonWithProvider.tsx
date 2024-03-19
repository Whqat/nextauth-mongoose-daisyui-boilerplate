"use client";

//React
import { useState } from "react";

//Icons
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { signIn } from "@/lib/auth/actions";

const providersConfig = {
  github: {
    label: "Sign in with GitHub",
    icon: <FaGithub />,
  },
  google: {
    label: "Sign in with Google",
    icon: <FaGoogle />,
  }, 
  facebook: {
    label: "Sign in with Facebook",
    icon: <FaFacebook />,
  }, 
};

interface SignInButtonWithProviderProps {
  provider: "google" | "github" | "facebook";
  disabled?: boolean;
  params?: { email: string };
}

export const SignInButtonWithProvider = ({
  provider,
  disabled = false,
  params,
}: SignInButtonWithProviderProps) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);

    try {
      let options: { callbackUrl: string; email?: string } = {
        callbackUrl: `${window.location.origin}`,
      };

      await signIn(provider, options);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  let IconButton = loading ? <AiOutlineLoading3Quarters className="animate-spin"/> : providersConfig[provider].icon;

  return (
    <button
      className="bg-slate-950 rounded-md p-3 disabled:opacity-60 transition-all hover:bg-slate-800"
      disabled={loading || disabled}
      onClick={onSubmit}
    >
      <div className="flex gap-2 items-center min-w-[200px] justify-center text-white">
        {IconButton}
        {providersConfig[provider].label}
      </div>
    </button>
  );
};
