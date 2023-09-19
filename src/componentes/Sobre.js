import perfil from "../img/perfil.webp";
import curriculo from "../arquivos/curriculo.pdf";
import "../styles/sobre.scss";

export default function Sobre() {

    return (
        <section id="sobre">
            <div><img src={perfil} alt="Minha foto" /></div>

            <div>
                <h2>Jonathan Rianelli</h2>

                <h3>Desenvolvedor Web</h3>

                <p>Olá, bem-vindo ao meu portfólio!  Meu nome é Jonathan, e sou um estudante apaixonado por programação e tecnologia desde sempre. Em 2018, tive a oportunidade de trabalhar na manutenção de smartphones, mas foi somente após descobrir a programação que encontrei minha verdadeira vocação. Em 2021 iniciei meus estudos e desde então estou dedicando meu tempo e esforço para aprender e aprimorar minhas habilidades nessa área.  Ao longo desse período, concluí diversos projetos pessoais, alguns dos quais você pode explorar mais abaixo, na seção 'Projetos'.</p>

                <div id="btnBox"><a href={curriculo} download="Currículo Jonathan Rianelli de Oliveira" id="btn">Baixar Currículo</a></div>
            </div>
        </section>
    )
}