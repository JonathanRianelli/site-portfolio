import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiStyledcomponents } from "react-icons/si";
import 'swiper/css'
import { Pagination } from "swiper";
import "../styles/linguagenseferramentas.scss";

export default function LinguagensEFerramentas() {

    useEffect(() => {
        // Inicializa o ScrollReveal
        const scrollReveal = ScrollReveal({
          distance: "30px",
          duration: 700,
          reset: false,
        });
    
        // Aplica a animação nos elementos com a classe 'elemento'
        scrollReveal.reveal(".fade-up", {
          origin: "bottom",
          interval: 30,
        });
      }, []);

    return (
        <section id="linguagensEFerramentas">

            <h2 className="fade-up">Linguagens</h2>

            <Swiper

            
                slidesPerView={2}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper fade-up"


                breakpoints={{
                    400: {
                        slidesPerView: 3
                    },
                    530: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 5
                    },
                }}
            >
                <SwiperSlide>
                    <span>React.js/Native</span>
                    <i className="devicon-react-original colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Node.js</span>
                    <i className="devicon-nodejs-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Express</span>
                    <i className="devicon-express-original colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>MySQL</span>
                    <i className="devicon-mysql-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Python</span>
                    <i className="devicon-python-plain colored colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Next.js</span>
                    <i className="devicon-nextjs-plain" style={{ color: "white" }}></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>PHP</span>
                    <i className="devicon-php-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Vue.js</span>
                    <i className="devicon-vuejs-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>JavaScript</span>
                    <i className="devicon-javascript-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>HTML</span>
                    <i className="devicon-html5-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>CSS</span>
                    <i className="devicon-css3-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>SASS</span>
                    <i className="devicon-sass-original colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Typescript</span>
                    <i className="devicon-typescript-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Styled-Components</span>
                    <SiStyledcomponents />
                </SwiperSlide>
            </Swiper>

            <h2 className="fade-up">Ferramentas</h2>

            <Swiper
                slidesPerView={2}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper fade-up"


                breakpoints={{
                    400: {
                        slidesPerView: 3
                    },
                    530: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 5
                    },
                }}
            >
                <SwiperSlide>
                    <span>VS Code</span>
                    <i className="devicon-vscode-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Git</span>
                    <i className="devicon-git-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>GitHub</span>
                    <i className="devicon-github-original" style={{color: "white"}}></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>NPM</span>
                    <i className="devicon-npm-original-wordmark colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Yarn</span>
                    <i className="devicon-yarn-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Photoshop</span>
                    <i className="devicon-photoshop-line colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Illustrator</span>
                    <i className="devicon-illustrator-line colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Canva</span>
                    <i className="devicon-canva-original colored"></i>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}