import AuthFormWrap from "@/components/AuthFormWrap";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="h-full flex items-center justify-center">
      <AuthFormWrap>
        <LoginForm />
      </AuthFormWrap>
    </div>
  );
}
