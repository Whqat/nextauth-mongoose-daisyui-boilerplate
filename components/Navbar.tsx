import { Session } from "next-auth";
import { LogoutButton } from "./auth/LogoutButton";
import Link from "next/link";

const Navbar = ({ session }: { session: Session | null }) => {
    return (
        <div className="absolute navbar bg-base-100 border-b border-base-content md:px-10 lg:px-16">
            <div className="flex-1">
                <Link href="/home" className="btn btn-ghost text-xl">daisyUI blog</Link>
            </div>
            <div className="flex-none gap-2">
                {session ? (
                    <>
                        <ul className="menu menu-horizontal">
                            <li>
                                <Link href="/create-post">Post</Link>
                            </li>
                        </ul>
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={session?.user?.image as string}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a className="justify-between">Profile</a>
                                </li>
                                <li>
                                    <a>Settings</a>
                                </li>
                                <li>
                                    <LogoutButton />
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                        <ul className="menu menu-horizontal">
                            <li>
                                <Link href="/create-post">Post</Link>
                            </li>
                            <li>
                                <Link href="/auth">Log in</Link>
                            </li>
                        </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
