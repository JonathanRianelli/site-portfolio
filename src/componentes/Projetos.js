import todo from "../img/todo.gif";
import hotel from "../img/hotel.gif";
import crud from "../img/crud.gif";
import clima from "../img/clima.png";
import pokedex from "../img/pokedex.gif";
import jogoDaVelha from "../img/jogo-da-velha.png";
import "../styles/projetos.scss";
import { SiStyledcomponents } from "react-icons/si";

export default function Projetos() {

    const abrirUrl = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="projetos">

            <h2>Projetos</h2>

            <div id="container">
                <div className="box">
                    <h3>Hotel</h3>
                    <div className="img-box">
                        <img src={hotel} alt="Hotel" />
                        <div className="linguagens-usadas">
                            <span class="devicon-html5-plain colored"></span>
                            <span class="devicon-css3-plain colored"></span>
                            <span class="devicon-javascript-plain colored"></span>
                        </div>
                    </div>
                    <p>Projeto criado por mim para demonstrar meus conhecimentos em Front End.</p>
                    <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/site-hotel-responsivo/')} id="hbtn">Acessar site</button>
                    <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/site-hotel-responsivo')}>Repositório</button>
                </div>
                <div className="box">
                    <h3>ToDo</h3>
                    <div className="img-box">
                        <img src={todo} alt="todo" />
                        <div className="linguagens-usadas">
                            <span className="devicon-react-original colored"></span>
                            <span className="devicon-sass-original colored"></span>
                            <span className="devicon-nodejs-plain colored"></span>
                            <span className="devicon-mysql-plain colored"></span>
                        </div>
                    </div>
                    <p>Projeto desenvolvido em React, Node.js e MySQL.</p>
                    <button className="botao-repositorio" onClick={() => abrirUrl('https://github.com/JonathanRianelli/todo-mysql')}>Repositório</button>
                </div>
                <div className="box">
                    <h3>Pokédex</h3>
                    <div className="img-box">
                        <img src={pokedex} alt="Pokédex" />
                        <div className="linguagens-usadas">
                            <span className="devicon-vuejs-plain colored"></span>
                            <span class="devicon-css3-plain colored"></span>
                            <span class="devicon-javascript-plain colored"></span>
                        </div>
                    </div>
                    <p>Projeto desenvolvido em Vue.js, utilizando a PókeAPI.</p>
                    <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/pokedex-api/')}>Acessar site</button>
                    <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/pokedex-api')}>Repositório</button>

                </div>
                <div className="box">
                    <h3>Crud</h3>
                    <div className="img-box">
                        <img src={crud} alt="crud" />
                        <div className="linguagens-usadas">
                            <span class="devicon-html5-plain colored"></span>
                            <span className="devicon-sass-original colored"></span>
                            <span class="devicon-javascript-plain colored"></span>
                        </div>
                    </div>
                    <p>Projeto que usa local storage para armazenar as informações dos clientes.</p>
                    <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/projeto-crud/')}>Acessar site</button>
                    <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/projeto-crud')}>Repositório</button>
                </div>
                <div className="box">
                    <h3>Jogo da Velha</h3>
                    <div className="img-box">
                        <img src={jogoDaVelha} alt="Landing Page" />
                        <div className="linguagens-usadas">
                            <span className="devicon-react-original colored"></span>
                            <SiStyledcomponents />
                            <span class="devicon-typescript-plain colored"></span>
                        </div>
                    </div>
                    <p>Jogo da velha com placar, feito em React com Typescript e styled-components</p>
                    <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/jogo-da-velha/')}>Acessar site</button>
                    <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/jogo-da-velha')}>Repositório</button>
                </div>
                <div className="box">
                    <h3>Previsão do Tempo</h3>
                    <div className="img-box">
                        <img src={clima} alt="Previsão do tempo" />
                        <div className="linguagens-usadas">
                            <span className="devicon-react-original colored"></span>
                            <span className="devicon-sass-original colored"></span>
                            <span class="devicon-javascript-plain colored"></span>
                        </div>
                    </div>
                    <p>Ferramenta de previsão do tempo desenvolvida em React, utilizando a API OpenWeatherMap.</p>
                    <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/previsao-do-tempo/')}>Acessar site</button>
                    <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/previsao-do-tempo')}>Repositório</button>
                </div>
            </div>
        </section>
    )
}