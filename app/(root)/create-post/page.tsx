//Next auth
import { getServerSession } from "next-auth";

// Next navigation
import { redirect } from "next/navigation";

// Options
import { authOptions } from "@/lib/utils/auth";


// db
import { User } from "@/models/models";
import dbConnect from "@/lib/utils/mongooseConnection";

export default async function Home() {
    await dbConnect();
    const session = await getServerSession(authOptions);

    // If there is no session, the user is redirected to authentication
    if (!session) {
        redirect("/auth");
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
           <h1>Protected route</h1> 
        </main>
    );
}
