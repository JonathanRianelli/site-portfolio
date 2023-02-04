import "./styles/global.scss";
import { Fragment } from 'react';
import "swiper/css/pagination";
import Header from "./componentes/Header";
import Sobre from "./componentes/Sobre";
import Projetos from "./componentes/Projetos";
import LinguagensEFerramentas from "./componentes/LinguagensEFerramentas";
import Contato from "./componentes/Contato";

export default function App() {

  return (
    <Fragment>
      <Header />
      <Sobre />
      <Projetos />
      <LinguagensEFerramentas />
      <Contato />
    </Fragment>
  );
}
