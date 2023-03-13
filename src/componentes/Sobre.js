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

                <p>Olá, bem-vindo ao meu portfólio! Eu sou o Jonathan, um estudante autodidata de programação apaixonado por tecnologia desde sempre, mas foi somente após descobrir a programação que encontrei minha verdadeira vocação. Iniciei meus estudos em 2021 e desde então estudo diariamente, estou dedicando meu tempo e esforço para aprender e aprimorar minhas habilidades nessa área e já concluí vários projetos próprios, alguns dos quais você pode conferir mais abaixo na aba "Projetos"</p>

                <div id="btnBox"><a href={curriculo} download="Currículo Jonathan Rianelli de Oliveira" id="btn">Baixar Currículo</a></div>
            </div>
        </section>
    )
}