import connect from '@/config/mongodb'
import CredentialsProvider from 'next-auth/providers/credentials'
import ssuser from '@/models/user'

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        handler: {},
        passwd: {},
      },
      async authorize(credentials, req) {
        const { handler, passwd } = credentials
        await connect()
        const user = await ssuser.findOne({ email: handler, passwd })
        if (user) {
          return user._doc
        }
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token
      return session // Return modified session object
    },
  },
}
