"use client";

//Actions
import { logOut } from "@/lib/auth/actions";

export const LogoutButton = () => {
  const handleLogOut = async () =>
    logOut({ callbackUrl: `${window.location.origin}` });

  return (
    <a
      onClick={handleLogOut}
    >
      Log Out
    </a>
  );
};
