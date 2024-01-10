import { Container, Form, Background } from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { RiMailLine, RiLockLine} from "react-icons/ri";
import { Link } from 'react-router-dom';
export function Signin(){
  return(
    <Container>
      <Form>
        <main>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Faça seu login</h2>
          <div className="input-wrapper">
            <Input type="mail" icon={RiMailLine} placeholder="E-mail"/>
            <Input type="password" icon={RiLockLine} placeholder="Senha"/>
          </div>
          <Button title="Entrar"/>
        </main>
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background/>
    </Container>
  )
}