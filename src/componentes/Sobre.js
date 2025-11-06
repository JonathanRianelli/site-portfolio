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

        <h3 className="fade-up">Desenvolvedor FullStack</h3>

        <p className="fade-up">
        Sou desenvolvedor FullStack com mais de 3 anos de experiência na criação de aplicações web modernas e performáticas. Atuo como freelancer desenvolvendo soluções com React, Node.js, MySQL e integração de APIs, sempre com atenção à usabilidade e qualidade do código. Atualmente curso Análise e Desenvolvimento de Sistemas (2024), aplicando meus conhecimentos em projetos reais.
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
