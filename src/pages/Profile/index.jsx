import { Container } from "./style";
import { RiArrowLeftLine, RiUser3Line, RiMailLine, RiLockLine, RiCameraLine} from "react-icons/ri";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";

export function Profile(){
  return (
    <Container>
      <header>
        <Link to="/">
        <RiArrowLeftLine/>Voltar
        </Link>
      </header>
      <main>
        <div className="profile">
          <img src="http://github.com/LeoAlvarenga404.png" alt="Imagem do Perfil" />
          <label htmlFor="profile">
            <RiCameraLine/>
            <input id="profile"type="file" />
            </label>
          
        </div>
        <div className="input-wrapper">
          <Input value="Leonardo Prado" icon={RiUser3Line} placeholder="Nome do usuário"/>
          <Input value="leonardo.palvarenga@gmail.com"icon={RiMailLine} placeholder="Email"/>
          <Input type="password" icon={RiLockLine} placeholder="Senha atual"/>
          <Input type="password" icon={RiLockLine} placeholder="Nova senha"/>
          <Button title="Salvar"/>
        </div>
      </main>
    </Container>
  )
}