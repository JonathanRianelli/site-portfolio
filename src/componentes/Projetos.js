import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import vzCell from "../img/projetos/vz-cell.gif";
import grupoproject from "../img/projetos/grupoproject.gif";
import n8n from "../img/n8n-color.svg";
import "../styles/projetos.scss";

export default function Projetos() {
  useEffect(() => {
    // Inicializa o ScrollReveal
    const scrollReveal = ScrollReveal({
      distance: "30px",
      duration: 1000,
      reset: false,
    });

    // Aplica a animação nos elementos com a classe 'elemento'
    scrollReveal.reveal(".fade-up", {
      origin: "bottom",
      interval: 500,
    });

    // Aplica o scroll reveal para os elementos com a classe 'fade-left'
    scrollReveal.reveal(".fade-left", {
      distance: "50px",
      origin: "right",
      interval: 700,
    });
  }, []);

  const abrirUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projetos">
      <h2>Projetos</h2>

      <div className="projetos-grid fade-up">
        <div className="projeto-card">
          <h3>Landing Page VZ-CELL</h3>

          <div className="img-box">
            <img src={vzCell} alt="VZ CELL" />
            <div className="linguagens-usadas">
              <span class="devicon-html5-plain colored"></span>
              <span class="devicon-css3-plain colored"></span>
              <span class="devicon-javascript-plain colored"></span>
            </div>
          </div>

          <p>
            Desenvolvi esta landing page para a VZ CELL, uma loja de manutenção
            de celulares localizada na Praia Grande, SP. O site apresenta as
            principais informações sobre a loja, incluindo serviços prestados,
            produtos e formas de contato. Com um design responsivo e intuitivo,
            proporciona uma experiência fácil e eficiente para os clientes.
          </p>

          <div className="botoes">
            <button
              className="botao-sozinho"
              onClick={() => abrirUrl("https://www.vzcell.com.br/")}
            >
              Acessar site
            </button>
          </div>
        </div>
        <div className="projeto-card">
          <h3>Landing Page Grupo Project</h3>

          <div className="img-box">
            <img src={grupoproject} alt="Landing Page Grupo Project" />
            <div className="linguagens-usadas">
              <span class="devicon-html5-plain colored"></span>
              <span class="devicon-css3-plain colored"></span>
              <span class="devicon-javascript-plain colored"></span>
            </div>
          </div>

          <p>
            Desenvolvi a landing page institucional do Grupo Project, apresentando seus serviços de consultoria empresarial, soluções tecnológicas e automação de processos. O site foi projetado com foco em conversão, reunindo um design moderno, responsivo e interativo para transmitir credibilidade e proporcionar uma experiência de navegação intuitiva.
          </p>

          <div className="botoes">
            <button
              className="botao-sozinho"
              onClick={() => abrirUrl("https://projectgrupo.com.br/")}
            >
              Acessar site
            </button>
          </div>
        </div>
        <div className="projeto-card">
          <h3>Análise Comportamental</h3>

          <div className="img-box" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
            <div className="linguagens-usadas sempre-visivel">
              <span class="devicon-react-original colored" style={{ color: '#61DAFB' }}></span>
              <span class="devicon-nodejs-plain colored" style={{ color: '#68A063' }}></span>
              <span class="devicon-postgresql-plain colored" style={{ color: '#336791' }}></span>
            </div>
          </div>

          <p>
            Desenvolvi uma plataforma para avaliação comportamental e gestão de processos seletivos, permitindo a aplicação de testes online, acompanhamento de candidatos e geração de relatórios analíticos. O sistema oferece uma interface moderna e responsiva para centralizar avaliações, otimizar o recrutamento e apoiar a tomada de decisões baseada em dados.
          </p>

          <div className="botoes">
            <button className="botao-sozinho" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              Projeto Corporativo
            </button>
          </div>
        </div>
        <div className="projeto-card">
          <h3>Sistema de Gestão Empresarial</h3>

          <div className="img-box" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
            <div className="linguagens-usadas sempre-visivel">
              <span class="devicon-react-original colored" style={{ color: '#61DAFB' }}></span>
              <span class="devicon-nodejs-plain colored" style={{ color: '#68A063' }}></span>
              <span class="devicon-postgresql-plain colored" style={{ color: '#336791' }}></span>
            </div>
          </div>

          <p>
            Participei do desenvolvimento de uma plataforma corporativa para centralizar processos e indicadores de diferentes áreas da empresa. O sistema reúne dashboards, relatórios e módulos de gestão em uma interface moderna e responsiva, proporcionando uma visão integrada das operações e apoiando a tomada de decisões baseada em dados.
          </p>

          <div className="botoes">
            <button className="botao-sozinho" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              Projeto Corporativo
            </button>
          </div>
        </div>
        <div className="projeto-card">
          <h3>Dashboard Analítico</h3>

          <div className="img-box" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
            <div className="linguagens-usadas sempre-visivel">
              <span class="devicon-react-original colored" style={{ color: '#61DAFB' }}></span>
              <span class="devicon-nodejs-plain colored" style={{ color: '#68A063' }}></span>
              <span class="devicon-postgresql-plain colored" style={{ color: '#336791' }}></span>
            </div>
          </div>

          <p>
            Participei do desenvolvimento de uma plataforma para acompanhamento de indicadores de desempenho e apoio operacional de equipes. O sistema reúne dashboards com métricas em tempo real para supervisão, além de oferecer aos colaboradores acesso às próprias estatísticas, materiais de apoio e uma central de anotações, tudo em uma interface moderna, responsiva e intuitiva.
          </p>

          <div className="botoes">
            <button className="botao-sozinho" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              Projeto Corporativo
            </button>
          </div>
        </div>
        <div className="projeto-card">
          <h3>Automações Corporativas</h3>

          <div className="img-box" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
            <div className="linguagens-usadas sempre-visivel">
              <span class="devicon-python-plain colored" style={{ color: '#3776AB', fontSize: '3em', position: 'relative', zIndex: 2 }}></span>
              <span class="devicon-n8n-plain colored" style={{ color: '#68A063', fontSize: '3em', position: 'relative', zIndex: 2 }}>
                <img src={n8n} alt="n8n" style={{ width: '60px', height: '60px', filter: 'invert(1)' }} />
              </span>
            </div>
          </div>

          <p>
            Desenvolvi automações corporativas utilizando Python e n8n para otimizar processos internos, integrar sistemas e reduzir tarefas manuais. As soluções incluem tratamento e processamento de dados, integrações entre plataformas, workflows inteligentes e recursos baseados em IA, aumentando a produtividade e a eficiência operacional.
          </p>

          <div className="botoes">
            <button className="botao-sozinho" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              Projeto Corporativo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
