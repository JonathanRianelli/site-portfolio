import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { FiExternalLink, FiLock, FiCode, FiClipboard, FiTrendingUp } from "react-icons/fi";
import { HiOutlineCube } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import vzCell from "../img/projetos/vz-cell.gif";
import grupoproject from "../img/projetos/grupoproject.gif";
import n8nLogo from "../img/n8n-color.svg";
import "../styles/projetos.scss";

export default function Projetos() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      titulo: "Landing Page VZ-CELL",
      descricao:
        "Desenvolvi a landing page institucional da VZ CELL, uma assistência técnica especializada em smartphones localizada na Praia Grande, SP. O site foi desenvolvido com foco em conversão, apresentando seus serviços, produtos e canais de contato em uma interface moderna, responsiva e intuitiva, proporcionando uma experiência de navegação agradável aos clientes.",
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
      titulo: "Análise Comportamental",
      descricao:
        "Desenvolvi uma plataforma para avaliação comportamental e gestão de processos seletivos, permitindo a aplicação de testes online, acompanhamento de candidatos e geração de relatórios analíticos. O sistema oferece uma interface moderna e responsiva para centralizar avaliações, otimizar o recrutamento e apoiar a tomada de decisões baseada em dados.",
      tecnologias: [
        { icone: "devicon-react-original colored", nome: "React" },
        { icone: "devicon-nodejs-plain colored", nome: "Node.js" },
        { icone: "devicon-postgresql-plain colored", nome: "PostgreSQL" },
      ],
      tipo: "corporativo",
      placeholderIcon: <FiClipboard />,
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
      placeholderIcon: <FiTrendingUp />,
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

  const renderCard = (projeto) => (
    <div className="projeto-card">
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
  );

  return (
    <section id="projetos">
      <h2 className="fade-up">Projetos</h2>

      {isMobile ? (
        <Swiper
          className="projetos-swiper fade-up"
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView="auto"
          centeredSlides
          pagination={{ clickable: true }}
          grabCursor
        >
          {projetos.map((projeto, index) => (
            <SwiperSlide key={index} className="projeto-slide">
              {renderCard(projeto)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="projetos-grid fade-up">
          {projetos.map((projeto, index) => (
            <div className="projeto-grid-item" key={index}>{renderCard(projeto)}</div>
          ))}
        </div>
      )}
    </section>
  );
}