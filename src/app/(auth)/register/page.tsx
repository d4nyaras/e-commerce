import AuthFormWrap from "@/components/AuthFormWrap";
import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "...",
};

export default function Register() {
  return (
    <div className="h-full flex items-center justify-center">
      <AuthFormWrap>
        <RegisterForm />
      </AuthFormWrap>
    </div>
  );
}
