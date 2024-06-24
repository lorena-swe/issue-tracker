import NextAuth from "next-auth";
import authOptions from "@/app/auth/authOptions";

export default NextAuth(authOptions);