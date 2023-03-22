import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import todo from "../img/projetos/todo.webp";
import hotel from "../img/projetos/hotel.webp";
import crud from "../img/projetos/crud.webp";
import clima from "../img/projetos/clima.webp";
import pokedex from "../img/projetos/pokedex.webp";
import jogoDaVelha from "../img/projetos/jogo-da-velha.webp";
import calculadora from "../img/projetos/calculadora.gif";
import pCard from "../img/projetos/pokecard.gif";
import links from "../img/projetos/links.webp";
import "../styles/projetos.scss";
import { SiStyledcomponents } from "react-icons/si";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper";

export default function Projetos() {

    const [tamanho, setTamanho] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
          setTamanho(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const abrirUrl = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    function box901() {
        if (tamanho >= 901 && tamanho < 1325) {
            return <SwiperSlide></SwiperSlide>;
        }
    }

    function box1325() {
        if (tamanho >= 1325) {
            return <SwiperSlide></SwiperSlide>;
        }
    }

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <section id="projetos">

            <h2>Projetos</h2>

            <Swiper
                allowTouchMove={true}
                slidesPerView={1}
                slidesPerGroup={1}
                grid={{
                    rows: 1,
                }}
                spaceBetween={30}
                pagination={pagination}
                modules={[Grid, Pagination]}
                className="mySwiper"

                breakpoints={{
                    901: {
                        allowTouchMove: false,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        grid: {
                            rows: 2,
                        },
                    },

                    1325: {
                        allowTouchMove: false,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        grid: {
                            rows: 2,
                        },
                    },
                }}
            >
                <SwiperSlide>
                    <h3>Hotel</h3>

                    <div className="img-box">
                        <img src={hotel} alt="Hotel" />

                        <div className="linguagens-usadas">
                            <span class="devicon-html5-plain colored"></span>
                            <span class="devicon-css3-plain colored"></span>
                            <span class="devicon-javascript-plain colored"></span>
                        </div>
                    </div>

                    <p>Este projeto foi criado para demonstrar minhas habilidades em desenvolvimento Front End. Através dele, pude explorar conceitos avançados de HTML, CSS e JavaScript, bem como aprimorar minhas habilidades de design e usabilidade.</p>

                    <div className="botoes">
                        <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/site-hotel-responsivo/')} id="hbtn">Acessar site</button>
                        <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/site-hotel-responsivo')}>Repositório</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <h3>Crud</h3>

                    <div className="img-box">
                        <img src={crud} alt="crud" />
                        <div className="linguagens-usadas">
                            <span class="devicon-html5-plain colored"></span>
                            <span className="devicon-sass-original colored"></span>
                            <span class="devicon-javascript-plain colored"></span>
                        </div>
                    </div>

                    <p>Este projeto foi desenvolvido com o objetivo de criar um sistema simples de gerenciamento de clientes que utiliza o recurso de local storage do navegador para armazenar as informações dos usuários. Através do projeto, é possível adicionar, visualizar, editar e excluir informações de clientes de forma fácil e intuitiva.</p>

                    <div className="botoes">
                        <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/projeto-crud/')}>Acessar site</button>
                        <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/projeto-crud')}>Repositório</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
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

                    <p>O projeto Fullstack visa aprimorar as habilidades de desenvolvimento de aplicações web utilizando tecnologias como React.js, Node.js e MySQL. Ele permite explorar os conceitos fundamentais de desenvolvimento Fullstack, criando uma aplicação web completa desde o backend até o frontend.</p>

                    <div className="botoes">
                        <button className="botao-sozinho" onClick={() => abrirUrl('https://github.com/JonathanRianelli/todo-mysql')}>Repositório</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <h3>Jogo da Velha</h3>

                    <div className="img-box">
                        <img src={jogoDaVelha} alt="Jogo Da Velha" />
                        <div className="linguagens-usadas">
                            <span className="devicon-react-original colored"></span>
                            <SiStyledcomponents />
                            <span class="devicon-typescript-plain colored"></span>
                        </div>
                    </div>

                    <p>Este é um projeto que consiste em um jogo da velha com placar, desenvolvido em React com Typescript e styled-components. A aplicação apresenta uma interface amigável e intuitiva, permitindo que o usuário jogue o jogo da velha com facilidade e visualizando o placar em tempo real.</p>

                    <div className="botoes">
                        <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/jogo-da-velha/')}>Acessar site</button>
                        <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/jogo-da-velha')}>Repositório</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <h3>Pokédex api</h3>

                    <div className="img-box">
                        <img src={pokedex} alt="Pokédex" />
                        <div className="linguagens-usadas">
                            <span className="devicon-vuejs-plain colored"></span>
                            <span class="devicon-css3-plain colored"></span>
                            <span class="devicon-javascript-plain colored"></span>
                        </div>
                    </div>

                    <p>Este projeto é uma aplicação web desenvolvida em Vue.js, que utiliza a PókeAPI como fonte de dados para exibir informações sobre Pokémon. Através da aplicação, o usuário pode pesquisar por Pokémon específicos, bem como visualizar informações detalhadas sobre cada um deles, incluindo habilidades, estatísticas, tipos e muito mais.</p>

                    <div className="botoes">
                        <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/pokedex-api/')}>Acessar site</button>
                        <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/pokedex-api')}>Repositório</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <h3>Previsão do Tempo</h3>

                    <div className="img-box">
                        <img src={clima} alt="Previsão do tempo" />
                        <div className="linguagens-usadas">
                            <span className="devicon-react-original colored"></span>
                            <span className="devicon-sass-original colored"></span>
                            <span class="devicon-javascript-plain colored"></span>
                        </div>
                    </div>

                    <p>Este é um projeto de uma ferramenta de previsão do tempo, desenvolvido em React, que utiliza a API OpenWeatherMap como fonte de dados. A aplicação permite que o usuário pesquise por uma cidade específica e exibe informações atualizadas sobre a temperatura, sensação térmica, umidade e velocidade do vento.</p>

                    <div className="botoes">
                        <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/previsao-do-tempo/')}>Acessar site</button>
                        <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/previsao-do-tempo')}>Repositório</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <h3>Links</h3>

                    <div className="img-box">
                        <img src={links} alt="pagina de links" />
                        <div className="linguagens-usadas">
                            <span class="devicon-html5-plain colored"></span>
                            <span class="devicon-css3-plain colored"></span>
                        </div>
                    </div>

                    <p>Este é um site que desenvolvi para centralizar links de redes sociais. Com ícones personalizados das principais redes sociais, a página permite que o usuário compartilhe seus perfis de maneira prática e fácil de acessar. Com design moderno e responsivo.</p>

                    <div className="botoes">
                        <button className='botao-sozinho' onClick={() => abrirUrl('https://joycerianelli.github.io/links/')}>Acessar site</button>
                    </div>

                </SwiperSlide>
                {box1325()}
                <SwiperSlide>
                    <h3>Pokémon Cards</h3>

                    <div className="img-box">
                        <img src={pCard} alt="cards pokemon" />
                        <div className="linguagens-usadas">
                            <span class="devicon-html5-plain colored"></span>
                            <span class="devicon-css3-plain colored"></span>
                            <span class="devicon-javascript-plain colored"></span>
                        </div>
                    </div>

                    <p>Este projeto exibe cards de Pokémon,  desenvolvido em colaboração com o Dev em Dobro. A página apresenta informações detalhadas sobre cada um dos Pokémon, incluindo suas habilidades, estatísticas e tipos. Com design atraente e responsivo.</p>

                    <div className="botoes">
                        <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/pokedex/')}>Acessar site</button>
                        <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/pokedex')}>Repositório</button>
                    </div>

                </SwiperSlide>
                {box1325()}
                <SwiperSlide>
                    <h3>Calculadora</h3>

                    <div className="img-box">
                        <img src={calculadora} alt="Calculadora" />
                        <div className="linguagens-usadas">
                            <span class="devicon-html5-plain colored"></span>
                            <span class="devicon-css3-plain colored"></span>
                            <span class="devicon-javascript-plain colored"></span>
                        </div>
                    </div>

                    <p>Este é um site de calculadora desenvolvido para aprimorar minhas habilidades em JavaScript. Realiza operações básicas como adição, subtração, multiplicação e divisão. Com interface intuitiva e recursos úteis como botão "Limpar".</p>

                    <div className="botoes">
                        <button onClick={() => abrirUrl('https://jonathanrianelli.github.io/calculadora-js/')}>Acessar site</button>
                        <button onClick={() => abrirUrl('https://github.com/JonathanRianelli/calculadora-js')}>Repositório</button>
                    </div>

                </SwiperSlide>
                {box901()}
                {box901()}
            </Swiper>
        </section>
    )
}