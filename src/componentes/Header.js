import { useState } from 'react';
import "../styles/header.scss";

export default function Header() {

    const [ativado, setAtivado] = useState(false)

    const ativarDesativar = () => {
        setAtivado(!ativado)
    }

    const desativar = () => {
        setAtivado(false)
    }

    if (ativado === true) {
        document.getElementById("corpo").style.overflow = "hidden";
    } else {
        document.getElementById("corpo").style.overflow = "auto";
    }

    return (
        <header id="header">

            <div id="navbarbtn" className={ativado ? 'ativo' : ''} onClick={() => ativarDesativar()}>
                <div className="linha" id="l1"></div>
                <div className="linha" id="l2"></div>
                <div className="linha" id="l3"></div>
            </div>

            <nav className={ativado ? 'ativo' : ''}>
                <ul>
                    <li><a href="#sobre" onClick={() => desativar()}>Sobre</a></li>
                    <li><a href="#projetos" onClick={() => desativar()}>Projetos</a></li>
                    <li><a href="#linguagensEFerramentas" onClick={() => desativar()}>Linguagens e ferramentas</a></li>
                    <li><a href="#contato" onClick={() => desativar()}>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}