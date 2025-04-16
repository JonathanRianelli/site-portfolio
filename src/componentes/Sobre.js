import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import perfil from "../img/perfil.webp";
import curriculo from "../arquivos/curriculo jonathan rianelli.pdf";
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
      <div>
        <img
          src={perfil}
          alt="Jonathan Rianelli - Desenvolvedor Web"
        />
      </div>

      <div>
        <h2 className="fade-up">Jonathan Rianelli</h2>

        <h3 className="fade-up">Desenvolvedor Web</h3>

        <p className="fade-up">
        Sou Jonathan Rianelli, desenvolvedor web apaixonado por tecnologia. Em 2018, trabalhei na manutenção de smartphones, mas foi na programação que encontrei minha verdadeira vocação, iniciando estudos autodidatas e desenvolvendo projetos com diversas tecnologias. Atualmente curso Análise e Desenvolvimento de Sistemas (2024) e atuo como freelancer, aplicando meus conhecimentos em projetos reais - alguns dos quais você pode conferir abaixo na seção de projetos.
        </p>

        <div className="fade-up" id="btnBox">
          <a
            href={curriculo}
            download="Currículo Jonathan Rianelli de Oliveira"
            id="btn"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
}
