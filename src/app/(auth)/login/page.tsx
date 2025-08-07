import AuthFormWrap from "@/components/AuthFormWrap";
import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "...",
};

export default function Login() {
  return (
    <div className="h-full flex items-center justify-center">
      <AuthFormWrap>
        <LoginForm />
      </AuthFormWrap>
    </div>
  );
}
