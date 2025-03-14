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
                    <i class="devicon-react-original colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Node.js</span>
                    <i class="devicon-nodejs-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Express</span>
                    <i class="devicon-express-original colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>MySQL</span>
                    <i class="devicon-mysql-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Python</span>
                    <i class="devicon-python-plain colored colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Next.js</span>
                    <i class="devicon-nextjs-plain" style={{ color: "white" }}></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>PHP</span>
                    <i class="devicon-php-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Vue.js</span>
                    <i class="devicon-vuejs-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>JavaScript</span>
                    <i class="devicon-javascript-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>HTML</span>
                    <i class="devicon-html5-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>CSS</span>
                    <i class="devicon-css3-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>SASS</span>
                    <i class="devicon-sass-original colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Typescript</span>
                    <i class="devicon-typescript-plain colored"></i>
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
                    <i class="devicon-vscode-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Git</span>
                    <i class="devicon-git-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>GitHub</span>
                    <i class="devicon-github-original" style={{color: "white"}}></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>NPM</span>
                    <i class="devicon-npm-original-wordmark colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Yarn</span>
                    <i class="devicon-yarn-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Photoshop</span>
                    <i class="devicon-photoshop-line colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Illustrator</span>
                    <i class="devicon-illustrator-line colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Canva</span>
                    <i class="devicon-canva-original colored"></i>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}