import perfil from "../img/perfil.png";
import curriculo from "../arquivos/curriculo.pdf";
import "../styles/sobre.scss";

export default function Sobre() {

    return (
        <section id="sobre">
            <div><img src={perfil} alt="Minha foto" /></div>

            <div>
                <h2>Jonathan Rianelli</h2>

                <h3>Desenvolvedor Web</h3>

                <p>Olá, seja bem vindo ao meu portfólio!
                    Eu sou o Jonathan, um estudante autodidata de programação.
                    Sempre tive familiaridade e interesse por tecnologia, e desde que conheci a programação, me descobri na profissão e estou me dedicando a aprender cada vez mais sobre tudo que engloba esse universo.
                    Comecei meus estudos em 2021, e desde então estudo diariamente e já concluí vários projetos próprios, alguns dos quais você pode conferir mais abaixo na aba "Projetos".</p>

                <div id="btnBox"><a href={curriculo} download="Currículo Jonathan Rianelli de Oliveira" id="btn">Baixar Currículo</a></div>
            </div>
        </section>
    )
}