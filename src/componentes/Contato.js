import {FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope} from "react-icons/fa";
import "../styles/contato.scss";

export default function Contato() {

    return (
        <section id="contato">
            <h2>Contate-me</h2>
            <div>
                <nav>
                        <i>
                            <span><FaEnvelope/></span>
                            <a href="mailto:jonthanrdo@gmail.com" target="_blank" rel="noopener noreferrer">jonthanrdo@gmail.com</a>
                        </i>
                    <i>
                        <span><FaWhatsapp/></span>
                        <a href="https://wa.me/5532999155737" target="_blank" rel="noopener noreferrer"> +55 32 99915-5737</a>
                    </i>
                    <i>
                        <span><FaLinkedinIn/></span>
                        <a href="https://www.linkedin.com/in/jonathan-rianelli-de-oliveira-409609228/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </i>
                    <i>
                        <span><FaGithub/></span>
                        <a href="https://github.com/JonathanRianelli" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </i>
                </nav>

                <form method="POST" action="https://formsubmit.co/jonthanrdo@gmail.com" enctype="multipart/form-data">
                    <input type="text" name="Nome" placeholder="Nome" id="nome"/>
                    <input type="email" name="Email" placeholder="Email" id="email"/>
                    <textarea cols="30" name="Mensagem" rows="10" placeholder="Mensagem" id="msg"></textarea>
                    <span><button type="submit">Enviar</button></span>
                </form>
            </div>
            
        </section>
    )
}