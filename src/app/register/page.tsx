import Container from "@/components/Container";
import AuthFormWrap from "@/components/AuthFormWrap";
import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <Container>
      <AuthFormWrap>
        <RegisterForm />
      </AuthFormWrap>
    </Container>
  );
}
