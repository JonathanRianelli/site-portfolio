
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
                    <img src="/img/hotel.gif" alt="Hotel" />
                    <p>Projeto criado por mim para demonstrar meus conhecimentos em Front End.</p>
                    <button onClick={() =>abrirUrl('https://jonathanrianelli.github.io/site-hotel-responsivo/')} id="hbtn">Acessar site</button>
                    <button onClick={() =>abrirUrl('https://github.com/JonathanRianelli/site-hotel-responsivo')}>Repositório</button>
                </div>
                <div className="box">
                    <h3>Crud</h3>
                    <img src="/img/crud.gif" alt="crud" />
                    <p>Projeto que usa local storage para armazenar as informações dos clientes.</p>
                    <button onClick={() =>abrirUrl('https://jonathanrianelli.github.io/projeto-crud/')}>Acessar site</button>
                    <button onClick={() =>abrirUrl('https://github.com/JonathanRianelli/projeto-crud')}>Repositório</button>
                </div>
                <div className="box">
                    <h3>Previsão do Tempo</h3>
                    <img src="/img/clima.png" alt="Previsão do tempo" />
                    <p>Ferramenta de previsão do tempo desenvolvida em React, utilizando a API OpenWeatherMap.</p>
                    <button onClick={() =>abrirUrl('https://jonathanrianelli.github.io/previsao-do-tempo/')}>Acessar site</button>
                    <button onClick={() =>abrirUrl('https://github.com/JonathanRianelli/previsao-do-tempo')}>Repositório</button>
                </div>
                <div className="box">
                    <h3>Pokédex</h3>
                    <img src="/img/pokedex.gif" alt="Pokédex" />
                    <p>Uma pokédex criada junto com Dev em Dobro.</p>
                    <button onClick={() =>abrirUrl('https://jonathanrianelli.github.io/pokedex/')}>Acessar site</button>
                    <button onClick={() =>abrirUrl('https://github.com/JonathanRianelli/pokedex')}>Repositório</button>
                </div>
                <div className="box">
                    <h3>calculadora</h3>
                    <img src="/img/calculadora.gif" alt="calculadora" />
                    <p>Calculadora simples, criada com a intenção de praticar meu JavaScript.</p>
                    <button onClick={() =>abrirUrl('https://github.com/JonathanRianelli/calculadora-js')}>Acessar site</button>
                    <button onClick={() =>abrirUrl('https://jonathanrianelli.github.io/calculadora-js/')}>Repositório</button>
                </div>
                <div className="box">
                    <h3>Landing Page</h3>
                    <img src="/img/landing-page.gif" alt="Landing Page" />
                    <p>Uma Landing Page criada junto com Dev em Dobro.</p>
                    <button onClick={() =>abrirUrl('https://jonathanrianelli.github.io/projeto-landing-page/')}>Acessar site</button>
                    <button onClick={() =>abrirUrl('https://github.com/JonathanRianelli/projeto-landing-page')}>Repositório</button>
                </div>
            </div>
        </section>
    )
}