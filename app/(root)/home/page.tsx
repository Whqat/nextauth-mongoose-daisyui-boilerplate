//Next auth
import { getServerSession } from "next-auth";


// Next navigation
import { redirect } from "next/navigation";

// Options
import { authOptions } from "@/lib/utils/auth";

// Components
import { LogoutButton } from "@/components/auth/LogoutButton";

// db
import dbConnect from "@/lib/utils/mongooseConnection";
import { User } from "@/models/models";
import { Post } from "@/models/models";

export default async function Home() {
    await dbConnect()
    const session = await getServerSession(authOptions);
    
    const posts = await Post.find();

    return (
        <main className="flex min-h-screen flex-col items-center gap-10 p-24">
            <h1>home</h1>
            {posts.length > 0 ? (<h1>posts!</h1>) : (<h1>no posts...</h1>)}
        </main>
    );
}