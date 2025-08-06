import AuthFormWrap from "@/components/AuthFormWrap";
import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <div className="h-full flex items-center justify-center">
      <AuthFormWrap>
        <RegisterForm />
      </AuthFormWrap>
    </div>
  );
}
