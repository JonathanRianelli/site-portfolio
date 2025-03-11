import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import perfil from "../img/perfil.webp";
import curriculo from "../arquivos/curriculo.pdf";
import "../styles/sobre.scss";

export default function Sobre() {
    useEffect(() => {
        // Inicializa o ScrollReveal
        const scrollReveal = ScrollReveal({
          origin: "bottom",
          distance: "30px",
          duration: 700,
          reset: false,
        });
    
        // Aplica a animação nos elementos com a classe 'elemento'
        scrollReveal.reveal(".fade-up", {
          interval: 200,
        });
      }, []);

    return (
        <section id="sobre">
            <div ><img src={perfil} alt="Minha foto" /></div>

            <div>
                <h2 className="fade-up">Jonathan Rianelli</h2>

                <h3 className="fade-up">Desenvolvedor Web</h3>

                <p className="fade-up">Olá, bem-vindo ao meu portfólio! Meu nome é Jonathan, e sempre fui apaixonado por tecnologia. Em 2018, trabalhei na manutenção de smartphones, mas foi na programação que encontrei minha verdadeira vocação. Em 2021, iniciei meus estudos e comecei a desenvolver projetos, explorando diversas tecnologias. Em janeiro de 2024, ingressei na faculdade de Análise e Desenvolvimento de Sistemas para aprofundar meus conhecimentos. Além dos estudos, trabalho como freelancer, aplicando minhas habilidades em projetos reais. Você pode conferir alguns dos meus projetos pessoais abaixo, na seção 'Projetos'.</p>

                <div className="fade-up" id="btnBox"><a href={curriculo} download="Currículo Jonathan Rianelli de Oliveira" id="btn">Baixar Currículo</a></div>
            </div>
        </section>
    )
}