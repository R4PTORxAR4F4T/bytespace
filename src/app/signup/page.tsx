import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = { title: "Sign Up – ByteSpace" };

export default function SignupPage() {
  return (
    <AuthShell heading="Sign up and come in" text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost">
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
