import { Container, Section } from "./style";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { RiAddLine, RiStarFill, RiStarLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function MyFilms(){
  return (
    <Container>
      <Header/>
      <main>
        <div className="title">
          <h1>Meus filmes</h1>
          <Link to="/new">
            <Button icon={RiAddLine} title="+ Adicionar filme"/>
          </Link>
        </div>
        <div className="section-wrapper">
          <Link to="/details">
            <Section>
              <h2>Interstellar</h2>
              <ul>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarLine/></li>
              </ul>
              <div className="container">
                <p className="limited-height">Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
                </p> 
              </div>
            <div className="tags">
              <Tag title="Ficção Científica" backgroundColor="#312E38"/>
              <Tag title="Drama" backgroundColor="#312E38"/>
              <Tag title="Família" backgroundColor="#312E38"/>
              </div>
            </Section>
          </Link>
          <Link to="/details">
            <Section>
              <h2>Interstellar</h2>
              <ul>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarLine/></li>
              </ul>
              <div className="container">
                <p className="limited-height">Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
                </p> 
              </div>
            <div className="tags">
              <Tag title="Ficção Científica" backgroundColor="#312E38"/>
              <Tag title="Drama" backgroundColor="#312E38"/>
              <Tag title="Família" backgroundColor="#312E38"/>
              </div>
            </Section>
          </Link>
          <Link to="/details">
            <Section>
              <h2>Interstellar</h2>
              <ul>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarLine/></li>
              </ul>
              <div className="container">
                <p className="limited-height">Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
                </p> 
              </div>
            <div className="tags">
              <Tag title="Ficção Científica" backgroundColor="#312E38"/>
              <Tag title="Drama" backgroundColor="#312E38"/>
              <Tag title="Família" backgroundColor="#312E38"/>
              </div>
            </Section>
          </Link>
          <Link to="/details">
            <Section>
              <h2>Interstellar</h2>
              <ul>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarFill/></li>
                <li><RiStarLine/></li>
              </ul>
              <div className="container">
                <p className="limited-height">Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
                </p> 
              </div>
            <div className="tags">
              <Tag title="Ficção Científica" backgroundColor="#312E38"/>
              <Tag title="Drama" backgroundColor="#312E38"/>
              <Tag title="Família" backgroundColor="#312E38"/>
              </div>
            </Section>
          </Link>
        </div>
        
      </main>
    </Container>
  )
}