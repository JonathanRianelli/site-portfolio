import perfil from "../img/perfil.webp";
import curriculo from "../arquivos/Currículo Jonathan Rianelli.pdf";
import "../styles/sobre.scss";

export default function Sobre() {

    return (
        <section id="sobre">
            <div><img src={perfil} alt="Minha foto" /></div>

            <div>
                <h2>Jonathan Rianelli</h2>

                <h3>Desenvolvedor Web</h3>

                <p>Olá, bem-vindo ao meu portfólio! Meu nome é Jonathan, e sempre fui apaixonado por tecnologia. Em 2018, trabalhei na manutenção de smartphones, porém, foi somente após descobrir a programação que encontrei minha verdadeira vocação. Em 2021 iniciei meus estudos, dedicando-me a aprender diversas linguagens e desenvolvendo vários projetos. Em janeiro de 2024, decidi dar um passo além, ingressando na faculdade de Análise e Desenvolvimento de Sistemas. Ao longo desses anos concluí diversos projetos pessoais, alguns dos quais você pode explorar mais abaixo, na seção 'Projetos'.</p>

                <div id="btnBox"><a href={curriculo} download="Currículo Jonathan Rianelli de Oliveira" id="btn">Baixar Currículo</a></div>
            </div>
        </section>
    )
}