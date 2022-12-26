import { Swiper, SwiperSlide } from "swiper/react";
import { SiStyledcomponents } from "react-icons/si";
import 'swiper/css'
import { Pagination } from "swiper";

export default function LinguagensEFerramentas() {

    return (
        <section id="linguagensEFerramentas">

            <h2>Linguagens</h2>

            <Swiper
                slidesPerView={2}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"


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
                    <span>React</span>
                    <i class="devicon-react-original colored"></i>
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
                    <span>Node.js</span>
                    <i class="devicon-nodejs-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>MySQL</span>
                    <i class="devicon-mysql-plain colored"></i>
                </SwiperSlide>
                <SwiperSlide>
                    <span>Styled-Components</span>
                    <SiStyledcomponents />
                </SwiperSlide>
            </Swiper>

            <h2>Ferramentas</h2>

            <Swiper
                slidesPerView={2}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"


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
                    <i class="devicon-github-original"></i>
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