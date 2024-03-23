import { NextAuthOptions } from "next-auth";

//Providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

//Adapter
import { Adapter } from "next-auth/adapters";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

//db init
import clientPromise from "./mongodbAdapterConnection";

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise, {
        collections: {
            Accounts: "accounts",
            Sessions: "sessions",
            Users: "users",
            VerificationTokens: "verificationTokens",
        },
        databaseName: process.env.DB_NAME,
    }) as Adapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        session: async ({ session, token, user }) => {
            if (session?.user) {
                session.user.id = user.id;
            }
            return session;
        },
    },
} satisfies NextAuthOptions;
