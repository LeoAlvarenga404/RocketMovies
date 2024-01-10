import { Container, Section } from "./style";
import { Header } from '../../components/Header'
import { RiArrowLeftLine, RiCloseLine, RiAddLine  } from "react-icons/ri";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Link } from "react-router-dom";
import { Button } from '../../components/Button'
export function New(){
  return(
    <Container>
      <Header/>
      <Section>
      <Link to="/">
        <RiArrowLeftLine/>Voltar
        </Link>
        <h1>Novo filme</h1>
        <div className="input-wrapper">
          <div>
            <Input type="text" placeholder="Título"/>
            <Input type="text" placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <Textarea placeholder="Observações"/>
        </div>
          <span>Marcadores</span>
        <div className="container">
          <div className="markers">
            <div className="marker created">
              <p>React</p>
              <RiCloseLine/>
            </div>
            <div className="marker add">
              <p>Novo marcador</p>
              <RiAddLine/>
            </div>
          </div>
        </div>
        <div className="buttons">
          <Button title="Excluir filme"/>
          <Button title="Salvar alterações"/>
        </div>
      </Section>
    </Container>
  )
}