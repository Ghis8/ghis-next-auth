import NextAuth, { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: String(process.env.TWITTER_CLIENT_ID),
      clientSecret: String(process.env.TWITTER_CLIENT_SECRET),
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
