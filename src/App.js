import "./styles/global.scss";
import { Fragment } from 'react';
import {Helmet} from "react-helmet";
import "swiper/css/pagination";
import Header from "./componentes/Header";
import Sobre from "./componentes/Sobre";
import Projetos from "./componentes/Projetos";
import LinguagensEFerramentas from "./componentes/LinguagensEFerramentas";
import Contato from "./componentes/Contato";

export default function App() {

  return (
    <Fragment>
      <Helmet>
        <title>Jonathan Rianelli</title>
        <meta name="description" content="Explore meu portfólio de programação e descubra o que posso fazer para levar seu projeto ao próximo nível. Como um programador habilidoso, estou sempre buscando maneiras de desenvolver soluções inovadoras e eficientes. Confira meus projetos anteriores e entre em contato para discutir como podemos colaborar para alcançar seus objetivos." />
      </Helmet>
      <Header />
      <Sobre />
      <Projetos />
      <LinguagensEFerramentas />
      <Contato />
    </Fragment>
  );
}
