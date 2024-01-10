
import { Container, Profile } from "./style";
import { Input } from "../Input"
import { Link } from "react-router-dom";
export function Header() {
  return (
    <Container>
        <Link to="/"><h1>RocketMovies</h1></Link>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile to="/profile">
        <div>
          <strong>Leonardo Prado</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/LeoAlvarenga404.png" alt="Imagem do perfil" />
      </Profile>
    </Container>
  )
}