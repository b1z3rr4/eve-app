import { Button } from "@/presentation/components/elements/Button";
import { Input } from "@/presentation/components/elements/Input";
import { Logo } from "@/presentation/components/modules/Logo";
import { useAuth } from "@/presentation/contexts/AuthContext";
import { useState } from "react";
import * as S from "./styles";

function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    login(email, password);
  };

  return (
    <S.Container>
      <S.ContainerLogin>
        <Logo />
        <S.ContainerInput>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </S.ContainerInput>
        <Button onClick={handleLogin}>Entrar</Button>
        {/* <Button onClick={handleRegister}>Registrar</Button>
        <Button onClick={handleGoogleLogin}>Login com Google</Button> */}
      </S.ContainerLogin>
    </S.Container>
  );
}

export default Login;
