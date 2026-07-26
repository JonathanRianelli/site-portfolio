import { useState, useEffect, useCallback } from 'react';
import "../styles/header.scss";

export default function Header() {

    const [ativado, setAtivado] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // ========== SCROLL: encolher header ==========
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ========== INTERSECTION OBSERVER: seção ativa ==========
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    // ========== TOGGLE MENU ==========
    const ativarDesativar = useCallback(() => {
        setAtivado((prev) => !prev);
    }, []);

    const desativar = useCallback(() => {
        setAtivado(false);
    }, []);

    // ========== BLOQUEIO SCROLL BODY ==========
    useEffect(() => {
        const corpo = document.getElementById("corpo") || document.body;
        if (ativado) {
            corpo.style.overflow = "hidden";
        } else {
            corpo.style.overflow = "auto";
        }
        return () => { corpo.style.overflow = "auto"; };
    }, [ativado]);

    // ========== FECHAR COM ESCAPE ==========
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && ativado) {
                setAtivado(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [ativado]);

    // ========== LINKS DE NAVEGAÇÃO ==========
    const navLinks = [
        { href: '#sobre', label: 'Sobre' },
        { href: '#projetos', label: 'Projetos' },
        { href: '#linguagensEFerramentas', label: 'Linguagens e ferramentas' },
        { href: '#contato', label: 'Contato' },
    ];

    return (
        <header
            id="header"
            className={`${scrolled ? 'scrolled' : ''} ${ativado ? 'menu-ativo' : ''}`}
        >
            {/* ===== LOGO ===== */}
            <a
                href="#"
                className="logo"
                aria-label="Jonathan Rianelli — voltar ao topo"
                onClick={desativar}
            >
                <span className="logo-bar" aria-hidden="true"></span>
                <span className="logo-text">Jonathan Rianelli</span>
            </a>

            {/* ===== HAMBURGUER BTN ===== */}
            <button
                id="navbarbtn"
                className={ativado ? 'ativo' : ''}
                onClick={ativarDesativar}
                aria-label={ativado ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={ativado}
                aria-controls="main-nav"
                type="button"
            >
                <div className="linha" id="l1" />
                <div className="linha" id="l2" />
                <div className="linha" id="l3" />
            </button>

            {/* ===== OVERLAY MOBILE ===== */}
            <div
                className={`overlay ${ativado ? 'ativo' : ''}`}
                onClick={desativar}
                aria-hidden="true"
            />

            {/* ===== NAVEGAÇÃO ===== */}
            <nav id="main-nav" className={ativado ? 'ativo' : ''} role="navigation" aria-label="Navegação principal">
                <ul>
                    {navLinks.map((link, index) => {
                        const sectionId = link.href.replace('#', '');
                        const isActive = activeSection === sectionId;
                        return (
                            <li
                                key={link.href}
                                className={isActive ? 'active' : ''}
                                style={{ '--i': index }}
                            >
                                <a
                                    href={link.href}
                                    onClick={desativar}
                                    aria-current={isActive ? 'true' : undefined}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}