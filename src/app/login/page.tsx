import Container from "@/components/Container";
import AuthFormWrap from "@/components/AuthFormWrap";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <Container>
      <AuthFormWrap>
        <LoginForm />
      </AuthFormWrap>
    </Container>
  );
}
