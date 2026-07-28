import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FiDownload } from "react-icons/fi";
import perfil from "../img/perfil.webp";
import curriculo from "../arquivos/curriculo-jonathan-rianelli-v2.pdf";
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

    // Aplica a animação nos elementos com a classe 'fade-up'
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
        <div className="status-badge fade-up">
          <span className="status-dot" />
          Disponível para projetos
        </div>

        <h2 className="fade-up">Jonathan Rianelli</h2>

        <h3 className="fade-up">Desenvolvedor FullStack</h3>

        <p className="fade-up">
        Desenvolvedor FullStack especializado em criar aplicações web robustas e automações corporativas. Formado em Análise e Desenvolvimento de Sistemas, construo soluções completas utilizando tecnologias como React, Node.js, MySQL e PostgreSQL. Com mais de 4 anos de experiência, desenvolvo desde sistemas de gestão interna até fluxos avançados de automação com Python e n8n, unindo estética limpa, alta performance e código escalável.
        </p>

        <div className="fade-up" id="btnBox">
          <a
            href={curriculo}
            download="Currículo Jonathan Rianelli de Oliveira"
            id="btn"
          >
            <FiDownload className="btn-icon" />
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
}