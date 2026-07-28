import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FiExternalLink, FiLock, FiCode } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { HiOutlineCube } from "react-icons/hi";
import { IoRocketOutline } from "react-icons/io5";
import vzCell from "../img/projetos/vz-cell.gif";
import grupoproject from "../img/projetos/grupoproject.gif";
import n8nLogo from "../img/n8n-color.svg";
import "../styles/projetos.scss";

export default function Projetos() {
  useEffect(() => {
    const scrollReveal = ScrollReveal({
      distance: "30px",
      duration: 1000,
      reset: false,
    });

    scrollReveal.reveal(".fade-up", {
      origin: "bottom",
      interval: 200,
    });

    scrollReveal.reveal(".fade-left", {
      distance: "50px",
      origin: "right",
      interval: 700,
    });
  }, []);

  const abrirUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const projetos = [
    {
      titulo: "Landing Page VZ-CELL",
      descricao:
        "Desenvolvi esta landing page para a VZ CELL, uma loja de manutenção de celulares localizada na Praia Grande, SP. O site apresenta as principais informações sobre a loja, incluindo serviços prestados, produtos e formas de contato. Com um design responsivo e intuitivo, proporciona uma experiência fácil e eficiente para os clientes.",
      imagem: vzCell,
      alt: "VZ CELL",
      tecnologias: [
        { icone: "devicon-html5-plain colored", nome: "HTML" },
        { icone: "devicon-css3-plain colored", nome: "CSS" },
        { icone: "devicon-javascript-plain colored", nome: "JavaScript" },
      ],
      url: "https://www.vzcell.com.br/",
      tipo: "site",
    },
    {
      titulo: "Landing Page Grupo Project",
      descricao:
        "Desenvolvi a landing page institucional do Grupo Project, apresentando seus serviços de consultoria empresarial, soluções tecnológicas e automação de processos. O site foi projetado com foco em conversão, reunindo um design moderno, responsivo e interativo para transmitir credibilidade e proporcionar uma experiência de navegação intuitiva.",
      imagem: grupoproject,
      alt: "Landing Page Grupo Project",
      tecnologias: [
        { icone: "devicon-html5-plain colored", nome: "HTML" },
        { icone: "devicon-css3-plain colored", nome: "CSS" },
        { icone: "devicon-javascript-plain colored", nome: "JavaScript" },
      ],
      url: "https://projectgrupo.com.br/",
      tipo: "site",
    },
    {
      titulo: "Análise Comportamental",
      descricao:
        "Desenvolvi uma plataforma para avaliação comportamental e gestão de processos seletivos, permitindo a aplicação de testes online, acompanhamento de candidatos e geração de relatórios analíticos. O sistema oferece uma interface moderna e responsiva para centralizar avaliações, otimizar o recrutamento e apoiar a tomada de decisões baseada em dados.",
      tecnologias: [
        { icone: "devicon-react-original colored", nome: "React" },
        { icone: "devicon-nodejs-plain colored", nome: "Node.js" },
        { icone: "devicon-postgresql-plain colored", nome: "PostgreSQL" },
      ],
      tipo: "corporativo",
      placeholderIcon: <BsStars />,
    },
    {
      titulo: "Sistema de Gestão Empresarial",
      descricao:
        "Participei do desenvolvimento de uma plataforma corporativa para centralizar processos e indicadores de diferentes áreas da empresa. O sistema reúne dashboards, relatórios e módulos de gestão em uma interface moderna e responsiva, proporcionando uma visão integrada das operações e apoiando a tomada de decisões baseada em dados.",
      tecnologias: [
        { icone: "devicon-react-original colored", nome: "React" },
        { icone: "devicon-nodejs-plain colored", nome: "Node.js" },
        { icone: "devicon-postgresql-plain colored", nome: "PostgreSQL" },
      ],
      tipo: "corporativo",
      placeholderIcon: <HiOutlineCube />,
    },
    {
      titulo: "Dashboard Analítico",
      descricao:
        "Participei do desenvolvimento de uma plataforma para acompanhamento de indicadores de desempenho e apoio operacional de equipes. O sistema reúne dashboards com métricas em tempo real para supervisão, além de oferecer aos colaboradores acesso às próprias estatísticas, materiais de apoio e uma central de anotações, tudo em uma interface moderna, responsiva e intuitiva.",
      tecnologias: [
        { icone: "devicon-react-original colored", nome: "React" },
        { icone: "devicon-nodejs-plain colored", nome: "Node.js" },
        { icone: "devicon-postgresql-plain colored", nome: "PostgreSQL" },
      ],
      tipo: "corporativo",
      placeholderIcon: <IoRocketOutline />,
    },
    {
      titulo: "Automações Corporativas",
      descricao:
        "Desenvolvi automações corporativas utilizando Python e n8n para otimizar processos internos, integrar sistemas e reduzir tarefas manuais. As soluções incluem tratamento e processamento de dados, integrações entre plataformas, workflows inteligentes e recursos baseados em IA, aumentando a produtividade e a eficiência operacional.",
      tecnologias: [
        { icone: "devicon-python-plain colored", nome: "Python" },
        { tipo: "imagem", src: n8nLogo, alt: "n8n", nome: "n8n" },
      ],
      tipo: "corporativo",
      placeholderIcon: <FiCode />,
    },
  ];

  return (
    <section id="projetos">
      <h2 className="fade-up">Projetos</h2>

      <div className="projetos-grid fade-up">
        {projetos.map((projeto, index) => (
          <div className="projeto-card" key={index}>
            {/* Imagem ou Placeholder */}
            <div className="img-box">
              {projeto.imagem ? (
                <img src={projeto.imagem} alt={projeto.alt} />
              ) : (
                <div className="img-placeholder">
                  <span className="placeholder-icon">
                    {projeto.placeholderIcon}
                  </span>
                </div>
              )}

              {/* Overlay de tecnologias no hover */}
              <div className="tech-overlay">
                {projeto.tecnologias.map((tech, i) => (
                  <span className="tech-icon" key={i} style={{ '--i': i }}>
                    {tech.tipo === "imagem" ? (
                      <span className="tech-img-wrapper">
                        <img src={tech.src} alt={tech.alt} className="tech-img" />
                      </span>
                    ) : (
                      <i className={tech.icone}></i>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Conteúdo */}
            <div className="card-content">
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
            </div>

            {/* Botões */}
            <div className="botoes">
              {projeto.tipo === "corporativo" ? (
                <button className="botao-sozinho btn-corporativo" disabled>
                  <FiLock className="btn-icon" />
                  Projeto Corporativo
                </button>
              ) : (
                <button
                  className="botao-sozinho"
                  onClick={() => abrirUrl(projeto.url)}
                >
                  Acessar site
                  <FiExternalLink className="btn-icon" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}