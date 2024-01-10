import { Container, Form, Background } from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { RiMailLine, RiLockLine, RiUser3Line, RiArrowLeftLine} from "react-icons/ri";
import { Link } from 'react-router-dom';

export function Signup(){
  return(
    <Container>
      <Form>
        <main>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Crie sua conta</h2>
          <div className="input-wrapper">
            <Input type="text" icon={RiUser3Line} placeholder="Nome"/>
            <Input type="mail" icon={RiMailLine} placeholder="E-mail"/>
            <Input type="password" icon={RiLockLine} placeholder="Senha"/>
          </div>
            <Button title="Cadastrar"/>
        </main>
        <Link to="/"><RiArrowLeftLine/>Voltar para o login</Link>
      </Form>
      <Background/>
    </Container>
  )
}